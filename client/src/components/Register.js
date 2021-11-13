import React, { useState, useEffect } from "react";
import axios from "axios";
import "./css/Admin.css";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

export default function AdminLogin() {
  
    const [password, setPassword] = useState();
    const [error, setError] = useState();
    const [email, setEmail] = useState("");
    const [confirmpassword, setConfirmPassword] = useState("");

/* Show/Hide password field */
    const showPw = ()=> {
        const pw = document.getElementById("pwbox");
        const pw2 = document.getElementById("pwbox2");
        pw.type === "password" ? pw.type = "text" : pw.type = "password"
        pw2.type === "password" ? pw2.type = "text" : pw2.type = "password"
    };

/* Clears forms and states */
    const clearForm = ()=>{
        const inputs = document.querySelectorAll("input,select,textarea");
        inputs.forEach((item) => (item.value = ""));
        setEmail(), setPassword()
    };


// AUTH CODE
    let history = useHistory();

    useEffect(() => {
      if (localStorage.getItem("authToken")) {
        history.push("/admin/login");
      }
    }, [history]);


/* POST ADMINS */
    const handleRegister = async (e) =>{
        e.preventDefault();
        const config = {
            header: {
                "Content-type": "application/json",
            }
        }
        if(password !== confirmpassword){
            setPassword("");
            setConfirmPassword("");
            setError("Passwords don't match")
        }
        try {
            const {data} = await axios
            .post('/api/auth/register', 
            {email: email, password: password}, config);

            localStorage.setItem("authToken", data.token);
            setTimeout(()=> clearForm(), 1000);
        }
        catch (err) {
            setError(err.response.data.error);
        }
    };

    return (
        <div className="AdminLogin-wrapper">
            <div className="Admin-wrapper">
                <div className="AdminLogin-title">Register</div>
                <div className="AdminLogin-form">
                    <input 
                        className="Admin-input" 
                        type="text"
                        name="email"
                        placeholder="email"
                        onChange={(e) => {
                        setEmail(e.target.value)
                        }}
                    />
                    <input 
                        className="Admin-input" 
                        type="password"
                        name="password"
                        id="pwbox"
                        placeholder="password"
                        onChange={(e) => {
                        setPassword(e.target.value)
                        }}
                    />
                    <input 
                        className="Admin-input" 
                        type="password"
                        name="confirmpassword"
                        id="pwbox2"
                        placeholder="confirm password"
                        onChange={(e) => {
                        setConfirmPassword(e.target.value)
                        }}
                    />
                    <span style={{margin: "0px 20px 0 10px"}}>
                        <input type="checkbox" className="pw-checkbox" onClick={showPw} />&nbsp;Show Password
                    </span>
                </div>
                <button className="Admin-button" onClick={handleRegister}>REGISTER</button>
                <Link to="/admin">Admin</Link>
            </div>
        </div>
    );
  };