"use client";

import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import { DialogDemo } from "./dialog";
import Canvascards from "./canvasCards";
import { DropdownMenuDemo } from "./dropDownMenu";

export default function Dashboard() {
  const session = useSession();
  const router = useRouter();

  return (
    <>
    <div>devloper is revamping the dashboard soon it will get updated but still you can use it...</div>
      <div className="w-full min-h-screen bg-gradient-to-br from-pink-100 to-slate-300">
        <div className="  w-full h-16 border-b-2 border-black">
          <div className="flex items-center justify-between  py-2 px-10 ">
            <div className="flex">
            <div className="w-6 h-6 bg-blue-600 rounded-full"></div>
            <span className="text-xl font-bold text-gray-800">Quickdraw</span>
             
            </div>
            <DropdownMenuDemo/>
          
          </div>
        </div>

        <main>

         
      
          
          <div className=" mt-7 ml-7 ">
            <DialogDemo />
          </div>

          <div className="text-2xl font-bold ml-6 mt-6">
            <p>Recent Projects</p>
          </div>

          <div className="mt-12">
            <Canvascards />
          </div>
        </main>
      </div>
    </>
  );
}
