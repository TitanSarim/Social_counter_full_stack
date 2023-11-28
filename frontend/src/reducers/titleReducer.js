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


export const titleReducer = (state = {title: []}, action) =>{

    switch(action.type){

        case UPDATE_TITLE_REQUEST:
        case UPLOAD_TITLE_REQUEST:
        case GET_TITLE_REQUEST:
            return{
                loading: true,
                isAuthenticated: false,
            }

        case UPDATE_TITLE_SUCCESS:
        case UPLOAD_TITLE_SUCCESS:
        case GET_TITLE_SUCCESS:
            return{
                ...state,
                loading: false,
                isAuthenticated: true,
                title: action.payload,
            }

        case UPDATE_TITLE_FAILED:
        case UPLOAD_TITLE_FAILED:
        case GET_TITLE_FAILED:
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