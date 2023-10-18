import { Outlet } from "react-router-dom";
import Sidebar from "../components/sidebar/Sidebar";

const AppLayout = () => {
  return (
    <div className="app_layout">
      <Sidebar />
      <div className="main_pages">
        <Outlet />
      </div>
    </div>
  );
};

export default AppLayout;
