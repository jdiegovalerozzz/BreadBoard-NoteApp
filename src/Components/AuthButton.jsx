import React from "react";
import "../styles/AuthButton.css";

const AuthButton = ({ children, type = "button", onClick, disabled }) => {
  return (
    <button 
      className="auth-button" 
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default AuthButton;