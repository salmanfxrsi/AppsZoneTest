import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <div className="min-h-screen bg-[#11071F]">
      {/* Navbar */}
      <nav></nav>

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