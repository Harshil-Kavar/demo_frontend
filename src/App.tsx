import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/App.css";
import Login from "./auth/Login";
import Home from "./pages/Home";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="*"
            element={
              <h1 className="color-main text-center mt-5">
                ! Opps Page Not Found 404{" "}
                <a href="/" className="color-main mx-2">
                  Click to go back
                </a>
              </h1>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
