import React from "react";

const StaticCard = ({ imageSrc, title, subtitle, description, }) => {
    return (
        <div className="static-card">
            <img src={process.env.PUBLIC_URL + imageSrc} alt={title} className="icon" />
            <h1>{title}</h1>
            <h2>{subtitle}</h2>
            <p>{description}</p>
            <a href="/booking" >
                <button className="sched-button">
                <   span>Schedule Now</span>
                </button>
            </a>
        </div>
    );
};

export default StaticCard;