import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const filePath = searchParams.get('path');

  if (!filePath) {
    return NextResponse.json({ error: 'No file path provided' }, { status: 400 });
  }

  try {
    const fullPath = path.join(process.cwd(), filePath);
    const code = await fs.readFile(fullPath, 'utf8');
    return NextResponse.json({ code });
  } catch (error) {
    return NextResponse.json({ error: 'Error reading file' }, { status: 500 });
  }
}