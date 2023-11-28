import {
    UPLOAD_TITLE_REQUEST,
    UPLOAD_TITLE_SUCCESS,
    UPLOAD_TITLE_FAILED,
    UPDATE_TITLE_REQUEST,
    UPDATE_TITLE_SUCCESS,
    UPDATE_TITLE_FAILED,
    GET_TITLE_REQUEST,
    GET_TITLE_SUCCESS,
    GET_TITLE_FAILED,
    CLEAR_ERRORS
} from '../constants/TitleConstants'

import axios from  'axios'


export const getTitle = () => async(dispatch) =>{


    try {
        
        dispatch({type: GET_TITLE_REQUEST});

        let link = `/api/v1/getTitle`;

        const {data} = await axios.get(link);

        dispatch({
            type: GET_TITLE_SUCCESS,
            payload: data,
        })

    } catch (error) {

        dispatch({
            type: GET_TITLE_FAILED,
            payload: error.response.data.message,
        })

    }


}

export const createTitle = (formData) => async (dispatch) => {

    try {
        dispatch({type: UPLOAD_TITLE_REQUEST});
        
        const config = { headers: { "Content-Type": "application/json" } };

        const {data} = await axios.post(`/api/v1/createTitle`, 
            formData,
            config
        )

        dispatch({type: UPLOAD_TITLE_SUCCESS, payload: data.title});
        
    } catch (error) {
        dispatch({type: UPLOAD_TITLE_FAILED, payload: error.response.data.message});
    }

}

export const UpdateTitle = (formData) => async (dispatch) =>{

    try {
        dispatch({type: UPDATE_TITLE_REQUEST});
        
        const config = { headers: { "Content-Type": "application/json" } };

        const {data} = await axios.put(`/api/v1/updateTitle`, 
            formData,
            config
        )

        dispatch({type: UPDATE_TITLE_SUCCESS, payload: data.title});
        
    } catch (error) {
        dispatch({type: UPDATE_TITLE_FAILED, payload: error.response.data.message});
    }

}


export const clearErrors = () => async (dispatch) => {

    dispatch({type: CLEAR_ERRORS})

}