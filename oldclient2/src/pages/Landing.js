import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import Banner from "../components/Banner";
import Dashboard from "../pages/Dashboard";


class Landing extends Component {
    render() {
        return (
            <div>
                <div className="container-fluid" style={containerStyle}>
                    {/* <div className="row">
                        <div className="col-lg-12">
                            <button className="btn btn-large btn-warning">HOW IT WORKS</button>
                        </div>
                    </div> */}

                    <div className="row">
                        <div className="col-md-1">
                            {/* empty */}
                        </div>
                        <div className="col-md-6">
                            <Banner></Banner>
                        </div>
                        <div className="col-md-4">
                            <Jumbotron></Jumbotron>
                        </div>
                        <div className="col-md-1">
                            {/* empty */}
                        </div>


                    </div>
                </div>
            </div>

        );
    }
};

var containerStyle = {
    background: 'linear-gradient(to left, #e67e22, #e74c3c)',
    backgroundSize: 'cover',
    marginTop: '3%'

};


export default Landing;