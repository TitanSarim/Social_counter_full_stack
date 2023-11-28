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


export const followUpReducer = (state = {followUp: []}, action) =>{

    switch(action.type){

        case UPDATE_FOLLOWUPTITLE_REQUEST:
        case UPLOAD_FOLLOWUPTITLE_REQUEST:
        case GET_FOLLOWUPTITLE_REQUEST:
            return{
                loading: true,
                isAuthenticated: false,
            }

        case UPDATE_FOLLOWUPTITLE_SUCCESS:
        case UPLOAD_FOLLOWUPTITLE_SUCCESS:
        case GET_FOLLOWUPTITLE_SUCCESS:
            return{
                ...state,
                loading: false,
                isAuthenticated: true,
                followUp: action.payload,
            }

        case UPDATE_FOLLOWUPTITLE_FAILED:
        case UPLOAD_FOLLOWUPTITLE_FAILED:
        case GET_FOLLOWUPTITLE_FAILED:
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