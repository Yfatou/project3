import React from "react";
import "./style.css";


const Footer = () => {
    return (
        <footer  className=" page-footer sticky" id="footerpadding">
            <div >
                <div className="row">
                    <div className="col l6 s12">
                        <p className="white-text">  © 2019 Copyright </p>
                    </div>
                    <div className="col l4 offset-l2 s12">
                       
                        <ul>
                            <li><a className="grey-text text-lighten-3" href="/about">Who is behind SeniorNextDoor?</a></li>
                            <li><a className="grey-text text-lighten-3" href="#!">Feedback</a></li>
                            <li></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
