'use client'

import { useRouter } from 'next/navigation'

export default function GoBackButton() {
  const router = useRouter()

  const handleGoBack = () => {
    router.back()
  }
  return (
    <button onClick={handleGoBack}>
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
          d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
        />
      </svg>
    </button>
  )
}
