import { useRef } from "react";
import { HiMiniBars3BottomLeft } from "react-icons/hi2";
import { LuSearch } from "react-icons/lu";
import { IoNotifications } from "react-icons/io5";
import userImg from "../../assets/images/header.png";

//
const Navbar = () => {
  //
  const nav_form_input = useRef();
  //

  const showInput = () => {
    nav_form_input.current.classList.toggle("showInput");
  };

  //
  return (
    <nav className="py-5 px-8 text-slate-600 flex justify-between items-center mb-12">
      <div className="flex items-center justify-start gap-12">
        <HiMiniBars3BottomLeft className="block lg:hidden" />
        <p className=" font-bold font-medium text-3xl">Overview</p>
      </div>
      {/*  */}
      <div className="flex items-center justify-between gap-8">
        <form className="nav_form flex items-center" ref={nav_form_input}>
          <input
            type="text"
            placeholder="search..."
            className="nav_form_input border-0 outline-none text-slate-400"
          />
          <LuSearch className=" text-slate-400" onClick={showInput} />
        </form>
        {/*  */}
        <div className="text-slate-400 relative">
          <div className="w- bg-blue-500 rounded-full h-4 w-4 top-0 right-0 border-2 border-slate-50 absolute"></div>
          <IoNotifications />
        </div>
        {/*  */}
        <div className="flex items-center gap-2">
          <span className="font-medium">Jones Ferdinand</span>
          <span className="overflow-hidden rounded-full">
            <img src={userImg} alt="user image" />
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
