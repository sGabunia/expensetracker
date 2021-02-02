import React from "react";
import "./TrackerHeader.css";

const TrackerHeader = ({ balance }) => {
  return (
    <>
      <h2>Tolal Balance</h2>
      <span>{balance}</span>
    </>
  );
};

export default TrackerHeader;
