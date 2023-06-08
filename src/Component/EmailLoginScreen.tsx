import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./EmailLogin.css";
import 'bootstrap/dist/css/bootstrap.min.css';  
import {Button} from 'react-bootstrap'  

function EmailLoginScreen() {
  const [imapUsername, setImapUsername] = useState("");
  const [imapPassword, setImapPassword] = useState("");
  const [keys, setKeys] = useState("");

  const [errors, setErrors] = useState({
    imapUsername: "",
    imapPassword: "",
    keys: "",
  });

  const navigate = useNavigate();

  const validateForm = () => {
    const errors = {
      imapUsername: "",
      imapPassword: "",
      keys: "",
    };

    if (!imapUsername.trim()) {
      errors.imapUsername = "IMAP username is required";
    }
    else if (!imapUsername.endsWith('@gmail.com')  && !imapUsername.endsWith('@terralogic.com'))
    {
      errors.imapUsername = "Invalid email ID format"
    }


    if (!imapPassword.trim()) {
      errors.imapPassword = "IMAP password is required";
    }
    else if(imapPassword.length!==16)
    {
      errors.imapPassword = "IMAP Password length must be of 16 characters"
    }
    else if(imapPassword!==imapPassword.toLowerCase())
    {
      errors.imapPassword = "Invalid IMAP Password format"
    }
    else if (!imapPassword.match(/[a-z]/))
    {
      errors.imapPassword = "IMAP Password should contain lowercase aplhabets only"
    }

    if (!keys.trim()) {
      errors.keys = "Keys is required";
    }
    // console.log("Before setting errors: ",errors)

    setErrors(errors);
    // console.log("Value passing to IF: ", (errors.imapUsername.length===0 && errors.imapPassword.length===0 && errors.keys.length===0))

    return (
      errors.imapUsername.length === 0 &&
      errors.imapPassword.length === 0 &&
      errors.keys.length === 0
    );
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("Form submitted:", {
      imapUsername,
      imapPassword,
      keys,
    });

    if (validateForm()) {
      console.log("Inside If");
      setImapUsername("");
      setImapPassword("");
      setKeys("");
      setErrors({
        imapUsername: "",
        imapPassword: "",
        keys: "",
      });
      setErrors({ imapUsername: "", imapPassword: "", keys: "" });
      navigate("/submited");
    } else {
      console.log("Errors in Else: ", errors);
    }
  };

  return (
    <div className="form-container ">

      <form onSubmit={handleSubmit}>

        <div className="sep-div">
          <label htmlFor="imapUsername">IMAP Username:</label>
          <input
            type="text"
            id="imapUsername"
            placeholder="Enter Email Id configured as IMAP server"
            className="form-input"
            value={imapUsername}
            onChange={(e) => setImapUsername(e.target.value)}
          />
          {errors.imapUsername && (
            <span className="error-msg">{errors.imapUsername}</span>
          )}
        </div>

        <div className="sep-div">
          <label htmlFor="imapPassword">IMAP Password:</label>
          <input
            type="password"
            placeholder="Enter IMAP server secret code "
            id="imapPassword"
            className="form-input"
            value={imapPassword}
            onChange={(e) => setImapPassword(e.target.value)}
          />
          {errors.imapPassword && (
            <span className="error-msg">{errors.imapPassword}</span>
          )}
        </div>

        <div className="sep-div">
          <label htmlFor="keys">Keys:</label>
          <input
            type="file"
            id="keys"
            accept=".json"
            className="file"
            value={keys}
            onChange={(e) => setKeys(e.target.value)}
          />
          {errors.keys && <span className="error-msg">{errors.keys}</span>}
        </div>

        {/* <button type="submit">
          Submit
        </button> */}
        <Button type="submit" variant="primary">Submit</Button>{' '}  
      </form>
    </div>
  );
}

export default EmailLoginScreen;
