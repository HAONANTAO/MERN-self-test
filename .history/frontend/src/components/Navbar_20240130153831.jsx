import { Link } from "react-router-dom";
import Navbar.
export const Navbar = () => {
  return (
    <div className="Navbar">
      <Link to={"/"}>Home</Link>
      <Link to={"/auth"}>Auth</Link>
    </div>
  );
};
