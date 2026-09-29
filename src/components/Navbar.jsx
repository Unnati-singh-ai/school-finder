import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Search } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="bg-white border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link
            to="/"
            onClick={closeMenu}
            className="flex items-center gap-2"
          >
            <div className="w-9 h-9 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">
              S
            </div>

            <span className="text-xl font-bold text-gray-900">
              School<span className="text-blue-600">Finder</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">

            <Link
              to="/"
              className="text-gray-700 hover:text-blue-600"
            >
              Home
            </Link>

            <Link
              to="/schools"
              className="text-gray-700 hover:text-blue-600"
            >
              Schools
            </Link>

            <Link
              to="/compare"
              className="text-gray-700 hover:text-blue-600"
            >
              Compare
            </Link>

          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-3">

            <Link
              to="/schools"
              className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:text-blue-600"
            >
              <Search size={18} />
              Search
            </Link>

            <button className="px-5 py-2 bg-blue-600 text-white  hover:bg-blue-700">
              Login
            </button>

          </div>

          {/* Mobile Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X size={26} />
            ) : (
              <Menu size={26} />
            )}
          </button>

        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t">

            <div className="flex flex-col gap-4">

              <Link
                to="/"
                onClick={closeMenu}
                className="text-gray-700"
              >
                Home
              </Link>

              <Link
                to="/schools"
                onClick={closeMenu}
                className="text-gray-700"
              >
                Schools
              </Link>

              <Link
                to="/compare"
                onClick={closeMenu}
                className="text-gray-700"
              >
                Compare
              </Link>

              <Link
                to="/schools"
                onClick={closeMenu}
                className="text-gray-700"
              >
                Search Schools
              </Link>

              <button className="w-full bg-blue-600 text-white py-2 rounded-lg">
                Login
              </button>

            </div>

          </div>
        )}

      </div>
    </nav>
  );
}

export default Navbar;0