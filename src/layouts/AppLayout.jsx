import { Outlet } from "react-router-dom";
import Sidebar from "../components/sidebar/Sidebar";
import { GetToTop } from "../components/ToTop";
import { useContext } from "react";
import { Theme } from "../contexts/ThemeContext";

const AppLayout = () => {
  //
  const { theme } = useContext(Theme);
  //
  return (
    <>
      <GetToTop />
      <div
        id={theme}
        className="app_layout relative grid grid-cols-1 lg:grid-cols-appCols items-start"
      >
        <Sidebar />
        <div className="main_pages w-full">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default AppLayout;
