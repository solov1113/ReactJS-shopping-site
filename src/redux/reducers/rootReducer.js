const initState = {
    inCard: [],
    isCartMenuActivated: false
}

const rootReducer = (state = initState, action) => {
    if(action.type === "ADD_LIST"){
        return {
            ...state,
            inCard: [...state.inCard, action.item]
        }
    }
    else if(action.type === "CART_MENU_ACTIVE"){
        return {
            ...state,
            isCartMenuActivated: action.status
        }
    }
    else{
        return state
    }
}

export default rootReducer;