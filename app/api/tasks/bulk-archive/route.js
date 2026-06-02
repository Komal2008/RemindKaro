import { NextResponse } from "next/server";
// Note: Double check your exact prisma client import path in the repo.
// It is often located in a lib folder, e.g., import prisma from "@/lib/prisma";
import prisma from "@/prisma.config"; // Based on your repo structure

export async function POST(request) {
  try {
    // 1. Extract the taskIds array from the frontend request body
    const body = await request.json();
    const { taskIds } = body;

    // 2. Validate that we actually received an array of IDs
    if (!taskIds || !Array.isArray(taskIds) || taskIds.length === 0) {
      return NextResponse.json(
        { error: "No task IDs provided for archiving." },
        { status: 400 }
      );
    }

    // 3. Perform the bulk update in the database using Prisma
    const updatedTasks = await prisma.task.updateMany({
      where: {
        id: {
          in: taskIds, // Matches any task ID that is in our array
        },
      },
      data: {
        status: "archived", // Set their status to archived
      },
    });

    // 4. Return a success response
    return NextResponse.json(
      {
        message: "Tasks successfully archived.",
        count: updatedTasks.count, // updateMany returns the count of updated records
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Bulk archive error:", error);
    return NextResponse.json(
      { error: "Failed to bulk archive tasks." },
      { status: 500 }
    );
  }
}
