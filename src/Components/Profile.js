import React, { useState } from "react";
import "../App.css";

const dentists = [
  {
    name: "Dr. Aira Cabiles",
    image: "/Images/dentist1.png",
    expertise: "Oral Surgery & Implants",
    description: "Provides surgical solutions like wisdom tooth extractions and implants to restore comfort and function."
  },
  {
    name: "Dr. Miguel Santos",
    image: "/Images/dentist2.png",
    expertise: "Orthodontics & Braces",
    description: "Straightens smiles with modern braces and personalized Invisalign treatments."
  },
  {
    name: "Dr. Jace Reyes",
    image: "/Images/dentist3.png",
    expertise: "Cosmetic Dentistry",
    description: "Enhances smiles using whitening, veneers, and artistic restoration techniques."
  },
   {
    name: "Dr. Miguel Tan",
    image: "/Images/dentist4.png",
    expertise: "Orthodontics & Braces",
    description: "Straightens smiles with modern braces and personalized Invisalign treatments."
  },
   {
    name: "Dr. Kyla Dela Cruz",
    image: "/Images/dentist5.png",
    expertise: "Orthodontics & Braces",
    description: "Straightens smiles with modern braces and personalized Invisalign treatments."
  },
  // Add more if needed
];

const DentistProfile = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="dentist-showcase">
      <div className="avatar-row">
        {dentists.map((dentist, index) => (
          <div key={index} className="dentist-profile">
            <img
              src={dentist.image}
              alt={dentist.name}
              className="dentist-avatar"
              onClick={() => handleToggle(index)}
            />
            <div className={`slide-panel ${activeIndex === index ? "active" : ""}`}>
              <h3>{dentist.name}</h3>
              <p className="sec5"><strong>{dentist.expertise}</strong></p>
              <p className="sec5">{dentist.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DentistProfile;
