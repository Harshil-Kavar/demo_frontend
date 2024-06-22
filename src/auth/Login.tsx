import React, { useEffect, useState } from "react";
import { FaEye, FaEyeSlash, FaFacebookSquare } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { IoCheckmarkSharp } from "react-icons/io5";
import { LoginUser } from "../models/UserModels";
import { validateUserCredential } from "./../utils/validator";
import apiAgent from "./../api/apiAgent";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [state, setState] = useState<LoginUser>({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const apis = apiAgent();
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setState({
      ...state,
      [name]: value,
    });
  };
  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const dataValidation: boolean = validateUserCredential(state);
    if (dataValidation) {
      try {
        const response = await apis.login(state);
        if (response.data.token) {
          sessionStorage.setItem("token", response.data.token);
          
        }
        toast.info(response.data.message);
        navigate("/");
      } catch (err: any) {
        toast.error(
          err.response.data.message || "Something Went Wrong, Please Try Again"
        );
      }
    } else {
      toast.warn("Please enter valid data");
    }
  };


  useEffect(() => {
    const token = sessionStorage.getItem("token");
    if (token) {
      navigate("/");
    }
  }, []);
  return (
    <>
      <ToastContainer />
      <div className="login_page mt-5">
        <div className="d-flex justify-content-center mb-4">
          <img src="./images/workex.svg" alt="logo" />
        </div>
        <div className="d-flex flex-wrap-reverse justify-content-center align-items-center">
          <div className="register_form bg-light p-sm-4 p-4 border-redius-20 shadow">
            <div className="mt-3 mb-5">
              <h3 className="text-start">New to Workex</h3>
            </div>
            <div className="mb-2 w-90 d-flex">
              <IoCheckmarkSharp className="check-icon color-main mx-2" />
              <p className="d-inline-block">
                One click apply using Workex profile
              </p>
            </div>
            <div className="mb-2 w-90 d-flex">
              <IoCheckmarkSharp className="check-icon color-main mx-2" />
              <p className="d-inline-block">Get relevent job recommendations</p>
            </div>
            <div className="mb-2 w-90 d-flex">
              <IoCheckmarkSharp className="check-icon color-main mx-2" />
              <p className="d-inline-block">
                Showcase profile to top companies and Counsults
              </p>
            </div>
            <div className="mb-4 w-90 d-flex">
              <IoCheckmarkSharp className="check-icon color-main mx-2" />
              <p className="d-inline-block">
                Know application status on applied jobs
              </p>
            </div>
            <div className="mb-4">
              <button
                type="button"
                className="btn bg-main text-white border-redius-40"
              >
                Register for free
              </button>
            </div>
          </div>
          <div className="login_form bg-light px-sm-3 py-sm-5 p-2 border-redius-20 shadow">
            <form onSubmit={submitHandler}>
              <div className="mt-3 mb-5">
                <h3 className="text-center">Login to your account</h3>
              </div>
              <div className="mb-4">
                <input
                  type="email"
                  className="form-control bg-praimary border-redius-20 px-3"
                  placeholder="Email"
                  name="email"
                  value={state.email}
                  onChange={handleInputChange}
                />
              </div>
              <div className="mb-4 position-relative">
                <input
                  type={showPassword ? "text" : "password"}
                  className="form-control bg-praimary border-redius-20 px-3"
                  placeholder="Enter Your Password"
                  name="password"
                  value={state.password}
                  onChange={handleInputChange}
                />
                {showPassword ? (
                  <FaEyeSlash
                    className="password_toggle_icon"
                    onClick={() => {
                      setShowPassword(!showPassword);
                    }}
                  />
                ) : (
                  <FaEye
                    className="password_toggle_icon"
                    onClick={() => {
                      setShowPassword(!showPassword);
                    }}
                  />
                )}
              </div>
              <div className="mb-4">
                <button
                  type="submit"
                  className="btn w-100 bg-main text-white border-redius-20"
                >
                  Continue
                </button>
              </div>
              <div className="mb-3">
                <p className="text-center"> OR </p>
              </div>
              <div className="mb-3 cursor-pointer text-center">
                <FcGoogle className="icon-size" />
                <p className="text-center d-inline-block mx-2">
                  {" "}
                  Continue with Google{" "}
                </p>
              </div>
              <div className="mb-5 cursor-pointer text-center">
                <FaFacebookSquare className="icon-size" />
                <p className="text-center d-inline-block mx-2">
                  {" "}
                  Continue with Facebook{" "}
                </p>
              </div>
              <div className="mb-2">
                <p className="text-center">
                  {" "}
                  <a href="#" className="color-main text-decoration-none">
                    Can't Login?
                  </a>{" "}
                  <span className="bg-main d-inline-block dot mx-2"></span>{" "}
                  <a href="#" className="color-main text-decoration-none">
                    Sign up for new user?
                  </a>{" "}
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
