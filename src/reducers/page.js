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
        case 'PLANET_PAGE_LOADED':
            return {
                ...state,
                planets: action.payload.results
            }
        case 'STARSHIP_PAGE_LOADED':
            return {
                ...state,
                starships: action.payload.results
            }
        case 'VEHICLE_PAGE_LOADED':
            return {
                ...state,
                vehicle: action.payload.results
            }
        case 'SPECIES_PAGE_LOADED':
            return {
                ...state,
                species: action.payload.results
            }
        default:
            return state;
    }
}