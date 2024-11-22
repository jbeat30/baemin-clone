import ShopListSection from '@/components/section/ShopListSection'

async function getShopItem() {
  const response = await fetch('http://localhost:3000/api/shop')
  return response.json()
}

export default async function Shop() {
  const shopItems = await getShopItem()
  return (
    <div>
      <ShopListSection shops={shopItems} />
    </div>
  )
}
