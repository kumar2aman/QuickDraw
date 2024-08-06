"use client";

import { signOut, useSession } from "next-auth/react";
import { DialogDemo } from "./popup";
import { useEffect, useState } from "react";
import axios from "axios";
import UserData from "./userData";
import User from "./userData";

export default  function Dashboard() {





  

  const session = useSession();

  return (
    <>
    
    
    
     

      <div className="flex">
        <div className="flex h-screen w-64 flex-col justify-between border-e bg-white">
          <div className="px-4 py-6">
            <span className="grid h-10 w-32 place-content-center rounded-lg bg-gray-100 text-xs text-gray-600">
              Logo
            </span>

            <ul>
              <li>
                <a
                  href="#"
                  className="block rounded-lg mt-12 bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700"
                >
                  General
                </a>
              </li>
            </ul>
          </div>

          <div className="sticky inset-x-0 bottom-0 border-t border-gray-100">
            <a
              href="#"
              className="flex items-center gap-2 bg-white p-4 hover:bg-gray-50"
            >
              <img
                alt=""
                src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                className="size-10 rounded-full object-cover"
              />

              <div>
                <p className="text-xs">
                  <strong className="block font-medium">
                    {session?.data?.user?.name}
                  </strong>

                  <span> {session?.data?.user?.email} </span>
                </p>
              </div>
            </a>
          </div>
        </div>

        <div></div>

        <div className="w-full">
          <div className="flex justify-between w-full h-16 border-b-2">
            <div>helloooo</div>
            <button
              onClick={() => {
                signOut();
              }}
              className="bg-blue-600 text-white size-12 w-20 rounded-lg mr-7 "
            >
              signOut
            </button>
          </div>

          {/* <div className=" mt-7 ml-7 ">
        <button className="bg-blue-400 size-12 w-44 rounded-lg ">Create new canvas</button>
     </div> */}

          <DialogDemo />
        </div>
      </div>
    </>
  );
}
