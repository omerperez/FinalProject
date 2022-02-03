import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export default function History() {

const [messagesHistory, setMessagesHistory] = React.useState([]);

   React.useEffect(() => {
     fetch("http://localhost:8080/message/screenHistory")
       .then((response) => response.json())
       .then((data) => setMessagesHistory(data));
   }, []);

   if (messagesHistory.length <= 0) return "";
    
  return (
    <div style={{ paddingRight: "15%", paddingLeft: "15%", margin: "2%" }}>
      <h1 style={{ textAlign: "center", marginBottom: "40px" }}>
        History Page
      </h1>
      <TableContainer component={Paper}>
        <Table
          sx={{ minWidth: 650 }}
          aria-label="simple table"
          style={{ border: "2px solid black" }}
        >
          <TableHead style={{ background: "#3f50p5" }}>
            <TableRow>
              <TableCell
                align="center"
                style={{ fontSize: "24px", color: "white" }}
              >
                Screen Number
              </TableCell>
              <TableCell
                align="center"
                style={{ fontSize: "24px", color: "white" }}
              >
                Time
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {messagesHistory.map((message) => (
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" align="center" scope="row">
                  {message.screens}
                </TableCell>
                <TableCell align="center">
                  <b>Date:</b>
                  {" " +
                    message.time.substring(8, 10) +
                    "/" +
                    message.time.substring(5, 7) +
                    "/" +
                    message.time.substring(0, 4)}
                  <br />
                  <b>Time:</b>
                  {" " +
                    (parseInt(message.time.substring(11, 13)) + 2) +
                    message.time.substring(13, 19)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
