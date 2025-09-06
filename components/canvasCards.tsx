import axios from "axios";

import { useEffect, useState } from "react";

import AlertDialogDemo from "./alertDelete";

import { RootState } from "@/lib/store";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { Calendar, FileText, Trash2 } from "lucide-react";

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
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {data.map((canvas:any) => (
              <div key={canvas.id} className="bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-lg font-semibold text-gray-900 truncate flex-1 mr-2">
                      {canvas.title}
                    </h3>
                   <div>

                   </div>
                       <AlertDialogDemo e={canvas}/>
                      {/* className="text-gray-400 hover:text-red-500 p-1 rounded-md transition-colors"
                      title="Delete canvas" */}
                    
                      
                    
                  </div>
                  
                  <div className="bg-gray-100 rounded-lg h-32 mb-4 flex items-center justify-center">
                    <FileText className="w-8 h-8 text-gray-400" />
                  </div>
                  
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <Calendar className="w-4 h-4 mr-1" />
                    Updated {canvas.updated_at}
                  </div>
                  
                  <button onClick={() => router.push(`/canvas/${canvas.id}`)} className="w-full bg-primary-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-primary-700 transition-colors">
                    Open Canvas
                  </button>
                </div>
              </div>
            ))}
          </div>
    </>
  );
}

