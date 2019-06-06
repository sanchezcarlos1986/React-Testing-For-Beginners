import React, { PureComponent } from 'react'
import MovieForm from './MovieForm'

export default class NewMovie extends PureComponent {
  render() {
    return (
      <div>
        <h1 data-testid="page-title">New Movie</h1>
        <MovieForm />
      </div>
    )
  }
}
