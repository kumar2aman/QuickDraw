"use client";

import { Excalidraw } from "@excalidraw/excalidraw";
import axios from "axios";
import { useEffect, useState } from "react";

export default function ( {params}:any) {

const [whiteboardData, setwhiteboardData] = useState<any>()


const id = params.exceldrawid

useEffect(()=>{
 const datafetch = async () =>{
  const res = await axios.get('/api/updateWhiteboard')
  console.log(res)
  console.log(JSON.parse(res))
 }

 datafetch()

},[])

  return (
    <>
      <div className="h-screen">
        <Excalidraw


      onChange={(excalidrawElements)=> setwhiteboardData(excalidrawElements)}
        />


        
      </div>
      <button
   onClick={ async()=>{
  await  axios.post("/api/updateWhiteboard",{
      whiteboardData,
    id
    })
   }}
      >
        test
      </button>
    </>
  );
}
