import { NextRequest, NextResponse } from "next/server";
import client from "@/DB";

import { auth } from "@/lib/auth";

export async function POST(req: NextRequest) {
  const session: any = await auth();


  const body = await req.json();

  const post = await client.post.create({
    data: {
      authorId: session?.user?.id,
      title: body.name,
    },
  });

  return NextResponse.json({
    massage: "new title is created",
  });
}


