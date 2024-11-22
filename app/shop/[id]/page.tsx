async function getShopDetail(id: string) {
  const response = await fetch(`http://localhost:3000/api/shop/${id}`, {
    cache: 'no-cache'
  })
  return response.json()
}

export default function ShopDetail({ params }: { params: { id: string } }) {
  const detail = getShopDetail(params.id)
  return <div>{params.id}</div>
}
