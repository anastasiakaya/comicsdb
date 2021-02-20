import updateCharactersList from './characters-list';
import updateCharacter from './character';
import updateMoviesList from './movies-list';
import updateMovie from './movie';

const reducer = (state, action) => {
  return {
    charactersList: updateCharactersList(state, action),
    character: updateCharacter(state, action),
    moviesList: updateMoviesList(state, action),
    movie: updateMovie(state, action)
  };
};

export default reducer;
