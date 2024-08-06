
import { useState } from "react";



import { NEXT_AUTH } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import  client  from '@/DB';



  async  function User(){



    const allPost= await client.post.findMany({
     where:{
         authorId: 8
     },
     select:{
        title:true
     }
  
    })
 
    
    return {
     allPost
    
 }
 
 
 }



export default   function(){



const {allPost}:any = User()

   console.log(allPost)
     
return(
    <div>
        { 
            allPost.map((e:any)=>{
                return e
            })
        }
    </div>
)



}