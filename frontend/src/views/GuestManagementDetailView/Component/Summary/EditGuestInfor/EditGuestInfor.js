import { Backdrop, Button, Card, Modal, TextField } from '@material-ui/core';
import CancelIcon from '@material-ui/icons/Cancel';
import EditIcon from '@material-ui/icons/Edit';
import { KeyboardDatePicker } from '@material-ui/pickers';
import { makeStyles } from '@material-ui/styles';
import { Form, Formik } from 'formik';
import React from 'react';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { editGuestRequest } from 'redux/actionCreators/guestsActionCreator';
const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
    root: {
        padding: 30,
        width:'40%'
    },
    fields: {
        margin: theme.spacing(-1),
        display: 'flex',
        flexWrap: 'wrap',
        '& > *': {
            flexGrow: 1,
            margin: theme.spacing(1)
        }
    },
    policy: {
        display: 'flex',
        alignItems: 'center'
    },
    policyCheckbox: {
        marginLeft: '-14px'
    },
    submitButton: {
        marginTop: theme.spacing(2),
        width: '100%'
    }
}));

const EditGuestInfor = (props) => {
    const { open, handleCloseEdit, guestInfor } = props;
    
    const classes = useStyles();
    const dispatch = useDispatch();
    //console.log(open);
   // console.log(guestInfor);
    return (
        <div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleCloseEdit}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Card className={classes.root}>
                <Formik
                    initialValues={{
                        firstName: guestInfor.firstName,
                        lastName: guestInfor.lastName,
                        phone: guestInfor.phone,
                        birthday: new Date(guestInfor.birthday),
                        email: guestInfor.email,
                        password: "",
                        //confirmPassword: "",
                        //secretCode: "",
                        //checked: false
                    }}
                    validationSchema={Yup.object().shape({ // Validate form field
                        firstName: Yup.string()
                            .required('FirstName is required')
                            .max(32, 'FirstName have max 32 characters'),
                        lastName: Yup.string()
                            .required('LastName is required')
                            .max(32, 'LastName have max 32 characters'),
                        phone: Yup.string().matches(/^(0)+([0-9]{9})\b$/, "Phone number is not valid !"),
                        email: Yup.string()
                            .email('Email is invalid')
                            .required('Email is required'),
                        password: Yup.string().matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/, "Password must have minimum 8 characters, at least one uppercase letter, one lowercase letter and one number")
                            .required('Password is required')
                            // .min(8, "Password have min 8 characters")
                            .max(32, "Password have max 32 characters"),
                     
                    })}
                    onSubmit={({  firstName, lastName, phone, password , birthday}) => {
                                let temp ={
                                    ...guestInfor,
                                    firstName :firstName,
                                    lastName:lastName,
                                    phone:phone,
                                    password:password,
                                    birthday:birthday
                                }
                          dispatch(editGuestRequest(temp));
                          handleCloseEdit();
                    }}
                >
                    {
                        (props) => {
                            // console.log(props.values);
                            return (
                                <Form

                                >
                                    <div className={classes.fields}>

                                        <TextField
                                            size="small"
                                            error={props.errors.firstName && props.touched.firstName ? true : false}
                                            helperText={
                                                props.errors.firstName && props.touched.firstName ? props.errors.firstName : null
                                            }
                                            label="First name"
                                            name="firstName"
                                            onChange={props.handleChange}
                                            value={props.values.firstName}
                                            onBlur={props.handleBlur}
                                            variant="outlined"
                                        />
                                        <TextField
                                            size="small"
                                            error={props.errors.lastName && props.touched.lastName ? true : false}
                                            helperText={
                                                props.errors.lastName && props.touched.lastName ? props.errors.lastName : null
                                            }
                                            label="Last name"
                                            name="lastName"
                                            onChange={props.handleChange}
                                            value={props.values.lastName}
                                            onBlur={props.handleBlur}
                                            variant="outlined"
                                        />
                                        <TextField
                                            fullWidth
                                            size="small"
                                            error={props.errors.phone && props.touched.phone ? true : false}
                                            helperText={
                                                props.errors.phone && props.touched.phone ? props.errors.phone : null
                                            }
                                            label="Phone number"
                                            name="phone"
                                            onChange={props.handleChange}
                                            value={props.values.phone}
                                            onBlur={props.handleBlur}
                                            variant="outlined"

                                        />
                                        <KeyboardDatePicker
                                            autoOk
                                            size="small"
                                            name="birthday"
                                            label="Birthday"
                                            format="MM/dd/yyyy"
                                            value={props.values.birthday}
                                            onChange={(date) => props.setFieldValue("birthday", date)
                                            }

                                            variant="inline"
                                            inputVariant="outlined"
                                        />


                                        <TextField
                                        disabled
                                            size="small"
                                            error={props.errors.email && props.touched.email ? true : false}
                                            fullWidth
                                            helperText={props.errors.email && props.touched.email ? props.errors.email : null}
                                            label="Email address"
                                            name="email"
                                            onChange={props.handleChange}
                                            value={props.values.email}
                                            onBlur={props.handleBlur}
                                            variant="outlined"
                                        />
                                        <TextField
                                            size="small"
                                            error={props.errors.password && props.touched.password ? true : false}
                                            fullWidth
                                            helperText={
                                                props.errors.password && props.touched.password ? props.errors.password : null
                                            }
                                            label="Password"
                                            name="password"
                                            onChange={props.handleChange}
                                            onBlur={props.handleBlur}
                                            type="password"
                                            value={props.values.password}
                                            variant="outlined"
                                        />
                                     


                                    </div>
                                    <Button
                                        className={classes.submitButton}
                                        color="secondary"
                                        disabled={!props.isValid || !props.dirty}
                                        size="large"
                                        type="submit"
                                        variant="contained"
                                    >
                                        <EditIcon></EditIcon>
                                        Edit
                                     </Button>
                                    <Button
                                        className={classes.submitButton}
                                        color="secondary"
                                       
                                        size="large"
                                        onClick={handleCloseEdit}
                                        variant="contained"
                                    >
                                        <CancelIcon></CancelIcon>
                                        Cancel
                                     </Button>



                                </Form>


                            )
                        }
                    }


                </Formik>
                            
                </Card>
            </Modal>
        </div>
    );
};


EditGuestInfor.propTypes = {

};


export default EditGuestInfor;
