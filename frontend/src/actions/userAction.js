import{
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAIL,

    LOGOUT_USER_SUCCESS,
    LOGOUT_USER_FAIL,

    UPDATE_USER_SUCCESS,
    UPDATE_USER_REQUEST,
    UPDATE_USER_FAILED,

    CLEAR_ERRORS

} from '../constants/UserConstants'



import axios from 'axios'

// user login

export const login = (formData) => async (dispatch) => {

    try {
        dispatch({type: LOGIN_REQUEST});
        
        const config = { headers: { "Content-Type": "application/json" } };

        const {data} = await axios.post(`/api/v1/loggedIn`, 
            formData,
            config
        )

        dispatch({type: LOGIN_SUCCESS, payload: data.user});
        
    } catch (error) {
        dispatch({type: LOGIN_FAIL, payload: error.response.data.message});
    }

}


export const userLogOut = () => async (dispatch) => {

    try {


        await axios.get(`/api/v1/logout`);

        dispatch({
            type: LOGOUT_USER_SUCCESS,
        })
        
    } catch (error) {
        dispatch({type: LOGOUT_USER_FAIL, payload: error.response.data.message});
    }

}

export const UpdateUser = (formData) => async (dispatch) =>{

    try {
        dispatch({type: UPDATE_USER_REQUEST});
        
        const config = { headers: { "Content-Type": "application/json" } };

        const {data} = await axios.put(`/api/v1/usernameupdate`, 
            formData,
            config
        )

        dispatch({type: UPDATE_USER_SUCCESS, payload: data.user});
        
    } catch (error) {
        dispatch({type: UPDATE_USER_FAILED, payload: error.response.data.message});
    }

}
// clearing errors

export const clearErrors = () => async (dispatch) => {

    dispatch({type: CLEAR_ERRORS})

}