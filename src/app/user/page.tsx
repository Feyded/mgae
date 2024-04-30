"use client";
import React from "react";
import { getCsrfToken } from "next-auth/react";
export default async function User() {
  const csrfToken = await getCsrfToken();
  console.log(csrfToken);
  return <div>User </div>;
}
