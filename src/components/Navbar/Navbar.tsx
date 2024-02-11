import { Button } from "../ui/button";
import darkLogo from "./../../assets/logo-dark.png"
import lightLogo from "./../../assets/logo-light.png"
import { useTheme } from "../ThemeProvider";
import { ModeToggle } from "../ModeToggler/ModeToggler";
import { navigationLinks } from "@/constants";
// import { useState } from "react";
import { MobileNavbar } from "../MobileNavbar/MobileNavbar";
import { useNavigate } from "react-router-dom";

const Navbar = () => {

  const {theme} = useTheme();
  const navigate = useNavigate()

  // const [menuToggle, setMenuToggle] = useState<boolean>(false)

  return (
    <nav className=" p-3 md:p-6 dark:bg-black">
      <div className="container mx-auto flex-between">
        {/* Logo */}
        <div className="flex items-center h-8 cursor-pointer" onClick={() => navigate('/')}>
          {theme === 'dark' 
          ?
          <img src={darkLogo} alt="Logo" className="mr-2 w-full h-full" />
          : 
          <img src={lightLogo} alt="Logo" className=" mr-2 w-full h-full" />
          }
        </div>

        {/* Links */}
        <div className="hidden md:flex">
          {navigationLinks.map(link => (
            <Button key={link.name} variant={'link'} className="font-semibold hover:text-gray-600 transition">
              <a href={link.path}>{link.name}</a>
            </Button>
          ))}
        </div>

        <div className="flex items-center space-x-4">
          
          <Button 
            variant={'outline'} 
            className="border-black text-black hidden md:block dark:bg-black dark:border-white dark:text-white"
            onClick={() => navigate('login')}
          >
            Login
          </Button>
          <Button 
            className="bg-black text-white hover:bg-black hidden md:block dark:bg-white dark:text-black" 
            onClick={() => navigate('/register')}
          >
            Sign Up
          </Button>
            <ModeToggle />
            <div className="md:hidden relative">
              <MobileNavbar />
            </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
