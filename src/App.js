import React from "react"
import { Route } from "react-router-dom";
// import * as BooksAPI from './BooksAPI'
import "./App.css"
import Main from "./Main";
import Search from "./Search";

class BooksApp extends React.Component {
  state = {

  }

  render() {
    return (
      <div className="app">
        <Route
          exact path="/"
          render={() => (
            <Main />
          )}
        />
        <Route
          path="/search"
          render={() => (
            <Search />
          )}
        />
      </div>
    )
  }
}

export default BooksApp
