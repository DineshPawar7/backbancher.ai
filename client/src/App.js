import React from "react";
import Header from "./Components/Header";
import Homepage from "./Components/Homepage";
import SummaryCard from "./Components/SummaryCard";
import Courses from "./Components/Courses";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom"; // Corrected import
import Register from "./pages/Register";
import Login from "./pages/Login";

function App() {
  return (
    <div>
      <BrowserRouter> {/* Corrected here */}
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>

      <div className="bg-color">
        <Header />
        <Homepage />
      </div>
      <SummaryCard />
      <Courses />
    </div>
  );
}

export default App;
