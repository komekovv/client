import { Button } from "@/components/ui/button"

import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { navigationLinks } from "@/constants"
import { MenuIcon } from "lucide-react"

export function MobileNavbar() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">
            <MenuIcon/>
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Menu</SheetTitle>
        </SheetHeader>
        <SheetFooter className="sm:justify-start flex-col sm:flex-col">
            {navigationLinks.map(link => (
                <Button key={link.name} variant={'link'} className="font-semibold hover:text-gray-600 transition">
                <a href={link.path}>{link.name}</a>
                </Button>
            ))}
            <div className="flex-center py-5 gap-5">
                <Button variant={'outline'} className="border-black text-black dark:bg-white">
                  <a href="/login">Login</a>
                </Button>
                <Button className="bg-black text-white hover:bg-black dark:bg-white dark:text-black">
                  <a href="/register">Sign Up</a>
                </Button>
            </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
