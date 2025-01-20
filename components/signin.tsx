'use client'


import { signIn, useSession } from "next-auth/react";


import { useState } from "react";
import { useRouter } from "next/navigation";
import {z} from 'zod'
import {useForm} from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod';
import exceldraw from "@/public/exceldraw.png";
import Image from "next/image";
import axios from "axios";
import { signInSchema } from "@/app/Schema/schema";



 



type formfield = z.infer<typeof signInSchema>

export default function Signin() {
  const Router = useRouter();
  const session = useSession();

const {register, handleSubmit, formState:{errors}} = useForm<formfield>({
  resolver: zodResolver(signInSchema)
})

const onsubmit = async (data:formfield) =>{

const res =  await signIn("credentials",{
 email:data.email,
  password:data.password,
   redirect: false,
})


if(res){
  Router.push('/dashboard')
 
}else{
  console.log("no user found with is email or invalid password")
}


}



  return (

    <section className="bg-white">
      <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
        <aside className="relative block h-16 lg:order-last lg:col-span-5 lg:h-full xl:col-span-6">
          <img
            alt=""
            src="https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=1945&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </aside>

        <main className="flex  ml-7 px-8 py-8 sm:px-12 lg:col-span-7 lg:px-2 lg:py-2 xl:col-span-6">
          <div className="max-w-xl lg:max-w-3xl">
            <h1 className=" text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
              Welcome to{" "}
              <Image src={exceldraw} alt="exceldraw" className="h-24 sm:h-60" />
            </h1>

            <p className=" font-bold text-xl leading-relaxed text-gray-900">
              Draw your Ideas.......
            </p>
           <form onSubmit={handleSubmit(onsubmit)}>
            <div className="mt-8 grid grid-cols-6 gap-6">
              <div className="col-span-6 sm:col-span-3">
                <label className="block text-sm font-medium text-gray-700">
                  Email
                </label>

                <input
                 
                  type="text"
                
                 
                  {...register('email')}
                  className="mt-1 w-72 h-12 rounded-md border-black border bg-white text-sm text-gray-700 shadow-sm"
                />
                {errors.email &&(
                  <div className="text-red-600">{errors.email.message}</div>
                )}
              </div>

             
              <div className="col-span-6 sm:col-span-3">
                <label className="block text-sm font-medium text-gray-700">
                  {" "}
                  Password{" "}
                </label>

                <input
                 
                  type="password"
                {...register('password')}
                  className="mt-1 w-72 h-12 border rounded-md border-black bg-white text-sm text-gray-700 shadow-sm"
                />
                {errors.password &&(
                  <div className="text-red-600">{errors.password.message}</div>
                )}
              </div>

              <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                <button
               

                  type="submit"
                  className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
                >
                  SignIn
                </button>

                <p className="mt-4 text-sm text-gray-500 sm:mt-0">
                 Don't have an account?
                  <a 
                  href="/signup" className="text-gray-700 underline">
                    Log in
                  </a>
                  .
                </p>
              </div>
            </div>


            <div className="col-span-6 ">
              ____________________________________________________________


              <p className="text-lg mt-7"> Signup with </p>
                <div className="col-span-6 mt-7 flex space-x-10">
                <button
                type="button"
                onClick={()=>{
                  signIn("google",{
                    callbackUrl:"/dashboard"
                  })
                }}
                
                className=" bg-gray-800 size-14 w-52 rounded-lg  flex justify-center items-center hover:bg-white hover:border-2 border-black">
                
                 <img  className="size-10 " src="https://static-00.iconduck.com/assets.00/google-icon-512x512-tqc9el3r.png" alt="google" />
                </button>
                 <button
              type="button"
                 onClick={ async()=>{
                  
                    signIn("github",{
                    callbackUrl:"/dashboard"
                   
                  })
               
                 }}
                 
                 className=" bg-white size-14 w-52 rounded-lg  flex justify-center items-center hover:bg-gray-200 border-2 border-black">
              <img className="size-10" src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" alt="github" />
                 </button>

                </div>
              
              </div>
            </form>
          </div>
        </main>
      </div>
    </section>
  );
}
