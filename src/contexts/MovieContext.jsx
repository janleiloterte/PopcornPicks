import { createContext, useState, useContext, useEffect } from "react"

const MovieContext = createContext()

export const useMovieContext = () => useContext(MovieContext)

export const MovieProvider = ({children}) => {
    const [favourites, setFavourites] = useState([])

    useEffect(() => {
        const storedFavs = localStorage.getItem("favourites")

        if (storedFavs) setFavourites(JSON.parse(storedFavs))
    }, [])

    useEffect(() => {
        localStorage.setItem('favourites', JSON.stringify(favourites))
    }, [favourites])

    const addToFavourites = (movie) => {
        setFavourites(prev => [...prev, movie])
    }

    const removeFromFavourites = (movieId) => {
        setFavourites(prev => prev.filter(movie => movie.id !== movieId))
    }

    const isFavourite = (movieId) => {
        return favourites.some(movie => movie.id === movieId)
    }

    //

    const [watched, setWatched] = useState([])

    useEffect(() => {
        const storedWatched = localStorage.getItem("watched")

        if (storedWatched) setWatched(JSON.parse(storedWatched))
    }, [])

    useEffect(() => {
        localStorage.setItem('watched', JSON.stringify(watched))
    }, [watched])

    const addToWatched = (movie) => {
        setWatched(prev => [...prev, movie])
    }

    const removeFromWatched = (movieId) => {
        setWatched(prev => prev.filter(movie => movie.id !== movieId))
    }

    const isWatched = (movieId) => {
        return watched.some(movie => movie.id === movieId)
    }

    //

    const [list, setList] = useState([])

    useEffect(() => {
        const storedList = localStorage.getItem("list")

        if (storedList) setList(JSON.parse(storedList))
    }, [])

    useEffect(() => {
        localStorage.setItem('list', JSON.stringify(list))
    }, [list])

    const addToList = (movie) => {
        setList(prev => [...prev, movie])
    }

    const removeFromList = (movieId) => {
        setList(prev => prev.filter(movie => movie.id !== movieId))
    }

    const isList = (movieId) => {
        return list.some(movie => movie.id === movieId)
    }

    //

    const [reviews, setReviews] = useState([])

    useEffect(() => {
        const storedReviews = localStorage.getItem("reviews")

        if (storedReviews) setList(JSON.parse(storedReviews))
    }, [])

    useEffect(() => {
        localStorage.setItem('reviews', JSON.stringify(reviews))
    }, [reviews])

    const addToReviews = (movie) => {
        setReviews(prev => [...prev, movie])
    }

    const removeFromReviews = (movieId) => {
        setReviews(prev => prev.filter(movie => movie.id !== movieId))
    }

    const isReviews = (movieId) => {
        return reviews.some(movie => movie.id === movieId)
    }

    const value = {
        favourites,
        addToFavourites,
        removeFromFavourites,
        isFavourite,
        watched,
        addToWatched,
        removeFromWatched,
        isWatched,
        list,
        addToList,
        removeFromList,
        isList,
        reviews,
        addToReviews,
        removeFromReviews,
        isReviews
    }

    return <MovieContext.Provider value={value}>
        {children}
    </MovieContext.Provider>
}