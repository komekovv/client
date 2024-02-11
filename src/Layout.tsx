
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

const Layout = () => {

  return (
    <>
      <Navbar />
      <div className="md:p-6 dark:bg-black">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
