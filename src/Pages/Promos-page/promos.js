import React from "react";
import HeroHeader from "../../Components/HeroHeader"

/* Use the Image and Captions Props */
const images = [
    process.env.PUBLIC_URL + "/Images/Image1.png"
];
const captions = ["Special Offer! 50% off for New Patients! Book Your Appointment Today!"];

const Promos = () => {
    return(
        <> {/* Wrapped everything in a React Fragment */}
        <HeroHeader images={images} captions={captions} />
        <div>
            <h1>Our Packages!</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
        </>
    );
};

export default Promos;