import React, { Component } from "react";
import { Link } from "react-router-dom"
import Book from "./Book";

class Main extends Component {
  render() {
    const shelf = ["currentlyReading", "wantToRead", "read"];
    const shelfTitle = ["Currently Reading", "Want To Read", "Read"];

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>

        <div className="list-books-content">
          {/* displaying shelves */}
          {shelf.map((shelf, id) => {
            return (
              <div className="shelves" key={id}>
                <div className="bookshelf">
                  {/* shelf title */}
                  <h2 className="bookshelf-title">{shelfTitle[id]}</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                      {/* dynamycally add books on shelves */}
                      {this.props.books
                        // filtered by shelf
                        .filter(book => book.shelf === shelf[id])
                        .map(book => (
                          <li key={book.id}>
                            <Book
                              book={book}
                              onShelf={shelf[id]}
                              moveBook={this.props.moveBook}
                            />
                          </li>
                        ))}
                    </ol>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>
      </div>
    );
  }
}

export default Main
