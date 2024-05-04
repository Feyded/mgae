import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenu,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

export default function Customers() {
  return (
    <div className="flex flex-col">
      <header className="flex h-14 lg:h-[60px] items-center gap-4 border-b bg-gray-100/40 px-6 dark:bg-gray-800/40">
        <Link className="lg:hidden" href="#">
          <Package2Icon className="h-6 w-6" />
          <span className="sr-only">Home</span>
        </Link>
        <div className="flex-1">
          <h1 className="font-semibold text-lg">Customers/Users</h1>
        </div>
        <div className="flex flex-1 items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
          <form className="ml-auto flex-1 sm:flex-initial">
            <div className="relative">
              <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
              <Input
                className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px] bg-white"
                placeholder="Search..."
                type="search"
              />
            </div>
          </form>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className="rounded-full" size="icon" variant="ghost">
                <img
                  alt="Avatar"
                  className="rounded-full"
                  height="32"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQORGEmYT8DmvsfERmKiCWmQLpxORnrdRyHIlikH9U48g&s"
                  style={{
                    aspectRatio: "32/32",
                    objectFit: "cover",
                  }}
                  width="32"
                />
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <Card className="flex flex-col items-center gap-4 rounded-lg border p-4 shadow-sm">
            <img
              alt="Avatar"
              className="rounded-full"
              height="80"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWWs55tYMx75uBIyJby_z-n2RI4ugS-04ide8K0UNhuQ&s"
              style={{
                aspectRatio: "80/80",
                objectFit: "cover",
              }}
              width="80"
            />
            <div className="text-center">
              <h3 className="text-lg font-semibold">John Doe</h3>
              <p className="text-gray-500 dark:text-gray-400">john@gmail.com</p>
            </div>
            <Badge
              className="px-3 py-1 text-xs font-medium"
              variant="secondary"
            >
              User
            </Badge>
          </Card>
          <Card className="flex flex-col items-center gap-4 rounded-lg border p-4 shadow-sm">
            <img
              alt="Avatar"
              className="rounded-full"
              height="80"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWWs55tYMx75uBIyJby_z-n2RI4ugS-04ide8K0UNhuQ&s"
              style={{
                aspectRatio: "80/80",
                objectFit: "cover",
              }}
              width="80"
            />
            <div className="text-center">
              <h3 className="text-lg font-semibold">Jane Smith</h3>
              <p className="text-gray-500 dark:text-gray-400">jane@gmail.com</p>
            </div>
            <Badge
              className="px-3 py-1 text-xs font-medium"
              variant="secondary"
            >
              User
            </Badge>
          </Card>
          <Card className="flex flex-col items-center gap-4 rounded-lg border p-4 shadow-sm">
            <img
              alt="Avatar"
              className="rounded-full"
              height="80"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWWs55tYMx75uBIyJby_z-n2RI4ugS-04ide8K0UNhuQ&s"
              style={{
                aspectRatio: "80/80",
                objectFit: "cover",
              }}
              width="80"
            />
            <div className="text-center">
              <h3 className="text-lg font-semibold">Michael Johnson</h3>
              <p className="text-gray-500 dark:text-gray-400">
                michael@gmail.com
              </p>
            </div>
            <Badge
              className="px-3 py-1 text-xs font-medium"
              variant="secondary"
            >
              User
            </Badge>
          </Card>
          <Card className="flex flex-col items-center gap-4 rounded-lg border p-4 shadow-sm">
            <img
              alt="Avatar"
              className="rounded-full"
              height="80"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWWs55tYMx75uBIyJby_z-n2RI4ugS-04ide8K0UNhuQ&s"
              style={{
                aspectRatio: "80/80",
                objectFit: "cover",
              }}
              width="80"
            />
            <div className="text-center">
              <h3 className="text-lg font-semibold">Emily Davis</h3>
              <p className="text-gray-500 dark:text-gray-400">
                emily@gmail.com
              </p>
            </div>
            <Badge
              className="px-3 py-1 text-xs font-medium"
              variant="secondary"
            >
              User
            </Badge>
          </Card>
          <Card className="flex flex-col items-center gap-4 rounded-lg border p-4 shadow-sm">
            <img
              alt="Avatar"
              className="rounded-full"
              height="80"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWWs55tYMx75uBIyJby_z-n2RI4ugS-04ide8K0UNhuQ&s"
              style={{
                aspectRatio: "80/80",
                objectFit: "cover",
              }}
              width="80"
            />
            <div className="text-center">
              <h3 className="text-lg font-semibold">David Lee</h3>
              <p className="text-gray-500 dark:text-gray-400">
                david@gmail.com
              </p>
            </div>
            <Badge
              className="px-3 py-1 text-xs font-medium"
              variant="secondary"
            >
              User
            </Badge>
          </Card>
          <Card className="flex flex-col items-center gap-4 rounded-lg border p-4 shadow-sm">
            <img
              alt="Avatar"
              className="rounded-full"
              height="80"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWWs55tYMx75uBIyJby_z-n2RI4ugS-04ide8K0UNhuQ&s"
              style={{
                aspectRatio: "80/80",
                objectFit: "cover",
              }}
              width="80"
            />
            <div className="text-center">
              <h3 className="text-lg font-semibold">Sarah Kim</h3>
              <p className="text-gray-500 dark:text-gray-400">
                sarah@gmail.com
              </p>
            </div>
            <Badge
              className="px-3 py-1 text-xs font-medium"
              variant="secondary"
            >
              User
            </Badge>
          </Card>
          <Card className="flex flex-col items-center gap-4 rounded-lg border p-4 shadow-sm">
            <img
              alt="Avatar"
              className="rounded-full"
              height="80"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWWs55tYMx75uBIyJby_z-n2RI4ugS-04ide8K0UNhuQ&s"
              style={{
                aspectRatio: "80/80",
                objectFit: "cover",
              }}
              width="80"
            />
            <div className="text-center">
              <h3 className="text-lg font-semibold">Alex Nguyen</h3>
              <p className="text-gray-500 dark:text-gray-400">alex@gmail.com</p>
            </div>
            <Badge
              className="px-3 py-1 text-xs font-medium"
              variant="secondary"
            >
              User
            </Badge>
          </Card>
          <Card className="flex flex-col items-center gap-4 rounded-lg border p-4 shadow-sm">
            <img
              alt="Avatar"
              className="rounded-full"
              height="80"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQORGEmYT8DmvsfERmKiCWmQLpxORnrdRyHIlikH9U48g&s"
              style={{
                aspectRatio: "80/80",
                objectFit: "cover",
              }}
              width="80"
            />
            <div className="text-center">
              <h3 className="text-lg font-semibold">Dean Zaballero</h3>
              <p className="text-gray-500 dark:text-gray-400">
                admin@gmail.com
              </p>
            </div>
            <Badge
              className="px-3 py-1 text-xs font-medium"
              variant="secondary"
            >
              Admin
            </Badge>
          </Card>
        </div>
      </main>
    </div>
  );
}

function HomeIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}

function LineChartIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 3v18h18" />
      <path d="m19 9-5 5-4-4-3 3" />
    </svg>
  );
}

function Package2Icon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
      <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9" />
      <path d="M12 3v6" />
    </svg>
  );
}

function PackageIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m7.5 4.27 9 5.15" />
      <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
      <path d="m3.3 7 8.7 5 8.7-5" />
      <path d="M12 22V12" />
    </svg>
  );
}

function SearchIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}

function UsersIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}
