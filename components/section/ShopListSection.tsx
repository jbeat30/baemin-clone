import ShopCard from '@/components/card/ShopCard'
import { Shop } from '@prisma/client'
import Link from 'next/link'

export default function ShopListSection() {
  return (
    <section className="p-4">
      <div className="flex- w-full justify-center">
        <div className="flex gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
            />
          </svg>
          <h2>배달</h2>
          <Link href="/upload">upload</Link>
        </div>
      </div>
      <div className="my-2 flex h-1 w-full bg-gray-300" />

      {/* Shop List */}
      <div>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((shop: any, index) => (
          <Link href={`/shop/${shop.id}`} key={index}>
            <ShopCard shop={shop} />
          </Link>
        ))}
      </div>
    </section>
  )
}
