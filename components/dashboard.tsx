"use client";

import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import { DialogDemo } from "./dialog";
import Table from "./table";

import exceldraw from "@/public/exceldraw.png";
import Image from "next/image";
export default function Dashboard() {
  const session = useSession();

  const router = useRouter();

  return (
    <>
      <div className="flex">
        <div className="flex h-screen w-64 flex-col justify-between border-e bg-white">
          <div className="px-4">
            <Image src={exceldraw} alt="exceldraw" className="h-36" />

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
            <div className="flex">
              <div>
                <img
                  alt=""
                  src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                  className="size-14 rounded-full object-cover mr-2 ml-2 mt-1"
                />
              </div>
              <div className="p-2 text-2xl font-bold">
                {session?.data?.user?.name}
              </div>
            </div>
            <button
              onClick={async () => {
                const res = await signOut({ redirect: false });
                if (res) {
                  router.push("/");
                }
              }}
              className="bg-blue-600 text-white size-12 w-20 rounded-lg mr-7 mt-2 "
            >
              signOut
            </button>
          </div>

          <div className=" mt-7 ml-7 ">
            <DialogDemo />
          </div>

          <Table />
        </div>
      </div>
    </>
  );
}
