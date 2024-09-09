'use server'


import  client  from '@/DB';



  async  function User(){



    const allPost= await client.post.findMany({
     where:{
         authorId: 8
     },
     
  
    })
 
    
    return {
     allPost
    
 }
 
 
 }



 export default async function UserData(){
   
   const {allPost} = await User()
 
   
    return(
         {allPost}

        
        
    )
       
             
       

    
    
    
 }