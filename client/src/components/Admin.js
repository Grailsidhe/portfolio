import React, {useState, useEffect} from 'react';
import axios from "axios";
import { useHistory } from "react-router-dom";
import "./css/Admin.css";

export default function Admin() {

    const [data, setData] = useState();
    const [filterArr, setFilterArr] = useState();
    const [submit, setSubmit] = useState();
    const [pId, setPId] = useState();
    const [pName, setPName] = useState();
    const [pDate, setPDate] = useState();
    const [pDescription, setPDescription] = useState();
    const [pTechs, setPTechs] = useState();
    const [pPicture, setPPicture] = useState();
    const [pUrl, setPUrl] = useState();

    const [privateData, setPrivateData] = useState("");

 // To block users without login
    useEffect(() => {
        const fetchPrivateDate = async () => {
        const config = {
            headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("authToken")}`,
            },
        };
        try {
            const { data } = await axios.get("/api/private", config);
            setPrivateData(data.data);
        } catch (error) {
            localStorage.removeItem("authToken");
            setError("You are not authorized please login");
        }
    };
    fetchPrivateDate();
  }, []);

//Logout 
    let history = useHistory();

    const handleLogout = () => {
        localStorage.removeItem("authToken");
        history.push("/");
    }

    /* Clears forms and states */
    const clearForm = ()=>{
        const inputs = document.querySelectorAll("input,select,textarea");
        inputs.forEach((item) => (item.value = ""));
        setPName(), setPDate(), setPDescription(), setPTechs(), setPPicture(), setPUrl(), setSubmit()
    };

    /* Fill chosen object values on input change */
    useEffect(()=>{ 
        if(filterArr){
            setPName(filterArr.name);
            setPId(filterArr._id);
            setPDate(filterArr.date);
            setPDescription(filterArr.description);
            setPTechs(filterArr.techs);
            setPPicture(filterArr.picture);
            setPUrl(filterArr.url)
            } else {
                clearForm()
            }
    }, [filterArr]);

    // API call
    useEffect(() => {
        axios
            .get(`/api/projects`)
            .then((response) => setData(response.data))
            .catch((error) => {
                console.log(error);
            });
    }, [submit]);

    /* POST */
    const handleAdd = (e)=>{
        e.preventDefault();
        axios.post(`/api/projects`, {name: pName, date: pDate, description: pDescription, techs: pTechs, picture: pPicture, url: pUrl})
        .then((res)=>{
            console.log(res);
            setSubmit('Success!');
            setTimeout(()=> clearForm(), 1000);
        })
        .catch((err)=>{
            console.log(err);
            setSubmit('Error!');
        })
    };

    /* PUT */
    const handleModify = (e)=>{
        e.preventDefault();
        axios
        .put(`/api/projects/${pId}`, {name: pName, date: pDate, description: pDescription, techs: pTechs, picture: pPicture, url: pUrl})
        .then((res) => {
            console.log(res);
            setSubmit('Success!');
            setTimeout(()=> clearForm(), 1000);
        })
        .catch((err) => {
            console.log(err);
            setSubmit('Error!');
        });
    };

    /* DELETE */
    const handleDelete = (e)=>{
        e.preventDefault();
        axios
        .delete(
            `/api/projects/${pId}`
        )
        .then((res) => {
            setSubmit('Success!');
            setTimeout(()=> clearForm(), 1000);
        })
        .catch((err) => {
            console.log(err);
            setSubmit('Error!');
        });
    };

    return (
        <div className="Admin-wrapper">
        
        <h1 className="Admin-title">Add / Modify / Delete Projects</h1>

{/* ADD PROJECT */}
        <div className="Admin-section">
            <input 
                className="Admin-input" 
                type="text"
                name=""
                placeholder="Name"
                onChange={(e) => {
                    setPName(e.target.value)
                }}
            />

            <input 
                className="Admin-input" 
                type="text"
                name=""
                placeholder="Date"
                onChange={(e) => {
                    setPDate(e.target.value)
                }}
            />
        </div>

            <textarea  
                className="Admin-input Admin-textarea" 
                type="text"
                name=""
                placeholder="Description"
                onChange={(e) => {
                    setPDescription(e.target.value)
                }}
            />

            <input 
                className="Admin-input Admin-input-long" 
                type="text"
                name=""
                placeholder="Technologies used •"
                onChange={(e) => {
                    setPTechs(e.target.value)
                }}
            />

        <div className="Admin-section">
            <input 
                className="Admin-input" 
                type="text"
                name=""
                placeholder="Cover image URL"
                onChange={(e) => {
                    setPPicture(e.target.value)
                }}
            />

            <input 
                className="Admin-input" 
                type="text"
                name=""
                placeholder="http://"
                onChange={(e) => {
                    setPUrl(e.target.value)
                }}
            />
        </div>

            <div className="Admin-button-wrapper">
                <button className="Admin-button" onClick={handleAdd}>ADD</button>
                <button className="Admin-button" onClick={clearForm}>CLEAR FORM</button>
            </div>

            <p className="Admin-submit">&nbsp;{submit}&nbsp;</p>


{/* MODIFY/DELETE PROJECT */}
        <div className="Admin-section">
            <select 
                className="Admin-select" 
                type="text"
                name=""
                value={pName}
                onChange={(e) => {
                    setFilterArr(data.find((type)=> type.name === e.target.value));
                    console.log(filterArr)
                    setPName(e.target.value)
                }}
            >
                <option>Choose Project</option>
                {data && data.map((type, i) => {
                    return (
                        <option 
                        id={type._id} 
                        key={i} 
                        name=""
                        value={type.name}
                        >
                        {type.name}
                        </option>
                    );
                })};
            </select>

            <input 
                className="Admin-input" 
                type="text"
                name=""
                value={pDate}
                onChange={(e) => {
                    setPDate(e.target.value)
                }}
            />
        </div>

            <textarea 
                className="Admin-input Admin-textarea" 
                type="text"
                name=""
                value={pDescription}
                onChange={(e) => {
                    setPDescription(e.target.value)
                }}
            />
        
            <input 
                className="Admin-input Admin-input-long" 
                type="text"
                name=""
                value={pTechs}
                onChange={(e) => {
                    setPTechs(e.target.value)
                }}
            />

        <div className="Admin-section">
            <input 
                className="Admin-input" 
                type="text"
                name=""
                value={pPicture}
                onChange={(e) => {
                    setPPicture(e.target.value)
                }}
            />

            <input 
                className="Admin-input" 
                type="text"
                name=""
                value={pUrl}
                onChange={(e) => {
                    setPUrl(e.target.value)
                }}
            />
        </div>

            <div className="Admin-button-wrapper">
                <button className="Admin-button" onClick={handleModify}>MODIFY</button>
                <button className="Admin-button" onClick={handleDelete}>DELETE</button>
                <button className="Admin-button" onClick={clearForm}>CLEAR FORM</button>
            </div>
            
            <p className="Admin-submit">&nbsp;{submit}&nbsp;</p>
            
            <button className="Admin-button" onClick={handleLogout}>LOG OUT</button>

        </div>
    )
};