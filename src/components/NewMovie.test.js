import React from 'react'
import { render, cleanup } from '@testing-library/react'
import NewMovie from './NewMovie'

// Unmount everything from the dom after each test
afterEach(cleanup)

test('<NewMovie />', () => {
  // Renders component
  const {
    // debug,
    getByTestId,
    queryByTestId
  } = render(<NewMovie />)

  // Outputs dom as string
  // debug()

  const title = getByTestId('page-title')
  const movieForm = queryByTestId('movie-form')

  // Asserts title is an H1
  expect(title.tagName).toBe('H1')

  // Asserts title text content is New Movie
  expect(title.textContent).toBe('New Movie')

  // Integration test
  // Asserts MovieForm exists
  expect(movieForm).toBeTruthy()
})
