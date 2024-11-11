import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center">
      <h1 className="mb-4 text-5xl font-bold">Not Found</h1>
      <Link href={'/'} className="hover:underline">
        홈으로 돌아가기
      </Link>
    </div>
  )
}
