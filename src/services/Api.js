import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.params = {
    api_key: "a86899d726d6982dbed218ba90f0207b",
}

export const getTrendingMovies = async() => {
    const { data } = await axios.get('/trending/movie/day', {
        params: { page: 1, },
    });
    console.log(data);
    return data;
}

export const getMovieByQuery = async (query) => {
    const { data } = await axios.get('/search/movie', {
        params: {  query },
    })
    return data;
}

export const getMovieById = async (id) => {
    const { data } = await axios.get(`/movie/${id}`, {
        params: { id },
    })
    return data;
}
export const getMovieCast = async (id) => {
    const { data } = await axios.get(`/movie/${id}/credits`, {
        params: { id },
    })
    console.log(data);
    return data.cast;

}
export const getMovieReview= async (id) => {
    const { data } = await axios.get(`/movie/${id}/reviews`, {
        params: { id },
    })
    return data.results;
}