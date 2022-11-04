const initialState = {
    heroes: [],
    heroesLoadingStatus: 'idle',
    filters: [],
    filterLoadingStatus: 'idle',
    filter: 'all'
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'HEROES_FETCHING':
            return {
                ...state,
                heroesLoadingStatus: 'loading'
            }
        case 'HEROES_FETCHED':
            return {
                ...state,
                heroes: action.payload,
                heroesLoadingStatus: 'idle'
            }
        case 'HEROES_FETCHING_ERROR':
            return {
                ...state,
                heroesLoadingStatus: 'error'
            }
        case 'HEROES_DELETE_ITEM':
            return {
                ...state,
                heroes: state.heroes.filter(hero => hero.id !== action.payload)
            }
        case 'HEROES_ADD_ITEM':
            return {
                ...state,
                heroes: [...state.heroes, action.payload]
            }
        case 'FILTER_FETCHING':
            return {
                ...state,
                filterLoadingStatus: 'loading'
            }
        case 'FILTER_FETCHED':
            return {
                ...state,
                filters: action.payload,
                filterLoadingStatus: 'idle'
            }
        case 'FILTER_FETCHING_ERROR':
            return {
                ...state,
                filterLoadingStatus: 'error'
            }
        case 'FILTER_CHANGE':
            return {
                ...state,
                filter: action.payload,
            }

        default: return state
    }
}

export default reducer;