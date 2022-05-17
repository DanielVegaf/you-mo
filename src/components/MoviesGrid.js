import { useState, useEffect } from 'react'
import { MoviesCard } from './MoviesCard'
import styles from '../styles/MovieGrid.module.css'
import { get } from '../utils/httpClient'

export function MoviesGrid() {

    const [movies, setMovies] = useState([])

    useEffect(() => {
        get("/discover/movie").then((data) => {
            setMovies(data.results)
        })
    }, [])


    return (
        <ul className={styles.movieGrid}>
            {movies.map((movies) => (
                <MoviesCard key={movies.id} movies={movies} />
            ))}
        </ul>
    )
}