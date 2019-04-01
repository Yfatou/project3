import React, { Component } from "react";
import AboutCard from "../components/AboutCard";


class AboutUs extends Component {
    render() {
        return (
            <body>

            

            <div id="aboutBody">
                <div >
                    <div className="row">
                        <div className="col-md-12">
                            
                            <div className="jumbotron">
                            <h1 className="center second-heading">Meet Our Team!</h1>
                            When I say it's you I like, I'm talking about that part of you that knows that
                                life is far more than anything you can ever see or hear or touch.
                                 That deep part of you that allows you to stand for those things without which
                                 humankind cannot survive. Love that conquers hate, peace that rises triumphant
                                  over war, and justice that proves more powerful than greed. <em>-Fred Rogers</em> </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-2">
                            {/* empty */}
                        </div>
                        <div className="col-md-4">
                            <AboutCard>
                                <div className="card-header">
                                    <h6 style={{ color: 'white' }}>Fatou Thiam-Gueye</h6>
                                </div>
                                <img className="card-body card-img" src=" https://avatars1.githubusercontent.com/u/43143077?s=400v=4" alt="about-fatou" />
                                <div className="card-footer">
                                    <a href="https://yfatou.github.io/PersonalPage/" target="new" className="btn btnPrimary stretched-link"> Portfolio</a>
                                </div>
                            </AboutCard>
                        </div>

                        <div className="col-md-4">
                            <AboutCard>
                                <div className="card-header">
                                    <h6 style={{ color: 'white' }}>Darakhshan Ahmed</h6>
                                </div>
                                <img className="card-body card-img" src=" https://avatars2.githubusercontent.com/u/40966927?s=400v=4" alt="about-darakhshan" />
                                <div className="card-footer">
                                    <a href="https://dara9234.github.io/MyPortfolio/" target="new" className="btn btnPrimary stretched-link"> Portfolio</a>
                                </div>
                            </AboutCard>
                        </div>
                        <div className="col-md-2">
                            {/* empty */}
                        </div>
                    </div>
                </div>

                {/* second row */}
                <div className="row">
                    <div className="col-md-2">
                        {/* empty */}
                    </div>
                    <div className="col-md-4">
                        <AboutCard>
                            <div className="card-header">
                                <h6 style={{ color: 'white' }}>Eileen Sul</h6>
                            </div>
                            <img className="card-body card-img" src="" alt="about-eileen" />
                            <div className="card-footer">
                                <a href="#" className="btn btnPrimary stretched-link"> Portfolio</a>
                            </div>
                        </AboutCard>
                    </div>
                    <div className="col-md-4">
                        <AboutCard>
                            <div className="card-header">
                                <h6 style={{ color: 'white' }}>Syeda Ahmed</h6>
                            </div>
                            <img className="card-body card-img" src="https://scontent-ort2-2.xx.fbcdn.net/v/t1.0-9/55937448_10162143770750455_2471544960617283584_n.jpg?_nc_cat=108&_nc_ht=scontent-ort2-2.xx&oh=7a090f5cf49226d489fe0b2e45a851a2&oe=5D4CC68B " alt="about-syeda" />
                            <div className="card-footer">
                                <a href="https://sahmed1035.github.io/My-Portfolio/index.html" target="new" className="btn btnPrimary stretched-link"> Portfolio</a>
                            </div>
                        </AboutCard>
                    </div>
                    <div className="col-md-2">
                        {/* empty */}
                    </div>
                </div>
            </div>
            </body>
        );
    }
};

// var containerStyle = {
//     background: 'linear-gradient(to left, #e67e22, #e74c3c)',
//      backgroundSize: 'cover'

// };


export default AboutUs;