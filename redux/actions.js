import { SET_NAME, SET_EMAIL, GET_USERS } from "./types";
const API_URL = 'https://jsonplaceholder.typicode.com/users';

export const getUsers = () => {
    try {
        return async dispatch => {
            const result = await fetch(API_URL, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const json = await result.json();
            if(json){
                dispatch({
                    type: GET_USERS,
                    payload: json
                })
            } else {
                console.log('Error: ', json);
            }
        }
    } catch (error) {
        console.log(error)
    }
}

export const setName = name => dispatch => {
    dispatch({
        type: SET_NAME,
        payload: name
    });
}

export const setEmail = email => dispatch => {
    dispatch({
        type: SET_EMAIL,
        payload: email
    });
}