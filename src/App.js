import React from "react";
import { Routes } from "react-router-dom";
import "./App.css";
import WebcamCapture from "./WebcamCapture";

function App() {
  return (
    <div className="app">
      <Routes>
        <WebcamCapture path="/" />
      </Routes>
    </div>
  );
}

export default App;
