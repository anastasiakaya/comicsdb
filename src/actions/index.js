
const charactersRequested = () => {
  return {
    type: 'FETCH_CHARACTERS_REQUEST'
  };
};

const charactersLoaded = (newCharacters) => {
  return {
    type: 'FETCH_CHARACTERS_SUCCESS',
    payload: newCharacters
  };
};

const charactersError = (error) => {
  return {
    type: 'FETCH_CHARACTERS_FAILURE',
    payload: error
  };
};

const charactersSearched = () => {
  return {
    type: 'FETCH_CHARACTERS_SEARCH'
  };
};



/*const fetchCharactersOld = (comicsService, dispatch) => () => {
  dispatch(charactersRequested());
  comicsService.getAllCharacters()
    .then((data) => dispatch(charactersLoaded(data)))
    .catch((err) => dispatch(charactersError(err)));
};*/

const fetchCharacters = (comicsService, limit, offset) => () => (dispatch) => {
  dispatch(charactersRequested());
  //console.log(limit, offset);
  comicsService.getAllCharacters(limit, offset)
    .then((data) => dispatch(charactersLoaded(data)))
    .catch((err) => dispatch(charactersError(err)));
};

const searchCharacters = (comicsService, query) => () => (dispatch) => {
  console.log(query);
  dispatch(charactersSearched());
  //console.log(limit, offset);
  comicsService.searchCharacters(query)
    .then((data) => dispatch(charactersLoaded(data)))
    .catch((err) => dispatch(charactersError(err)));
};



const characterRequested = () => {
  return {
    type: 'FETCH_CHARACTER_REQUEST'
  };
};

const characterLoaded = (newCharacter) => {
  return {
    type: 'FETCH_CHARACTER_SUCCESS',
    payload: newCharacter
  };
};

const characterError = (error) => {
  return {
    type: 'FETCH_CHARACTER_FAILURE',
    payload: error
  };
};

const fetchCharacter = (comicsService, id) => () => (dispatch) => {
  dispatch(characterRequested());
  comicsService.getCharacter(id)
    .then((data) => dispatch(characterLoaded(data)))
    .catch((err) => dispatch(characterError(err)));
};






const moviesRequested = () => {
  return {
    type: 'FETCH_MOVIES_REQUEST'
  };
};

const moviesLoaded = (newMovies) => {
  return {
    type: 'FETCH_MOVIES_SUCCESS',
    payload: newMovies
  };
};

const moviesError = (error) => {
  return {
    type: 'FETCH_MOVIES_FAILURE',
    payload: error
  };
};

const moviesSearched = () => {
  return {
    type: 'FETCH_MOVIES_SEARCH'
  };
};

const fetchMovies = (comicsService, limit, offset) => () => (dispatch) => {
  dispatch(moviesRequested());
  //console.log(limit, offset);
  comicsService.getAllMovies(limit, offset)
    .then((data) => dispatch(moviesLoaded(data)))
    .catch((err) => dispatch(moviesError(err)));
};

const searchMovies = (comicsService, query) => () => (dispatch) => {
  console.log(query);
  dispatch(moviesSearched());
  comicsService.searchMovies(query)
    .then((data) => dispatch(moviesLoaded(data)))
    .catch((err) => dispatch(moviesError(err)));
};


const movieRequested = () => {
  return {
    type: 'FETCH_MOVIE_REQUEST'
  };
};

const movieLoaded = (newMovie) => {
  return {
    type: 'FETCH_MOVIE_SUCCESS',
    payload: newMovie
  };
};

const movieError = (error) => {
  return {
    type: 'FETCH_MOVIE_FAILURE',
    payload: error
  };
};

const fetchMovie = (comicsService, id) => () => (dispatch) => {
  dispatch(movieRequested());
  comicsService.getMovie(id)
    .then((data) => dispatch(movieLoaded(data)))
    .catch((err) => dispatch(movieError(err)));
};



export {
  fetchCharacters,
  fetchCharacter,
  searchCharacters,
  fetchMovies,
  searchMovies,
  fetchMovie
};
