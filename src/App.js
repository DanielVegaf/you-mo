import { MoviesGrid } from './components/MoviesGrid'
import styles from './styles/movieTitle.module.css'

function App() {
  return (
    <div className="App">
      <header>
        <h1
          className={styles.movieTitle}>
          You
          <span
            className={styles.movieTitle_span}>
            Mo
          </span>
        </h1>
      </header>
      <main>
        <MoviesGrid />
      </main>
    </div>
  );
}

export default App;
