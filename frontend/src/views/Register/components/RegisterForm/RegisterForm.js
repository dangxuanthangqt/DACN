import React, { useState, useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup'
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import {
  Button,
  Checkbox,
  FormHelperText,
  TextField,
  Typography,
  Link
} from '@material-ui/core';
import { registerRequest } from '../../../../redux/actionCreators/registerActionCreator';
import { useDispatch } from 'react-redux';
import { KeyboardDatePicker, DatePicker } from '@material-ui/pickers';

// import useRouter from 'utils/useRouter';



const useStyles = makeStyles(theme => ({
  root: {

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

const RegisterForm = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  const dispatch = useDispatch();

  return (

    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        phoneNumber: "",
        birthday: new Date(2000, 1, 11),
        email: "",
        password: "",
        confirmPassword: "",
        secretCode: "",
        checked: false
      }}
      validationSchema={Yup.object().shape({ // Validate form field
        firstName: Yup.string()
          .required('FirstName is required')
          .max(32, 'FirstName have max 32 characters'),
        lastName: Yup.string()
          .required('LastName is required')
          .max(32, 'LastName have max 32 characters'),
        phoneNumber: Yup.string().matches(/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,"Phone number is not valid"),
        email: Yup.string()
          .email('Email is invalid')
          .required('Email is required'),
        password: Yup.string()
          .required('Password is required')
          .min(8, "Password have min 8 characters")
          .max(32, "Password have max 32 characters"),
        confirmPassword: Yup.string()
          .oneOf([Yup.ref('password'), null], "Password does not match !")
          .required('Confirm is required'),
        secretCode: Yup.string()
          .required('Secret code is required'),
        checked: Yup.boolean()
          .oneOf([true], 'Must Accept Terms and Conditions')
      })}
      onSubmit={({firstName, lastName, phoneNumber,birthday, password, email}) => {

        dispatch(registerRequest({firstName, lastName, phoneNumber,birthday : new Date(birthday), password, email}))
      }}
    >
      {
        (props) => {
          console.log(props.values);
          return (
            <Form
            className={clsx(classes.root, className)}
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
               
                size="small"
                error={props.errors.phoneNumber && props.touched.phoneNumber ? true : false}
                helperText={
                  props.errors.phoneNumber && props.touched.phoneNumber ? props.errors.phoneNumber : null
                }
                label="Phone number"
                name="phoneNumber"
                onChange={props.handleChange}
                value={props.values.phoneNumber}
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
              <TextField
                size="small"
                error={props.errors.confirmPassword && props.touched.confirmPassword ? true : false}
                fullWidth
                helperText={
                  props.errors.confirmPassword && props.touched.confirmPassword ? props.errors.confirmPassword : null
                }
                label="Confirm Password"
                name="confirmPassword"
                onChange={props.handleChange}
                onBlur={props.handleBlur}
                type="password"
                value={props.values.confirmPassword}
                variant="outlined"
              />
              <TextField
                size="small"
                error={props.errors.secretCode && props.touched.secretCode ? true : false}
                fullWidth
                helperText={
                  props.errors.secretCode && props.touched.secretCode ? props.errors.secretCode : null
                }
                label="Secret Code"
                name="secretCode"
                onChange={props.handleChange}
                onBlur={props.handleBlur}

                value={props.values.secretCode}
                variant="outlined"
              />
              <div>
                <div className={classes.policy}>
                  <Checkbox
                    checked={props.values.checked}
                    className={classes.policyCheckbox}
                    color="primary"
                    name="checked"
                    onChange={props.handleChange}
                  />
                  <Typography
                    color="textSecondary"
                    variant="body1"
                  >
                    I have read the{' '}
                    <Link
                      color="secondary"
                      component={RouterLink}
                      to="#"
                      underline="always"
                      variant="h6"
                    >
                      Terms and Conditions
              </Link>
                  </Typography>
                </div>
                {
                  <FormHelperText error>{props.errors.checked}</FormHelperText>
                }
              </div>
            </div>
            <Button
              className={classes.submitButton}
              color="secondary"
              disabled={!props.isValid}
              size="large"
              type="submit"
              variant="contained"
            >
              Create account
      </Button>



          </Form>


          )
        }
      }


    </Formik>






  );
};

RegisterForm.propTypes = {
  className: PropTypes.string
};


export default RegisterForm;
