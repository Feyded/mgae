import User from "@/db/model/users";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { NextRequest } from "next/server.js";
import connectMongoDB from "@/db/connectMongoDB";

export async function GET() {
  await connectMongoDB();
  try {
    const result = await User.find({});
    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json(error);
  }
}

export async function POST(request: NextRequest) {
  const newUser = await request.json();
  newUser.role = newUser.role ?? "user";
  try {
    const hashedPassword = await bcrypt.hash(newUser.password, 10);
    newUser.password = hashedPassword;
    const result = await User.create(newUser);
    if (result) {
      return NextResponse.json({ message: "Created User! ", status: 200 });
    }
  } catch (error) {
    return NextResponse.json(error);
  }
}
