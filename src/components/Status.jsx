import React from "react";

const Status = ({ i }) => {
  const statusClasses = [
    "status",
    i === 1 ? "green" : i === 2 ? "yellow" : "red",
  ].join(" ");
  const statusText =
    i === 1 ? "Optimized" : i === 2 ? "Incomplete" : "Disconnected";

  return (
    <div className={`status-container background-${statusClasses}`}>
      <div className={`status-dot ${statusClasses}`}></div>
      <p className={`status-text text-${statusClasses}`}>{statusText}</p>
    </div>
  );
};

export default Status;
