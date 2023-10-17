import { Outlet } from "react-router-dom";
import Sidebar from "../components/sidebar/Sidebar";

const AppLayout = () => {
  return (
    <div className="app_layout">
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default AppLayout;
