import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import AddRun from "./AddRun";
import FindData from "./FindData";
import Home from "./Home";
import { Route } from "react-router-dom";
function UserHome({ user, logout }) {
  const [runs, setRuns] = useState([]);
  const [sortBy, setSortBy] = useState("fastest_split");

  useEffect(() => {
    fetch("/api/runs")
      .then((response) => response.json())
      .then((data) => {
        setRuns(data);
      });
  }, []);
  useEffect(() => {
    const sorted = [...runs].sort((run1, run2) => {
      if (run1[sortBy] > run2[sortBy]) {
        return 1;
      } else if (run1[sortBy] < run2[sortBy]) {
        return -1;
      }
      return 0;
    });

    setRuns(sorted);
  }, [sortBy]);

  function addRuns(newRun) {
    const updatedRuns = [...runs, newRun];
    setRuns(updatedRuns);
  }

  function handleDeleteRun(deletedRun) {
    const runToUpdate = runs.filter((run) => {
      return run.id !== deletedRun;
    });
    setRuns(runToUpdate);
  }
  function handleFavoriteRun(favoriteRun) {
    const runToUpdate = runs.map((run) => {
      if (run.id === favoriteRun.id) {
        return favoriteRun;
      } else {
        return run;
      }
    });
    setRuns(runToUpdate);
  }

  return (
    <div>
      <NavBar logout={logout} />
      <Route path="/Home">
        <Home user={user} runs={runs} />
      </Route>
      <Route path="/AddRun">
        <AddRun addRuns={addRuns} />
      </Route>
      <Route path="/FindData">
        <FindData
          runs={runs}
          sortBy={sortBy}
          setSortBy={setSortBy}
          handleDeleteRun={handleDeleteRun}
          handleFavoriteRun={handleFavoriteRun}
        />
      </Route>
    </div>
  );
}
export default UserHome;
