"use client";

import { Excalidraw } from "@excalidraw/excalidraw";
import axios from "axios";
import { useRouter } from "next/navigation";

import { useEffect, useState } from "react";

export default function ({ params }: any) {
  const [whiteboardData, setwhiteboardData] = useState<any>();
  const [canvas, setcanvas] = useState<any>();
  const router = useRouter();
  const id = params.exceldrawid;

  useEffect(() => {
    const datafetch = async () => {
      const res = await axios.get(`/api/canvas/update/?id=${id}`);
     
      if (res.data.allresponse) {
        const updatedData = await res.data.allresponse;
        setcanvas(updatedData);
      }
    };

    datafetch();
  }, []);

  return (
    <>
      <div className="relative">
        <div className="flex flex-row-reverse mt-2 absolute bottom-4 right-16 z-10">
          <button
            className="bg-orange-400 hover:bg-orange-300 border-black mx-2 rounded-xl size-10 w-24"
            onClick={async () => {
              const res = await axios.post("/api/canvas/update", {
                whiteboardData,
                id,
              });
              if (res) router.push("/dashboard");
            }}
          >
            Save
          </button>

          <button className="bg-white border-2 border-blue-900 hover:bg-blue-500  rounded-xl size-10 w-24">
            Share
          </button>
        </div>

        <div className="h-screen">
          {canvas && (
            <Excalidraw
              initialData={{
                elements: canvas,
              }}
              onChange={(excalidrawElements) =>
                setwhiteboardData(excalidrawElements)
              }
            />
          )}
       
        </div>
      </div>
    </>
  );
}
