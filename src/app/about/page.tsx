import React from "react";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { SignoutButton } from "./../../components/ui/signout-button";
export default async function About() {
  const session = await getServerSession(authOptions);
  console.log(session);
  if (session.user.role !== "admin") {
    return (
      <section className="py-24">
        <div className="container">
          <h1 className="text-3xl font-bold">
            You are not authorize to view this page
          </h1>
        </div>
      </section>
    );
  }
  return (
    <div>
      <SignoutButton />
      <h1>Hello {session?.user?.email}</h1>
    </div>
  );
}
