import React from "react";

import "./style.css"

const Banner = () => {
    return (
        <div className="hero-image animated bounceInLeft">
         <a href="/howitworks" target="new" style= {{float:'right', marginTop:'5%'}} className="btn btnPrimary"> How It Works</a>
        </div>
    );
};

export default Banner;