import { Link } from "react-router-dom";
function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold text-white">
              School<span className="text-blue-400">Finder</span>
            </h2>

            <p className="mt-4 text-sm leading-6">
              Helping parents discover, explore and compare schools
              for their children.
            </p>
          </div>

          {/* Platform */}
          <div>
            <h3 className="text-white font-semibold mb-4">
              Platform
            </h3>

            <div className="space-y-3 text-sm">
              <Link to="/schools" className="hover:text-white cursor-pointer">
                Schools
              </Link>
              <br />
              <Link to="/compare" className="hover:text-white cursor-pointer">
                Compare
              </Link>
              <p className="hover:text-white cursor-pointer">
                Admissions
              </p>
              <p className="hover:text-white cursor-pointer">
                Counselling
              </p>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4">
              Company
            </h3>

            <div className="space-y-3 text-sm">
              <p className="hover:text-white cursor-pointer">
                About Us
              </p>
              <p className="hover:text-white cursor-pointer">
                Contact
              </p>
              <p className="hover:text-white cursor-pointer">
                Privacy
              </p>
              <p className="hover:text-white cursor-pointer">
                Terms
              </p>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">
              Contact
            </h3>

            <p className="text-sm">
              Email: support@schoolfinder.com
            </p>

            <p className="text-sm mt-3">
              Phone: +91 98765 43210
            </p>
          </div>

        </div>

        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm">
          © 2026 SchoolFinder. All rights reserved.
        </div>

      </div>

    </footer>
  );
}

export default Footer;