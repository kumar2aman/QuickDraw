"use client"

import { signOut, useSession } from "next-auth/react"

export default function Home() {


const session = useSession()

  return (
  
       <div>
        {JSON.stringify(session)}

<button onClick={()=>{
  signOut()
}}>
  signout
</button>

       </div>



  )
  
}
