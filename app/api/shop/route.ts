import { NextRequest, NextResponse } from 'next/server'
import prisma from '@/util/prisma'

export async function GET(req: NextRequest) {
  const shopItem = await prisma?.shop.findFirst({ take: 1 })
  console.log('shopItem>> : ', shopItem)

  return NextResponse.json({ message: 'error' })
}
