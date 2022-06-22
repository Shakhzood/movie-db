import React, { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";

import Home from "./Home";
import Movie from "./SingleMovie";

function App() {
  const [loading, setLoading] = useState(false);
  return (
    <Router>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route index path="/movies/:id" element={<Movie />} />
      </Routes>
    </Router>
  );
}

export default App;
