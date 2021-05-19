import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import AddUser from "./AddUser";
import * as Actions from "../../store/actions";

function UserTable() {
    const dispatch = useDispatch()
    const { users, isUserUpdated } = useSelector(({ userStore}) => userStore)
    const { apiUsers } = useSelector(({ apiStore }) =>  apiStore)
    
    console.log("users table -->", users)
    useEffect(() => {
        if(isUserUpdated) {
            dispatch(Actions.getUser())
            dispatch(Actions.isUserUpdated(false))
        }
    }, [isUserUpdated])
   
    useEffect(() => {
        dispatch(Actions.getApiUser())
    }, [])

    const editUser = (data) => {
        dispatch(Actions.editUser(data))
        dispatch(Actions.setEditUserData(data))
    }
    const deleteUserAction = (data) => {
        let conf = window.confirm("Are sure you want delete user?")
        if(conf){
            dispatch(Actions.isUserUpdated(true))
            dispatch(Actions.deleteUser(data))
        }
    }

    return (
        <div>
            <AddUser />
            {(users && users.length > 0) ?  (
            <table className="table w-50 mx-auto">
                <thead>
                    <th>Name</th>
                    <th>Address</th>
                    <th>Actions</th>
                </thead>
                <tbody>
                    {users && users.map((item, index) => {
                        return (
                            <React.Fragment key={index} >
                                <tr>
                                    <td>{item.userName}</td>
                                    <td>{item.address}</td>
                                    <td>
                                        <button className="btn btn-success mr-2" type="button" onClick={() => editUser(item)}>Edit</button> 
                                        <button className="btn btn-danger" type="button" onClick={() => deleteUserAction(item)}>Delete</button> 
                                    </td>
                                </tr>
                            </React.Fragment>
                        )
                    })}
                    
                </tbody>
            </table>
            ) : ''}
            <hr/>
            <center><h2 className="mt-5">Api List</h2></center>
                    
            <table className="table w-50 mx-auto">
                <thead>
                    <th>Name</th>
                    <th>Address</th>
                    <th>Actions</th>
                </thead>
                <tbody >
                     {apiUsers && apiUsers.map((item, index) => {
                        return (
                            <React.Fragment key={index} >
                                <tr>
                                    <td>{item.userName}</td>
                                    <td>{item.address}</td>
                                    <td>
                                        <button className="btn btn-success mr-2" type="button" >Edit</button> 
                                        <button className="btn btn-danger" type="button" >Delete</button> 
                                    </td>
                                </tr>
                            </React.Fragment>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default UserTable
