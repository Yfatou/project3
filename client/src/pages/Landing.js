import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import Banner from "../components/Banner";

class Landing extends Component {
    render() {
        return (
            <body>
                <div class="container-fluid" style={containerStyle}>
                    <div class="row">
                        <div class="col-md-1">
                            {/* empty */}
                        </div>
                        <div class="col-md-6">
                            <Banner></Banner>
                        </div>
                        <div class="col-md-4">
                            <Jumbotron></Jumbotron>
                        </div>
                        <div class="col-md-1">
                            {/* empty */}
                        </div>
                    </div>
                </div>
            </body>
        );
    }
};

var containerStyle = {
    background: 'linear-gradient(to left, #e67e22, #e74c3c)',
     backgroundSize: 'cover'

};


export default Landing;