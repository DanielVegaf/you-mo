import { useState, useEffect } from 'react'
import { MoviesCard } from './MoviesCard'
import styles from '../styles/MovieGrid.module.css'
import { get } from '../utils/httpClient'
import { Spinner } from "../components/Spinner"
import { useLocation } from 'react-router-dom'

export function MoviesGrid() {

    function useQuery(){
        return new URLSearchParams(useLocation().search)
    }

    const [movies, setMovies] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const query = useQuery()
    const search = query.get("search")

    useEffect(() => {
        setIsLoading(true)
        const searchUrl = search ? "/search/movie?query=" + search : "/discover/movie"
        get(searchUrl).then((data) => {
            setMovies(data.results)
            setIsLoading(false)
        })
    }, [search])

    if(isLoading){
        return <Spinner />
    }


    return (
        <ul className={styles.movieGrid}>
            {movies.map((movies) => (
                <MoviesCard key={movies.id} movies={movies} />
            ))}
        </ul>
    )
}