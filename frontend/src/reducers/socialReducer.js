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

export const socialReducer = (state = {url: []}, action) =>{

    switch(action.type){

        case UPDATE_SOCIAL_REQUEST:
        case UPLOAD_SOCIAL_REQUEST:
        case GET_SOCIAL_REQUEST:
            return{
                loading: true,
                isAuthenticated: false,
            }

        case UPDATE_SOCIAL_SUCCESS:
        case UPLOAD_SOCIAL_SUCCESS:
        case GET_SOCIAL_SUCCESS:
            return{
                ...state,
                loading: false,
                isAuthenticated: true,
                url: action.payload,
            }

        case UPDATE_SOCIAL_FAILED:
        case UPLOAD_SOCIAL_FAILED:
        case GET_SOCIAL_FAILED:
            return{
                ...state,
                loading: false,
                error: action.payload
            }
 
        case  CLEAR_ERRORS:
            return{
                ...state,
                error: null,
            }

        default:
            return state;    
    }
}