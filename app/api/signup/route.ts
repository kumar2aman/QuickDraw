import prisma from "@/DB";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export async function POST(req: NextRequest) {
  const body = await req.json();



  const hashedpassword = await bcrypt.hash(body.password, 10);

  try {
    const newuser = await prisma.user.create({
      data: {
        username: body.username,
        email: body.email,
        password: hashedpassword,
      },
    });

    return NextResponse.json({
      newuser,
    });
  } catch (error) {
    console.log(error);
  }
 }
