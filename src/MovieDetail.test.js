import React from 'react'
import { render, cleanup, waitForElement } from 'react-testing-library'
import MovieDetail, { POSTER_PATH } from './MovieDetail'

// Mock fetch for testing purposes
global.fetch = require('jest-fetch-mock')

// Unmount everything from the dom after each test
afterEach(cleanup)

test('<MovieDetail /> with params', async () => {
  // Fake response for mock fetch
  const movie = {
    id: 1,
    title: 'Star Wars: Episodio VIII',
    poster_path: '/star-wars-poster.jpg',
    backdrop_path: '/star-wars-backdrop.jpg',
    release_date: '2017',
    overview: 'Star Wars: Episodio VIII - Los últimos Jedi es una película estadounidense del género conocido como space opera, estrenada el 15 de diciembre de 2017 (en Estados Unidos).'
  }

  fetch.mockResponseOnce(JSON.stringify(movie))

  const props = {
    match: {
      params: {
        id: 1
      }
    }
  }

  const { getByText, getByTestId } = render(<MovieDetail {...props} />)
  await waitForElement(() => getByText(movie.title))

  const movieImage = getByTestId('movie-img')
  const movieTitle = getByTestId('movie-title')
  const movieReleaseDate = getByTestId('movie-release-date')
  const movieOverview = getByTestId('movie-overview')
  // debug()

  expect(movieImage.getAttribute('alt')).toBe(movie.title)
  expect(movieImage.getAttribute('src')).toBe(`${POSTER_PATH}${movie.poster_path}`)
  expect(movieTitle.textContent).toBe(movie.title)
  expect(movieReleaseDate.textContent).toBe(movie.release_date)
  expect(movieOverview.textContent).toBe(movie.overview)
})
