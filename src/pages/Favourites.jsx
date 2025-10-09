import "../css/Favourites.css"
import { useMovieContext } from "../contexts/MovieContext"
import MovieCard from "../components/MovieCard"

function Favourites() {
    const { favourites } = useMovieContext();

    if (favourites.length === 0) {
    return (
        <div className="favourites-empty">
            <h2>No Picks Yet</h2>
            <p>Start adding to Picks to appear here.</p>
        </div>
    );
    }

    return (
            <div classNme="favourites">
                <h2>Your Favourites</h2>
                <div className="movies-grid">
                    {favourites.map((movie) => (
                        <MovieCard movie={movie} key={movie.id} />
                    ))}
                </div>
            </div>
        );

}

export default Favourites