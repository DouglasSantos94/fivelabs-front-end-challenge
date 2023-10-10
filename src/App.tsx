import React from "react";

function App() {
  return (
    <>
      <header
        style={{
          width: "100%",
          height: "70px",
          padding: "0 20px",
          boxSizing: "border-box",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: "#3A3F44"
        }}
      >
        <h1 style={{ fontSize: "20px", fontWeight: "bold", color: "white" }}>Star Wars Vehicles</h1>
        <button style={{ backgroundColor: "#3A3F44", borderStyle: "none" }}>
          <img width="40px" height="38px" src="src/assets/img/cart.png" />
        </button>
      </header>
      <main style={{ width: "100%" }}></main>
    </>
  );
}

export default App;
