import React from "react";
import Style from "../assets/css/Hero.module.css";
import { MapPin, Search, ChevronDown } from "lucide-react";

const Hero = () => {
  return (
    <section className={Style.sectionHero}>
      <article className={Style.articleHero}>
        <div className={Style.DivHeadingHero}>
          <h1>
            Order Food & Groceries. Discover
           </h1><h1>
            best restaurants. Swiggy it!
          </h1>
        </div>

        <div className={Style.SearchBarHero}>
          <div className={Style.divLoc}>
            <MapPin color="orangered" size={150} />
            <input
              type="text"
              placeholder="Enter your delivery location"
              className={Style.inputLoc}
            />
            <ChevronDown size={150}/>
          </div>

          <div className={Style.divItems}>
            <input
              type="text"
              placeholder="Search for restaurant, item or more"
              className={Style.inputItem}
            />
            <Search />
          </div>
        </div>


        {/* Cards */}

<div className={Style.cardContainer}>

  <div>
       <img src="/public/one.avif" alt="Food Delivery" className={Style.cardImg} />
  </div>

  <div >
        <img src="/public/two.avif" alt="Instamart" className={Style.cardImg} />
  </div>

  <div>
    <img src="/public/three.avif" alt="Dineout" className={Style.cardImg} />
  </div>

</div>

    </article>
    </section>
  );
  
};

export default Hero;