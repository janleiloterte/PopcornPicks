import { useState, useEffect } from "react"
import MovieCard from "../components/MovieCard"
import { searchMovies, getPopularMovies } from "../services/api"
import "../css/Home.css"
import { useLocation } from "react-router-dom"

function Home() {
    //[Name of state, Function that updates state(re renders return)]
    const [searchQuery, setSearchQuery] = useState("")
    const [movies, setMovies] = useState([])
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)
    const [title, setTitle] = useState("title")

    //function will be called if array changes, if array is empty it only load one time
    useEffect(() => {
        const loadPopularMovies = async () => {
            try {
                const popularMovies = await getPopularMovies()
                setMovies(popularMovies)
                setTitle("Popular")
            } catch (err) {
                console.log(err)
                setError("Failed to load movies...")
            }
            finally {
                setLoading(false)
            }
        }

        loadPopularMovies()
    }, [useLocation()])

    const handleSearch = async (e) => {
        e.preventDefault()

        //Checks if there is actual characters
        if (!searchQuery.trim()) {
            const popularMovies = await getPopularMovies()
            setMovies(popularMovies)
            setTitle("Popular")
            return
        }
        if (loading) return

        setLoading(true)
        try {
            const searchResults = await searchMovies(searchQuery)
            setMovies(searchResults)
            setTitle("Results")
            setError(null)
        } catch (err) {
            console.log(err)
            setError("Failed to load movies...")
        } finally {
            setLoading(false)
        }
    }

    const handleSurprise = async (e) => {
        e.preventDefault()

        const randomPage = Math.floor(Math.random() * 500) + 1
        const popularMovies = await getPopularMovies(randomPage)

        if (popularMovies.length > 0) {
            const randomIndex = Math.floor(Math.random() * popularMovies.length)
            const randomMovie = popularMovies[randomIndex]
            setMovies([randomMovie])
            setTitle("Result")
        }
    }

    return (
        <div className="home">

            <h2>Pick the perfect movie</h2>

            <div className="home-search">

                <form onSubmit={handleSearch} className="search-form">
                    <input
                        type="text"
                        placeholder="Search for movies..."
                        className="search-input"
                        value={searchQuery}
                        //When a change is made in the input box it will set the value to that on the text box
                        onChange={(e) => setSearchQuery(e.target.value)}>
                    </input>

                    <button
                        type="submit"
                        className="search-button">
                        Search
                    </button>
                </form>

                <form onSubmit={handleSurprise} className="surprise-form">
                    <button
                        type="submit"
                        className="search-button">
                        Surprise Me
                    </button>
                </form>

            </div>

            {error && <div className="error-message">(error)</div>}

            <p className="title">{title}</p>

                {loading ? (
                    <div className="loading">loading...</div>) : (
                    <div className="movies-grid">
                        {movies.map((movie) =>
                        (
                            <MovieCard
                                movie={movie}
                                key={movie.id}>
                            </MovieCard>
                        ))}
                    </div>
                )}
            </div>
    )
}

export default Home