import { TableCell } from "@mui/material";
import { PiDotsThreeOutlineVerticalThin } from "react-icons/pi";
import { MdDelete } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import { useRef } from "react";

const TicketsTableCell = ({ ticket }) => {
  const tickets_data_menu = useRef();
  //
  const show_ticket_data_menu = () => {
    tickets_data_menu.current.classList.toggle("show_ticket_data_menu");
  };
  //
  return (
    <>
      <TableCell>
        <div className="flex items-center gap-4 text-slate-600">
          <div className="overflow-hidden rounded-full w-witTwo">
            <img src={ticket.img} alt="" className="w-full" />
          </div>
          <div>
            <h3 className=" font-medium text-2xl">{ticket.desc}</h3>
            <p className=" font-medium text-lg">Updated {ticket.updated}</p>
          </div>
        </div>
      </TableCell>
      <TableCell align="center">
        <div className="text-slate-600 flex flex-col">
          <h3 className="text-2xl font-medium">{ticket.name}</h3>
          <p className="font-medium text-lg text-slate-400">{ticket.date}</p>
        </div>
      </TableCell>
      <TableCell align="center">
        <div className="text-slate-600 flex flex-col">
          <h3 className="text-2xl font-medium">{ticket.date}</h3>
          <p className="font-medium text-lg text-slate-400">{ticket.time}</p>
        </div>
      </TableCell>
      <TableCell align="center">
        <div
          className={`font-medium text-2xl text-slate-50 py-2 px-4 rounded-3xl ${
            ticket.priority === "High"
              ? "bg-red-400"
              : ticket.priority === "Low"
              ? "bg-yellow-300"
              : "bg-green-500"
          }`}
        >
          {ticket.priority}
        </div>
      </TableCell>
      <TableCell align="center">
        <div className="relative">
          <PiDotsThreeOutlineVerticalThin
            onClick={show_ticket_data_menu}
            className="text-4xl text-slate-500 font-medium cursor-pointer hover:text-red-400 transition ease-in-out duration-300"
          />
          <div
            className="tickets_data_menu absolute flex flex-col gap-6 bg-slate-50 py-6 px-8 rounded-lg shadow-shadow_one"
            ref={tickets_data_menu}
          >
            <p className="flex justify-between items-center gap-3 text-lg cursor-pointer">
              {" "}
              Edit <FiEdit />
            </p>
            <p className="flex justify-between items-center gap-3 text-red-500 text-lg cursor-pointer">
              Delete <MdDelete />
            </p>
          </div>
        </div>
      </TableCell>
    </>
  );
};

export default TicketsTableCell;
