import Navbar from "../../components/navbar/Navbar";
import TicketsTableData from "../../components/TicketsTableData";
import TicketsTableHeader from "../../components/TicketsTableHeader";

const Tickets = () => {
  //
  return (
    <>
      <Navbar />
      <div className="px-8">
        <div className="all_tickets text-slate-600 rounded-lg shadow-shadow_one mb-12">
          <TicketsTableHeader />
          <TicketsTableData />
        </div>
      </div>
    </>
  );
};

export default Tickets;
