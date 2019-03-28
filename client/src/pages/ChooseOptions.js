import React, { Component } from 'react';
import OptionCard from '../components/OptionCard';


export class ChooseOptions extends Component {
    render() {
        return (
            <div >

                <div className="container-fluid">
                <div className="row">
                    <div className="col-md-2">
                        {/* <p>empty</p> */}
                    </div>

                    <OptionCard>
                        <div className="col-md-4">
                            <div className="Optioncard">
                                <img className="card-img-top" src="https://d3n8a8pro7vhmx.cloudfront.net/northwestassistanceministries/pages/247/features/original/Hands.png?1547549573" alt="Card image cap" />
                                <div className="card-body-option">
                                    {/* <h5 className="card-title">Find A Volunteer Opportunity</h5> */}
                                    <p className="card-text"><a href="/searches" className="col-md-12 center cardHeader-option">
                                        <h3>Find A Volunteer Opportunity</h3>
                                    </a></p>
                                </div>

                            </div>
                            </div>
        </OptionCard>

                        <OptionCard>
                            <div className="col-md-4">
                                <div className="Optioncard">
                                    <img className="card-img-top" src="https://d3n8a8pro7vhmx.cloudfront.net/northwestassistanceministries/pages/247/features/original/Hands.png?1547549573" alt="Card image cap" />
                                    <div className="card-body-option">
                                        {/* <h5 className="card-title">Post a Service Request</h5> */}
                                        <p className="card-text"><a href="/services" className="col-md-12 center cardHeader-option">
                                            <h3>Post a Service Request</h3>
                                        </a></p>
                                    </div>

                                </div>


                            </div>
                        </OptionCard>


                        <div className="col-md-2">
                            {/* <p>empty</p> */}
                        </div>
	                </div>
               



                {/* <div className="row">
                    <div className="col-md-2"> */}
                {/* empty */}
                {/* </div> */}
                {/* <OptionCard> */}
                {/* <a href="/searches" className="col-md-12 center cardHeader-option">
                        <h3>Find A Volunteer Opportunity</h3>
                    </a>
                    </OptionCard> */}

                {/* <OptionCard>
                    <a href="/services" className="col-md-12 center cardHeader-option">
                        <h3>Post a Service Request</h3>
                    </a>
                    </OptionCard> */}

                {/* <div className="col-md-2"> */}
                {/* empty */}
                {/* </div> */}
                {/* </div> */}
           
         </div>

         </div>
        )
    }
}

export default ChooseOptions
