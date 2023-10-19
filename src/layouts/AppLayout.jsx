import { Outlet } from "react-router-dom";
import Sidebar from "../components/sidebar/Sidebar";
import { GetToTop } from "../components/ToTop";

const AppLayout = () => {
  return (
    <>
      <GetToTop />
      <div className="app_layout relative grid grid-cols-1 lg:grid-cols-appCols items-stretch">
        <Sidebar />
        <div className="main_pages w-full">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default AppLayout;
