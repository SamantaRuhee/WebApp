import React from 'react';
import BookCard from './BookCard'


function BookList(props) {
  return (
    <div className = "container-fluid d-flex justify-content-center">
        <div className = "row">
            <div className = "col-md-4">
                {props.books.map((book, index)=>{
                    return(
                        <BookCard
                            key = {index}
                            image = {book.volumeInfo.imageLinks.thumbnail}
                            title = {book.volumeInfo.title}
                            author = {book.volumeInfo.authors}
                            published = {book.volumeInfo.publishedDate}
                            description = {book.volumeInfo.description}
                            props = {props}
                           
                        ></BookCard>
                    );
                })}
            </div>
        </div>
      
    </div>
  );
}

export default BookList;