const updateCharactersList = (state, action) => {

    if (state === undefined) {
        return {
            characters: [],
            loading: true,
            error: null,
            total: 0
        };
    }
  
    switch (action.type) {
        case 'FETCH_CHARACTERS_REQUEST':
        return {
            characters: [],
            loading: true,
            error: null,
            total: 0
        };

        case 'FETCH_CHARACTERS_SUCCESS':
        return {
            characters: action.payload.characters,
            loading: false,
            error: null,
            total: action.payload.total
        };

        case 'FETCH_CHARACTERS_FAILURE':
        return {
            characters: [],
            loading: false,
            error: action.payload,
            total: 0
        };

        case 'FETCH_CHARACTERS_SEARCH':
        return {
            characters: [],
            loading: true,
            error: null,
            total: 0
        };

        default:
        return state.charactersList;
    }
  };
  
  export default updateCharactersList;
