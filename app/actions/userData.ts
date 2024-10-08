"use server";

import prisma from "@/DB";
import { z } from "zod";

import bcrypt from "bcryptjs";
import { signUpSchema } from "@/app/Schema/schema";


type schemaType = z.infer<typeof signUpSchema>;

export async function newUser(data: schemaType) {
  const validateData = signUpSchema.safeParse(data);

  if (!validateData) {
    return { error: "invaild filed" };
  }

  const hashedPassword = await bcrypt.hash(data.password, 10);

  try {
    const newData = await prisma.user.create({
      data: {
        username: data.username,
        email: data.email,
        password: hashedPassword,
      },
    });

    return {
      msg: "new user created",
    };
  } catch (error) {
    console.log(error);
  }
}
