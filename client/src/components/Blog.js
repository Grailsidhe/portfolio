import React, { useState, useEffect } from "react";
import axios from 'axios';
import BlogPost from "./BlogPost";
import "./css/Blog.css";

export default function Blog() {

    const [data1, setData1] = useState();

    useEffect(() => {
        axios
            .get(`/api/blogposts`)
            .then((response) => setData1(response.data))
            .catch((error) => {
                console.log(error);
            });
    }, []);
    
    return (
        <div className="Blog-wrapper">
            Blog
            {data1 && data1.map((item, i)=> {
                <BlogPost 
                    key={i}
                    title={item.title}
                    date={item.date}
                    postbody={item.postbody}
                    picture={item.picture}
                    keywords={item.keywords}
                />
            })}
        </div>
    )
};