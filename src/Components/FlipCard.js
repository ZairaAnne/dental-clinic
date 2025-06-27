import React from "react";

const FlipCard = ({ imageSrc, title, description }) => {
    return (
        <div className="flip-card">
            <div className="flip-card-inner">
                <div className="flip-card-front">
                    <img src={process.env.PUBLIC_URL + imageSrc} alt={title} className="icon" />
                </div>
                <div className="flip-card-back">
                    <h1>{title}</h1>
                    <p>{description} </p>
                </div>
            </div>
        </div>
    );
};

export default FlipCard;