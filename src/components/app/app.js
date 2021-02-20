import React from 'react';
import Header from '../header';
import Page404 from '../404/';
import HomePage from '../pages/home-page';
import CharactersPage from '../pages/characters-page';
import CharacterPage from '../pages/character-page';
import MoviesPage from '../pages/movies-page';
import MoviePage from '../pages/movie-page';

import { Route, Switch } from 'react-router-dom';


function App() {

  return (
    <div className="App">

	    <div className="color-bar-1"></div>
      <div className="color-bar-2 color-bg"></div>


      <div className="container">
        
      <Header />
      <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/characters" exact component={CharactersPage} />

                <Route path="/characters/:id" 
                       render={({ match }) => <CharacterPage itemId={match.params.id} />} />


                <Route path="/movies" exact component={MoviesPage} />
                <Route path="/movies/:id" 
                       render={({ match }) => <MoviePage itemId={match.params.id} />} />

                <Route component={Page404} />
        </Switch>
    

      </div>


    </div>
  );
}

export default App;
