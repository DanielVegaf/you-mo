import movies from '../movies.json'
import { MoviesCard } from './MoviesCard'
import styles from '../styles/MovieGrid.module.css'

export function MoviesGrid() {

    console.log(movies)

    return (
        <ul className={styles.movieGrid}>
            {movies.map((movies) => (
                <MoviesCard key={movies.id} movies={movies}/>
            ))}
        </ul>
    )
}