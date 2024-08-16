import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="text-lg font-bold p-4">
      <ul className="flex gap-4">
        <li>
          <Link to="/" className="text-white hover:text-sky-300 hover:underline">
            Home
          </Link>
        </li>
        <li>
          <Link to="/products" className="text-white hover:text-sky-300 hover:underline">
            Produtos
          </Link>
        </li>
        <li>
          <Link to="/categories" className="text-white hover:text-sky-300 hover:text- hover:underline">
            Categorias
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
