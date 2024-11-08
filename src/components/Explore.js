import React from "react";
import './Explore.css';

const Explore = () => {
    return (
        <div className="main-ct">
            <div className="mc">
                <h2>Explore the World with Us</h2>
                <p>Welcome to our travel platform, where your next adventure begins. Discover breathtaking destinations,
                    find the perfect accommodations, and embark on unforgettable journeys.</p>
            </div>

            <div className="fd">
                <div className="d">
                    <img src="images/Morgan Maassen_Touch - 1.webp" alt="Destination 1" />
                    <h3>Wellness & Spas</h3>
                    <p>The meaning of wellness travel has expanded to include everything from somatic meditation to
                        hormone replacement therapy and grief counseling.</p>
                </div>

                <div className="d">
                    <img src="images/Singapore_shawnanggg--S15r4VsQhY-unsplash.webp" alt="Destination 2" />
                    <h3>Fifth Freedom Flights: The Airline Loophole for Cheaper Fares and Nicer Seats</h3>
                    <p>How to use fifth freedom flight routes to your advantage.</p>
                </div>

                <div className="d">
                    <img src="images/Del-Mar_2018_Del-Mar-Veranda-.webp" alt="Destination 3" />
                    <h3>20 Best Restaurants in Washington, DC</h3>
                    <p>The nation’s capital is becoming a seat of power in the restaurant world.</p>
                </div>
            </div>
        </div>
    );
}

export default Explore;
