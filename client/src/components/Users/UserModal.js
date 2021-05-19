import React, { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Formik, useFormik, ErrorMessage } from 'formik'
import * as yup from 'yup'
import * as Actions from "../../store/actions";
import { useDispatch, useSelector } from "react-redux";

const initialState = {
    userName: '',
    address: '',
    type: 'Add'
}

function MyVerticallyCenteredModal(props) {
    const dispatch = useDispatch()
    const [user, setUser] = useState(initialState)
    const handleSubmitUser = (value) => { 
        console.log("value", value)
        dispatch(Actions.addUserDatabase(value))
        dispatch(Actions.isApiUserUpdated(true))
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
        <Modal.Body>
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
                        <input 
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
                            <textarea 
                                type="text" 
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
        </Modal.Body>
        <Modal.Footer>
            <Button variant="success" >
                Add User 
            </Button>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  
  function UserModal() {
    const [modalShow, setModalShow] = React.useState(false);
    const { apiUsers, isApiUserUpdated } = useSelector(({ apiStore }) =>  apiStore)
    useEffect(() => {
        if(isApiUserUpdated) {
            setModalShow(false)
        }
    }, [isApiUserUpdated])
    return (
      <>
        <Button variant="primary" className="d-flex mx-auto" onClick={() => setModalShow(true)}>
          Add User To DataBase
        </Button>
  
        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </>
    );
  }
  
export default UserModal