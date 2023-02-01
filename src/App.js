import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Chats from "./Chats";
import Preview from "./Preview";
import WebcamCapture from "./WebcamCapture";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<WebcamCapture />} />
        <Route path="/preview" element={<Preview />} />
        <Route path="/chats" element={<Chats />} />
      </Routes>
    </div>
  );
}

export default App;
