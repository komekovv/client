import { footerContactLinks } from "@/constants"
import { Button } from "../ui/button"
import darkLogo from "./../../assets/logo-dark.png"
import { facebook, instagram, linkedin, youtube } from "@/assets/icons"
// import lightLogo from "./../../assets/logo-light.png"

const Footer = () => {
  return (
    <footer className="justify-between bg-stone-900 py-10">
      <div className="container grid gap-5 md:gap-5 md:grid-cols-2 lg:grid-cols-3  sm:justify-between mx-auto">
        <div className="flex flex-col gap-10">
          <div className="w-48">
            <img src={darkLogo} alt="logo" className="w-full" />
          </div>
          <p className="text-white/50">Lorem ipsum dolor sit amet consectetur.</p>
          <div className="flex gap-3">
            <Button variant={'secondary'}>
              <img src={facebook} alt="facebook" />
            </Button>
            <Button variant={'secondary'}>
              <img src={instagram} alt="facebook" />
            </Button>
            <Button variant={'secondary'}>
              <img src={linkedin} alt="facebook" />
            </Button>
            <Button variant={'secondary'}>
              <img src={youtube} alt="facebook" />
            </Button>
          </div>
        </div>
        <div>
          <h1 className="text-white text-2xl">Contact</h1>
          <ul>
          {footerContactLinks.map(link => (
              <li key={link.name} className="my-3">
                <a href={link.path} className="text-white/50 hover:text-white transition">{link.name}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-10">
          <h1 className="text-white text-2xl">News Letter</h1>
          <div>
            <p className="text-white/50">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi tenetur quod dicta!
            </p>
          </div>
          <div className="flex border border-stone-400 rounded-lg">
            <input type="text" placeholder="Your Mail Id" className="flex-auto bg-inherit h-full px-3 text-white focus:outline-none placeholder:text-white/50"/>
            <Button variant={'secondary'} className="font-semibold ">Send</Button>
          </div>
        </div>
      </div>
    
    </footer>
  )
}

export default Footer