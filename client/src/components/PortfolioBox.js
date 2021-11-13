import React from "react";
import "./css/Portfolio.css";

export default function PortfolioBox({ key, name, date, description, techs, picture, url }) {

    return (
        <div className="PortfolioBox-wrapper">
            <div className="PortfolioBox-item" key={key}>
                <div className="PortfolioBox-main-box" style={{backgroundImage: `url(${picture})`}}>
                </div>

                <div className="PortfolioBox-description-box">
                    <p className="PortfolioBox-h3">{name} <span className="PortfolioBox-date">{date}</span></p>
                    <p className="PortfolioBox-p">{description}</p>
                    <p className="PortfolioBox-p-s"><b>{techs}</b></p>
                    <p className="PortfolioBox-p"><a href={url} target="new">visit</a></p>
                </div>
            </div>
        </div>
    )
};