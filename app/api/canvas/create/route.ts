import { NextRequest, NextResponse } from "next/server";
import client from "@/DB";

import { auth } from "@/lib/auth";

export async function POST(req: NextRequest) {
  try {
    const session: any = await auth();

    if (!session || !session.user || !session.user.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await req.json();

    const post = await client.post.create({
      data: {
        authorId: session.user.id,
        title: body.name,
      },
    });

    return NextResponse.json({
      message: "New title is created",
    });
  } catch (error) {
    console.error("Error in /api/canvas/create:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}


