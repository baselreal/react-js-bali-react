import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./component/home";
import About from "./component/about";
import Reservation from "./component/reservation";
import "./component/home/home.css";
import "./component/about/about.css";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/reservation" element={<Reservation />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
