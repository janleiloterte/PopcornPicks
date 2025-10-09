import "../css/MovieCard.css"
import { useMovieContext } from "../contexts/MovieContext"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"

function MovieCard({ movie }) {
    const { isFavourite, addToFavourites, removeFromFavourites } = useMovieContext()
    const favourite = isFavourite(movie.id)

    const { isWatched, addToWatched, removeFromWatched } = useMovieContext()
    const watched = isWatched(movie.id)

    const { isList, addToList, removeFromList } = useMovieContext()
    const list = isList(movie.id)

    function onFavouriteClick(e) {
        e.preventDefault()

        if (favourite) removeFromFavourites(movie.id)
        else addToFavourites(movie)
    }

    function onWatchedClicked(e) {
        e.preventDefault()

        if (watched) removeFromWatched(movie.id)
        else addToWatched(movie)
    }

    function onListClicked(e) {
        e.preventDefault()

        if (list) removeFromList(movie.id)
        else addToList(movie)
    }

    const navigate = useNavigate()

    return (
        <div className="movie-card">
            <div className="movie-poster">
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title}></img>

                <div className="movie-overlay">
                    <button className={`favourite-button ${favourite ? "active" : ""}`} onClick={onFavouriteClick}>
                        ❤︎
                    </button>

                    <button className={`watched-button ${watched ? "active" : ""}`} onClick={onWatchedClicked}>
                        ✓
                    </button>

                    <button className={`list-button ${list ? "active" : ""}`} onClick={onListClicked}>
                        +
                    </button>

                    <div className="movie-info">
                        <h3> {movie.title} </h3>
                        <h4> {movie.release_date?.split("-")[0]} </h4>
                        <p> {movie.overview} </p>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default MovieCard