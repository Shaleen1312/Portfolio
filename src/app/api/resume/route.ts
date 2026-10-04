import { NextRequest, NextResponse } from 'next/server'
import { getStore } from '@netlify/blobs'
import { readFile } from 'fs/promises'
import path from 'path'

export const dynamic = 'force-dynamic'

async function getFallbackResume() {
  const filePath = path.join(process.cwd(), 'public', 'resume.pdf')
  return readFile(filePath)
}

export async function GET() {
  let buffer: Buffer

  try {
    const store = getStore('resume')
    const stored = await store.get('current', { type: 'arrayBuffer' })
    buffer = stored ? Buffer.from(stored) : await getFallbackResume()
  } catch {
    buffer = await getFallbackResume()
  }

  return new NextResponse(new Uint8Array(buffer), {
    headers: {
      'Content-Type': 'application/pdf',
      'Content-Disposition': 'attachment; filename="Shaleen_Chhabra_Resume.pdf"',
      'Cache-Control': 'no-store',
    },
  })
}

export async function POST(request: NextRequest) {
  const adminKey = request.headers.get('x-admin-key')
  const expectedKey = process.env.ADMIN_UPLOAD_SECRET

  if (!expectedKey || adminKey !== expectedKey) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const formData = await request.formData()
  const file = formData.get('resume')

  if (!(file instanceof File) || file.type !== 'application/pdf') {
    return NextResponse.json({ error: 'A PDF file is required' }, { status: 400 })
  }

  try {
    const buffer = await file.arrayBuffer()
    const store = getStore('resume')
    await store.set('current', buffer)
    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json(
      { error: 'Storage unavailable — this only works when deployed on Netlify (or via `netlify dev`).' },
      { status: 503 }
    )
  }
}
