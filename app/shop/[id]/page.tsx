async function getShopDetail(id: string) {
  const response = await fetch(`http://localhost:3000/api/shop/${id}`, {
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
  const detail = await getShopDetail(paramsResolved.id)
  return <div>{paramsResolved.id}</div>
}
