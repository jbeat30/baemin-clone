import { NextRequest, NextResponse } from 'next/server'
import prisma from '@/util/prisma'

export async function GET(req: NextRequest) {
  try {
    const shopItem = await prisma?.shop.findMany({ take: 10 })

    if (shopItem && shopItem.length > 0) {
      return NextResponse.json(shopItem)
    }

    return NextResponse.json({ message: '상점 항목을 찾을 수 없습니다' })
  } catch (error) {
    console.error('상점 항목을 가져오는 동안 오류가 발생:', error)
    return NextResponse.json({ message: 'error', error: JSON.stringify(error) })
  }
}

export async function POST(req: NextRequest) {
  const data = await req.formData()

  const requiredFields = [
    'title',
    'description',
    'star',
    'deliveryTime',
    'deliveryFee',
    'minimumOrder',
    'cardImage',
    'coverImage',
    'tag'
  ]

  for (const field of requiredFields) {
    if (!data.has(field) || !data.get(field)) {
      return NextResponse.json({
        message: `누락되었거나 유효하지 않은 필드: ${field}`
      })
    }
  }

  console.log('success : ', data)
  return NextResponse.json({ message: 'success' })
}
