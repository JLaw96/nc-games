import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <main>
      <button>Categories</button>
      <button>
        <Link to="/reviews">Reviews</Link>
      </button>
      <button>Users</button>
    </main>
  );
};

export default Nav;
