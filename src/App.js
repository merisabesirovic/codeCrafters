import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Landing from "./pages/Landing/Landing";
import Register from "./pages/Register/Register";
import Header from "./pages/Header/Header";
import HomePage from "./pages/Home/Home";
import Art from "./pages/Courses/Art";


function App() {
  const location = useLocation(); // Get the current location

  // Check if the current path is "/"
  const isRootPath = location.pathname === "/";

  return (
    <div className="App">
      
      <Art/>
    </div>
  );
}

export default App;
