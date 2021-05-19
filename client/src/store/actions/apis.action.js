import axios from "axios"
import { GET_USER_API, API_USER_DELETE, IS_API_USER_UPDATED, USER_API_DATA_ADD } from '../types'

axios.defaults.baseURL = 'http://localhost:8080/api/'
export const getApiUser = () => (dispatch) => {
    return new Promise((resolve, reject) => {
        axios.get('user/getUser')
        .then((result) => {
            // console.log("user --->", result.data)
            resolve(dispatch({
                type: GET_USER_API,
                payload: result.data
            }))
            isApiUserUpdated(false)
        }).catch((error) => {
            reject(error)
        })
    })
}

export const addUserDatabase = (data) => (dispatch) => {
    return new Promise((resolve, reject) => {
        axios.post('user/addUser', data)
        .then((result) => {
            // console.log("user --->", result)
            // dispatch({
            //     type: USER_API_DATA_ADD,
            //     payload: data
            // })
            dispatch(isApiUserUpdated(false))
        }).catch((error) => {
            reject(error)
        })
    })
}

export const deleteApiUser = (data) => (dispatch) => {
    return new Promise((resolve, reject) => {
        axios.post('user/deleteUser', data)
        .then((result) => {
            isApiUserUpdated(false)
        }).catch((error) => {
            reject(error)
        })
    })
}

export const isApiUserUpdated = (data) => (dispatch) => {
    dispatch({
        type: IS_API_USER_UPDATED,
        payload: data
    })
}