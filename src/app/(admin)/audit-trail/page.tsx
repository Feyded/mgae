
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { DropdownMenuTrigger, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem, DropdownMenuContent, DropdownMenu } from "@/components/ui/dropdown-menu"
import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from "@/components/ui/select"
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "@/components/ui/table"

export default function AuditTrail() {
  return (
    <div className="container mx-auto px-4 py-8 md:px-6 md:py-12">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Audit Trail</h1>
        <div className="flex items-center gap-4">
          <div className="relative">
            <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 dark:text-gray-400" />
            <Input
              className="pl-10 pr-4 py-2 rounded-md bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-800 dark:text-gray-200 dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Search events..."
              type="text"
            />
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className="rounded-md" size="icon" variant="outline">
                <FilterIcon className="w-5 h-5" />
                <span className="sr-only">Filter</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-64">
              <DropdownMenuLabel>Filter by</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <div className="flex items-center justify-between">
                  <span>User</span>
                  <Select defaultValue="all">
                    <SelectTrigger className="w-32">
                      <SelectValue placeholder="All" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All</SelectItem>
                      <SelectItem value="user1">User 1</SelectItem>
                      <SelectItem value="user2">User 2</SelectItem>
                      <SelectItem value="user3">User 3</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <div className="flex items-center justify-between">
                  <span>Action</span>
                  <Select defaultValue="all">
                    <SelectTrigger className="w-32">
                      <SelectValue placeholder="All" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All</SelectItem>
                      <SelectItem value="product_update">Product Update</SelectItem>
                      <SelectItem value="order_management">Order Management</SelectItem>
                      <SelectItem value="user_account">User Account</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <div className="flex items-center justify-between">
                  <span>Date Range</span>
                  <div className="flex items-center gap-2">
                    <Input
                      className="w-32 rounded-md bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-800 dark:text-gray-200 dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      type="date"
                    />
                    <span>to</span>
                    <Input
                      className="w-32 rounded-md bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-800 dark:text-gray-200 dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      type="date"
                    />
                  </div>
                </div>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Button className="w-full" variant="secondary">
                  Apply Filters
                </Button>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Timestamp</TableHead>
              <TableHead>User</TableHead>
              <TableHead>Action</TableHead>
              <TableHead>Details</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>2023-05-04 10:15 AM</TableCell>
              <TableCell>John Doe</TableCell>
              <TableCell>Product Update</TableCell>
              <TableCell>Updated product details for "Acme Shirt"</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>2023-05-03 03:30 PM</TableCell>
              <TableCell>Jane Smith</TableCell>
              <TableCell>Order Management</TableCell>
              <TableCell>Processed order #12345</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>2023-05-02 09:45 AM</TableCell>
              <TableCell>Bob Johnson</TableCell>
              <TableCell>User Account</TableCell>
              <TableCell>Deactivated user account for "Alice Williams"</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>2023-05-01 11:20 AM</TableCell>
              <TableCell>Sarah Lee</TableCell>
              <TableCell>Product Update</TableCell>
              <TableCell>Updated inventory for "Acme Pants"</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>2023-04-30 02:00 PM</TableCell>
              <TableCell>Michael Chen</TableCell>
              <TableCell>Order Management</TableCell>
              <TableCell>Refunded order #54321</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>2023-04-29 04:35 PM</TableCell>
              <TableCell>Emily Davis</TableCell>
              <TableCell>User Account</TableCell>
              <TableCell>Created new user account for "David Kim"</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

function FilterIcon(props: any) {
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
      <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
    </svg>
  )
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
  )
}