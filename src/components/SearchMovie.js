import styles from '../styles/SearchMovie.module.css'
import { FiSearch } from 'react-icons/fi'
import { useState } from 'react'
import { useNavigate } from 'react-router'

export function SearchMovie(){

    const [searchText, setSearchText] = useState("")
    const history = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        history("/?search=" + searchText)
    }

    return (
        <form 
            className={styles.searchContainer} 
            onSubmit={handleSubmit}
        >
            <div className={styles.searchBox}>
                <input 
                    className={styles.searchInput} 
                    type='text' 
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                />
                <button className={styles.searchButton} type="submit">
                    <FiSearch size={20}/>
                </button>
            </div>
        </form>
    )
}