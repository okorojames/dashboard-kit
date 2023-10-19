import { FaFilter } from "react-icons/fa";
import { BsSortUp } from "react-icons/bs";

const TicketsTableHeader = () => {
  return (
    <div className="flex justify-between items-center px-4 py-6">
      <p className="font-bold text-2xl">All Tcikets</p>
      <div className="flex justify-between items-center gap-12">
        <p className="flex items-center justify-between gap-4 transition duration-500 cursor-pointer hover:text-blue-700">
          <BsSortUp />
          <span>Sort</span>
        </p>
        <p className="flex items-center justify-between gap-4 transition duration-500 cursor-pointer hover:text-blue-700">
          <FaFilter />
          <span>Filter</span>
        </p>
      </div>
    </div>
  );
};

export default TicketsTableHeader;
