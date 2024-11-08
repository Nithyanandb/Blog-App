import React from "react";
import './Slide.css'
const Slide = () => {
    return (
        <section class="FrontImg2-Block">
        <div class="cnt-3">
            <div class="MOVE1">
                <img src="images/84770f_c65865dcbe344e959c00cd572c022bfd~mv2.webp" alt="Side" class="FrontImg2" />
                <button class="button_gui" onclick="cnt1()">
                    <h1 class="cnt0">20 MUSEUMS YOU SHOULD VISIT AT LEAST ONCE</h1>
                </button>
                <p class="ct0"> See the full program for the upcoming festival. Early bird tickets are on sale now.
                </p>
            </div>
            <div class="MOVE2">

                <img src="images/84770f_fe6fab9a56414a00976c0d1673796c90~mv2.webp" alt="Side" class="FrontImg2"/>
                <button class="button_gui" onclick="cnt2()">
                    <h1 class="cnt1">365 DAYS. 365 FRAMES.</h1>
                </button>
                <p class="ct1"> What can we learn from Matthew Soja’s latest work? Shots from the same location in Oslo
                    for one whole year, every...
                </p>
            </div>
            <div class="MOVE3">

                <img src="images/84770f_fa58299371f84ccab29edc0d417d1ac3~mv2.webp" alt="Side" class="FrontImg2"/>
                <button class="button_gui" onclick="cnt3()">
                    <h1 class="cnt2"> FETCH FESTIVAL BRLN 2023</h1>
                </button>
                <p class="ct2">The full list includes 10 cities in 8 different countries.
                </p>
            </div>
        </div>
    </section>
    );
}

export default Slide;