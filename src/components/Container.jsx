import React from "react";
import "../App.css";

const Container = ({ color }) => {
  return (
    <div className="container" style={{ backgroundColor: color }}>
      <h1>Container</h1>
    </div>
  );
};

export default Container;
