import axios from "axios"
import { GET_USER_API } from '../types'

axios.defaults.baseURL = 'http://localhost:8080/api/'
export const getApiUser = () => (dispatch) => {
    return new Promise((resolve, reject) => {
        axios.get('user/getUser')
        .then((result) => {
            // console.log("user --->", result.data)
            dispatch({
                type: GET_USER_API,
                payload: result.data
            })
        })
    })
}

export const addUserDatabase = (data) => (dispatch) => {
    return new Promise((resolve, reject) => {
        axios.post('user/addEditUser', data)
        .then((result) => {
            // console.log("user --->", result.data)
            dispatch({
                type: 'USER_DATA_ADD',
                payload: data
            })
            // isUserUpdated(false)
        })
    })
}
