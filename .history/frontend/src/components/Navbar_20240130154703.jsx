import { Link } from "react-router-dom";
import "./Navbar.scss";
@import './path-to/Navbar';
export const Navbar = () => {
  return (
    <div className="Navbar">
      <Link to={"/"} className="Home">
        Home
      </Link>
      <Link to={"/auth"} className="Auth">
        Auth
      </Link>
    </div>
  );
};
