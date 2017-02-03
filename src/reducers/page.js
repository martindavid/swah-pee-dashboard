export default (state = {}, action) => {
    switch(action.type) {
        case 'PEOPLE_PAGE_LOADED':
            return {
                ...state,
                peoples: action.payload.results
            };
        default:
            return state;
    }
}