import React, { Component } from "react";
import { Link } from "react-router-dom"
import * as BooksAPI from "./BooksAPI";
import Book from "./Book";

class Search extends Component {
  state = {
    query: "",
    booksFound: []
  }
  // update query
  updateQuery = (query) => {
    this.setState({query})
    // solve emptying search string error
    if (!query) {
      this.setState({ booksFound: [] });
    } else {
      // put search result of query in booksFound and refresh
      BooksAPI.search(query).then(booksFound => {
        // solve books not found error
        if (booksFound.error) {
          this.setState({ booksFound: [] });
        } else {
          this.setState({booksFound})
        }
      })
    }
  }

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search">
            Close
          </Link>
          <div className="search-books-input-wrapper">

            <input
              type="text"
              // put cursor on input field
              autoFocus={true}
              placeholder="Search by title or author"
              // update query on every input change
              onChange={event => this.updateQuery(event.target.value)}
              value={this.state.query}
            />

          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {/* display books found on search */}
            {this.state.booksFound.map(bookFound => (
                <li key={bookFound.id}>
                  <Book
                    // pass bookFound as props in Book
                    book={bookFound}
                  />
                </li>
              ))
            }
          </ol>
        </div>
      </div>
    );
  }
}

export default Search
