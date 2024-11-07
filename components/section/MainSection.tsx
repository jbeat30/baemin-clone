'use client'

import MainCard from '@/components/card/MainCard'
import DeliveryCard from '@/components/card/DeliveryCard'

const property = [
  { title: '배달', description: 'B마트', imageURL: '/images/baemin.jpeg' },
  {
    title: 'B마트',
    description: '장보기도 더 빠르게',
    imageURL: '/images/baemin.jpeg'
  },
  {
    title: '배민스토어',
    description: '배달은 지금 옵니다',
    imageURL: '/images/baemin.jpeg'
  }
]

export default function MainSection() {
  return (
    <section className="flex h-full flex-col">
      <div className="flex">
        {property.map(
          (
            value: { title: string; description: string; imageURL: string },
            index: number
          ) => (
            <MainCard key={index} property={value} />
          )
        )}
      </div>
      <DeliveryCard />
    </section>
  )
}
