import axios from "axios"
import { GET_USER_API, API_USER_DELETE, IS_API_USER_UPDATED, USER_API_DATA_ADD, SET_EDIT_USER_MODAL_DATA, IS_MODAL_OPEN, IS_MODAL_CLOSE } from '../types'

axios.defaults.baseURL = 'http://localhost:8080/api/'
export const getApiUser = () => (dispatch) => {
    return new Promise((resolve, reject) => {
        axios.get('user/getUser')
        .then((result) => {
            // console.log("user --->", result.data)
            const{ data } = result
            if(data) {
                dispatch({
                    type: GET_USER_API,
                    payload: data
                })
                isApiUserUpdated(false)
                resolve({ message: 'success'})
            }else{
                isApiUserUpdated(false)
                reject({ message: 'error'})
            }
        }).catch((error) => {
            console.log("get User erro", error)
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
            if(result) {
                dispatch(isApiUserUpdated(false))
                resolve({ message: 'success'})
            }else{
                reject({ message: 'error'})
            }
        }).catch((error) => {
            isApiUserUpdated(false)
            reject(error)
        })
    })
}

export const editUserDatabase = (data) => (dispatch) => {
    return new Promise((resolve, reject) => {
        axios.post('user/addUser', data)
        .then((result) => {
            // console.log("user --->", result)
            // dispatch({
            //     type: USER_API_DATA_ADD,
            //     payload: data
            // })
            if(result) {
                dispatch(isApiUserUpdated(false))
                resolve({ message: 'success'})
            }else{
                reject({ message: 'error'})
            }
        }).catch((error) => {
            isApiUserUpdated(false)
            reject(error)
        })
    })
}

export const deleteApiUser = (data) => (dispatch) => {
    return new Promise((resolve, reject) => {
        axios.post('user/deleteUser', data)
        .then((result) => {
            if(result) {
                isApiUserUpdated(false)
            }else{
                reject({ message: 'error'})
            }
        }).catch((error) => {
            isApiUserUpdated(false)
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

export const setEditUserDataApi = (data) => (dispatch) => {
    dispatch({
        type: SET_EDIT_USER_MODAL_DATA,
        payload: data
    })
}

export const isModalOpen = () => (dispatch) => {
    dispatch({
        type: IS_MODAL_OPEN
    })
}
export const isModalClose = () => (dispatch) => {
    dispatch({
        type: IS_MODAL_CLOSE
    })
}