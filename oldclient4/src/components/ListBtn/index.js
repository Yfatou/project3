import React, { Component } from 'react'

export class ListBtn extends Component {
  render() {
    return (
      <div>
        <a rel="noreferrer noopener" target="_blank" href={this.available}>
          Go to the Contact info!
            </a>
        <button> Available?</button>
      </div>
    )
  }
}

export default ListBtn





