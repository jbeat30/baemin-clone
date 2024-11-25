import { expect, test } from '@playwright/test'

test('상점 목록으로 이동 및 데이터 확인', async ({ page }) => {
  await page.goto('/')

  // href 속성에 특정 문자열이 포함된 링크 클릭 /shop 이동
  await page.click('a[href*="shop"]')
  await expect(page).toHaveURL('/shop')
})

test('상점 목록에서 데이터 확인', async ({ request }) => {
  // API 요청 보내기
  const getShopData = await request.get('/api/shop')

  // 응답 상태 확인
  expect(getShopData.ok()).toBeTruthy() // 트루시한 상태인지 확인

  // JSON 데이터 변환
  const responseData = await getShopData.json()

  // 데이터가 배열인지 확인 -> findMany 로 호출하니깐 배열로 확인
  expect(Array.isArray(responseData)).toBe(true)
  // 데이터가 비어 있지 않은지 확인
  expect(responseData.length).toBeGreaterThan(0)

  // 데이터 검증
  expect(responseData[0]).toEqual(
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
})

test('상점 상세 이동 - 마지막 상점 (UUID)', async ({ page }) => {
  await page.goto('/')

  // /shop 페이지로 이동
  await page.click('a[href*="shop"]')
  await expect(page).toHaveURL('/shop')

  // 마지막 상점의 링크 클릭 (상점 목록에서 마지막 아이템)
  const lastShopLink = page.locator('a[href*="/shop/"]').last()
  await lastShopLink.click()

  // 상점 디테일 페이지로 이동했는지 확인 (UUID 형태의 id를 포함한 URL 확인)
  await expect(page).toHaveURL(
    /\/shop\/[0-9A-Fa-f]{8}-[0-9A-Fa-f]{4}-[0-9A-Fa-f]{4}-[0-9A-Fa-f]{4}-[0-9A-Fa-f]{12}/
  )
})
