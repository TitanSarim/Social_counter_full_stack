import {
    UPLOAD_SOCIAL_REQUEST,
    UPLOAD_SOCIAL_SUCCESS,
    UPLOAD_SOCIAL_FAILED,
    UPDATE_SOCIAL_REQUEST,
    UPDATE_SOCIAL_SUCCESS,
    UPDATE_SOCIAL_FAILED,
    GET_SOCIAL_REQUEST,
    GET_SOCIAL_SUCCESS,
    GET_SOCIAL_FAILED,
    CLEAR_ERRORS
} from '../constants/SocialConstants'
import axios from  'axios'


export const getUrl = () => async(dispatch) =>{


    try {
        
        dispatch({type: GET_SOCIAL_REQUEST});

        let link = `/api/v1/getUrls`;

        const {data} = await axios.get(link);

        dispatch({
            type: GET_SOCIAL_SUCCESS,
            payload: data,
        })

    } catch (error) {

        dispatch({
            type: GET_SOCIAL_FAILED,
            payload: error.response.data.message,
        })

    }


}

export const createUrl = (formData) => async (dispatch) => {

    try {
        dispatch({type: UPLOAD_SOCIAL_REQUEST});
        
        const config = { headers: { "Content-Type": "application/json" } };

        const {data} = await axios.post(`/api/v1/addurl`, 
            formData,
            config
        )

        dispatch({type: UPLOAD_SOCIAL_SUCCESS, payload: data.url});
        
    } catch (error) {
        dispatch({type: UPLOAD_SOCIAL_FAILED, payload: error.response.data.message});
    }

}

export const UpdateUrl = (formData) => async (dispatch) =>{

    try {
        dispatch({type: UPDATE_SOCIAL_REQUEST});
        
        const config = { headers: { "Content-Type": "application/json" } };

        const {data} = await axios.put(`/api/v1/updateUrl`, 
            formData,
            config
        )

        dispatch({type: UPDATE_SOCIAL_SUCCESS, payload: data.url});
        
    } catch (error) {
        dispatch({type: UPDATE_SOCIAL_FAILED, payload: error.response.data.message});
    }

}


export const clearErrors = () => async (dispatch) => {

    dispatch({type: CLEAR_ERRORS})

}