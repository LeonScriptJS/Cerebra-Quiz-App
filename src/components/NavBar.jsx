import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <header className="flex items-center justify-between px-3 py-2">
      <div className="logo">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#EFE7E7"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-brain-icon lucide-brain"
        >
          <path d="M12 18V5" />
          <path d="M15 13a4.17 4.17 0 0 1-3-4 4.17 4.17 0 0 1-3 4" />
          <path d="M17.598 6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5" />
          <path d="M17.997 5.125a4 4 0 0 1 2.526 5.77" />
          <path d="M18 18a4 4 0 0 0 2-7.464" />
          <path d="M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517" />
          <path d="M6 18a4 4 0 0 1-2-7.464" />
          <path d="M6.003 5.125a4 4 0 0 0-2.526 5.77" />
        </svg>
      </div>

      <div className="navBar">
        <nav>
          <ul className="navBar flex space-x-6">
            <li className=" transition-all duration-300 ease-in-out hover:-translate-y-1 hover:text-yellow-500 hover:scale-105">
              <Link to={"/"}>Home</Link>
            </li>
            <li className="transition-all duration-300 ease-in-out hover:-translate-y-1 hover:text-yellow-500 hover:scale-105">
              <Link to={"/about"}>About Us</Link>
            </li>
            <li className=" transition-all duration-300 ease-in-out hover:-translate-y-1 hover:text-yellow-500 hover:scale-105">
              <Link to={"/contact"}>Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
