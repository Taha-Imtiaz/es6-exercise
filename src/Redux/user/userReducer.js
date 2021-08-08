import { GET_USERS } from './userConstants';
let initialState = null

let userReducer = (state= initialState, {type, payload}) =>{
    switch (type) {
        case GET_USERS:
            
            return {...state, users: payload.users};
    
        default:
            return state;
    }
}
export default userReducer