import React, { use, useState } from 'react';
import * as AlertDialog from '@radix-ui/react-alert-dialog';
import { RiDeleteBinLine } from 'react-icons/ri';
import axios from 'axios';
import { useDispatch } from 'react-redux';

import { decrement, increment } from "@/lib/features/states/statesSlice";












const AlertDialogDemo = ({e}:any) => {


  const dispatch = useDispatch()


return(

  <AlertDialog.Root>



    
    <AlertDialog.Trigger asChild>
      <button className=" inline-flex h-[50px] w-20 items-center justify-center bg-gray-400 rounded-full hover:bg-red-300  ">
      <RiDeleteBinLine className="size-8    "/>
      </button>
    </AlertDialog.Trigger>
    <AlertDialog.Portal>
      <AlertDialog.Overlay className="bg-blackA6 data-[state=open]:animate-overlayShow fixed inset-0" />
      <AlertDialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[500px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
        <AlertDialog.Title className="text-mauve12 m-0 text-[17px] font-medium">
          Are you absolutely sure?
        </AlertDialog.Title>
        <AlertDialog.Description className="text-mauve11 mt-4 mb-5 text-[15px] leading-normal">
          This action cannot be undone. This will permanently delete your canvas
        </AlertDialog.Description>
        <div className="flex justify-end gap-[25px]">
          <AlertDialog.Cancel asChild>
            <button className="text-mauve11 bg-mauve4 hover:bg-mauve5 focus:shadow-mauve7 inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-medium leading-none outline-none focus:shadow-[0_0_0_2px]">
              Cancel
            </button>
          </AlertDialog.Cancel>
          <AlertDialog.Action asChild>
            <button  onClick={async()=>{
                const res = await axios.post("/api/canvas/destory",{
                  e
                },
              
               
              )
              if(res){
                dispatch(decrement())
              }else{
                return null
              }
       
          
            }} className="text-red-700 bg-red-200 hover:bg-red5 focus:shadow-red7 inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-medium leading-none outline-none focus:shadow-[0_0_0_2px]">
           Yes,delete
            </button>
          </AlertDialog.Action>
        </div>
      </AlertDialog.Content>
    </AlertDialog.Portal>
  </AlertDialog.Root>


)




  
}




export default AlertDialogDemo;




