import { NavLink } from "react-router";
import logo from "/logo.svg";

const Navbar = () => {
  const navigationMenu = (
    <>
      <NavLink to="/" className="hover:text-gray-300" aria-label="Home">
        Home
      </NavLink>
      <NavLink
        to="products"
        className="hover:text-gray-300"
        aria-label="Products"
      >
        Products
      </NavLink>
      <NavLink
        to="support"
        className="hover:text-gray-300"
        aria-label="Support"
      >
        Support
      </NavLink>
      <NavLink to="about" className="hover:text-gray-300" aria-label="About">
        About
      </NavLink>
      <NavLink
        to="contact"
        className="hover:text-gray-300"
        aria-label="Contact"
      >
        Contact
      </NavLink>
    </>
  );

  return (
    <header className="container mx-auto flex flex-col items-center justify-between gap-2 py-5 md:flex-row md:gap-0">
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
