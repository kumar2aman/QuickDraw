import axios from "axios";

import { useEffect, useState } from "react";

import AlertDialogDemo from "./alertDelete";

import { RootState } from "@/lib/store";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";

export default function CanvasCards() {
  const router = useRouter();

  const [data, setDate] = useState([]);

  const count = useSelector((state: RootState) => state.counter.value);

  useEffect(() => {
    const datafetch = async () => {
      const response = await axios.get("/api/user/post/all");

      setDate(response.data.allPost);
    };

    datafetch();
  }, [count]);

  return (
    <>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-4">
            {data.map((drawing:any) => (
              <div
                key={drawing.id}
                className="bg-slate-100 ml-4 rounded-lg shadow-md overflow-hidden flex flex-col items-center p-4"
              >
                <div onClick={()=>{
                  router.push(`/quickDraw/${drawing.id}`)
                }} className="relative w-full h-48 mb-4 cursor-pointer rounded-lg overflow-hidden border border-gray-200 flex items-center justify-center  transform transition duration-300 ease-in-out hover:scale-105">
                  <img
                    src="https://cdn.dribbble.com/userupload/43284235/file/original-0551d60b7dda49247d0c80436a03efbd.jpg?resize=1600x1200&vertical=center"
                  
                    className="object-fit  w-full h-full"
                  />
                  {/* Overlay for aesthetic, resembling a minimal photo frame */}
                  <div className="absolute inset-0 border-2 border-gray-300 rounded-lg pointer-events-none "></div>
                </div>
                <div className="flex col justify-evenly">
                  <div >
                  <h3 className="text-lg font-semibold text-gray-800 text-center">{drawing.title}</h3>
                  <p className="text-sm text-gray-500 text-center">Created At: {drawing.createdAt}</p>
                  </div>
                  <div className = "ml-12">
                  <AlertDialogDemo e={drawing} />
                  </div>
              
                </div>

                
              </div>
            ))}
          </div>
          
    </>
  );
}

