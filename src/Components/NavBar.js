import { Link } from "react-router-dom";
import "./NavBar.css";
const NavBar = () => {
  return (
    <nav className="navBar">
      <h1>BestMates</h1>

      <Link to="/" id="home">
        Home
      </Link>

      <Link to="/userIndex" id="userIndex">
        Index
      </Link>
    </nav>
  );
};

export default NavBar;