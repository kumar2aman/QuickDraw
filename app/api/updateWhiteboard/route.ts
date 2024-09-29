import { NextRequest, NextResponse } from "next/server";
import client from "@/DB";

export async function POST(req: NextRequest) {
  const body: any = await req.json();


   await client.post.update({
    where: {
      id: body?.id as string,
    },

    data: {
      canvas: body.whiteboardData,
    },
  });

 return NextResponse.json ({
    msg:"canvas updated"
 })


 }


 export async function GET(req:NextRequest) {
   
    const body  = await req.json()

const whiteboardData = await client.post.findUnique({
    where:{
        id:body?.id as string
    },
    select:{
      canvas:true
    }
  
})

if(whiteboardData){
  const data = whiteboardData?.canvas
  return NextResponse.json({
    data
 })
}







 }
