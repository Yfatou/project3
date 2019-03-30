import React, { Component } from 'react';
import OptionCard from '../components/OptionCard';


export class ChooseOptions extends Component {
    render() {
        return (
            <div >
                <div className="row">
                    <div className="col-md-2">
                        {/* empty */}
                    </div>
                    <OptionCard>
                    <a href="/searches" className="col-md-12 center cardHeader">
                        <h3>Find A Volunteer Opportunity</h3>
                    </a>
                    </OptionCard>

                    <OptionCard>
                    <a href="/services" className="col-md-12 center cardHeader">
                        <h3>Post a Service Request</h3>
                    </a>
                    </OptionCard>

                    <div className="col-md-2">
                        {/* empty */}
                    </div>
                </div>
            </div>
        )
    }
}

export default ChooseOptions
