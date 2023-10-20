import { useRef } from "react";
import { HiMiniBars3BottomLeft } from "react-icons/hi2";
import { LuSearch } from "react-icons/lu";
import { IoNotifications } from "react-icons/io5";
import userImg from "../../assets/images/header.png";
import { useLocation } from "react-router-dom";
import { useContext } from "react";
import { NavContext } from "../../contexts/ToggleNavContext";
import { useEffect } from "react";
import { useState } from "react";
import { LiaTimesSolid } from "react-icons/lia";
import { Theme } from "../../contexts/ThemeContext";
import { FaSun } from "react-icons/fa";
import { BsMoonStarsFill } from "react-icons/bs";

//
const Navbar = () => {
  const [mobileSearch, setMobileSearch] = useState(false);
  //
  const mobileSearchShow = () => {
    if (window.innerWidth < 767) {
      setMobileSearch(true);
    } else {
      setMobileSearch(false);
    }
  };
  useEffect(() => {
    mobileSearchShow();
    window.addEventListener("resize", mobileSearchShow);
  }, []);

  //
  const nav_form_input = useRef();
  const mobile_search_box = useRef();

  const { pathname } = useLocation();

  const title = pathname.split("/")[1];
  //

  const showInput = () => {
    nav_form_input.current.classList.toggle("showInput");
  };

  //
  const show_mobile_search_box = () => {
    mobile_search_box.current.classList.toggle("show_mobile_search_box");
  };

  //
  const { show_side_nav } = useContext(NavContext);
  const { theme, toggleTheme } = useContext(Theme);

  //
  return (
    <nav
      className={`py-5 px-8 ${
        theme === "dark" ? "text-slate-50" : "text-slate-600"
      } flex justify-between items-center mb-12`}
    >
      <div className="flex items-center justify-start gap-12">
        <HiMiniBars3BottomLeft
          className="block lg:hidden"
          onClick={show_side_nav}
        />
        <p className="font-medium text-3xl capitalize">{title}</p>
      </div>
      {/*  */}
      <div className="flex items-center justify-between gap-8">
        {mobileSearch ? (
          <>
            <LuSearch
              className={` ${
                theme === "dark" ? "text-slate-50" : "text-slate-400"
              }`}
              onClick={show_mobile_search_box}
            />
            <div
              className="mobile_search_box fixed top-0 left-0 right-0 bottom-0 z-40 bg-greyThree backdrop-blur-sm"
              ref={mobile_search_box}
            >
              <form className="nav_mobile_form flex gap-2 items-center absolute w-1/2 bg-slate-50 pr-4 rounded-md">
                <input
                  type="text"
                  placeholder="search..."
                  className="border-0 outline-none w-full text-slate-400 py-4 px-3 rounded-tl-md rounded-bl-md"
                />
                <LuSearch className=" text-slate-500" />
              </form>
              <LiaTimesSolid
                className={`text-slate-50 text-5xl absolute top-20 right-20`}
                onClick={show_mobile_search_box}
              />
            </div>
          </>
        ) : (
          <form
            className="nav_form flex items-center"
            ref={nav_form_input}
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="text"
              placeholder="search..."
              className={`nav_form_input border-0 outline-none ${
                theme === "dark" ? "text-slate-50" : "text-slate-500"
              }`}
            />
            <LuSearch
              className={` ${
                theme === "dark" ? "text-slate-50" : "text-slate-400"
              }`}
              onClick={showInput}
            />
          </form>
        )}
        {theme === "light" ? (
          <BsMoonStarsFill className="text-3xl" onClick={toggleTheme} />
        ) : (
          <FaSun className="text-3xl" onClick={toggleTheme} />
        )}
        {/*  */}
        <div className="text-slate-400 relative">
          <div className="w- bg-blue-500 rounded-full h-4 w-4 top-0 right-0 border-2 border-slate-50 absolute"></div>
          <IoNotifications
            className={`${
              theme === "dark" ? "text-slate-50" : "text-slate-700"
            }`}
          />
        </div>
        {/*  */}
        <div className="flex items-center gap-2">
          <span className="font-medium hidden md:block">Jones Ferdinand</span>
          <span className="overflow-hidden rounded-full">
            <img src={userImg} alt="user image" />
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
