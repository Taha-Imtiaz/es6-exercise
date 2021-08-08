import axios from "axios";
import { GET_USERS } from './userConstants';

export const getUsers = () => async (dispatch) =>{
    try {
        let users = await axios.get(`https://jsonplaceholder.typicode.com/users`)
        dispatch({
            type: GET_USERS,
            payload: {
                users
            }
        })
    } catch (error) {
        console.log(error);
    }
}