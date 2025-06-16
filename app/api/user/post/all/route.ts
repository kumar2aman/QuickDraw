import { auth } from "@/lib/auth";
import { NextRequest, NextResponse } from "next/server";
import  client  from '@/DB';

export async function GET(req: NextRequest) {
    const session: any = await auth();
  
    const allPost = await client.post.findMany({
      where: {
        authorId: session?.user?.id,
      },
    });
  
    return NextResponse.json({
      allPost,
    });
  }