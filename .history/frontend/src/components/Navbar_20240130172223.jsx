import { Link } from "react-router-dom";
import "./Navbar.scss";

export const Navbar = () => {
  return (
    <div className="Navbar">
      <Link to={"/"} className="Home">
        Home
      </Link>
      <Link to={"/auth"} className="Auth">
        Auth
      </Link>{" "}
      <Link to={"/login"} className="Login">
        Auth
      </Link>
    </div>
  );
};
