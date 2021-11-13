import React from "react";
import "./css/About.css";
import "./css/vivify.min.css";

export default function About() {

    return (
        <div className="About-wrapper">
            <div className="About-border">
                <div className="About-photo">
                    <picture>
                        <source media="(max-width: 650px)" alt="Lorianne" srcset="./img/lorianne2.jpg" style={{paddingBottom:'20px'}} />
                        <img src="./img/lorianne.jpg" alt="Lorianne" />
                    </picture>
                </div>
                <div className="About-text">
                    <p>I’m an artist with language studies, whose love for web design led to a career in web development.</p>
                    <p>An unstereotypical vegan who shockingly knows astrology, collects tarot cards and loves cats.</p>
                    <p>When I’m not coding, I love bike riding, rollerblading, photography, sci-fi and Wes Anderson films.</p>
                </div>
            </div>
        </div>
    )
};