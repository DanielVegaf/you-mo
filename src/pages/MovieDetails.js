import styles from '../styles/MovieDetails.module.css'
import { Spinner } from "../components/Spinner";
import { useParams } from 'react-router'
import { useEffect, useState } from "react";
import { get } from "../utils/httpClient";

export function MovieDetails() {
    const { movieId } = useParams()
    const [movie, setMovie] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setIsLoading(true)

        get("/movie/" + movieId).then((data) => {
            setIsLoading(false)
            setMovie(data)
        })
    }, [movieId])

    if(isLoading){
        return <Spinner />
    }

    if(!movie){
        return null
    }

    const imageUrl = "https://image.tmdb.org/t/p/w500" + movie.poster_path

    return <div>
        <div className={styles.detailsContainer}>
            <img
                className={`${styles.column} ${styles.movieImage}`}
                src={imageUrl} alt={movie.title}
            />
            <div className={`${styles.column} ${styles.movieDetails}`}>
                <p>
                    <strong>Title: </strong>
                    {movie.title}
                </p>
                <p>
                    <strong>Genres: </strong>
                    {movie.genres.map((genre) => genre.name).join(", ")}
                </p>
                <p>
                    <strong>Description: </strong>
                    {movie.overview}
                </p>
            </div>
        </div>
    </div>
}