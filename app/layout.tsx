import { Noto_Sans_KR } from 'next/font/google'
import type { Metadata } from 'next'
import './globals.css'

const NotoSansKR = Noto_Sans_KR({
  subsets: ['latin'],
  weights: [100, 200, 300, 400, 500, 600, 700, 800, 900]
})

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko" className={NotoSansKR.className}>
      <body className="min-h-screen max-w-screen-xl bg-gray-200">
        {children}
      </body>
    </html>
  )
}
