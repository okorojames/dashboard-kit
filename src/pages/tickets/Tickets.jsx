import { useContext } from "react";
import Navbar from "../../components/navbar/Navbar";
import TicketsTableData from "../../components/TicketsTableData";
import TicketsTableHeader from "../../components/TicketsTableHeader";
import { Theme } from "../../contexts/ThemeContext";

const Tickets = () => {
  const { theme } = useContext(Theme);
  //
  return (
    <>
      <Navbar />
      <div className="px-8">
        <div
          className={`all_tickets ${
            theme === "dark" ? "text-slate-50" : "text-slate-600"
          } rounded-lg shadow-shadow_one mb-12`}
        >
          <TicketsTableHeader />
          <TicketsTableData />
        </div>
      </div>
    </>
  );
};

export default Tickets;
