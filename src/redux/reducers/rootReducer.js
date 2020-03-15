const initState = {
    inCard: []
}

const rootReducer = (state = initState, action) => {
    if(action.type === "ADD_LIST"){
        return {
            ...state,
            inCard: [...state.inCard, action.item]
        }
    }
    else{
        return state
    }
}

export default rootReducer;