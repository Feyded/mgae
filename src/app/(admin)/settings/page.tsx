
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function Settings() {
  return (
    <div className="container mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="grid gap-8">
        <div className="grid gap-4">
          <div className="flex items-center gap-4">
            <Avatar className="h-16 w-16">
              <AvatarImage alt="@shadcn" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQORGEmYT8DmvsfERmKiCWmQLpxORnrdRyHIlikH9U48g&s" />
              <AvatarFallback>JP</AvatarFallback>
            </Avatar>
            <div className="grid gap-1">
              <h2 className="text-2xl font-bold">Dean Zaballero</h2>
              <p className="text-gray-500 dark:text-gray-400">admin@gmail.com</p>
            </div>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="profile-picture">Profile Picture</Label>
            <Input id="profile-picture" type="file" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="name">Name</Label>
            <Input defaultValue="Dean Zaballero" id="name" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input defaultValue="admin@gmail.com" id="email" type="email" />
          </div>
        </div>
        <div className="grid gap-4">
          <h3 className="text-lg font-semibold">Change Password</h3>
          <div className="grid gap-2">
            <Label htmlFor="current-password">Current Password</Label>
            <Input id="current-password" type="password" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="new-password">New Password</Label>
            <Input id="new-password" type="password" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="confirm-password">Confirm Password</Label>
            <Input id="confirm-password" type="password" />
          </div>
          <Button className="justify-self-end">Save Changes</Button>
        </div>
      </div>
    </div>
  )
}