import React, { Component } from "react";
import Jumbo from "../components/Jumbotron";
import { List, ListItem } from "../components/Results";
import API from "../utils/API";

class SavedBook extends Component {
    state = {
        books: []
    };

    componentDidMount() {
        this.loadBooks();
    }

    loadBooks = () => {
        API.getBooks()
        .then(res =>
                this.setState({ books: res.data }
                )
                )
            .catch(err => console.log(err));
    }

    deleteBook = (id) => {
        API.deleteBook(id)
            .then(res => this.loadBooks())
            .catch(err => console.log(err))
    }

    render() {
        return (
            <div>
                <Jumbo />
                <List>
                    {this.state.books.map(book => (
                        <ListItem key={book._id}>
                                <a className="btn btn-success deleteBtn" role="button" href={book.url} target="_blank">View Book</a>
                                <h4>{book.title} <button className="btn btn-success deleteBtn" role="button" onClick={() => this.deleteBook(book._id)}>Remove from list</button> </h4>
                                <h5>by  {book.author.map(author => (
                                                    author + " "))} </h5>
                                <img src={book.img}></img>
                                <p>{book.synopsis}</p>
                        </ListItem>
                    ))}
                </List>
            </div>
  );
}

}
export default SavedBook;