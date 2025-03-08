import { Outlet } from "react-router";
import Navbar from "../components/shared/Navbar";

const MainLayout = () => {
  return (
    <div className="min-h-screen bg-[#11071F] font-preahvihear text-white">
      {/* Navbar */}
      <nav className="bg-[#1A0B2E] font-plus-jakarta-sans">
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
