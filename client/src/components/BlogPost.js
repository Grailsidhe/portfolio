import React, { useState, useContext } from 'react';
import { Link } from "react-router-dom";
import "./css/Blog.css";
import Context from './Context';

export default function BlogPost({key, title, postbody, date, picture, keywords}) {
    
    const { mobile, setMobile, active, setActive } = useContext(Context);

    return (
        <div className="BlogPost-wrapper">
            <div className="BlogPost-post" key={key}>
                <div>
                    {title}{date}
                    <div>
                        {postbody}
                    </div>
                    {keywords}
                </div>
            </div>
        </div>
    )
};