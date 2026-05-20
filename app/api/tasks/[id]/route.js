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

export async function PUT(req, { params }) {
  try {
    const userId = await authenticate();
    if (!userId) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

    const taskId = params.id;
    const body = await req.json();

    // Verify ownership
    const existing = await prisma.task.findUnique({ where: { id: taskId } });
    if (!existing || existing.userId !== userId) {
      return NextResponse.json({ error: 'Not found or forbidden' }, { status: 404 });
    }

    const { title, description, deadline, priority, category, status, recurring } = body;

    const task = await prisma.task.update({
      where: { id: taskId },
      data: {
        title,
        description,
        deadline: deadline ? new Date(deadline) : undefined,
        priority,
        category,
        status,
        recurring,
      }
    });

    return NextResponse.json({ task });
  } catch (error) {
    console.error('Update task error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

export async function DELETE(req, { params }) {
  try {
    const userId = await authenticate();
    if (!userId) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

    const taskId = params.id;

    // Verify ownership
    const existing = await prisma.task.findUnique({ where: { id: taskId } });
    if (!existing || existing.userId !== userId) {
      return NextResponse.json({ error: 'Not found or forbidden' }, { status: 404 });
    }

    await prisma.task.delete({
      where: { id: taskId }
    });

    return NextResponse.json({ message: 'Task deleted successfully' });
  } catch (error) {
    console.error('Delete task error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
