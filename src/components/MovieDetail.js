import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Overdrive from 'react-overdrive'
import PropTypes from 'prop-types'
import { AppContextConsumer } from './context'
import { Poster } from './Movie'
import apiKey from './api_key'

export const POSTER_PATH = 'http://image.tmdb.org/t/p/w154'
export const BACKDROP_PATH = 'http://image.tmdb.org/t/p/w1280'

function MovieDetail({ match }) {
  const [movie, setMovie] = useState({})

  const getMovieDetail = async () => {
    try {
      const res = await fetch(`https://api.themoviedb.org/3/movie/${match.params.id}?api_key=${apiKey}&language=en-US`)
      const movieResult = await res.json()
      setMovie(movieResult)
    } catch (e) {
      // eslint-disable-next-line no-console
      console.log(e)
    }
  }

  useEffect(() => {
    getMovieDetail()
  }, [])

  if (!movie.id) return null

  return (
    <MovieWrapper backdrop={`${BACKDROP_PATH}${movie.backdrop_path}`}>
      <MovieInfo>
        <Overdrive id={`${movie.id}`}>
          <Poster data-testid="movie-img" src={`${POSTER_PATH}${movie.poster_path}`} alt={movie.title} />
        </Overdrive>
        <AppContextConsumer>
          {
            value => <p>{value.title}</p>
          }
        </AppContextConsumer>
        <div>
          <h1 data-testid="movie-title">{movie.title}</h1>
          <h3 data-testid="movie-release-date">{movie.release_date}</h3>
          <p data-testid="movie-overview">{movie.overview}</p>
        </div>
      </MovieInfo>
    </MovieWrapper>
  )
}

MovieDetail.propTypes = {
  match: PropTypes.object
}

export default MovieDetail

const MovieWrapper = styled.div`
  position: relative;
  padding-top: 50vh;
  background: url(${props => props.backdrop}) no-repeat;
  background-size: cover;
`;

const MovieInfo = styled.div`
  background: white;
  text-align: left;
  padding: 2rem 10%;
  display: flex;
  > div {
    margin-left: 20px;
  }
  img {
    position: relative;
    top: -5rem;
  }
`;
