import React from 'react';
import './Book.css'


const Book = (props) => {
    return ( 
        <div className="book">
            <div className="cover">
                <h1 className="title">{props.book.title}</h1>
                <h4 className="author">{props.book.author}</h4>
            </div>
        </div>
     );
}
 
export default Book;