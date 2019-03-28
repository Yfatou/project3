import React from "react";
import "./style.css";


const Footer = () => {
    return (
        <footer class="page-footer">
            <div id="foot-container" class="container">
                <div class="row">
                    <div class="col l6 s12">
                        <p class="white-text">© 2019 Copyright</p>
                    </div>
                    <div class="col l4 offset-l2 s12">
                       
                        <ul>
                            <li><a class="grey-text text-lighten-3" href="#!">About Us</a></li>
                            <li><a class="grey-text text-lighten-3" href="#!">Contact Us</a></li>
                            <li></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>

    );

}

export default Footer;
