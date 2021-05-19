
// const data= {
//     name: "Xyz",
//     address: "vapi"
// }

export const getUser = () => (dispatch) => {
    dispatch({
        type: 'GET_USER'
    })
    isUserUpdated(false)
}

export const addUser = (data) => (dispatch) => {
    dispatch({
        type: 'USER_DATA_ADD',
        payload: data
    })
    isUserUpdated(false)
}

export const editUser = (data) => (dispatch) => {
    dispatch({
        type: 'USER_UPDATE',
        payload: data
    })
    isUserUpdated(false)
}

export const setEditUserData = (data) => (dispatch) => {
    dispatch({
        type: 'SET_USER_UPDATE_DATA',
        payload: data
    })
}

export const deleteUser = (data) => (dispatch) => {
    dispatch({
        type: 'DELETE_USER',
        payload: data
    })
    isUserUpdated(false)
}

export const setUser = () => (dispatch) => {
    dispatch({
        type: 'USER_SET_REMOVE'
    })
}

export const isUserUpdated = (data) => (dispatch) => {
    dispatch({
        type: 'IS_USER_UPDATED',
        payload: data
    })
}