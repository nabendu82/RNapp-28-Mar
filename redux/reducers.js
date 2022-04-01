import { SET_NAME, SET_EMAIL, GET_USERS } from "./types";

const initialState = {
    name: "",
    email: "",
    users: []
}

function userReducer(state = initialState, action){
    switch(action.type){
        case SET_NAME:
            return {
                ...state,
                name: action.payload
            }
        case SET_EMAIL:
            return {
                ...state,
                email: action.payload
            }
        case GET_USERS:
            return {
                ...state,
                users: action.payload
            }
        default:
            return state;
    }
}

export default userReducer;