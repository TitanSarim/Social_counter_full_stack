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

export const logoReducer = (state = {logo: []}, action) =>{

    switch(action.type){

        case UPDATE_LOGO_REQUEST:
        case UPLOAD_LOGO_REQUEST:
        case GET_LOGO_REQUEST:
            return{
                loading: true,
                isAuthenticated: false,
            }

        case UPDATE_LOGO_SUCCESS:
        case UPLOAD_LOGO_SUCCESS:
        case GET_LOGO_SUCCESS:
            return{
                ...state,
                loading: false,
                isAuthenticated: true,
                logo: action.payload,
            }

        case UPDATE_LOGO_FAILED:
        case UPLOAD_LOGO_FAILED:
        case GET_LOGO_FAILED:
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