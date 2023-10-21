import { FaFilter } from "react-icons/fa";
import { BsSortUp } from "react-icons/bs";
import { useContext } from "react";
import { Theme } from "../contexts/ThemeContext";

const TicketsTableHeader = () => {
  const { theme } = useContext(Theme);
  //
  return (
    <div
      className={`${
        theme === "dark" && "bg-greyFour"
      } flex justify-between items-center px-4 py-6 rounded-tl-2xl rounded-tr-2xl`}
    >
      <p className="font-bold text-2xl">All Tickets</p>
      <div className="flex justify-between items-center gap-12">
        <p
          className={`flex items-center justify-between gap-4 transition duration-500 cursor-pointer ${
            theme === "dark" ? "hover:text-blue-400" : "hover:text-blue-700"
          }`}
        >
          <BsSortUp />
          <span>Sort</span>
        </p>
        <p
          className={`flex items-center justify-between gap-4 transition duration-500 cursor-pointer ${
            theme === "dark" ? "hover:text-blue-400" : "hover:text-blue-700"
          }`}
        >
          <FaFilter />
          <span>Filter</span>
        </p>
      </div>
    </div>
  );
};

export default TicketsTableHeader;
