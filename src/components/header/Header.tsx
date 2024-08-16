import { Link } from "react-router-dom";
import farmaciaLogo from "../../assets/farmaciaLogo.svg";
import NavBar from "../navBar/NavBar";

function Header() {
  return (
    <header className="bg-sky-900 p-3 flex justify-between items-center">
      <div className="flex items-center gap-1">
        <img src={farmaciaLogo} alt="Farmácia" className="w-11 h-11" />
        <div className="text-white text-2xl font-bold">
          <Link to="/">Farmácia Generation</Link>
        </div>
      </div>
      <NavBar />
    </header>
  );
}

export default Header;
