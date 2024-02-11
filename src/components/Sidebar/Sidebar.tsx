import { sidebarLinks } from "@/constants"
import { LogOut } from "lucide-react"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { MobileSidebar } from "../MobileSidebar/MobileSidebar"
import { Button } from "../ui/button"

const Sidebar = () => {

  const [activeIndex, setActiveIndex] = useState(0)
  const navigate = useNavigate()

  return (
    <>
      <div className="w-[25%] px-6 hidden lg:flex flex-col gap-5">
        <div className="flex-center px-3">
          <div className="">
            <p className="font-bold">Leyli Garlyyeva</p>
            <p className="font-bold">garlyyevaleyli@gmail.com</p>
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
      </div>
      <div className="lg:hidden">
        <MobileSidebar />
      </div>
    </>
  )
}

export default Sidebar