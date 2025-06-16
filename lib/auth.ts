import NextAuth from "next-auth";

import Credentials from "next-auth/providers/credentials";
import Github from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import client from "@/DB";
import bcrypt from "bcryptjs";
import { NextConfig } from "next";

export const { auth, handlers, signIn, signOut } = NextAuth({
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    Github({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),

    Credentials({
      name: "credentials",
      credentials: {
        email: { label: "email", type: "text" },
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

        return null;
      },
    }),
  ],

  callbacks: {
    async signIn({ user }) {
      if (!user.email) {
        return false;
      }

      try {
        const existingUser = await client.user.findFirst({
          where: {
            email: user.email,
          },
        });

        if (existingUser) {
          user.id = existingUser.id;
          return true;
        }

        const createdUser = await client.user.create({
          data: {
            email: user.email as string,
            username: user.name as string,
          },
        });

        if (!createdUser) throw new Error("Error while saving the user");
        //pushing the db id, instead of custom id
        user.id = createdUser.id as string;

        return true;
      } catch (e) {
        console.log(e);
        return false;
      }
    },

    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.username = user.name ?? user.email;
      }
      return token;
    },

    session: ({ session, token }: any) => {
      session.user.id = token.id as string;
      session.user.email = token.email as string;

      return session;
    },

              
  },
}) satisfies NextConfig;
