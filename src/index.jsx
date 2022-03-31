import React from 'react';
import { render } from 'react-dom';

// components
import Header from './components/Header';
import MovieList from './components/MovieList';

// styles
import './style.css';

import movies from './movies';

const App = () => (
  <>
    <Header />
    <MovieList movies={movies}/>
  </>
);

render(<App />, document.querySelector('#app'));
