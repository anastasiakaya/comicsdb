const updateCharacter = (state, action) => {

    if (state === undefined) {
        return {
            character: {},
            loading: true,
            error: null
        };
    }
  
    switch (action.type) {
        case 'FETCH_CHARACTER_REQUEST':
        return {
            character: {},
            loading: true,
            error: null
        };

        case 'FETCH_CHARACTER_SUCCESS':
        return {
            character: action.payload,
            loading: false,
            error: null
        };

        case 'FETCH_CHARACTER_FAILURE':
        return {
            character: {},
            loading: false,
            error: action.payload
        };

        default:
        return state.character;
    }
  };
  
  export default updateCharacter;
