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

         
      
         

         

         
        </main>
      
    </>
  );
}
