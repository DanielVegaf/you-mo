import styles from '../styles/MovieCard.module.css'

export function MoviesCard({ movies }) {

    const imageUrl = "https://image.tmdb.org/t/p/w300" + movies.poster_path

    return (
        <div className={styles.movieCard}>
            <img
                src={imageUrl} alt={movies.title}
                className={styles.movieImage}
                width={230}
                height={345}
            />
            <div>{movies.title}</div>
        </div>
    )
}