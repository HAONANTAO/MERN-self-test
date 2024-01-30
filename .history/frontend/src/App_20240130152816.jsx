import { useState, useEffect, useNavigate } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Home from "./pages/Home";
import Register from "./"
const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/" element={<Home />}></Route>
          <Route></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};
