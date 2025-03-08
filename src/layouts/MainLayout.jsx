import { Outlet } from "react-router";
import Navbar from "../components/shared/Navbar";

const MainLayout = () => {
  return (
    <div className="min-h-screen font-preahvihear text-white">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-[#1A0B2E] font-plus-jakarta-sans z-50">
        <Navbar />
      </nav>

      {/* Main Content */}
      <main>
        <Outlet />
      </main>

      {/* Footer */}
      <footer></footer>
    </div>
  );
};

export default MainLayout;
