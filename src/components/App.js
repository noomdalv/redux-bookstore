import React from 'react';
import BooksList from '../containers/BooksList';
import BooksForm from '../containers/BooksForm';

const App = () => (
  <div id="app-container">
    <BooksList />
    <BooksForm />
  </div>
);

export default App;
