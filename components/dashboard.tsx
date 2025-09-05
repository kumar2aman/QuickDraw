"use client";

import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import { DialogDemo } from "./dialog";
import Canvascards from "./canvasCards";
import { DropdownMenuDemo } from "./dropDownMenu";
import { Calendar, FileText, Plus, Search, Trash2 } from "lucide-react";
import { useState } from "react";

export default function Dashboard() {
  const session = useSession();
  const router = useRouter();



  return (
    <>
   <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">My Canvases</h1>
          <p className="text-gray-600">Create and manage your drawing canvases</p>
        </div>

     
   
          <div>
<DialogDemo/>
          </div>
        
        <div>
          <Canvascards />
        </div>

       
        </div>
              </div>
        
 
      
    </>
  );
}
