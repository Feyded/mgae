"use client";

import { signOut } from "next-auth/react";

export function SignoutButton() {
  return (
    <button
      className="text-white bg-blue-500 px-2 py-1 rounded hover:bg-blue-600"
      onClick={() => {
        signOut();
      }}
    >
      Logout
    </button>
  );
}
