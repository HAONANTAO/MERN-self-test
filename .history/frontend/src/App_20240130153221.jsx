import { useState, useEffect, useNavigate } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Home from "./pages/Home";
import Register from "./pages/Register";
export const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            Home
          </Route>
          <Route path="/auth" element={<Register />}>
            Auth
          </Route>
          <Route></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};