
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-amber-500 w-full flex items-center justify-between px-6 py-4">

      <h1 className="text-blue-700 font-bold text-xl">
        Next Trip
      </h1>

      <div className="flex items-center gap-8">
        <Link to="/" className="cursor-pointer hover:text-blue-700">
          Home
        </Link>

        <Link to="/tours" className="cursor-pointer hover:text-blue-700">
          Tours
        </Link>

        <Link to="/about" className="cursor-pointer hover:text-blue-700">
          About
        </Link>
        <Link to="/sign" className="cursor-pointer hover:text-blue-700">
          sign in
        </Link>

      </div>

    </nav>
  );
}

export default Navbar;
