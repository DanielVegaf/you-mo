
import styles from './styles/movieTitle.module.css'
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import { MovieDetails } from './pages/MovieDetails';
import { LandingPage } from './pages/LandingPage';

function App() {
  return (
    <Router>
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
        <Routes>
          <Route exact path="/movies/:movieId" element={ <MovieDetails /> }> </Route>
          <Route path="/" element={ <LandingPage />}> </Route>
        </Routes>
      </main>
    </Router>
  );
}

export default App;
