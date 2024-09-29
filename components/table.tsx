import axios from "axios";

import { useEffect, useState } from "react";

import AlertDialogDemo from "./alertDelete";

import { RootState } from "@/lib/store";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";

export default function Table() {
  const router = useRouter();

  const [data, setDate] = useState([]);

  const count = useSelector((state: RootState) => state.counter.value);

  useEffect(() => {
    const datafetch = async () => {
      const response = await axios.get("/api/userdata");

      setDate(response.data.allPost);
    };

    datafetch();
  }, [count]);

  return (
    <>
      <div className="mt-20">
        <div className="overflow-x-auto rounded-lg border border-gray-200">
          <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
            <thead className="ltr:text-left rtl:text-right">
              <tr>
                <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  Name
                </td>
                <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  Created At
                </td>
                <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  updated At
                </td>
                <td className="whitespace-nowrap px-4 py-2  font-medium text-gray-900">
                  Delete
                </td>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-200">
              {data.map((e: any) => (
                <tr key={e.id}>
                  <td className="whitespace-nowrap px-2 py-2 font-medium text-gray-900 text-xl">
                    {e.title}{" "}
                  </td>
                  <td className="whitespace-nowrap px-2 py-2 text-gray-700">
                    {e.createdAt}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2  text-gray-700">
                    {e.updatedAt}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2  ">
                    <AlertDialogDemo e={e} />
                  </td>

                  <td>
                    <button
                      onClick={() => {
                        router.push(`/exceldraw/${e.id}`);
                      }}
                      className="whitespace-nowrap px-7 py-2 mt-3 mb-3 font-bold text-black bg-green-400  hover:bg-green-600 rounded-md "
                    >
                      Open
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

interface TableType {
  title: any;
  // Other props...
}

interface CustomIntrinsicAttributes {
  list: string[];
}
