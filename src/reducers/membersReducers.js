export function membersReducer (state = [], action){
    switch(action.type){
        case 'FETCH_MEMBERS':
            return action.payload
        case 'ADD_MEMBER':
            return [...state, action.payload]
        case 'DELETE_MEMBER':
            //debugger    
            return state.filter( (member) => member.id !== action.payload.id)
        default: 
            return state
    }
}


//{ members: state.members.filter((member) => member.id !== action.payload)}
//return state.filter( (member) => member.id !== action.payload.id)

