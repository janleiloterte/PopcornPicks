import "../css/List.css"
import { useMovieContext } from "../contexts/MovieContext"
import MovieCard from "../components/MovieCard"

function Watched() {
    const { watched } = useMovieContext();

    if (watched.length === 0) {
    return (
        <div className="favourites-empty">
            <h2>No Watched  Yet</h2>
            <p>Start adding to Watched to appear here.</p>
        </div>
    );
    }

    return (
            <div className="favourites">
                <h2>Your Watched</h2>
                <div className="movies-grid">
                    {watched.map((movie) => (
                        <MovieCard movie={movie} key={movie.id} />
                    ))}
                </div>
            </div>
        );

}

export default Watched