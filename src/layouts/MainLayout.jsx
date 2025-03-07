import { Outlet } from "react-router";
import Navbar from "../components/shared/Navbar";

const MainLayout = () => {
  return (
    <div className="min-h-screen bg-[#11071F] font-plus-jakarta-sans">
      {/* Navbar */}
      <nav className="bg-[#1A0B2E]">
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
