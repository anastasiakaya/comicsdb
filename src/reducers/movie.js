const updateMovie = (state, action) => {

    if (state === undefined) {
        return {
            movie: {},
            loading: true,
            error: null
        };
    }
  
    switch (action.type) {
        case 'FETCH_MOVIE_REQUEST':
        return {
            movie: {},
            loading: true,
            error: null
        };

        case 'FETCH_MOVIE_SUCCESS':
        return {
            movie: action.payload,
            loading: false,
            error: null
        };

        case 'FETCH_MOVIE_FAILURE':
        return {
            movie: {},
            loading: false,
            error: action.payload
        };

        default:
        return state.movie;
    }
  };
  
  export default updateMovie;
