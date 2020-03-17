const initState = {
    inCard: [],
    isCartMenuActivated: false,
    filters: []
}

const rootReducer = (state = initState, action) => {
    if(action.type === "ADD_LIST"){

        return {
            ...state,
            inCard: [...state.inCard, action.item]
        }
        
    }
    else if(action.type === "INCREMENT_ITEM_PIECE"){
        state.inCard.find(x => x.id === action.item.id).piece++
        return {
            ...state,
            inCard: [...state.inCard]
        }
    }
    else if(action.type === "DECREMENT_ITEM_PIECE"){
        if(action.item.piece !== 1)
            state.inCard.find(x => x.id === action.item.id).piece--
        else if(action.item.piece === 1){
            let index = state.inCard.findIndex(x => x.id === action.item.id)
            state.inCard.splice(index, 1)
        }
        return {
            ...state,
            inCard: [...state.inCard]
        }
    }
    else if(action.type === "CART_MENU_ACTIVE"){
        return {
            ...state,
            isCartMenuActivated: action.status
        }
    }
    else if(action.type === "UPDATE_FILTER"){
        (state.filters.findIndex(x => x === action.size)) === -1 ? state.filters.push(action.size) : state.filters.splice((state.filters.findIndex(x => x === action.size)), 1)
        return {
            ...state,
            filters: [...state.filters]
        }
    }

    else{
        return state
    }
}

export default rootReducer;