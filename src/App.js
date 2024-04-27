import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Landing from "./pages/Landing/Landing";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import Header from "./components/Header/Header";

import HomePage from "./pages/Home/Home";
import Art from "./pages/Courses/Art";
import DMarket from "./pages/Courses/DMarket";
import Code from "./pages/Courses/Code";

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
        <Route path="/home/art" element={<Art></Art>} />
        <Route path="/home/coding" element={<Code></Code>} />
        <Route path="/home/digital-marketing" element={<DMarket></DMarket>} />
      </Routes>
    </div>
  );
}

export default App;
