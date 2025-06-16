
import { string , z} from 'zod';

export const signUpSchema = z.object({
    username: string().min(4).max(10),
    email: string().email(),
    password: string().min(4).max(10),
  });


 export  const signInSchema = z.object({
    email:z.string().email("email is required").min(4),
  
   password:z.string().min(4).max(10)
  })