import { NextRequest, NextResponse } from 'next/server'
import prisma from '@/util/prisma'

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params

  const menu = await prisma.menu.findMany({
    where: {
      shopId: id
    }
  })
  if (menu) {
    return NextResponse.json(menu)
  }
  return NextResponse.json({ message: 'error' })
}
