import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.clear();
    navigate("/login");
  };

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    if (!token) {
      navigate("/login");
    }
  }, []);
  return (
    <div className="mt-5 text-center">
      <div className="d-flex justify-content-center mb-4">
        <img src="./images/workex.svg" alt="logo" />
      </div>
      <h1 className="text-success my-5 text-center d-inline-block">Welcome</h1>
      <a href="#" onClick={handleLogout} className="color-main mx-2">
        Click to logout
      </a>
    </div>
  );
};

export default Home;
