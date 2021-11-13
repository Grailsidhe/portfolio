import React, {useState, useEffect} from 'react';
import axios from "axios";
import "./css/Contact.css";
import "./css/vivify.min.css";

export default function Contact() {

    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [subject, setSubject] = useState();
    const [message, setMessage] = useState();
    const [submit, setSubmit] = useState();

    /* Clears forms and states */
    const clearForm = ()=>{
        const inputs = document.querySelectorAll("input,select,textarea");
        inputs.forEach((item) => (item.value = ""));
        setName(), setEmail(), setSubject(), setMessage(), setSubmit()
    };

    const handleSend = (e)=>{
        e.preventDefault();
        axios.post(`/api/contact`, {name: name, email: email, subject: subject, message: message})
        .then((res)=>{
            console.log(res);
            setSubmit('Message Sent!');
            setTimeout(()=> clearForm(), 1000);
        })
        .catch((err)=>{
            console.log(err);
            setSubmit('All fields are required.');
        })
    };

    return (
        <div className="Contact-wrapper">
            <div className="Contact-form">
                <h4 className="Contact-title">Contact me</h4>
                <div className="Contact-section">
                    <input 
                        className="Contact-input" 
                        type="text"
                        name=""
                        placeholder="Name"
                        onChange={(e) => {
                            setName(e.target.value)
                        }}
                    />
                    <input 
                        className="Contact-input" 
                        type="text"
                        name=""
                        placeholder="Email"
                        onChange={(e) => {
                            setEmail(e.target.value)
                        }}
                    />
                </div>

                <input 
                    className="Contact-input Contact-input-long" 
                    type="text"
                    name=""
                    placeholder="Subject"
                    onChange={(e) => {
                        setSubject(e.target.value)
                    }}
                />
                <textarea 
                    className="Contact-input Contact-textarea" 
                    type="text"
                    name=""
                    placeholder="Message"
                    onChange={(e) => {
                        setMessage(e.target.value)
                    }}
                />
                <button className="Contact-button" onClick={handleSend}>SEND</button>
                <p className="Contact-message">&nbsp;{submit}&nbsp;</p>
            </div>
        </div>
    )
};