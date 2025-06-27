import React from "react";
import "../Feedback.css"

const FeedBackList = ({ feedbacks }) => {
    return (
        <div className="fb-section">
            <h3 className="feedback-title">What Others Are Saying</h3>
                <div className="feedback-list">
                    {feedbacks.map((fb, index) => (
                        <div key={index} className="feedback-card">
                            <div className="rating">
                                {"★".repeat(fb.rating)}{"☆".repeat(5 - fb.rating)}
                            </div>
                            <p>{fb.comment}</p>
                        </div>
                    ))}
                </div>
        </div>
    );
};

export default FeedBackList;