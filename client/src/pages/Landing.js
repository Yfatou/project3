import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import Banner from "../components/Banner";

class Landing extends Component {
    render() {
        return (
            <div>
                <div class="container-fluid" style={containerStyle}>
                    <div class="row">
                        <div class="col-md-1">
                        {/* empty */}
                        </div>
                        <div class="col-md-5">
                        <Banner></Banner>
                        </div>
                        <div class="col-md-5">
                        <Jumbotron></Jumbotron>
                        </div>
                        <div class="col-md-1">
                        {/* empty */}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

var containerStyle = {
    background: 'linear-gradient(to right, #1a242e, #2c3e50)'
  };


export default Landing;