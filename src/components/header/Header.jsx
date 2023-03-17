import logo from "./Crash-Bandicoot.png";
import "./Header.css";
const Header = () => {
  return (
    <main>
      <h1 className="header">NC Games</h1>
      <img src={logo} alt="Crash Bandicoot" />
    </main>
  );
};

export default Header;
