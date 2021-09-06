export function familiyReducer (state = [], action){
    switch(action.type){
        case 'FETCH_FAMILIY':
            return action.payload
        default: 
            return state
    }
}
