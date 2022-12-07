import React from 'react'

const MovieDetails = ({movie}) => {


    return (
        <>
            <li>{movie.title} {movie.releaseDate}</li>

        </>
    )
    }

export default MovieDetails