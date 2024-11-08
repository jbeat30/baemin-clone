'use client'

import Image from 'next/image'

const deliveryIcons = [
  {
    iconURL: '/images/baemin.jpeg',
    title: '족발 보쌈'
  },
  {
    iconURL: '/images/baemin.jpeg',
    title: '버거'
  },
  {
    iconURL: '/images/baemin.jpeg',
    title: '분식'
  },
  {
    iconURL: '/images/baemin.jpeg',
    title: '디저트'
  },
  {
    iconURL: '/images/baemin.jpeg',
    title: '한식'
  },
  {
    iconURL: '/images/baemin.jpeg',
    title: '중식'
  },
  {
    iconURL: '/images/baemin.jpeg',
    title: '피자'
  },
  {
    iconURL: '/images/baemin.jpeg',
    title: '치킨'
  },
  {
    iconURL: '/images/baemin.jpeg',
    title: '일식'
  },
  {
    iconURL: '/images/baemin.jpeg',
    title: '전체보기'
  }
]

export default function DeliveryCard() {
  return (
    <div className="p-2">
      <div className="flex w-full flex-col rounded-xl bg-white p-2">
        <div className="flex w-full justify-between">
          <div className="flex items-center gap-2">
            <h2 className="text-xl font-bold">알뜰&middot;한집배달</h2>
            <p className="text-sm text-gray-700">
              <span className="bg-teal-300/20">배민1</span>은 365 할인 중!
            </p>
          </div>
          <span>
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
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </span>
        </div>
        <div className="mt-4 grid grid-cols-5 content-center items-center justify-center gap-8">
          {deliveryIcons.map(
            (value: { iconURL: string; title: string }, index: number) => (
              <div
                key={index}
                className="flex w-full flex-col items-center justify-center"
              >
                <Image
                  alt={value.title}
                  width={48}
                  height={48}
                  src={value.iconURL}
                />
                <p>{value.title}</p>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  )
}
