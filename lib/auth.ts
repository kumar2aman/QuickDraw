import NextAuth from "next-auth";

import Credentials from "next-auth/providers/credentials";

import client from "@/DB";
import  bcrypt  from 'bcryptjs';



export const { auth, handlers, signIn, signOut }  = NextAuth(
{
  providers: [
    Credentials({
      name: "credentials",
      credentials: {
        username: { label: "username", type: "text" },
       password: { label: "password", type: "password" },
      },

      async authorize(credentials: any) {
        const hashedpassword = await bcrypt.hash(credentials.password, 10);

        const existingUser = await client.user.findFirst({
          where: {
            username: credentials.username,
          },
        });

        if (existingUser) {
          const passwordvalidation = await bcrypt.compare(
            credentials.password,
            existingUser.password as string
          );
          if (passwordvalidation) {
            return {
              id: existingUser.id,
              name: existingUser.username,
              email: existingUser.email,
            };
          }

          return null;
        }

        // try {
        //   const user = await client.user.create({
        //     data: {
        //       username: credentials.username,
        //       email: credentials.email,
        //       password: hashedpassword,
        //     },
        //   });

        //   return {
        //     id: user.id.toString(),
        //     name: user.username,
        //     email: user.email,
        //   };
        // } catch (error) {
        //   console.log(error);
        // }

        return null;
       },
    }),
  ],



  callbacks: {
    session: ({ session, token }: any) => {
      session.user.id = token.sub;
     
      return session;
    },
  },
}
)




