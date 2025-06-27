import React, { useState } from "react";
import "../Feedback.css";

const FeedBackForm = ({ onSubmit }) => {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
    const [comment, setComment] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (rating && comment) {
            onSubmit({ rating, comment, timestamp: Date.now() });
            setRating(0);
            setComment("");
        }
    };

    return (
        <div className="fb-section">
            <form className="feedback-form" onSubmit={handleSubmit}>
                <h2>Please do leave us a comment here!</h2>
                <div className="stars">
                    {[1, 2, 3, 4, 5].map((star) => (
                        <span
                            key={star}
                            className={star <= (hover || rating)? "star filled" : "star" }
                            onClick={() => setRating(star)}
                            onMouseEnter={() => setHover(star)}
                            onMouseLeave={() => setHover(0)}
                        >★</span>
                    ))}
                </div>
                    <textarea
                        placeholder="Write your experience here at Healthy Teeth.."
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        required
                    ></textarea>

                    <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default FeedBackForm;