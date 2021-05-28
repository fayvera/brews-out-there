export const fetchBreweries = brewery => {
    return {
        type: "GET_BREWERY",
        brewery: Object.assign({}, brewery)
    }
}

export const findBrewery = breweryName => {
    return {
        type: "FIND_BREWERY",
        breweryName
    }
}

export const likeBrewery = breweryName => {
    return {
        type: "LIKE_BREWERY", 
        breweryName
    }
}

export const unlikeBrewery = breweryName => {
    return {
        type: "UNLIKE_BREWERY", 
        breweryName
    }
}