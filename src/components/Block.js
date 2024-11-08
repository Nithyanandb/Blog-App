import React from "react";
import { Link } from 'react-router-dom';

const Block = () => {
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
                
                <Link to="/story">
                    <button type="button">
                        <h2>THE STORY BEHIND “FYI: I’M ABOUT TO LOVE YOU” - AN INTERVIEW WITH KAY VAN HANS</h2>
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default Block;
