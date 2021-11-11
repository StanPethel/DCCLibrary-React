import React, { Component } from 'react';

class BookCreator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            author: ''
          }
    }

    handleChange = (event) =>{
        this.setState({
        [event.target.name]: event.target.value
        });
    }
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.createNewBook(this.state)
    }

    render() { 
        return ( 
        <form onSubmit={this.handleSubmit}>
            <label>Book Name</label>
            <input name="title" onChange={this.handleChange} value= {this.state.title}/>
            <label>Author</label>
            <input name="author" onChange={this.handleChange} value={this.state.author}/>
            <button type="submit">Create Book</button>
        </form> 
        );
    }
}
 
export default BookCreator;