import React from "react";
import HomePage from "./components/HomePage";
import Background from "./images/Background.svg";

function App() {
  return (
    <div
      style={{
        backgroundImage: `url(${Background})`,
        backgroundSize: "cover",
        height: "100vh",
      }}
    >
      <HomePage />
    </div>
  );
}

export default App;
