
import React, { Component } from 'react'

export default class Counter extends Component {
  state = {
    count: 0,
  }

  count = () => {
    const { count } = this.state
    this.setState({ count: count + 1 })
  }

  render() {
    const { count } = this.state
    return (
      <div className="hello">
        <button
          type="button"
          onClick={this.count}
          data-testid="counter-button"
        >
          {count}
        </button>
      </div>
    )
  }
}
