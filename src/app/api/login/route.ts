import connectMongoDB from "@/db/connectMongoDB";
import User from "@/db/model/users";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { NextRequest } from "next/server.js";

export async function POST(request: NextRequest) {
  const user = await request.json();
  await connectMongoDB();
  const findUsers = await User.findOne({ email: user.email });
  if (findUsers) {
    const matchPassword = await bcrypt.compare(
      user.password,
      findUsers.password
    );

    if (!matchPassword) {
      return NextResponse.json({ message: "Wrong password", status: 401 });
    }

    return NextResponse.json({user: findUsers, message: "User found!", status: 200 });
  }

  return NextResponse.json({ message: "User not found!", status: 404 });
}
