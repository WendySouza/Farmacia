import { Link } from "react-router-dom";
import farmaciaLogo from "../../assets/farmaciaLogo.jpg";
import NavBar from "../navBar/NavBar";

function Header() {
  return (
    <header className="bg-sky-900 p-3 flex justify-between items-center">
      <div className="flex items-center gap-1">
        <img src={farmaciaLogo} alt="Farmácia" className="w-16 h-16" />
        <div className="text-white text-2xl font-bold">
          <Link to="/">FarmaGe</Link>
        </div>
      </div>
      <NavBar />
    </header>
  );
}

export default Header;
