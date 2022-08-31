import React from "react";

export default function Header() {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "20px",
        background: "linear-gradient(90deg, #672280 1.18%, #A626D3 100%)",
        color: "white",
      }}
    >
      <div style={{
        display: "flex",
        height: "27px",
      }}>
        <img
          style={{
            width: "31.31px",
            height: "100%",
            marginRight: "6px",
          }}
          src="header-logo.png"
        /> &nbsp;
        <h2>Meme Generator</h2>
      </div>
      <p>React Course - Project 3</p>
    </nav>
  );
}
