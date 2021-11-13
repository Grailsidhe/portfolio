import React, { useState, useEffect } from "react";
import axios from "axios";
import "./css/Portfolio.css";
import "./css/vivify.min.css";
import PortfolioBox from "./PortfolioBox.js";
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';

export default function Portfolio() {

    const [data, setData] = useState();

    // API call
    useEffect(() => {
        axios
            .get(`/api/projects`)
            .then((response) => setData(response.data))
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <div className="Portfolio-wrapper">
            <Carousel fade>
                {data && data.map((item, i) => (
                    <Carousel.Item interval={5000}>
                        <PortfolioBox
                            name={item.name}
                            key={i}
                            date={item.date}
                            description={item.description}
                            techs={item.techs}
                            picture={item.picture}
                            url={item.url}
                        />
                    </Carousel.Item>

                ))}
            </Carousel>
        </div>
    )
};