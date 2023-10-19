import TicketsTableCell from "./TicketsTableCell";
import { tickets } from "./data";
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
} from "@mui/material";

const TicketsTableData = () => {
  return (
    <TableContainer
      component={Paper}
      sx={{ height: "calc(85vh - 65px)" }}
      className="tickets_table"
    >
      <Table stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell>Ticket Details</TableCell>
            <TableCell align="center">Customer Name</TableCell>
            <TableCell align="center">Date</TableCell>
            <TableCell align="center">Priority</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tickets.map((ticket, i) => (
            <TableRow key={i}>
              <TicketsTableCell ticket={ticket} />
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TicketsTableData;
