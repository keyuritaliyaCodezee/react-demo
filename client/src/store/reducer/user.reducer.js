import { GET_USER_API } from '../types'
const initialState = { 
    users: [],
    isUserUpdated: false,
    userEditData: {}
}

export const userStore = (state= initialState, action) => 
{
    switch (action.type) {
        case GET_USER_API:
            return {
                ...state, users: [...state.users]
            };
        case 'USER_DATA_ADD':
            let datas = action.payload
            datas.index = state.users.length + 1
            return {
                ...state, users: [ ...state.users, datas]
            };
        case 'IS_USER_UPDATED':
            return {
                ...state, isUserUpdated: action.payload
            };
        case 'USER_UPDATE':
            let index = state.users.findIndex((item) => item.index === action.payload.index)
            // console.log("index --->", action.payload)
            state.users[index] = action.payload
            return {
                ...state, users: state.users
            };
        case 'SET_USER_UPDATE_DATA':
            return {
                ...state, userEditData: action.payload
            };
        case 'DELETE_USER':
            let data = state.users.filter((item) => item.index !== action.payload.index)
            console.log("delete -->", action.payload)
            return {
                ...state, users: data
            };
        case 'USER_SET_REMOVE':
            return {
                ...state, users : []
            }
        default:
            return state
    }
} 