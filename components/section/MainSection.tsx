'use client'

export default function MainSection() {
  return (
    <section className="h-full">
      <div className="flex flex-wrap">
        {[1, 2, 3].map((index: number) => (
          <div key={index}>Card</div>
        ))}
      </div>
      <div>Big Card</div>
      <div>banner Carousel</div>
      <div>Icon menu Horizon</div>
      <div>우리동네 빠른 배달</div>
    </section>
  )
}
