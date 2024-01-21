import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Sidebar from "./Sidebar";

function AppLayout() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="h-dvh w-full overflow-y-scroll">
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default AppLayout;
