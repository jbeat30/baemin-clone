import Image from 'next/image'
export default function MainCard({
  property: { title, description, imageURL }
}: {
  property: { title: string; description: string; imageURL: string }
}) {
  return (
    <div className="relative w-full justify-between gap-2 p-2">
      <div className="h-32 w-full rounded-xl bg-white p-2">
        <div className="flex w-full flex-col">
          <h2 className="text-xl font-bold">{title}</h2>
          <p className="w-24">{description}</p>
        </div>
      </div>
      {/* image */}
      <Image
        alt={title}
        src={imageURL}
        width={720}
        height={720}
        className="absolute bottom-4 right-4 h-8 w-8 rounded-full bg-slate-500"
      />
    </div>
  )
}
