import React from 'react'

// components
import Actor from './Actor.jsx'

// styles
import './Movie.css'

const Movie = ({ title, poster, year, rating, director, genre, cast}) => {
    return (
        <>
            <div className="movie__info">
                <span className='movie__rating'>{rating}/10</span>
                <img className='movie__image' src={`../assets/${poster}`} alt={title}/>
            </div>
            <div className='movie__description'>
                <h3 className='movie__name'>{title}</h3>
                <p className='movie__text'><strong>Rok vydání:</strong> {year}</p>
                <p className='movie__text'><strong>Žánr:</strong> {genre}</p>
                <p className='movie__text'><strong>Režie:</strong> {director}</p>
                <h4 className='movie__main-roles'>V hlavních rolích:</h4>
                    <div className='container'>
                    {cast.map(item => (
                        <div className='movie__cast'>
                            <Actor name={item.name} as={item.as} />
                        </div> 
                    ))}
                    </div> 
            </div>  
        </>
    )
}

export default Movie