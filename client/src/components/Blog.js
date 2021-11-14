import React, { useState, useEffect } from "react";
import axios from 'axios';
import BlogPost from "./BlogPost";
import "./css/Blog.css";

export default function Blog() {

    const [data, setData] = useState();
    const [keywLinks, setKeywLinks] = useState([]);

    useEffect(() => {
        axios
            .get(`/api/blogposts`)
            .then((response) => setData(response.data.reverse()))
            .catch((error) => {
                console.log(error);
            });
    }, []);

    useEffect(() => {
        const tempKeywords = []
        data && data.forEach((item)=> {
            const noRepeat = item.keywords.split(",");
            tempKeywords.push(noRepeat);
            setKeywLinks([...tempKeywords]);
        })
    }, [data]);

    console.log(keywLinks)
    console.log(1, data)
    
    return (
        <div className="Blog-wrapper">
            Blog
            <div className="Blog-keywords">{keywLinks}</div>
            {data && data.map((item, i)=> {
                return ( 
                    <BlogPost 
                        key={i}
                        title={item.title}
                        date={item.date}
                        postbody={item.postbody}
                        picture={item.picture}
                        keywords={item.keywords}
                    />
                )}
            )}
        </div>
    )
};