

import { NextRequest, NextResponse } from "next/server";
import client from "@/DB";

import { auth } from "@/lib/auth";

export async function POST(req: NextRequest) {
 
const session:any = await auth()
  

  const body = await req.json();

  const post = await client.post.create({
    data: {
      authorId:session?.user?.id,
      title: body.name,
    },
  });

  return NextResponse.json({
    massage: "new title is created",
  });
}

export async function GET(req: NextRequest) {

const session:any = await auth()


  const allPost = await client.post.findMany({
    where: {
      authorId: session?.user?.id,
    },
  });

  return NextResponse.json({
    allPost,

  });



}



// export default function UserList (){



  
// }
