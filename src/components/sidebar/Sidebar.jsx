import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo1.png";
import { NavLink } from "react-router-dom";
import {
  FaChartPie,
  FaTicket,
  FaLightbulb,
  FaUserTie,
  FaAward,
} from "react-icons/fa6";
import { LiaBookSolid } from "react-icons/lia";
import { IoIosPeople } from "react-icons/io";
import { FiSettings } from "react-icons/fi";
import { useContext } from "react";
import { NavContext } from "../../contexts/ToggleNavContext";
import { useEffect } from "react";

const Sidebar = () => {
  //
  const sidebar_link = document.querySelectorAll(".side_bar_link");
  //
  const checkWindow = () => {
    if (window.innerWidth > 1024) {
      side_bar.current.classList.remove("show_side_bar");
      side_bar_overlay.current.classList.remove("show_side_bar_overlay");
    }
  };
  useEffect(() => {
    checkWindow();
    window.addEventListener("resize", checkWindow);
    //
    sidebar_link.forEach((link) => {
      link.addEventListener("click", () => {
        side_bar.current.classList.remove("show_side_bar");
        side_bar_overlay.current.classList.remove("show_side_bar_overlay");
      });
    });

    return () => {
      window.removeEventListener("resize", checkWindow);
    };
    //
  }, []);
  //
  const { side_bar, side_bar_overlay, close_side_nav } = useContext(NavContext);
  //
  return (
    <>
      <div
        className="sidebar_cont bg-darkOne text-slate-50 pt-8 flex flex-col gap-10 pb-5 fixed top-0 lg:relative w-sidebarOne"
        ref={side_bar}
      >
        <Link
          to="/"
          className="side_bar_link nav_logo flex px-6 items-center gap-8 w-full text-slate-400 transition duration-250 hover:text-slate-50"
        >
          <img src={Logo} alt="nav_logo" className=" w-12" />
          <p>Dashboard Kit</p>
        </Link>
        {/* sidebar links */}
        <div className="sidebar_links flex flex-col gap-6 border-b-2 border-b-gray-600 pb-16">
          <NavLink
            to="/overview"
            className="side_bar_link transition-all duration-300 flex items-center gap-6 text-slate-400 w-full hover:text-slate-50 hover:bg-greyOne py-4 px-8"
          >
            <FaChartPie />
            <p>Overview</p>
          </NavLink>
          <NavLink
            to="/tickets"
            className="side_bar_link transition-all duration-300 flex items-center gap-6 text-slate-400 w-full hover:text-slate-50 hover:bg-greyOne py-4 px-8"
          >
            <FaTicket />
            <p>Tickets</p>
          </NavLink>
          <NavLink
            to="/ideas"
            className="side_bar_link transition-all duration-300 flex items-center gap-6 text-slate-400 w-full hover:text-slate-50 hover:bg-greyOne py-4 px-8"
          >
            <FaLightbulb />
            <p>Ideas</p>
          </NavLink>
          <NavLink
            to="/contacts"
            className="side_bar_link transition-all duration-300 flex items-center gap-6 text-slate-400 w-full hover:text-slate-50 hover:bg-greyOne py-4 px-8"
          >
            <IoIosPeople />
            <p>Contacts</p>
          </NavLink>
          <NavLink
            to="/agents"
            className=" transition-all duration-300 flex items-center gap-6 text-slate-400 w-full hover:text-slate-50 hover:bg-greyOne py-4 px-8"
          >
            <FaUserTie />
            <p>Agents</p>
          </NavLink>
          <NavLink
            to="/articles"
            className="side_bar_link transition-all duration-300 flex items-center gap-6 text-slate-400 w-full hover:text-slate-50 hover:bg-greyOne py-4 px-8"
          >
            <LiaBookSolid />
            <p>Articles</p>
          </NavLink>
        </div>
        <NavLink
          to="/settings"
          className="side_bar_link transition-all duration-300 flex items-center gap-6 text-slate-400 w-full hover:text-slate-50 hover:bg-greyOne py-4 px-8"
        >
          <FiSettings />
          <p>Settings</p>
        </NavLink>
        <NavLink
          to="/subscription"
          className="side_bar_link transition-all duration-300 flex items-center gap-6 text-slate-400 w-full hover:text-slate-50 hover:bg-greyOne py-4 px-8"
        >
          <FaAward />
          <p>Subscription</p>
        </NavLink>
      </div>
      <div
        className="sidebar_over_lay fixed top-0 left-0 bottom-0 right-0 "
        onClick={close_side_nav}
        ref={side_bar_overlay}
      ></div>
    </>
  );
};

export default Sidebar;
