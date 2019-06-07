import React, { useState } from 'react'
import PropTypes from 'prop-types'

function MovieForm({ submitForm }) {
  const [text, setText] = useState('')

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
            onChange={e => setText(e.target.value)}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

MovieForm.propTypes = {
  submitForm: PropTypes.func,
}

MovieForm.defaultProps = {
  submitForm: PropTypes.func,
}

export default MovieForm
