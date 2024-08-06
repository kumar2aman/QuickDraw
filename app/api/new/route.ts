import { NEXT_AUTH } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import  client  from '@/DB';






export async  function POST  (req:NextRequest) {

    const session = getServerSession(NEXT_AUTH)

    const body = await req.json()


   


    console.log(session)




   const post = await client.post.create({
       data:{
         authorId:8,
        title:body.name
      }  
    })
  




        


    return NextResponse.json({
        massage:"new title is created"
    })
    
}



