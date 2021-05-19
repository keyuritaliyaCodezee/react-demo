import { GET_USER_API, API_USER_DELETE, IS_API_USER_UPDATED, USER_API_DATA_ADD } from '../types'
const initialState = { 
    apiUsers: [],
    isApiUserUpdated: false
}

export const apiStore = (state= initialState, action) => 
{
    switch (action.type) {
        case GET_USER_API:
            return {
                ...state, apiUsers: action.payload
            };
        // case API_USER_DELETE:
        //     return {
        //         ...state, apiUsers: action.payload
        //     };
        case USER_API_DATA_ADD:
            return {
                ...state, apiUsers: action.payload
            };
        case IS_API_USER_UPDATED:
            return {
                ...state, isApiUserUpdated: action.payload
            };
        default:
            return state
    }
} 