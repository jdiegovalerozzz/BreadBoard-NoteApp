import React from "react";
import "../styles/InputField.css"; 

const InputField = ({ label, type, placeholder, id, value, onChange, name }) => {
  return (
    <div className="input-group">
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
};

export default InputField;