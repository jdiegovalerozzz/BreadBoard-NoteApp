import React from "react";
import "../styles/AuthCard.css";

const AuthCard = ({ title, children, footer }) => {
  return (
    <div className="auth-card">
      <h2>{title}</h2>
      {children}
      <div className="auth-footer">{footer}</div>
    </div>
  );
};

export default AuthCard;