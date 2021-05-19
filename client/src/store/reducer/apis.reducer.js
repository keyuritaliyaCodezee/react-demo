import { GET_USER_API, API_USER_DELETE, IS_API_USER_UPDATED, USER_API_DATA_ADD, SET_EDIT_USER_MODAL_DATA, IS_MODAL_CLOSE, IS_MODAL_OPEN } from '../types'
const initialState = { 
    apiUsers: [],
    isApiUserUpdated: false,
    setUserUpdateData: {},
    isModalOpen: false
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
        case SET_EDIT_USER_MODAL_DATA:
            return {
                ...state, setUserUpdateData: action.payload
            };
        case IS_MODAL_OPEN: 
            return {
                ...state, isModalOpen: true
            }
        case IS_MODAL_CLOSE: 
            return {
                ...state, isModalOpen: false
            }
        default:
            return state
    }
} 