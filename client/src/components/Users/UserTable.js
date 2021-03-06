import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import AddUser from "./AddUser";
import * as Actions from "../../store/actions";
import { Table } from "react-bootstrap";

function UserTable() {
    const dispatch = useDispatch()
    const { users, isUserUpdated } = useSelector(({ userStore}) => userStore)
    const { apiUsers, isApiUserUpdated } = useSelector(({ apiStore }) =>  apiStore)
    console.log("isApiUserUpdated -->", isApiUserUpdated)

    //local redux CRUD
    useEffect(() => {
        if(isUserUpdated) {
            dispatch(Actions.getUser())
            dispatch(Actions.isUserUpdated(false))
        }
    }, [isUserUpdated])

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


    //Apis CRUD
    useEffect(() => {
        dispatch(Actions.getApiUser())
    }, [])

    useEffect(() => {
        if(isApiUserUpdated){
            dispatch(Actions.getApiUser())
            dispatch(Actions.isApiUserUpdated(false))
        }
    }, [isApiUserUpdated])

    const editUserApi = (data) => {
        dispatch(Actions.isModalOpen())
        dispatch(Actions.setEditUserDataApi(data))
        dispatch(Actions.isApiUserUpdated(true))
    }

    const deleteUserActionApi = (data) => {
        let conf = window.confirm("Are sure you want delete user?")
        if(conf){
            dispatch(Actions.deleteApiUser(data))
            dispatch(Actions.isApiUserUpdated(true))
        }
    }

    return (
        <div>
            <AddUser />
            {(users && users.length > 0) ?  (
            <Table className="w-50 mx-auto">
                <thead className="">
                    <tr>
                    <th>Name</th>
                    <th>Address</th>
                    <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users && users.map((item, index) => {
                        return (
                            <React.Fragment key={index} >
                                <tr>
                                    <td>{item.userName}</td>
                                    <td>{item.address}</td>
                                    <td>
                                        <button className="btn btn-success mr-2" type="button" onClick={() => editUser(item)} style={{marginRight: 10}}>Edit</button> 
                                        <button className="btn btn-danger" type="button" onClick={() => deleteUserAction(item)}>Delete</button> 
                                    </td>
                                </tr>
                            </React.Fragment>
                        )
                    })}
                    
                </tbody>
            </Table>
            ) : ''}
            <hr/>
            <center><h2 className="mt-5">Api List</h2></center>
                    
            <Table className="table w-50 mx-auto">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Address</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody >
                     {apiUsers && apiUsers.map((item, index) => {
                        return (
                            <React.Fragment key={index} >
                                <tr>
                                    <td>{item.userName}</td>
                                    <td>{item.address}</td>
                                    <td>
                                        <button className="btn btn-success mr-2" type="button" onClick={() => editUserApi(item)}>Edit</button> 
                                        <button className="btn btn-danger" type="button" style={{marginLeft: 10}} onClick={() => deleteUserActionApi(item)}>Delete</button> 
                                    </td>
                                </tr>
                            </React.Fragment>
                        )
                    })}
                </tbody>
            </Table>
        </div>
    )
}

export default UserTable
