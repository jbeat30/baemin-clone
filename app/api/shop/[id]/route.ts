import { NextRequest, NextResponse } from 'next/server'

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = params
  console.log('id:', id)

  return NextResponse.json({ message: 'error' })
}
