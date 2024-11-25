import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';

const Block = () => {
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleStoryClick = () => {
        setIsLoading(true); // Show loading state
        setTimeout(() => {
            setIsLoading(false); // Hide loading state after navigation
            navigate('/story'); // Navigate to the story page
        }, 500); // Simulated delay for loading
    };

    return (
        <div className="FrontImg3-Block">
            <img 
                src="./images/84770f_6ead7869ff5a4842aee87b0d58d83504~mv2.webp" 
                alt="Front" 
                className="FrontImg3" 
            />
            <div className="dt">
                <h3>STORY OF THE WEEK</h3>
                <h6>Jun 12, 2023 • 2 min</h6>

                {isLoading ? (
                    <div className="loading-preview">Loading...</div>
                ) : (
                    <button type="button" onClick={handleStoryClick}>
                        <h2>THE STORY BEHIND “FYI: I’M ABOUT TO LOVE YOU” - AN INTERVIEW WITH KAY VAN HANS</h2>
                    </button>
                )}
            </div>
        </div>
    );
}

export default Block;
