# MyReads Project

The project "MyReads: A Book Lending App" is part of Udacity's React Fundamentals course and use Udacity starter code that contain a static example of the CSS and HTML markup without interactive functionality that has to be obtain trough the React code.

## Functionality

Main page of application displays a list of three "shelves" as categories, Currently Reading, Want to Read and Read, each of wich contains a number of books.
Each book has a control that lets you select the shelf for that book. When you select a different shelf, the book moves there. The same control use as the default value, the current shelf the book is in.
The main page also has a link to a search page that allows you to find books to add to library, search page that has a text input where ss the value of the text input changes, the books that match that query are displayed on the page, along with a control that lets you add the book to library.

## Dependency

To succesfully run application, node and npm or yarn need to be allready installed.

## Installing

After clone or download and unzip, change to cloned or unzipped directory and install dependency needed to run, from terminal:
`npm install`
then start application
`npm start`

To access application, open an internet browser and go to address displayed in terminal

## What I learn

To use React JavaScript library for building user interfaces

## Important

This application use a backend server and is based on Udacity API that uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).