import axios from "axios"
// import appConstamnt from '../../components/appConfigration'

export const GET_USER_API  = 'GET_USER_API'
export const API_USER_DELETE  = 'API_USER_DELETE'
export const IS_API_USER_UPDATED = 'IS_API_USER_UPDATED'
export const USER_API_DATA_ADD = 'USER_API_DATA_ADD'
export const SET_EDIT_USER_MODAL_DATA = 'SET_EDIT_USER_MODAL_DATA'
export const IS_MODAL_OPEN = 'IS_MODAL_OPEN'
export const IS_MODAL_CLOSE = 'IS_MODAL_CLOSE'

axios.defaults.baseURL = 'http://localhost:8000/api/'
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
                dispatch(isApiUserUpdated(true))
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
                dispatch(isApiUserUpdated(true))
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
                isApiUserUpdated(true)
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