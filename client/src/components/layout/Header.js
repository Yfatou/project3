import React, { Component } from 'react'

export class Header extends Component {
  render() {
    return (
      <div>
        <header style={headerStyle}>
            <h1>My Todo List</h1>
        </header>
      </div>
    )
  }
}

const headerStyle = {
    background: 'purple',
    color: '#fff',
    textAlign: 'center', 
    padding: '10px'
}



export default Header
