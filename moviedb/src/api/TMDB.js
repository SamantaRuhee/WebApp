import axios from 'axios';

const TMDB = axios.create({
    baseURL:"https://api.themoviedb.org/3/",
});

const getMoviesByTerm=(SearchTerm, setMovies)=>{
    TMDB.get("/search/movie",{
        params:{
           api_key: "3b6eb5e28f2263eca2ae0abaa40e5b12",
           query: SearchTerm, 
        },
    }).then((response)=>{
        setMovies(response.data);
    });
};

export {getMoviesByTerm}