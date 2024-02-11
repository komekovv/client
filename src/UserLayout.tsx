/* eslint-disable react-refresh/only-export-components */
import { Outlet } from "react-router-dom"
import Sidebar from "./components/Sidebar/Sidebar"
import AuthMiddleware from "./components/AuthMiddlware"
import Search from "./components/search/Search"
import Footer from "./components/Footer/Footer"


const UserLayout = () => {
  return (
    <>
      
      <Search />
      <div className="flex">
        <Sidebar/>
        <Outlet />
      </div>
      <Footer />
    </>
  )
}

export default AuthMiddleware(UserLayout)