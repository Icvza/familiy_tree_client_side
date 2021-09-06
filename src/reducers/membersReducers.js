export function membersReducer (state = [], action){
    switch(action.type){
        case 'FETCH_MEMBERS':
            return action.payload
        case 'ADD_MEMBER':
            return [...state, action.payload]
        default: 
            return state
    }
}




