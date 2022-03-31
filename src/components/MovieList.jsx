import React from 'react'
import Movie from './Movie'

import './MovieList.css'

const MovieList = ({movies}) => {
    return(
        <div>
            <ul className="movie-list">
                {movies.map(movie => (
                    <li className='movie' key={movie.id}>
                        <Movie 
                            title={movie.title}
                            poster={movie.poster} 
                            year={movie.year}
                            rating={movie.rating}
                            director={movie.director}
                            genre={movie.genre}
                            cast={movie.cast}
                        />
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default MovieList