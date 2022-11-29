import React from "react";
import SearchBar from "./SearchBar";
import EachRun from "./EachRun";
import Table from "@mui/material/Table";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";

function FindData({
  runs,
  sortRuns,
  sortBy,
  setSortBy,
  handleDeleteRun,
  handleFavoriteRun,
}) {
  const runList = runs.map((run) => (
    <EachRun
      key={run.id}
      run={run}
      handleDeleteRun={handleDeleteRun}
      handleFavoriteRun={handleFavoriteRun}
    />
  ));
  return (
    <div className="findDataPage">
      <SearchBar sortBy={sortBy} setSortBy={setSortBy} />
      <h1>Run Data</h1>
      <p>
        All data types are sorted by the lowest number first, including distance
        and total time.
      </p>
      <TableContainer sx={{ margin: 4 }} component={Paper}>
        <Table
          align="center"
          className="table"
          sx={{ maxWidth: 650 }}
          aria-label="simple table"
        >
          <TableHead>
            <TableRow>
              <TableCell>Date</TableCell>
              <TableCell>Average Pace</TableCell>
              <TableCell>Calories Burned</TableCell>
              <TableCell>Total Distance</TableCell>
              <TableCell>Fastest Split</TableCell>
              <TableCell>Total Time</TableCell>
              <TableCell>Average Heart Rate</TableCell>
              <TableCell>Favorite</TableCell>
              <TableCell>Delete Run</TableCell>
            </TableRow>
          </TableHead>
          {runList}
        </Table>
      </TableContainer>
    </div>
  );
}
export default FindData;
