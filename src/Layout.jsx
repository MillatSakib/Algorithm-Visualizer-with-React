import { Outlet } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";

function Layout() {
  return (
    <div className="flex flex-col min-h-[100vh] justify-between">
      <Navbar />
      <Outlet></Outlet>
      <Footer />
    </div>
  );
}

export default Layout;
