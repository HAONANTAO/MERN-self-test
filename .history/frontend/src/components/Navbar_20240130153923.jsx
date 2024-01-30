import { Link } from "react-router-dom";
import "./Navbar.css";
export const Navbar = () => {
  return (
    <div className="Navbar">
      <Link to={"/"} className="Home">
        Home
      </Link>
      <Link to={"/auth"}>Auth</Link>
    </div>
  );
};
