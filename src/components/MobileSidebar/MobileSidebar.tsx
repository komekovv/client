import { Button } from "@/components/ui/button"

import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetTrigger,
} from "@/components/ui/sheet"
import { sidebarLinks } from "@/constants"
import { LogOut, MenuIcon, UserCircle2Icon } from "lucide-react"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

export function MobileSidebar() {

    const [activeIndex, setActiveIndex] = useState(0)
    const navigate = useNavigate()

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">
            <MenuIcon/>
        </Button>
      </SheetTrigger>
      <SheetContent side={'left'}>
        <SheetFooter className="sm:justify-start flex-col sm:flex-col">
        <div className="flex-center px-3 py-5">
          <div className="">
            <p className="font-bold">Leyli Garlyyeva</p>
            <p className="font-bold">garlyyevaleyli@gmail.com</p>
          </div>
          <div>
            <UserCircle2Icon width={30}/>
          </div>
        </div>
        <ul className="">
        {sidebarLinks.map((link, index) => (
          <>
            <li 
              key={link.name} 
              className={`px-4 py-3 mt-3 ${activeIndex === index ? 'bg-emerald-600 text-white' : ''} hover:bg-emerald-600 hover:text-white transition rounded-sm cursor-pointer`}
              onClick={() => {
                setActiveIndex(index)
                navigate(link.path)
              }
              }
            >
              {link.name}
            </li>
          </>
          ))}
        </ul>
        <div>
          <Button onClick={() => navigate('/logout')}> <LogOut className="mr-2"/> Logout</Button>
        </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
