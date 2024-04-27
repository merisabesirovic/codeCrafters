import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Landing from "./pages/Landing/Landing";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import Header from "./components/Header/Header";
import { Home } from "@mui/icons-material";
import HomePage from "./pages/Home/Home";

function App() {
  const location = useLocation();

  const isRootPath = location.pathname === "/";

  return (
    <div className="App">
      {isRootPath ? <Header /> : <Navbar />}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
