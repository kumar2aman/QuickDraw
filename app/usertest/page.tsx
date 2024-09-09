


import User from "@/components/userData";




export default async function Test(){


const {allPost} =  await User()


    // const [Test, setTest] =  useState(User)

     
return(
    <div>
    {
        allPost.map((e)=>(
<div>
{e.title}
</div>
  

        ))
    }
    </div>
)



}