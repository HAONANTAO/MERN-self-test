import { useState, useEffect, useNavigate } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/"></Route>
          <Route></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};
