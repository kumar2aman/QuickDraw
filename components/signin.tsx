import { signIn, useSession } from "next-auth/react";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {z} from 'zod'
import {useForm} from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod';
import exceldraw from "@/public/exceldraw.png";
import Image from "next/image";
import axios from "axios";



  const schema = z.object({
  username:z.string({required_error:"username is required"}).min(4).max(10),

 password:z.string().min(4).max(10)
})



type formfield = z.infer<typeof schema>

export default function Signin() {
  const Router = useRouter();
  const session = useSession();

const {register, handleSubmit, formState:{errors}} = useForm<formfield>({
  resolver: zodResolver(schema)
})

const onsubmit = async (data:any) =>{

const res =  await signIn("credentials",{
  username:data.username,
  password:data.password,
   redirect: false,
})
if(res){
  Router.push('/dashboard')
  console.log(res)
}


}



  return (

    <section className="bg-white">
      <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
        <aside className="relative block h-16 lg:order-last lg:col-span-5 lg:h-full xl:col-span-6">
          <img
            alt=""
            src="https://images.unsplash.com/photo-1605106702734-205df224ecce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </aside>

        <main className="flex  ml-7 px-8 py-8 sm:px-12 lg:col-span-7 lg:px-2 lg:py-2 xl:col-span-6">
          <div className="max-w-xl lg:max-w-3xl">
            <h1 className=" text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
              Welcome to{" "}
              <Image src={exceldraw} alt="exceldraw" className="h-24 sm:h-60" />
            </h1>

            <p className=" leading-relaxed text-gray-900">
              Draw your Ideas.......
            </p>
           <form onSubmit={handleSubmit(onsubmit)}>
            <div className="mt-8 grid grid-cols-6 gap-6">
              <div className="col-span-6 sm:col-span-3">
                <label className="block text-sm font-medium text-gray-700">
                  userName
                </label>

                <input
                 
                  type="text"
                
                 
                  {...register('username')}
                  className="mt-1 w-72 h-12 rounded-md border-black border bg-white text-sm text-gray-700 shadow-sm"
                />
                {errors.username &&(
                  <div className="text-red-600">{errors.username.message}</div>
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
                  Already have an account?
                  <a href="#" className="text-gray-700 underline">
                    Log in
                  </a>
                  .
                </p>
              </div>
            </div>
            </form>
          </div>
        </main>
      </div>
    </section>
  );
}
