import React from "react";
import './Destinations.css';

const Destinations = () => {
    
    const destinations = [
        {
            image: "images/Bangkok_The Siam. Cafe Cha 8.webp",
            title: "Bangkok Travel Guide",
            description: "When in doubt, get a tuk-tuk",
        },
        {
            image: "images/London.webp",
            title: "London Travel Guide",
            description: "Where the pubs are as old as the monuments",
        },
        {
            image: "images/Hero_Haarkon_Paris_Musee+Bourdelle+in+Paris+-+by+Haarkon.webp",
            title: "Paris Travel Guide",
            description: "Have the best trip imaginable in the City of Lights",
        },
        {
            image: "images/Singapore Changi.webp",
            title: "Singapore Travel Guide",
            description: "Have the best trip imaginable in the City of Lights",
        },
        {
            image: "images/Mexico-City.webp",
            title: "Mexico City Travel Guide",
            description: "How to do it right",
        },
        {
            image: "images/Ski & Snow.webp",
            title: "Ski & Snow",
            description: "Inspiration and advice for your winter adventures",
        }
    ];

    return (
        <div className="Destination">
            <div className="Destination_guide">
                {destinations.map((destination, index) => (
                    <div className="destination-item" key={index}>
                        <img src={destination.image} alt={destination.title} />
                        <button className="button_gui">{destination.title}</button>
                        <p>{destination.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Destinations;
