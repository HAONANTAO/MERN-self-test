import { useState, useEffect, useNavigate } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Home from "./pages/Home";
import Register from "./pages/Register";
import { Navbar } from "./components/Navbar";
import { Login } from "./pages/Login";
export const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/auth" element={<Register />}></Route>
          <Route path="/login" element={<Register />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};
