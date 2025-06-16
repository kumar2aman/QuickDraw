import { IoIosArrowDown } from "react-icons/io";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { signOut, useSession } from "next-auth/react";

import { useRouter } from "next/navigation";

export function DropdownMenuDemo() {
  const session = useSession();
  const Router = useRouter()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="flex cursor-pointer">
          <div>
            <img
              alt=""
              src={`${session?.data?.user?.image}`}
              className="size-10 rounded-full object-cover mr-2 ml-2 mt-1"
            />
          </div>
          <div className="p-2 text-xl font-bold flex items-center">
            {session?.data?.user?.name} <span className="ml-2"><IoIosArrowDown /></span>
          </div>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="start">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        
        <DropdownMenuSeparator />
        
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={()=>{
          Router.push("https://github.com/kumar2aman/QuickDraw/")
        }}>GitHub</DropdownMenuItem>
        <DropdownMenuItem>About Us</DropdownMenuItem>
       
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={ async ()=>{
        const res = await  signOut({redirect:false});
        try {
          if(res){
            Router.push("/")
          }
        } catch (error) {
          throw error;
        }
      
        }
        }>
          Log out
        
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
