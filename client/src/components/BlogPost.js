import React, { useState, useContext, useEffect } from 'react';
// import { Link } from "react-router-dom";
import "./css/Blog.css";
// import Context from './Context';

export default function BlogPost({key, title, postbody, date, picture, keywords}) {
    
    // const { mobile, setMobile, active, setActive } = useContext(Context);
    const [eachKey, setEachKey] = useState();

    useEffect(() => { setEachKey(keywords.split(",")) })

    return (
        <div className="BlogPost-wrapper">
            <div className="BlogPost-post" key={key}>
                <div className="BlogPost-title-wrap">
                    <span className="BlogPost-title">{title}</span>
                    <span className="BlogPost-date">{date}</span>
                </div>
                <div className="BlogPost-body-wrap">
                    <span className="BlogPost-picture">
                        {picture && <img src={picture} alt="Post image" />}
                    </span>
                    <span className="BlogPost-text">{postbody}</span>
                </div>
                <div className="BlogPost-keyword-wrap">
                    {eachKey && eachKey.map((item)=>{
                        return(
                        <span className="BlogPost-keyword">
                            <a href="">{item}</a>
                        </span>
                        )
                    })}
                </div>
            </div>
        </div>
    )
};