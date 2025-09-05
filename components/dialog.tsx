import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { increment, decrement } from "@/lib/features/states/statesSlice";
import { useSession } from "next-auth/react";
import { Plus } from "lucide-react";

export function DialogDemo() {
  const [name, setName] = useState("");

  const session = useSession();

  const dispatch = useDispatch();

  const str = session?.data?.user?.name;

  const userName = str?.split(" ")[0];

  return (
    <Dialog>
      <div className="flex justify-between">
        {/* <div className="text-4xl font-bold">
          {" "}
          <p>Welcome back, {userName}</p>{" "}
        </div> */}
        <DialogTrigger asChild>
          <Button
            className="bg-pink-400 text-l h-16 w-auto mr-16 hover:bg-purple-400"
            variant="outline"
          >
            <span className="text-4xl pr-2"><Plus/></span> Create New Canvas
          </Button>
        </DialogTrigger>
      </div>
      <DialogContent className="sm:max-w-[425px] bg-gray-200 shadow-lg shadow-black">
        <DialogHeader>
          <DialogTitle>Create Canvas</DialogTitle>
          <DialogDescription>
            Make new canvas here. Click save when you&apos;re done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input
              onChange={(e) => {
                setName(e.target.value);
              }}
              id="name"
              className="col-span-3 text-[18px]"
            />
          </div>
        </div>
        <DialogPrimitive.Close>
          <DialogFooter>
            <Button
              type="submit"
              className="bg-pink-400 hover:bg-purple-400"
              onClick={async () => {
                await axios.post("/api/canvas/create", {
                  name,
                });
                dispatch(increment());
              }}
            >
              Create
            </Button>
          </DialogFooter>
        </DialogPrimitive.Close>
      </DialogContent>
    </Dialog>
  );
}
