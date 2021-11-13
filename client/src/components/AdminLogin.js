import React, { useState, useEffect } from "react";
import axios from "axios";
import "./css/Admin.css";
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

export default function AdminLogin() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [error, setError] = useState();
    const [submit, setSubmit] = useState();

/* Show/Hide password field */
    const showPw = ()=> {
        const pw = document.getElementById("pwbox");
        pw.type === "password" ? pw.type = "text" : pw.type = "password"
    };

    // let history = useHistory();
    // useEffect(() => {
    //   if (localStorage.getItem("authToken")) {
    //     history.push("/admin");
    //   }
    // }, [history]);
  
    const loginHandler = async (e) => {
        e.preventDefault();
    
        const config = {
            header: {
            "Content-Type": "application/json",
            },
        };
    
        try {
            const { data } = await axios.post(
            "/api/auth/login",
            { email: email, password: password },
            config
            );
            localStorage.setItem("authToken", data.token);
            setSubmit(true);
        } catch (error) {
            setError(error.response.data.error)
            setTimeout(()=>{
            setError("");
            setSubmit(false);
        }, 5000)
        }
    };

    const handleSubmit = () => {
        if(submit){
            return <Link to="/admin" className="AdminLogin-enter">Speak Friend and Enter</Link>
        } else {
            return error
        }
    };

    return (
        <div className="AdminLogin-wrapper">
            <span className="pointer" variant="primary" onClick={handleShow}>
                Admin
            </span>
    
            <Offcanvas show={show} onHide={handleClose} placement='end' className="AdminLogin-page">
            <Offcanvas.Header closeButton>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <div className="Admin-wrapper">
                <div className="AdminLogin-title">Log In</div>
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
                        <span style={{margin: "0px 20px 0 10px"}}>
                            <input type="checkbox" className="pw-checkbox" onClick={showPw} />&nbsp;Show Password
                        </span>
                    </div>
                    <button className="Admin-button" onClick={loginHandler}>LOGIN</button>
                    <br />
                    <p>&nbsp;{handleSubmit()}&nbsp;</p>

                </div>
            </Offcanvas.Body>
            </Offcanvas>
        </div>
    );
  };