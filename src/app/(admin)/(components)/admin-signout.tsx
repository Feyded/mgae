"use client";
import { signOut } from "next-auth/react";
import { PiSignOutBold } from "react-icons/pi";
export default function AdminSignout() {
  return (
    <button
      onClick={() => {
        signOut();
      }}
      className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-200 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-50"
    >
      <PiSignOutBold className="h-5 w-5" />
      Signout
    </button>
  );
}
