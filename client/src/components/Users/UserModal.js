import React, { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import { Form, FormControl } from "react-bootstrap";
import { Formik, useFormik, ErrorMessage } from 'formik'
import * as yup from 'yup'
import * as Actions from "../../store/actions";
import { useDispatch, useSelector } from "react-redux";
import appConstamnt from '../appConfigration'

const initialState = {
    userName: '',
    address: '',
    type: 'Add'
}

//Add USer Modal
function MyVerticallyCenteredModal(props) {
    const dispatch = useDispatch()
    const [user, setUser] = useState(initialState)
    const { setUserUpdateData, isModalOpen } = useSelector(({ apiStore }) =>  apiStore)

    useEffect(() => {
      return () => {
        setUser(initialState)
        dispatch(Actions.setEditUserDataApi({}))
      }
    }, [])
    useEffect(() => {
      if(setUserUpdateData){
        setUser(setUserUpdateData)
      }
    }, [setUserUpdateData])

    const handleSubmitUser = (value) => { 
        dispatch(Actions.addUserDatabase(value))
        dispatch(Actions.isApiUserUpdated(true))
        dispatch(Actions.isModalClose())
        setUser(initialState)
    }
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            User Add
          </Modal.Title>
        </Modal.Header>
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
                  <Modal.Body>
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
                    </Modal.Body>
                    <Modal.Footer>
                      <Button type="submit" disabled={ !isValid } variant="success"> {appConstamnt.add} </Button>
                      <Button onClick={props.onHide}>Close</Button>
                    </Modal.Footer>
                </Form>
                )}
            </Formik>
      </Modal>
    );
  }
  
  //Main Component
  function UserModal() {
    const [modalShow, setModalShow] = React.useState(false);
    const { isModalOpen } = useSelector(({ apiStore }) =>  apiStore)
    const dispatch = useDispatch()
    
    useEffect(() => {
        if(isModalOpen) {
            setModalShow(true)
        }else{
            setModalShow(false)
        }
    }, [isModalOpen])
    return (
      <>
        <Button variant="primary" className="d-flex mx-auto" onClick={() => (setModalShow(true), dispatch(Actions.isModalOpen()))}>
          Add User To DataBase
        </Button>
  
        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => ( setModalShow(false), dispatch(Actions.isModalClose()), dispatch(Actions.setEditUserDataApi({})))}
        />
      </>
    );
  }
  
export default UserModal