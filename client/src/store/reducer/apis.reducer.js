import * as Actions from '../actions'
const initialState = { 
    apiUsers: [],
    isApiUserUpdated: false,
    setUserUpdateData: {},
    isModalOpen: false
}

export const apiStore = (state= initialState, action) => 
{
    switch (action.type) {
        case Actions.GET_USER_API:
            return {
                ...state, apiUsers: action.payload
            };
        // case Actions.API_USER_DELETE:
        //     return {
        //         ...state, apiUsers: action.payload
        //     };
        case Actions.USER_API_DATA_ADD:
            return {
                ...state, apiUsers: action.payload
            };
        case Actions.IS_API_USER_UPDATED:
            return {
                ...state, isApiUserUpdated: action.payload
            };
        case Actions.SET_EDIT_USER_MODAL_DATA:
            return {
                ...state, setUserUpdateData: action.payload
            };
        case Actions.IS_MODAL_OPEN: 
            return {
                ...state, isModalOpen: true
            }
        case Actions.IS_MODAL_CLOSE: 
            return {
                ...state, isModalOpen: false
            }
        default:
            return state
    }
} 