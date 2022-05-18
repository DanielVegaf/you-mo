import { MoviesGrid } from "../components/MoviesGrid";
import { SearchMovie } from "../components/SearchMovie";

export function LandingPage() {
    return <div>
        <SearchMovie />
        <MoviesGrid />
    </div>
}