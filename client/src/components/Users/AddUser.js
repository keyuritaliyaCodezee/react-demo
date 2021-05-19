import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import * as Actions from "../../store/actions";
import { Form, FormControl } from "react-bootstrap";
import { Formik, useFormik, ErrorMessage } from 'formik'
import * as yup from 'yup'

const initialState = {
    userName: '',
    address: '',
    type: 'Add'
}

function AddUser() {
    const [user, setUser] = useState(initialState)
    const [errorMessage, setErrorMessage] = useState({})
    const dispatch = useDispatch()
    const { userEditData } = useSelector(({ userStore}) => userStore)
    // console.log("user -->", user)
    useEffect(() => {
        return () => {
            dispatch(Actions.setUser())
            setUser({...user, type: 'Add'})
        }
    }, [])

    useEffect(() => {
        if(Object.keys(userEditData).length > 0){
            setUser({...userEditData, type: 'edit' })
        }
    }, [userEditData])

    const handleChange = (e) => {
        setUser({...user, [e.target.name] : e.target.value})
    }

    const handleSubmitUser = (value) => {
        // e.preventDefault()
        // if(user.userName && user.userName == ''){
        //     setErrorMessage({...errorMessage, userNameError : 'user name is require'  })
        // }
        // if(user.address == ''){
        //     setErrorMessage({...errorMessage, addressError : 'Address is require'  })
        // }
       
        if(user.type == 'Add'){
            dispatch(Actions.addUser(value))
        }else {
            dispatch(Actions.editUser(value))
            setUser({...initialState, type: 'Add'})
        }
        dispatch(Actions.isUserUpdated(true))
        setUser(initialState)
    }

    // const formikChangeUserEmail = useFormik({ 
    //     initialValues:{ email : initialEmailUserDetails },
    //     enableReinitialize:true,
    //     validationSchema:yup.object({
    //         email: yup.string().email("*Must be a valid email address").required('*email is required.'),
    //     }),
    //     onSubmit:(values)=> {
    //         let passData = {...values,action_type:'edit' }
    //         dispatch(Actions.showTopLoader());
    //         dispatch(Actions.updateUserDetails(passData,'change_email'));
    //     },
    // })

    return (
        <div>
            <h3 className="w-50 d-flex mx-auto">{ (user && user.type == 'Add') ? 'Add' : 'Edit' } User</h3>
            <Formik
                enableReinitialize={true}
                validationSchema={ yup.object({
                    userName: yup.string().required(`*user name is required.`),
                    address: yup.string().required(`*address is required.`),
                }) }
                onSubmit={handleSubmitUser}
                // validateOnChange={false}
                // validateOnBlur={false}
                initialValues={{
                    userName: (user && user.userName) ? user.userName : '',
                    address: (user && user.address) ? user.address : '',
                }}
            >
                {({handleSubmit,handleChange,handleBlur,values,touched,isValid,setFieldValue,errors,getFieldProps,dirty}) => (
                <Form className="w-50 mx-auto" onSubmit ={(e) => handleSubmit(e)}>
                    <div className="form-group">
                        <label>User Name<span className="text_error_color">*</span></label>
                        <FormControl 
                            type="text" 
                            className="form-control" 
                            value={values.userName} 
                            // onChange={(e) => handleChange(e)} 
                            id="user" 
                            name="userName"
                            {...getFieldProps('userName')}
                            isInvalid={touched.userName && errors.userName}
                            isValid={touched.userName && !errors.userName}
                            />
                            <span className="text_error_color"><ErrorMessage className="text_error_color" name="userName" /></span>
                    </div>
                    <div className="form-group">
                            <label>Address<span className="text_error_color">*</span></label>
                            <FormControl 
                                type="textarea" 
                                className="form-control" 
                                value={values.address} 
                                // onChange={(e) => handleChange(e)} 
                                id="address" 
                                name="address"
                                {...getFieldProps('address')}
                                isInvalid={touched.address && errors.address}
                                isValid={touched.address && !errors.address}    
                            />
                            <span className="text_error_color"><ErrorMessage  name="address" /></span>
                    </div>
                    <button type="submit" disabled={ !isValid } className="btn btn-primary mt-2 d-flex mx-auto"> { (user && user.type == 'Add') ? 'Add' : 'Edit' }</button>
                </Form>
                )}
            </Formik>
        </div>
    )
}

export default AddUser
