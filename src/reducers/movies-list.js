const updateMoviesList = (state, action) => {

    if (state === undefined) {
        return {
            movies: [],
            loading: true,
            error: null,
            total: 0
        };
    }
  
    switch (action.type) {
        case 'FETCH_MOVIES_REQUEST':
        return {
            movies: [],
            loading: true,
            error: null,
            total: 0
        };

        case 'FETCH_MOVIES_SUCCESS':
        return {
            movies: action.payload.movies,
            loading: false,
            error: null,
            total: action.payload.total
        };

        case 'FETCH_MOVIES_FAILURE':
        return {
            movies: [],
            loading: false,
            error: action.payload,
            total: 0
        };

        case 'FETCH_MOVIES_SEARCH':
        return {
            movies: [],
            loading: true,
            error: null,
            total: 0
        };

        default:
        return state.moviesList;
    }
  };
  
  export default updateMoviesList;
