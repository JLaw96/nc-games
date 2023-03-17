import "./Nav.css";
import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <main>
      <button className="nav-button">Categories</button>
      <button className="nav-button">
        <Link to="/reviews">Reviews</Link>
      </button>
      <button className="nav-button">Users</button>
    </main>
  );
};

export default Nav;
