import React from 'react'
import { render, cleanup, waitForElement } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import MoviesList from './MoviesList'

// Mock fetch for testing purposes
global.fetch = require('jest-fetch-mock')

// Unmount everything from the dom after each test
afterEach(cleanup)

test('<MoviesList /> with params', async () => {
  // Fake response for mock fetch
  const movies = {
    results: [
      {
        adult: false,
        backdrop_path: '/v4yVTbbl8dE1UP2dWu5CLyaXOku.jpg',
        id: 420817,
        popularity: 338.118,
        poster_path: '/3iYQTLGoy7QnjcUYRJy4YrAgGvp.jpg',
        release_date: '2019-05-22',
        title: 'Aladdin',
      },
      {
        adult: false,
        backdrop_path: '/wf6VDSi4aFCZfuD8sX8JAKLfJ5m.jpg',
        id: 566555,
        popularity: 88.91,
        poster_path: '/1GyvpwvgswOrHvxjnw2FBLNkTyo.jpg',
        release_date: '2019-04-12',
        title: 'Detective Conan: The Fist of Blue Sapphire',
      }
    ]
  }

  fetch.mockResponseOnce(JSON.stringify(movies))

  const { getByTestId, getAllByTestId } = render(
    <MemoryRouter>
      <MoviesList />
    </MemoryRouter>
  )

  const loading = getByTestId('loading')

  expect(loading).toBeTruthy()
  await waitForElement(() => getAllByTestId('movie-link'))

  const moviesLinks = getAllByTestId('movie-link')

  expect(moviesLinks.length).toBe(movies.results.length)
})
