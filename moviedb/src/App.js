import React,{useState} from "react";
import Navbar from './components/Navbar';
import SearchBar from './components/Searchbar';
import MovieList from './components/MovieList';
import {getMoviesByTerm} from "./api/TMDB";

const App = () =>{
    const[searchTerm, setSearchTerm]= useState("");
    const[movies, setMovies] = useState([]);

    const handleSubmit = async (event) =>{
        event.preventDefault();
        await getMoviesByTerm(searchTerm, setMovies);
    };

    const handleChange = (event) =>{
        setSearchTerm(event.target.value);
    };


    return(
    <div>
        <Navbar/>
        <SearchBar handleChange={handleChange} handleSubmit={handleSubmit}/>
        <MovieList movies={movies}/>
    </div>
    );
};

export default App;