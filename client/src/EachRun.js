import React from "react";
import DeleteButton from "./DeleteButton";
import moment from "moment";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
// import StarBorderIcon from "@mui/icons-material/StarBorder";
// import { yellow } from "@mui/material/colors";

function EachRun({ run, handleDeleteRun, handleFavoriteRun }) {
  function favoriteRun() {
    fetch(`/api/runs/${run.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ favorite: !run.favorite }),
    })
      .then((response) => response.json())
      .then((updatedRun) => handleFavoriteRun(updatedRun));
  }

  return (
    <>
      <TableBody>
        <TableRow>
          <TableCell>{moment(run.date).format("MM/DD/YYYY")}</TableCell>
          <TableCell>{run.average_pace}</TableCell>
          <TableCell>{run.calories}</TableCell>
          <TableCell>{run.distance}</TableCell>
          <TableCell>{run.fastest_split}</TableCell>
          <TableCell>{run.total_time}</TableCell>
          <TableCell>{run.average_heartrate}</TableCell>
          <TableCell onClick={favoriteRun}>
            {run.favorite ? `⭐` : "☆ "}
          </TableCell>
          <TableCell>
            <DeleteButton handleDeleteRun={handleDeleteRun} run={run} />
          </TableCell>
        </TableRow>
      </TableBody>
    </>
  );
}
export default EachRun;
