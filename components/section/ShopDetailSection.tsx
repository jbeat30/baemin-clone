import { Shop, Menu } from '@prisma/client'
import Link from 'next/link'
import GoBackButton from '@/components/button/GoBackButton'

export default function ShopDetailSection({
  shop,
  detail
}: {
  shop?: Shop
  detail?: Menu[]
}) {
  return (
    <div className="flex flex-col space-y-8">
      {/* 배너 */}
      <div
        className="relative h-20 w-full bg-cover bg-center"
        style={{ backgroundImage: 'url(/path/to/your/image.jpg)' }}
      >
        <div className="absolute inset-0 flex items-center justify-between bg-black bg-opacity-40 p-6">
          {/* 뒤로가기 */}
          <GoBackButton />
          <div className="flex space-x-4">
            {/* 장바구니 아이콘 */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-8 w-8 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
              />
            </svg>
            {/* 홈 아이콘 */}
            <Link href="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-8 w-8 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 12L12 3l9.75 9M4.5 10.5V21h5.25v-4.5h4.5V21H19.5V10.5"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {/* 상점이름과 설명 */}
      <div className="px-4 text-center">
        <h2 className="text-4xl font-bold text-gray-800">{shop?.title}</h2>
        <p className="mt-2 text-lg text-gray-600">{shop?.description}</p>
        <div className="mt-4 flex items-center justify-center space-x-6">
          <p className="text-lg font-medium text-yellow-500">{shop?.star} ⭐</p>
        </div>
      </div>

      {/* 메뉴 */}
      <div className="px-4">
        <h3 className="mb-6 text-3xl font-semibold text-gray-800">Menu</h3>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {detail?.map((menu: Menu) => (
            <div
              key={menu.id}
              className="rounded-lg bg-white p-6 shadow-lg transition-shadow hover:shadow-xl"
            >
              <h4 className="text-xl font-semibold text-gray-700">
                {menu.category}
              </h4>
              <p className="mt-2 text-lg text-gray-600">{menu.price} 원</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
