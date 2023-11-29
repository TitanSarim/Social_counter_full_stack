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


export const userReducer = (state = {user: []}, action) =>{

    switch(action.type){

        case LOGIN_REQUEST:
        case UPDATE_USER_REQUEST:
            return{
                loading: true,
                isAuthenticated: false,
            }

        case LOGIN_SUCCESS:
        case UPDATE_USER_SUCCESS:
            return{
                ...state,
                loading: false,
                isAuthenticated: true,
                user: action.payload,
            }

        case LOGOUT_USER_SUCCESS:
            return{
                loading: false,
                user: null,
                isAuthenticated: false
            }

       
        case LOGIN_FAIL:
        case UPDATE_USER_FAILED:
            return{
                ...state,
                loading: false,
                isAuthenticated: false,
                user: null,
                error: action.payload,
            };


        case LOGOUT_USER_FAIL:
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