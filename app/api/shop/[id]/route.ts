import { NextRequest, NextResponse } from 'next/server'

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params
  console.log('id:', id)

  return NextResponse.json({ message: 'error' })
}
