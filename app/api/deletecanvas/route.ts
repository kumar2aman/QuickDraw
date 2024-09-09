import client from "@/DB";
import { auth } from "@/lib/auth";

import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {


  const body = await req.json();

  const remove = await client.post.delete({
    where: {
      id: body.e.id,
    },
  });

  return NextResponse.json({
    remove,
  });
}
