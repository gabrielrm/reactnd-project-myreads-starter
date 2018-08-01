import React from "react"
import { Route } from "react-router-dom";
import * as BooksAPI from './BooksAPI'
import "./App.css"
import Main from "./Main";
import Search from "./Search";

class BooksApp extends React.Component {
  state = {
    books: []
  }

  // load books
  componentDidMount() {
    this.updateBooks()
  }

 // move books to shelf
  moveBook = (book, shelf) => {
    BooksAPI.update(book, shelf);
    this.updateBooks();
  };

  // update books after getAll()
  updateBooks = () => {
    BooksAPI.getAll().then(books => {
      this.setState({ books });
    });
  };

  render() {
    const { books } = this.state;

    return (
      <div className="app">
        <Route
          exact path="/"
          render={() => (
            <Main
              books={books}
              moveBook={this.moveBook}
            />
          )}
        />
        <Route
          path="/search"
          render={() => (
            <Search
              books={books}
              moveBook={this.moveBook}
            />
          )}
        />
      </div>
    )
  }
}

export default BooksApp
