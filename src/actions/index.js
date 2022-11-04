export const heroesFetching = () => {
    return {
        type: 'HEROES_FETCHING'
    }
}

export const heroesFetched = (heroes) => {
    return {
        type: 'HEROES_FETCHED',
        payload: heroes
    }
}

export const heroesFetchingError = () => {
    return {
        type: 'HEROES_FETCHING_ERROR'
    }
}

export const heroesDeleteItem = (id) => {
    return {
        type: 'HEROES_DELETE_ITEM',
        payload: id
    }
}

export const heroesAddItem = (hero) => {
    return {
        type: 'HEROES_ADD_ITEM',
        payload: hero
    }
}

export const filterFetching = () => {
    return {
        type: 'FILTER_FETCHING'
    }
}

export const filterFetched = (filters) => {
    return {
        type: 'FILTER_FETCHED',
        payload: filters
    }
}

export const filterFetchingError = () => {
    return {
        type: 'FILTER_FETCHING_ERROR'
    }
}

export const filterChange = (filter) => {
    return {
        type: 'FILTER_CHANGE',
        payload: filter
    }
}