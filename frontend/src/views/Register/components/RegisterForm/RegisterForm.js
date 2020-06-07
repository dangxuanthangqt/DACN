import { Button, Checkbox, FormHelperText, Link, TextField, Typography } from '@material-ui/core';
import { KeyboardDatePicker } from '@material-ui/pickers';
import { makeStyles } from '@material-ui/styles';
import clsx from 'clsx';
import { Form, Formik } from 'formik';
import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';
import * as Yup from 'yup';
import { registerRequest } from '../../../../redux/actionCreators/registerActionCreator';

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
  const { className } = props;

  const classes = useStyles();

  const dispatch = useDispatch();

  return (

    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        phone: "",
        birthday: new Date(2000, 1, 11),
        email: "",
        password: "",
        confirmPassword: "",
        //secretCode: "",
        checked: false
      }}
      validationSchema={Yup.object().shape({ // Validate form field
        firstName: Yup.string()
          .required('FirstName is required')
          .max(32, 'FirstName have max 32 characters'),
        lastName: Yup.string()
          .required('LastName is required')
          .max(32, 'LastName have max 32 characters'),
        phone: Yup.string().matches(/^(0)+([0-9]{9})\b$/,"Phone number is not valid !")
        .required("Phone number is required"),
        email: Yup.string()
          .email('Email is invalid')
          .required('Email is required'),
        password: Yup.string().matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,"Password must have minimum 8 characters, at least one uppercase letter, one lowercase letter and one number")
           .required('Password is required')
          // .min(8, "Password have min 8 characters")
           .max(32, "Password have max 32 characters"),
        confirmPassword: Yup.string()
          .oneOf([Yup.ref('password'), null], "Password does not match !")
          .required('Confirm is required'),
        // secretCode: Yup.string()
        //   .required('Secret code is required'),
        checked: Yup.boolean()
          .oneOf([true], 'Must Accept Terms and Conditions')
      })}
      onSubmit={({firstName, lastName, phone,birthday, password, email}) => {

        dispatch(registerRequest({firstName, lastName, phone,birthday, password, email}))
      }}
    >
      {
        (props) => {
         // console.log(props.values);
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
              {/* <TextField
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
              /> */}
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
              disabled={!props.isValid || !props.dirty}
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
