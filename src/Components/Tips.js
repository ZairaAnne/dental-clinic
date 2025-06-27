import React, { useState } from "react";
import "../App.css"; // create this

const Tips = () => {
  const [index, setIndex] = useState(0);
  const tipImages = [
    "/Images/tip1.png",
    "/Images/tip2.png",
    "/Images/tip3.png"
  ];

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + tipImages.length) % tipImages.length);
  };

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % tipImages.length);
  };

  return (
    <div className="tips-container" key={index}>
      <div className="image-wrapper page-turn">
        <img src={tipImages[index]} alt={`Tip ${index + 1}`} className="tip-image" />
      </div>
      <div className="buttons">
        <button onClick={prevSlide}>← Previous</button>
        <button onClick={nextSlide}>Next →</button>
      </div>
    </div>

    );
};

export default Tips;