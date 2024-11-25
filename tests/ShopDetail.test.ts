import { expect, test } from '@playwright/test'

test('상점 상세 이동 및 데이터 확인 - 마지막 상점 (uuid)', async ({
  page,
  request
}) => {
  await page.goto('/')

  // /shop 페이지로 이동하는 링크 클릭
  await page.click('a[href*="shop"]')
  await expect(page).toHaveURL('/shop')

  // 마지막 상점의 링크 클릭 (상점 목록에서 마지막 아이템)
  const lastShopLink = page.locator('a[href*="/shop/"]').last()
  const shopUrl = await lastShopLink.getAttribute('href')

  if (!shopUrl) {
    throw new Error('Shop URL is not available')
  }

  // uuid 추출
  const shopId = shopUrl.split('/').pop()

  // 정규식 검사
  const uuidRegex =
    /^[0-9A-Fa-f]{8}-[0-9A-Fa-f]{4}-[0-9A-Fa-f]{4}-[0-9A-Fa-f]{4}-[0-9A-Fa-f]{12}$/
  if (!uuidRegex.test(shopId!)) {
    throw new Error(`유효하지않은 포멧: ${shopId}`)
  }

  // 상점 디테일 페이지로 이동 후 url 확인
  await lastShopLink.click()
  await expect(page).toHaveURL(`/shop/${shopId}`)

  // 상점과 메뉴 정보를 동시에 요청
  const [shopData, menuData] = await Promise.all([
    request.get(`/api/shop?id=${shopId}`),
    request.get(`/api/shop/${shopId}`)
  ])

  // 응답 확인
  expect(shopData.ok()).toBeTruthy()
  expect(menuData.ok()).toBeTruthy()

  // shop 과 menu json 변환
  const shop = await shopData.json()
  const menu = await menuData.json()

  // shop 검증
  expect(shop).toEqual(
    expect.objectContaining({
      id: expect.any(String),
      title: expect.any(String),
      star: expect.any(Number),
      description: expect.any(String),
      deliveryTime: expect.any(String),
      deliveryFee: expect.any(String),
      minimumOrder: expect.any(String),
      cardImage: expect.any(String),
      coverImage: expect.any(String),
      tag: expect.any(String),
      create_at: expect.any(String),
      update_at: expect.any(String)
    })
  )

  // menu 검증
  expect(menu).toEqual(
    expect.arrayContaining([
      expect.objectContaining({
        id: expect.any(String),
        category: expect.any(String),
        menu: expect.any(String),
        price: expect.any(Number),
        shopId: expect.any(String)
      })
    ])
  )

  console.log('Shop:', shop)
  console.log('Menu:', menu)
})
