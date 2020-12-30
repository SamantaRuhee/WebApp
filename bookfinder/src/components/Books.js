import React, { useState,useEffect } from 'react';
import SearchBar from './SearchBar';
import NavBar from './NavBar'
import getBookData from '../api/Bookapi';
import BookList from './BookList'
import Pagination from './Pagination'



function Books() {
  const [searchValue, setSearchValue] = useState("");
  const [books,setBooks] = useState([]);
  const [sort,setSort] = useState("");
  const [totalResults, setTotalResults] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [totalPages,setTotalPages] = useState(0);
  let sortedBooks = [];
  useEffect(() => {
    console.log("useEffect",totalResults);
    setTotalPages(Math.floor(totalResults/20))

    console.log("numberPages", totalPages);
    
  }, [totalResults])
  

  const handleSubmit = async (event) =>{
    event.preventDefault();
    await getBookData(searchValue,setBooks,currentIndex, setTotalResults)
    
  }
  const handleSearch = (event)=> {
    console.log(event.target.value);
    setSearchValue(event.target.value);
  }
  const handleSort = (event)=> {
    console.log(event.target.value);
    setSort(event.target.value);
    if(event.target.value == "Newest")
    {
       sortedBooks = books.sort((a,b)=>{
        return parseInt(b.volumeInfo.publishedDate.substring(0,4)) - parseInt(a.volumeInfo.publishedDate.substring(0,4))
        
        })
    }
    else if(event.target.value == "Oldest")
    {
        sortedBooks = books.sort((a,b)=>{
        return parseInt(a.volumeInfo.publishedDate.substring(0,4)) - parseInt(b.volumeInfo.publishedDate.substring(0,4))

        })

    }
    else if(event.target.value == "Ascending")
    {
      sortedBooks = books.sort((a,b) =>{
        return  a.volumeInfo.title.localeCompare(b.volumeInfo.title);
      })

    }
    else if(event.target.value == "Descending")
    {
      sortedBooks = books.sort((a,b) =>{
        return  a.volumeInfo.title.localeCompare(b.volumeInfo.title);
      })

      sortedBooks = sortedBooks.reverse();

    }
    setBooks(sortedBooks);
  }
  
  const nextPage = async (startIndex) =>{
    setCurrentIndex((startIndex*20))
    await getBookData(searchValue,setBooks, (startIndex*20), setTotalResults)
    console.log("startIndex", startIndex)
    
  }

  
  return (
    <div >
      <NavBar />
      <SearchBar handleSearch = {handleSearch} handleSubmit = {handleSubmit} handleSort = {handleSort} sort = {sort}></SearchBar>
      <BookList books = {books}></BookList>
      {totalPages > 1? (
      <Pagination 
      nextPage = {nextPage}
      currentPage = {Math.ceil(currentIndex/20)}
      totalPages = {totalPages}
      >
      </Pagination>):("")
      }
      
    </div>
  );
}

export default Books;