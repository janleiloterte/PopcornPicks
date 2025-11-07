import "../css/List.css"
import { useMovieContext } from "../contexts/MovieContext"
import MovieCard from "../components/MovieCard"

function List() {
    const { list } = useMovieContext();

    if (list.length === 0) {
    return (
        <div className="favourites-empty">
            <h2>No Watch List Yet</h2>
            <p>Start adding to Watch List to appear here.</p>
        </div>
    );
    }

    return (
            <div className="favourites">
                <h2>Your Watch List</h2>
                <div className="movies-grid">
                    {list.map((movie) => (
                        <MovieCard movie={movie} key={movie.id} />
                    ))}
                </div>
            </div>
        );

}

export default List