import React, { Component } from 'react'
import PropTypes from 'prop-types'

class MovieForm extends Component {
  state = {
    text: '',
  }

  render() {
    const { submitForm } = this.props
    const { text } = this.state
    return (
      <div>
        <form
          data-testid="movie-form"
          onSubmit={() => submitForm({
            text,
          })}
        >
          <label htmlFor="username">
            Text
            <input
              id="username"
              type="text"
              onChange={e => this.setState({ text: e.target.value })}
            />
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

MovieForm.propTypes = {
  submitForm: PropTypes.func,
}

MovieForm.defaultProps = {
  submitForm: PropTypes.func,
}

export default MovieForm
