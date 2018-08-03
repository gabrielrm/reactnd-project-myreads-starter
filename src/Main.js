import React from "react";
import { Link } from "react-router-dom"
import Book from "./Book";

const Main = props => {
  const shelves = [
    {key: "currentlyReading", title: "Currently Reading"},
    {key: "wantToRead", title: "Want to Read"},
    {key: "read", title: "Read"}
  ];

  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>

      <div className="list-books-content">
        {/* displaying shelves */}
        {shelves.map( shelf => {
          return (
            <div className="shelves" key={shelf.key}>
              <div className="bookshelf">
                {/* shelf title */}
                <h2 className="bookshelf-title">{shelf.title}</h2>
                <div className="bookshelf-books">
                  <ol className="books-grid">
                    {/* dynamycally add books on shelves */}
                    {props.books
                      // filtered by shelf
                      .filter(book => book.shelf === shelf.key)
                      .map(book => (
                        <li key={book.id}>
                          <Book
                            book={book}
                            onShelf={shelf.key}
                            moveBook={props.moveBook}
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

export default Main
