import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <ul>
      <button>Categories</button>
      <button>
        <Link to="/reviews"></Link>Reviews
      </button>
      <button>Users</button>
    </ul>
  );
};

export default Nav;
