import {
    UPLOAD_LOGO_REQUEST,
    UPLOAD_LOGO_SUCCESS,
    UPLOAD_LOGO_FAILED,
    UPDATE_LOGO_REQUEST,
    UPDATE_LOGO_SUCCESS,
    UPDATE_LOGO_FAILED,
    GET_LOGO_REQUEST,
    GET_LOGO_SUCCESS,
    GET_LOGO_FAILED,
    CLEAR_ERRORS,
} from '../constants/LogoConstants'
import axios from  'axios'


export const getLogo = () => async(dispatch) =>{


    try {
        
        dispatch({type: GET_LOGO_REQUEST});

        let link = `/api/v1/getAvatar`;

        const {data} = await axios.get(link);

        dispatch({
            type: GET_LOGO_SUCCESS,
            payload: data,
        })

    } catch (error) {

        dispatch({
            type: GET_LOGO_FAILED,
            payload: error.response.data.message,
        })

    }


}

export const createLogo = (formData) => async (dispatch) => {

    try {
        dispatch({type: UPLOAD_LOGO_REQUEST});
        
        const config = { headers: { "Content-Type": "multipart/form-data" } };

        const {data} = await axios.post(`/api/v1/uploadAvatar`, 
            formData,
            config
        )

        dispatch({type: UPLOAD_LOGO_SUCCESS, payload: data.title});
        
    } catch (error) {
        dispatch({type: UPLOAD_LOGO_FAILED, payload: error.response.data.message});
    }

}

export const updateLogo = (formData) => async (dispatch) =>{

    try {
        dispatch({type: UPDATE_LOGO_REQUEST});
        
        const config = { headers: { "Content-Type": "multipart/form-data" } };

        console.log(formData);

        const {data} = await axios.put(`/api/v1/updateAvatar`, 
            formData,
            config
        )

        dispatch({type: UPDATE_LOGO_SUCCESS, payload: data.logo});
        
    } catch (error) {
        dispatch({type: UPDATE_LOGO_FAILED, payload: error.response.data.message});
    }

}


export const clearImageErrors = () => async (dispatch) => {

    dispatch({type: CLEAR_ERRORS})

}