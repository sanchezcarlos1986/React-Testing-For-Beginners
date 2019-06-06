import React from 'react'
import { render, cleanup, fireEvent } from 'react-testing-library'
import { MemoryRouter } from 'react-router-dom'
import Movie, { POSTER_PATH } from './Movie'

// Unmount everything from the dom after each test
afterEach(() => {
  cleanup()
  console.error.mockClear()
})

console.error = jest.fn()

test('<Movie />', () => {
  render(<Movie />)
  expect(console.error).toHaveBeenCalled()
})


test('<Movie /> with movie', () => {
  const props = {
    movie: {
      id: 1,
      title: 'Star Wars',
      poster_path: '/star-wars.jpg'
    }
  }

  const { getByTestId } = render(
    <MemoryRouter>
      <Movie {...props} />
    </MemoryRouter>)

  const movieLink = getByTestId('movie-link')
  const movieImage = getByTestId('movie-img')

  expect(console.error).not.toHaveBeenCalled()
  expect(movieLink.getAttribute('href')).toBe(`/${props.movie.id}`)
  expect(movieImage.getAttribute('alt')).toBe(props.movie.title)
  expect(movieImage.getAttribute('src')).toBe(`${POSTER_PATH}${props.movie.poster_path}`)
})
