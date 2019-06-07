/* eslint react/no-did-mount-set-state: 0 */
import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Movie from './Movie'
import apiKey from './api_key'

function MoviesList() {
  const [movies, setMovies] = useState([])

  const getMovies = async () => {
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`,
      )
      const { results } = await res.json()
      if (results.length) {
        setMovies(results)
      }
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    getMovies()
  }, [])

  if (!movies.length) return <h1 data-testid="loading">Loading</h1>
  return (
    <MovieGrid>
      {movies.map(movie => <Movie key={movie.id} movie={movie} />)}
    </MovieGrid>
  )
}

export default MoviesList

const MovieGrid = styled.div`
  display: grid;
  padding: 1rem;
  grid-template-columns: repeat(6, 1fr);
  grid-row-gap: 1rem;
`
