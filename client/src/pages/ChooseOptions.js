import React, { Component } from 'react';


export class ChooseOptions extends Component {
    render() {
        return (
            <div >
                <div className="row">
                    <div className="col-md-2">
                        {/* empty */}
                    </div>

                    <a href="/searches" className="col-md-3 card">
                        <h3>Find A Volunteer Opportunity</h3>
                    </a>

                    <a href="/services" className="col-md-3 card">
                        <h3>Post a Service Request</h3>
                    </a>

                    <div className="col-md-2">
                        {/* empty */}
                    </div>
                </div>
            </div>
        )
    }
}

export default ChooseOptions
