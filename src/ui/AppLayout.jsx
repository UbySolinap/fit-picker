import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Sidebar from "./SideBar";

function AppLayout() {
  return (
    <div className="flex">
      <Sidebar/>
      <div className="w-screen mx-auto">
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
