import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./login/index.js";
import Exam from "./exam";
import Result from "./result";
import Nav from "./nav";
const log = 1;
const App = (log) => {
  return (
    <BrowserRouter>
      <div>
        <Nav />
        <div className="container">
          <Routes>
            <Route path="/" exact element={<Login />} />
            <Route path="/exam" element={<Exam />} />
            <Route path="/result" element={<Result />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
