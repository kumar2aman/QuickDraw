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
import { increment,decrement } from "@/lib/features/states/statesSlice";
import { RootState } from "@/lib/store";

export function DialogDemo() {
  const [name, setName] = useState("");
  



  const dispatch =useDispatch();

 

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-pink-400 size-14 w-32" variant="outline">
          New canvas
         
        </Button>
     
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
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
              className="col-span-3"
            />
          </div>
        </div>
        <DialogPrimitive.Close>
          <DialogFooter>
            <Button
              type="submit"
              className="bg-red-500"
              onClick={async () => {
                await axios.post("/api/userdata", {
                  name,
                });
       dispatch(increment())

              }}
            >
              Save changes
            </Button>
          </DialogFooter>
        </DialogPrimitive.Close>
      </DialogContent>
    </Dialog>
  );
}
