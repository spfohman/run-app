import React from "react";
import { NavLink } from "react-router-dom";
import { useHistory } from "react-router-dom";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

function NavBar({ logout }) {
  const history = useHistory();
  function handleLogout() {
    fetch("/api/logout", {
      method: "DELETE",
    }).then(() => {
      logout();
      history.push("/");
    });
  }
  return (
    <>
      <div className="navbar">
        <Box>
          <NavLink className="navlink" to="/Home">
            Home
          </NavLink>
          <NavLink className="navlink" to="/AddRun">
            Add A Run
          </NavLink>
          <NavLink className="navlink" to="/FindData">
            Find Data
          </NavLink>
          <br />
          <Button onClick={handleLogout}>Logout</Button>
        </Box>
      </div>
    </>
  );
}
export default NavBar;
