import React from 'react'

const BookDetail = (props) => {
    return(
        <article>
            <img src = {props.ImageSource} alt =""/>
            <h1>{props.title}</h1>
            <h4>{props.author}</h4>
        </article>
    )
}

export default BookDetail;