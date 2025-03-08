import { NavLink } from "react-router";
import logo from "/logo.svg";

const Navbar = () => {
  const navigationMenu = (
    <>
      <NavLink to="/" className="hover:text-gray-300" aria-label="Home">
        Home
      </NavLink>
      <a
        href="#projects"
        className="hover:text-gray-300"
        aria-label="Products"
      >
        Products
      </a>
      <a
        href="#skills"
        className="hover:text-gray-300"
        aria-label="Support"
      >
        Support
      </a>
      <a href="#hero" className="hover:text-gray-300" aria-label="About">
        About
      </a>
      <a
        href="#contact"
        className="hover:text-gray-300"
        aria-label="Contact"
      >
        Contact
      </a>
    </>
  );

  return (
    <header className="w-11/12 lg:w-7/12 mx-auto flex flex-col items-center justify-between gap-2 py-5 md:flex-row md:gap-0">
      {/* Logo Section */}
      <div className="h-10 w-10">
        <img
          src={logo}
          alt="Company Logo"
          className="w-full h-full object-contain"
        />
      </div>

      {/* Navigation Menu */}
      <nav className="flex flex-wrap items-center justify-center gap-6 text-xl font-semibold text-white md:gap-10">
        {navigationMenu}
      </nav>
    </header>
  );
};

export default Navbar;
