import { Button } from "@/components/ui/button";
import { SignoutButton } from "@/components/ui/signout-button";
import Navbar from "./navbar";
export default function UserDashboard() {
  return (
    <div>
      <Navbar />
      <h1 className="text-lg font-bold">
        The account is <span className="text-cyan-500">user </span> type
      </h1>
      <SignoutButton />
    </div>
  );
}
