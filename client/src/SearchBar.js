import React from "react";
import Box from "@mui/material/Box";

function SearchBar({ setSortBy }) {
  return (
    <Box
      display="flex"
      width={500}
      height={80}
      alignItems="center"
      justifyContent="center"
      sx={{ minWidth: 120 }}
    >
      <strong>Sort by:</strong>
      <br></br>
      <select onChange={(e) => setSortBy(e.target.value)}>
        <option value="distance">Distance</option>
        <option value="fastest_split">Fastest Split</option>
        <option value="total_time">Total Time</option>
        <option value="average_pace">Average Pace</option>
      </select>
      <br />
    </Box>
  );
}

export default SearchBar;
