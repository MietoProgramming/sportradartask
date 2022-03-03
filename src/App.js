import { useState, useEffect } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import MatchDetails from "./components/MatchDetails";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="match/:id" element={<MatchDetails />} />
      </Routes>
    </div>
  );
};

export default App;
