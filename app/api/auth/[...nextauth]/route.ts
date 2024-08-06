import { NEXT_AUTH } from "@/lib/auth";
import nextAuth from "next-auth";



const handler = nextAuth(NEXT_AUTH);


export {handler as GET , handler as POST}