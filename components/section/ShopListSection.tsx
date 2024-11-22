'use client'

import { Shop } from '@prisma/client'
import Link from 'next/link'
import ShopCard from '@/components/card/ShopCard'

export default function ShopListSection({ shops }: { shops: Shop[] }) {
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
          <div className="flex w-full justify-between">
            <h2>배달</h2>
            <Link href="/upload">upload</Link>
          </div>
        </div>
      </div>
      <div className="my-2 flex h-1 w-full bg-gray-300" />

      {/* Shop List */}
      <div>
        {shops?.map((shop: Shop, index: number) => (
          <Link key={shop.id} href={`/shop/${shop.id}`}>
            <ShopCard shop={shop} />
          </Link>
        ))}
      </div>
    </section>
  )
}
