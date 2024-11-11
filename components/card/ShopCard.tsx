import { Shop } from '@prisma/client'

export default function ShopCard({ shop }: { shop: Shop }) {
  return (
    <div className="my-2 border-b border-gray-300 p-2 hover:cursor-pointer">
      <div className="flex w-full">
        <div className="w-16">
          <div className="h-16 w-12 bg-slate-500" />
        </div>

        <div className="flex w-full flex-col text-xs">
          <h2 className="mb-1 text-sm font-semibold">title</h2>
          <div className="flex gap-2">
            <p>star</p>
            <p>Description</p>
          </div>
          <div className="flex gap-2">
            <p>Delivery Time</p>
            <p>Delivery Fee</p>
          </div>
          <div className="flex">
            <p>minimum order</p>
            <p>tag</p>
          </div>
        </div>
      </div>
    </div>
  )
}
