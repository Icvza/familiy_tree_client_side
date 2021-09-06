import { combineReducers } from "redux";
// import reducers into one  
import { membersReducer} from './membersReducers'


const rootReducer = combineReducers({
    members: membersReducer,
})

export default rootReducer