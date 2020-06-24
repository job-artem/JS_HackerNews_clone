const initialState = {
    favourites: []
}

function favouritesReducer(state, action) {
    switch (action.type) {
        case "ADD_FAVOURITE":
            const addedFavourite = action.payload.favourite;
            const favourites = [...state.favourites, addedFavourite];
            return { favourites };
        case "REMOVE_FAVOURITE":
            const removedFavourite = action.payload.favourite;
            const favourites = state.favourites.fil
        default:
            return state;
    }
}

const action = { type: "ADD_FAVOURITE", payload: { favourite: { title: "story1 ", id: 1 } } }