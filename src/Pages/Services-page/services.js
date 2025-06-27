import React from "react";
import HeroHeader from "../../Components/HeroHeader";   

const images = [
    { src: process.env.PUBLIC_URL + "/Images/Image2.png", link: "/services" },
    { src: process.env.PUBLIC_URL + "/Images/Image3.png", link: "/shop" },
    { src: process.env.PUBLIC_URL + "/Images/Image1.png", link: "/home" },
];

const Services = () => {
    return (
        <>
        <HeroHeader images={images} />
        <div>
            <h1> Our Services</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
        </>
    );
};

export default Services;