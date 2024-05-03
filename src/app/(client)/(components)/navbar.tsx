
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  return (
    <>
      <header className="fixed top-0 z-50 w-full bg-white shadow-sm dark:bg-gray-950 dark:shadow-none">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <Link className="flex items-center gap-2" href="#">
            <MountainIcon className="h-6 w-6" />
            <span className="text-lg font-semibold">Acme Inc</span>
          </Link>
          <nav className="hidden space-x-4 md:flex">
            <Link className="text-sm font-medium hover:underline hover:underline-offset-4" href="#">
              Home
            </Link>
            <Link className="text-sm font-medium hover:underline hover:underline-offset-4" href="#">
              About
            </Link>
            <Link className="text-sm font-medium hover:underline hover:underline-offset-4" href="#">
              Services
            </Link>
            <Link className="text-sm font-medium hover:underline hover:underline-offset-4" href="#">
              Contact
            </Link>
          </nav>
          <Button className="md:hidden" size="sm" variant="outline">
            <MenuIcon className="h-5 w-5" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </header>
      <main className="pt-16" />
    </>
  )
}

function MenuIcon(props: any) {
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
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}


function MountainIcon(props: any) {
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
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}

// import {
//     Cloud,
//     CreditCard,
//     Github,
//     Keyboard,
//     LifeBuoy,
//     LogOut,
//     Mail,
//     MessageSquare,
//     Plus,
//     PlusCircle,
//     Settings,
//     User,
//     UserPlus,
//     Users,
//   } from "lucide-react"
  
//   import { Button } from "@/components/ui/button"
//   import {
//     DropdownMenu,
//     DropdownMenuContent,
//     DropdownMenuGroup,
//     DropdownMenuItem,
//     DropdownMenuLabel,
//     DropdownMenuPortal,
//     DropdownMenuSeparator,
//     DropdownMenuShortcut,
//     DropdownMenuSub,
//     DropdownMenuSubContent,
//     DropdownMenuSubTrigger,
//     DropdownMenuTrigger,
//   } from "@/components/ui/dropdown-menu"
  
//   export default function Test() {
//     return (
//       <DropdownMenu>
//         <DropdownMenuTrigger asChild>
//           <Button variant="outline">Open</Button>
//         </DropdownMenuTrigger>
//         <DropdownMenuContent className="w-56">
//           <DropdownMenuLabel>My Account</DropdownMenuLabel>
//           <DropdownMenuSeparator />
//           <DropdownMenuGroup>
//             <DropdownMenuItem>
//               <User className="mr-2 h-4 w-4" />
//               <span>Profile</span>
//               <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
//             </DropdownMenuItem>
//             <DropdownMenuItem>
//               <CreditCard className="mr-2 h-4 w-4" />
//               <span>Billing</span>
//               <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
//             </DropdownMenuItem>
//             <DropdownMenuItem>
//               <Settings className="mr-2 h-4 w-4" />
//               <span>Settings</span>
//               <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
//             </DropdownMenuItem>
//             <DropdownMenuItem>
//               <Keyboard className="mr-2 h-4 w-4" />
//               <span>Keyboard shortcuts</span>
//               <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
//             </DropdownMenuItem>
//           </DropdownMenuGroup>
//           <DropdownMenuSeparator />
//           <DropdownMenuGroup>
//             <DropdownMenuItem>
//               <Users className="mr-2 h-4 w-4" />
//               <span>Team</span>
//             </DropdownMenuItem>
//             <DropdownMenuSub>
//               <DropdownMenuSubTrigger>
//                 <UserPlus className="mr-2 h-4 w-4" />
//                 <span>Invite users</span>
//               </DropdownMenuSubTrigger>
//               <DropdownMenuPortal>
//                 <DropdownMenuSubContent>
//                   <DropdownMenuItem>
//                     <Mail className="mr-2 h-4 w-4" />
//                     <span>Email</span>
//                   </DropdownMenuItem>
//                   <DropdownMenuItem>
//                     <MessageSquare className="mr-2 h-4 w-4" />
//                     <span>Message</span>
//                   </DropdownMenuItem>
//                   <DropdownMenuSeparator />
//                   <DropdownMenuItem>
//                     <PlusCircle className="mr-2 h-4 w-4" />
//                     <span>More...</span>
//                   </DropdownMenuItem>
//                 </DropdownMenuSubContent>
//               </DropdownMenuPortal>
//             </DropdownMenuSub>
//             <DropdownMenuItem>
//               <Plus className="mr-2 h-4 w-4" />
//               <span>New Team</span>
//               <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
//             </DropdownMenuItem>
//           </DropdownMenuGroup>
//           <DropdownMenuSeparator />
//           <DropdownMenuItem>
//             <Github className="mr-2 h-4 w-4" />
//             <span>GitHub</span>
//           </DropdownMenuItem>
//           <DropdownMenuItem>
//             <LifeBuoy className="mr-2 h-4 w-4" />
//             <span>Support</span>
//           </DropdownMenuItem>
//           <DropdownMenuItem disabled>
//             <Cloud className="mr-2 h-4 w-4" />
//             <span>API</span>
//           </DropdownMenuItem>
//           <DropdownMenuSeparator />
//           <DropdownMenuItem>
//             <LogOut className="mr-2 h-4 w-4" />
//             <span>Log out</span>
//             <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
//           </DropdownMenuItem>
//         </DropdownMenuContent>
//       </DropdownMenu>
//     )
//   }
  
