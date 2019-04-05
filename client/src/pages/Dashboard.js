import React, { Component } from 'react'
import HowTo from '../components/HowTo'

export class Dashboard extends Component {
    render() {
        return (
            <div className='wrapper card' style={{maxWidth:'50%', marginTop: '15%;', marginLeft:'20%'}}>
                <HowTo>
                <img className="card-img-top" src="https://scontent-ort2-2.xx.fbcdn.net/v/t1.0-9/56165120_10162153016410455_7936956965798805504_n.jpg?_nc_cat=103&_nc_ht=scontent-ort2-2.xx&oh=59fa5866bdf2cf9ccea3067e2f4558f8&oe=5D05F219" alt="Card image cap" />
                </HowTo>

            </div>
        )
    }
}

export default Dashboard




