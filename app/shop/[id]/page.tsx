import ShopDetailSection from '@/components/section/ShopDetailSection'

async function getShopDetail(id: string) {
  const response = await fetch(`http://localhost:3000/api/shop/${id}`, {
    cache: 'no-cache'
  })
  return response.json()
}

async function getShop(id: string) {
  const response = await fetch(`http://localhost:3000/api/shop?id=${id}`, {
    cache: 'no-cache'
  })
  return response.json()
}

export default async function ShopDetail({
  params
}: {
  params: Promise<{ id: string }>
}) {
  const paramsResolved = await params
  const shop = await getShop(paramsResolved.id)
  const menu = await getShopDetail(paramsResolved.id)

  return <ShopDetailSection shop={shop} detail={menu} />
}
