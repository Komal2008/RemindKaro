import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import jwt from 'jsonwebtoken';
import { cookies } from 'next/headers';

const JWT_SECRET = process.env.JWT_SECRET || 'fallback-secret-for-dev';

async function authenticate() {
  const cookieStore = cookies();
  const token = cookieStore.get('auth_token')?.value;

  if (!token) return null;

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    return decoded.id;
  } catch (err) {
    return null;
  }
}

export async function GET(req) {
  try {
    const userId = await authenticate();
    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const tasks = await prisma.task.findMany({
      where: { userId },
      orderBy: { deadline: 'asc' }
    });

    return NextResponse.json({ tasks });
  } catch (error) {
    console.error('Fetch tasks error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

export async function POST(req) {
  try {
    const userId = await authenticate();
    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await req.json();
    const { title, description, deadline, priority, category, recurring } = body;

    if (!title || !deadline) {
      return NextResponse.json({ error: 'Title and deadline are required' }, { status: 400 });
    }

    const task = await prisma.task.create({
      data: {
        userId,
        title,
        description,
        deadline: new Date(deadline),
        priority: priority || 'medium',
        category: category || 'General',
        recurring,
      }
    });

    // Create an audit log asynchronously (fire and forget for now)
    prisma.auditLog.create({
      data: {
        userId,
        action: 'CREATED_TASK',
        details: `Task "${title}" created`
      }
    }).catch(console.error);

    return NextResponse.json({ task }, { status: 201 });
  } catch (error) {
    console.error('Create task error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
