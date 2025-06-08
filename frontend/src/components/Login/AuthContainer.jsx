// AuthContainer.jsx
import React, { useState } from "react";
import { assets } from "../../../assets/frontend_assets/assets";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import "./Login.css";

const AuthContainer = ({ setShowLogin }) => {
  const [currentState, setCurrentState] = useState("Login");

  return (
    <div className="login-popup">
      <div className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currentState}</h2>
          <img
            onClick={() => setShowLogin(false)}
            src={assets.cross_icon}
            alt="close"
          />
        </div>
        {currentState === "Login" ? (
          <LoginForm />
        ) : (
          <SignupForm />
        )}
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>
            By continuing, I agree to the terms of use & privacy policy.
          </p>
        </div>
        <p>
          {currentState === "Login" ? "Create Account?" : "Already have an account?"}{" "}
          <span
            onClick={() =>
              setCurrentState(currentState === "Login" ? "SignUp" : "Login")
            }
          >
            {currentState === "Login" ? "Signup here" : "Login here"}
          </span>
        </p>
      </div>
    </div>
  );
};

export default AuthContainer;
