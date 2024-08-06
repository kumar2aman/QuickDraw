import Credentials from "next-auth/providers/credentials";
import client from "@/DB";
import bcrypt from "bcrypt";
import { signIn } from "next-auth/react";

export const NEXT_AUTH = {
  providers: [
    Credentials({
      name: "credentials",
      credentials: {
        username: { label: "username", type: "text" },
        email: { label: "email", type: "email" },
        password: { label: "password", type: "password" },
      },

      async authorize(credentials: any) {
        const hashedpassword = await bcrypt.hash(credentials.password, 10);

        const existingUser = await client.user.findFirst({
          where: {
            email: credentials.email,
          },
        });

        if (existingUser) {
          const passwordvalidation = await bcrypt.compare(
            credentials.password,
            existingUser.password
          );
          if (passwordvalidation) {
            return {
              id: existingUser.id.toString(),
              name: existingUser.username,
              email: existingUser.email,
            };
          }

          return null;
        }

        try {
          const user = await client.user.create({
            data: {
              username: credentials.username,
              email: credentials.email,
              password: hashedpassword,
            },
          });

          return {
            id: user.id.toString(),
            name: user.username,
            email: user.email,
          };
        } catch (error) {
          console.log(error);
        }

        return null;
      },
    }),
  ],

  secret: process.env.NEXTAUTH_SECRET,

  callbacks: {
    session: ({ session, token }: any) => {
      session.user.id = token.sub;

      return session;
    },
  },
};
