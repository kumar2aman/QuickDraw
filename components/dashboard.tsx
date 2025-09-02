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
      <div> right now removeing all components and adding new ones </div>
          
        

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
      
    </>
  );
}
