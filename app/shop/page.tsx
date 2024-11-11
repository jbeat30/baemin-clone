import ShopListSection from '@/components/section/ShopListSection'

async function getShopItem() {
  const shopItem = await (await fetch('http://localhost:3000/api/shop')).json()

  console.log('shopItem : ', shopItem)
  return
}

export default async function Shop() {
  const shopItems = await getShopItem()
  return (
    <div>
      <ShopListSection />
    </div>
  )
}
