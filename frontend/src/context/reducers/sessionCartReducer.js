

export const initialState = {
    id: "",
    item: []
}

const sessionCartReducer = (state = initialState, action) => {
    switch(action.type) {
        case "CART_SESSION": 
         return {
            ...state,
            id: action.id,
            item: action.item
         };
         default: return state;
    }
}

export default sessionCartReducer;