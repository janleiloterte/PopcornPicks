const API_KEY = "2a1e634d934404c1aef357f88c0b9d7b"
const BASE_URL = "https://api.themoviedb.org/3"

//Async means this function is asynchronous
export const getPopularMovies = async (page = 1) => {
    const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}&page=${page}`)
    const data = await response.json()
    return data.results
}

export const searchMovies = async (query) => {
    const response = await fetch(
        `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(
        query)}`
    )
    const data = await response.json()
    return data.results
}