export default (state = {}, action) => {
    switch(action.type) {
        case 'PEOPLE_PAGE_LOADED':
            return {
                ...state,
                peoples: action.payload.results
            };
        case 'FILM_PAGE_LOADED':
            return {
                ...state,
                films: action.payload.results
            };
        default:
            return state;
    }
}