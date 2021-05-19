import { GET_USER_API } from '../types'
const initialState = { 
    apiUsers: [],
}

export const apiStore = (state= initialState, action) => 
{
    switch (action.type) {
        case GET_USER_API:
            return {
                ...state, apiUsers: action.payload
            };
        default:
            return state
    }
} 