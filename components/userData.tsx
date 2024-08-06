'use server'

import { NEXT_AUTH } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import  client  from '@/DB';



 export default async  function User(){



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



//  export default async function UserData(){
   
//    const data = await user()
 
   
//     return(
       
// {data}
        
        
//     )
       
             
       

    
    
    
//  }