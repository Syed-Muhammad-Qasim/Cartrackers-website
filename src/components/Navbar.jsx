import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { Link, useLocation } from "react-router";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { pathname } = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="absolute top-0 left-0 right-0 bg-[#00000026] w-full h-[99px] z-50 flex flex-row items-center lg:pl-[140px] xl:pl-[160px]">
      <div className="flex items-center justify-start h-full px-4 relative  lg:hidden">
        <button
          onClick={toggleMenu}
          className="text-white focus:outline-none mr-4"
        >
          {isMenuOpen ? (
            <HiX className="w-8 h-8 hover:bg-[#FF8713]" />
          ) : (
            <HiMenu className="w-8 h-8 hover:bg-[#FF8713]" />
          )}
        </button>

        {isMenuOpen && (
          <div className="absolute top-full left-0 w-64 bg-black/90 backdrop-blur-sm rounded-lg shadow-lg">
            <div className="px-4 py-6 space-y-4">
              <Link
                to="/"
                className={`block text-lg transition-colors py-2 ${
                  pathname === "/" ? "text-[#FF8713] underline" : "text-white"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/sell-your-car"
                className={`block text-lg transition-colors py-2 ${
                  pathname === "/sell-your-car"
                    ? "text-[#FF8713] underline"
                    : "text-white"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Sell your Car
              </Link>
              <Link
                to="/apply-new-car"
                className={`block text-lg transition-colors py-2 ${
                  pathname === "/apply-new-car"
                    ? "text-[#FF8713] underline"
                    : "text-white"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Apply For a new Car
              </Link>
              <Link
                to="/beat-my-offer"
                className={`block text-lg transition-colors py-2 ${
                  pathname === "/beat-my-offer"
                    ? "text-[#FF8713] underline"
                    : "text-white"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Beat my Offer
              </Link>
              <Link
                to="/about-us"
                className={`block text-lg transition-colors py-2 ${
                  pathname === "/about-us"
                    ? "text-[#FF8713] underline"
                    : "text-white"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                About us
              </Link>
              <Link
                to="/faq"
                className={`block text-lg transition-colors py-2 ${
                  pathname === "/faq"
                    ? "text-[#FF8713] underline"
                    : "text-white"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Faq
              </Link>
              <Link
                to="/kelly-blue-book"
                className={`block text-lg transition-colors py-2 ${
                  pathname === "/kelly-blue-book"
                    ? "text-[#FF8713] underline"
                    : "text-white"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Kelley Blue Book
              </Link>
              <Link
                to="/media"
                className={`block text-lg transition-colors py-2 ${
                  pathname === "/media"
                    ? "text-[#FF8713] underline"
                    : "text-white"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Media
              </Link>
            </div>
          </div>
        )}
      </div>

      <img
        src="logo.png"
        alt="Logo"
        className="w-[150px] h-[42px] sm:w-[200px] "
      />

      <div className="hidden lg:flex items-center gap-[10px] lg:px-4 xl:pl-[50px] xl:pr-[50px]">
        <ul className="flex items-center space-x-4 xl:space-x-8">
          <li>
            <Link
              to="/"
              className={`relative transition-colors text-sm font-medium 
                after:content-[''] after:absolute after:left-0 after:top-full after:mt-9
                after:h-[4px] after:w-full after:bg-[#FF8713] after:opacity-0 
                after:transition-all after:duration-300 ${
                  pathname === "/"
                    ? "text-[#FF8713] after:opacity-100"
                    : "text-white"
                }`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/sell-your-car"
              className={`relative transition-colors text-sm font-medium 
                after:content-[''] after:absolute after:left-0 after:top-full after:mt-9
                after:h-[4px] after:w-full after:bg-[#FF8713] after:opacity-0 
                after:transition-all after:duration-300 ${
                  pathname === "/sell-your-car"
                    ? "text-[#FF8713] after:opacity-100"
                    : "text-white"
                }`}
            >
              Sell your Car
            </Link>
          </li>
          <li>
            <Link
              to="/apply-new-car"
              className={`relative transition-colors text-sm font-medium 
                after:content-[''] after:absolute after:left-0 after:top-full after:mt-9
                after:h-[4px] after:w-full after:bg-[#FF8713] after:opacity-0 
                after:transition-all after:duration-300 ${
                  pathname === "/apply-new-car"
                    ? "text-[#FF8713] after:opacity-100"
                    : "text-white"
                }`}
            >
              Apply For a new Car
            </Link>
          </li>
          <li>
            <Link
              to="/beat-my-offer"
              className={`relative transition-colors text-sm font-medium 
                after:content-[''] after:absolute after:left-0 after:top-full after:mt-9
                after:h-[4px] after:w-full after:bg-[#FF8713] after:opacity-0 
                after:transition-all after:duration-300 ${
                  pathname === "/beat-my-offer"
                    ? "text-[#FF8713] after:opacity-100"
                    : "text-white"
                }`}
            >
              Beat my Offer
            </Link>
          </li>
          <li>
            <Link
              to="/about-us"
              className={`relative transition-colors text-sm font-medium 
                after:content-[''] after:absolute after:left-0 after:top-full after:mt-9
                after:h-[4px] after:w-full after:bg-[#FF8713] after:opacity-0 
                after:transition-all after:duration-300 ${
                  pathname === "/about-us"
                    ? "text-[#FF8713] after:opacity-100"
                    : "text-white"
                }`}
            >
              About us
            </Link>
          </li>
          <li>
            <Link
              to="/faq"
              className={`relative transition-colors text-sm font-medium 
                after:content-[''] after:absolute after:left-0 after:top-full after:mt-9
                after:h-[4px] after:w-full after:bg-[#FF8713] after:opacity-0 
                after:transition-all after:duration-300 ${
                  pathname === "/faq"
                    ? "text-[#FF8713] after:opacity-100"
                    : "text-white"
                }`}
            >
              Faq
            </Link>
          </li>

          <li>
            <Link
              to="/kelly-blue-book"
              className={`relative transition-colors text-sm font-medium 
                after:content-[''] after:absolute after:left-0 after:top-full after:mt-9
                after:h-[4px] after:w-full after:bg-[#FF8713] after:opacity-0 
                after:transition-all after:duration-300 ${
                  pathname === "/kelly-blue-book"
                    ? "text-[#FF8713] after:opacity-100"
                    : "text-white"
                }`}
            >
              Kelley Blue Book
            </Link>
          </li>
          <li>
            <Link
              to="/media"
              className={`relative transition-colors text-sm font-medium 
                after:content-[''] after:absolute after:left-0 after:top-full after:mt-9
                after:h-[4px] after:w-full after:bg-[#FF8713] after:opacity-0 
                after:transition-all after:duration-300 ${
                  pathname === "/media"
                    ? "text-[#FF8713] after:opacity-100"
                    : "text-white"
                }`}
            >
              Media
            </Link>
          </li>
        </ul>
      </div>

      <div className="ml-auto hidden sm:flex mr-2 ">
        <button className="border-2 border-[#FF8713] text-xs w-[90px] text-white px-3 py-1 rounded hover:bg-orange-600 transition">
          Get Offer
        </button>
      </div>

      <div className="sm:mr-4 ml-auto sm:ml-0 mr-4 xl:pr-14">
        <button className="bg-orange-500 text-xs w-[90px] text-white px-3 py-1 rounded hover:bg-orange-600 transition ">
          Contact us
        </button>
      </div>
    </nav>
  );
}
export default Navbar;
