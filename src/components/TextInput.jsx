// components/TextInput.js
import React, { useState, useEffect } from 'react';

const TextInput = ({ label, name, value, onChange, showFieldError, required }) => {
  
  const [fieildState, setfieildState] = useState(value)
  const [errorrMsg, seterrorrMsg] = useState('')

  const displayError = showFieldError && errorrMsg;

  const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);

  const validateField = () =>{
    if( required && !fieildState){
      seterrorrMsg(`Empty ${label.toLowerCase()}`)
    }
    else if (name === 'email' && !validateEmail(fieildState)){
      seterrorrMsg(`Enter a valid Email Address`)
    }
    else{
      seterrorrMsg('')
    }
  }
  
  useEffect(() => {
    validateField()
  }, [fieildState]);

  return (
    <div className={`mb-3 ${displayError ? 'has-danger' : ''}`}>
      <label htmlFor={name} className="form-label">
        {label}:
      </label>
      <input
        type={name === 'email' ? 'email' : 'text'}
        className={`form-control ${displayError ? 'is-invalid' : ''}`}
        id={name}
        name={name}
        defaultValue={value}
        onChange={(event)=>{
          onChange(event);
          setfieildState(event.target.value)
        }}
      />
      {displayError && <div className="invalid-feedback">{errorrMsg}</div>}
    </div>
  );
};

export default TextInput;
