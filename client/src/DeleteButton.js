import React from "react";

function DeleteButton({ handleDeleteRun, run }) {
  function deleteRun() {
    fetch(`/api/runs/${run.id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });
    handleDeleteRun(run.id);
  }
  return (
    <button className="deleteRunButton" onClick={deleteRun}>
      ✖{" "}
    </button>
  );
}
export default DeleteButton;
