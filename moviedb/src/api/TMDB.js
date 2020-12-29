import axios from 'axios';

const TMDB = axios.create({
    baseURL:"https://api.themoviedb.org/3/",
});

const getMoviesByTerm=(SearchTerm, setMovies, page_number, setTotalPages)=>{
    TMDB.get("/search/movie",{
        params:{
           api_key: "3b6eb5e28f2263eca2ae0abaa40e5b12",
           query: SearchTerm,
           page: page_number, 
        },
    }).then((response)=>{
      console.log(response.data);
      setMovies(response.data.results);
      setTotalPages(response.data.total_pages);
    });
};

const getMovieDetails = (movieID, setCurrentMovie) => {
    TMDB.get("movie/" + movieID, {
      params: {
        api_key: "3b6eb5e28f2263eca2ae0abaa40e5b12",
      },
    }).then((response) => {
      console.log(response.data);
      setCurrentMovie(response.data);
    });
  };
  
  export { getMoviesByTerm, getMovieDetails };