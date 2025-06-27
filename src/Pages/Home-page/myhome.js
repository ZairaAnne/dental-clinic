import HeroHeader from "../../Components/HeroHeader";
import "swiper/css";
import "swiper/css/autoplay";
import FlipCard from "../../Components/FlipCard";
import StaticCard from "../../Components/StaticCard";
import { useState } from "react";
import FeedBackList from "../../Components/FeedBList";
import FeedBackForm from "../../Components/FeedBForm"
import Tips from "../../Components/Tips"
import Faqs from "../../Components/Faqs";
import DentistProfile from "../../Components/Profile";

const images = [
  { src: process.env.PUBLIC_URL + "/Images/Image1.png", link: "/home" },
  { src: process.env.PUBLIC_URL + "/Images/Image2.png", link: "/services" },
  { src: process.env.PUBLIC_URL + "/Images/Image3.png", link: "/shop" },
];

const flipcardData = [
  { imageSrc: "/Images/Icon1.png", title: "Affordable Pricing", description: "Quality care at reasonable rates, making treatments accessible to all." },
  { imageSrc: "/Images/Icon2.png", title: "Comprehensive Care for All Ages", description: "Whether it’s check-ups, orthodontics, or advanced procedures, we cater to both adults and children." },
  { imageSrc: "/Images/Icon3.png", title: "Comfortable & Stress-Free Experience", description: "Our team ensures gentle care and a welcoming atmosphere." },
  { imageSrc: "/Images/Icon4.png", title: "Modern & Effective Treatments", description: "We use the latest techniques to guarantee optimal dental health." },
  { imageSrc: "/Images/Icon5.png", title: "Patient-Centered Approach", description: "Every treatment is customized to suit your unique needs." },
  { imageSrc: "/Images/Icon6.png", title: "Convenient Locations", description: "Multiple clinics for easy access, saving you time and hassle." },
];

const staticCardData = [
  { imageSrc: "/Images/Srv1.png", title: "Preventive Care", subtitle: "Teeth Cleanings (Oral Prophylaxis)", description: "Keep your oral health in top shape with gentle yet thorough cleanings from our skilled hygienists. We make preventive care stress-free for both kids and adults!" },
  { imageSrc: "/Images/Srv2.png", title: "Restorative Dentistry", subtitle: "Dental Implants", description: "Say goodbye to gaps and hello to long-lasting, natural-looking replacements. Our implant procedures are precise, safe, and tailored to bring back full function and confidence." },
  { imageSrc: "/Images/Srv3.png", title: "Cosmetic Dentistry", subtitle: "Braces and Invisalign", description: "Straighten your smile your way! Choose from traditional braces or discreet Invisalign aligners—our team will help you achieve a perfectly aligned bite with comfort and style." },
];

const faqData = [
  {
    question: "How often should I visit the dentist?",
    answer: "We recommend a check-up and cleaning every six months to maintain optimal oral health."
  },
  {
    question: "Do you accept walk-ins or only appointments?",
    answer: "We welcome walk-ins but recommend scheduling to avoid waiting times."
  },
  {
    question: "Do you offer dental implants?",
    answer: "Yes, we specialize in dental implants as one of our core services. Book a consultation to learn more!"
  },
  {
    question: "Is Invisalign better than braces?",
    answer: "Both options work well. Invisalign offers more flexibility and discretion, while traditional braces can handle more complex cases."
  },
  {
    question: "Do you treat kids?",
    answer: "Absolutely! We welcome patients of all ages and provide a gentle, kid-friendly experience."
  },
  {
    question: "Is teeth whitening safe?",
    answer: "Absolutely! Our professional whitening treatments are safe and supervised."
  }
];



const Home = () => {

  const [feedbacks, setFeedbacks] = useState([]);

  const handleFeedbackSubmit = (newFeedback) => {
    setFeedbacks((prev) => [newFeedback, ...prev]);
  };

  return (
    <>
      <HeroHeader images={images} />
      <div className="section1">
        <h1>Why Choose Healthy Teeth Dental Clinic?</h1>
        <p>Healthy Teeth Dental Clinic is dedicated to delivering top-quality dental care for adults and children in a stress-free environment.</p>
      </div>

{/* Flip Card Container */}

      <div className="flip-card-container">
        {flipcardData.map((card, index) => (
          <FlipCard key={index} imageSrc={card.imageSrc} title={card.title} description={card.description} />
        ))}
      </div>

{/* Service Card Comtainer*/}

      <div className="section2">
        <h1 className="h1">Discover Your Best Smile at Healthy Teeth Dental Clinic!</h1>
        <p>At Healthy Teeth, we’re passionate about creating confident smiles through expert care and a comfortable experience. Our top services are designed to meet the needs of every patient—whether you're looking to restore, maintain, or enhance your smile:</p>
          <div className="static-card-container">
            {staticCardData.map((card, index) => (
              <StaticCard key={index} imageSrc={card.imageSrc} title={card.title} subtitle={card.subtitle} description={card.description} />
            ))}
          </div>
        <p className="p2">Whether you're here for a transformation or just a routine visit, Healthy Teeth is where your smile feels at home. Visit us today and take the first step toward the healthy, beautiful smile you deserve!</p>
      </div>

{/* Customer Feedback */}

      <div className="section-feedback">
        <FeedBackList feedbacks={feedbacks} />
        <FeedBackForm onSubmit={handleFeedbackSubmit} />
      </div>

{/* Customer Feedback */}

       <div className="section4">
          <h1>
            Helpful Tips
            <img
              src={process.env.PUBLUC_URL = "/Images/light-bulb.png"} alt="lightbulb icon" className="tip-icon"
            />
            </h1>
          <p>Here are some helpful tips and reminders suggested by your trusted Dentist!</p>
          
          <Tips /> {/* 👈 This mounts your slider here */}
       </div>

{/* Question & Answer */}

       <div className="section5">
          <h1 className="h1">Discover Your Best Smile at Healthy Teeth Dental Clinic!</h1>
          <p>At Healthy Teeth, we’re passionate about creating confident smiles through expert care and a comfortable experience. Our top services are designed to meet the needs of every patient—whether you're looking to restore, maintain, or enhance your smile:</p>
        </div>
          <div className="section-dentist">
            <DentistProfile />
          </div>
          
          <Faqs faq={faqData} />
    </>
  );
};

export default Home;
