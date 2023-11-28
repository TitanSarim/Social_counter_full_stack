import  {
    UPLOAD_FOLLOWUPTITLE_REQUEST,
    UPLOAD_FOLLOWUPTITLE_SUCCESS,
    UPLOAD_FOLLOWUPTITLE_FAILED,
    UPDATE_FOLLOWUPTITLE_REQUEST,
    UPDATE_FOLLOWUPTITLE_SUCCESS,
    UPDATE_FOLLOWUPTITLE_FAILED,
    GET_FOLLOWUPTITLE_REQUEST,
    GET_FOLLOWUPTITLE_SUCCESS,
    GET_FOLLOWUPTITLE_FAILED,
    CLEAR_ERRORS
} from '../constants/FollowUpConstants'


import axios from  'axios'


export const getFollowUpTitle = () => async(dispatch) =>{


    try {
        
        dispatch({type: GET_FOLLOWUPTITLE_REQUEST});

        let link = `/api/v1/getFollowUpTitle`;

        const {data} = await axios.get(link);

        dispatch({
            type: GET_FOLLOWUPTITLE_SUCCESS,
            payload: data,
        })

    } catch (error) {

        dispatch({
            type: GET_FOLLOWUPTITLE_FAILED,
            payload: error.response.data.message,
        })

    }


}

export const createFollowUpTitle = (formData) => async (dispatch) => {

    try {
        dispatch({type: UPLOAD_FOLLOWUPTITLE_REQUEST});
        
        const config = { headers: { "Content-Type": "application/json" } };

        const {data} = await axios.post(`/api/v1/createFollowUpTitle`, 
            formData,
            config
        )

        dispatch({type: UPLOAD_FOLLOWUPTITLE_SUCCESS, payload: data.followUp});
        
    } catch (error) {
        dispatch({type: UPLOAD_FOLLOWUPTITLE_FAILED, payload: error.response.data.message});
    }

}

export const UpdateFollowUpTitle = (formData) => async (dispatch) =>{

    try {
        dispatch({type: UPDATE_FOLLOWUPTITLE_REQUEST});
        
        const config = { headers: { "Content-Type": "application/json" } };

        const {data} = await axios.put(`/api/v1/updateFollowUpTitle`, 
            formData,
            config
        )

        dispatch({type: UPDATE_FOLLOWUPTITLE_SUCCESS, payload: data.followUp});
        
    } catch (error) {
        dispatch({type: UPDATE_FOLLOWUPTITLE_FAILED, payload: error.response.data.message});
    }

}


export const clearErrors = () => async (dispatch) => {

    dispatch({type: CLEAR_ERRORS})

}