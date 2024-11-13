import { Link } from "react-router-dom";
import img from "../assets/icon.png";
const Navbar = () => {
  return (
    <>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <Link to="/" className="btn btn-ghost text-xl">
            Algorithm Visualizer
          </Link>
        </div>
        <div className="flex-none gap-2">
          <img src={img} className="w-10 mr-10" />
        </div>
      </div>
    </>
  );
};

export default Navbar;
