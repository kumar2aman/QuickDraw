
import Image from "next/image"


import exceldraw  from '@/public/exceldraw.png';
import { useRouter } from "next/navigation";

export default function HomeNavbar(){
 
  const Router = useRouter()

    return(
      <header>
        <div className="flex justify-between items-center bg-neutral-900 h-16">
          <div className="ml-7 text-white mt-4">
        <Image src={exceldraw} alt="exceldraw" className="w-52 sm:h-56 sm:w-80 "/>
          
          </div>
         <div className=" flex flex-row gap-16 mr-12 mt-4 text-white ">
          <button onClick={()=>{
            Router.push("/signin")
          }} className="underline font-medium text-xl hover:text-blue-300 ">
            Login
          </button>
          <button onClick={()=>{
Router.push("/signup")
          }} className="hidden sm:block bg-purple-600  hover:bg-purple-400 size-28  text-lg h-12 rounded-lg font-semibold">
            Signup
          </button>
         </div>
          

        </div>
      </header>
    )
}