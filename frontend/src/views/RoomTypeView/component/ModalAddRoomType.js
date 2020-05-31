
import PropTypes from 'prop-types';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { Formik, Form, ErrorMessage, FieldArray } from 'formik';
import { TextField, Card, CardHeader, CardContent, Typography, Divider, TextareaAutosize, Button, Checkbox, FormControlLabel, FormGroup } from '@material-ui/core';

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
    card: {
        width: "40%"
    },
    fields: {
        margin: theme.spacing(-1),
        display: 'flex',
        flexWrap: 'wrap',
        '& > *': {
            flexGrow: 1,
            margin: theme.spacing(1)
        }
    }
}));

ModalAddRoomType.propTypes = {

};
const categories = [
    { id: "Plush pillows and breathable bed linens", name: "Plush pillows and breathable bed linens" },
    { id: "Complimentary refreshments", name: "Complimentary refreshments" },
    { id: "Comfortable beds", name: "Comfortable beds" },
    { id: "Soft, oversized bath towels", name: "Soft, oversized bath towels" },
    { id: "Adequate safety/security", name: "Adequate safety/security" },
    { id: "Full-sized, pH-balanced toiletries", name: "Full-sized, pH-balanced toiletries" },
    { id: "Internet", name: "Internet" },
];
function ModalAddRoomType(props) {
    const { open, handleClose } = props;
    const classes = useStyles();
    return (

        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            className={classes.modal}
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}
        >
            <Card className={classes.card} >
                <div style={{ width: "100%", textAlign: "center", padding: "1rem" }}>
                    <Typography variant="h3">Add Roomtype</Typography>
                </div>
                <Divider></Divider>
                <CardContent>
                    <Formik

                        initialValues={
                            {
                                name: "",
                                type: "",
                                price: null,
                                size: null,
                                capacity: null,
                                extras: ["Plush pillows and breathable bed linens"]
                            }
                        }
                        onSubmit={(value) => {
                            console.log(value)
                        }}
                    >
                        {
                            (props) => (

                                <Form>
                                    <div className={classes.fields}>
                                        <TextField
                                            fullWidth
                                            size="small"
                                            onChange={props.handleChange}
                                            onBlur={props.handleBlur}
                                            name="name"
                                            value={props.values.name}
                                            label="Roomtype name"
                                            placeholder="Roomtype name"
                                            variant="outlined"
                                        >

                                        </TextField>
                                        <ErrorMessage name="name"></ErrorMessage>
                                        <TextField
                                            fullWidth
                                            size="small"
                                            onChange={props.handleChange}
                                            onBlur={props.handleBlur}
                                            name="type"
                                            value={props.values.type}
                                            label="Type of room"
                                            placeholder="Type of room : single, double, family, presidential..."
                                            variant="outlined"
                                        >
                                        </TextField>
                                        <ErrorMessage name="type"></ErrorMessage>
                                        <TextField

                                            size="small"
                                            onChange={props.handleChange}
                                            onBlur={props.handleBlur}
                                            name="price"
                                            value={props.values.price}
                                            label="Price $"
                                            placeholder="Price"
                                            variant="outlined"
                                        >
                                        </TextField>
                                        <ErrorMessage name="price"></ErrorMessage>
                                        <TextField

                                            size="small"
                                            onChange={props.handleChange}
                                            onBlur={props.handleBlur}
                                            name="size"
                                            label="Size (M2)"
                                            value={props.values.size}
                                            placeholder="Size"
                                            variant="outlined"
                                        >
                                        </TextField>
                                        <ErrorMessage name="size"></ErrorMessage>
                                        <TextField
                                            fullWidth
                                            size="small"
                                            onChange={props.handleChange}
                                            onBlur={props.handleBlur}
                                            name="capacity"
                                            value={props.values.capacity}
                                            label="Capacity "
                                            placeholder="Capacity"
                                            variant="outlined"
                                        >
                                        </TextField>
                                        <ErrorMessage name="capacity"></ErrorMessage>
                                        <TextareaAutosize
                                        fullWidth
                                            name="description"
                                            onChange={props.handleChange}
                                            onBlur={props.handleBlur}
                                            placeholder="Description"
                                            value={props.values.description}
                                            rowsMax="5"
                                            rows="5"
                                            variant="outlined"
                                        >

                                        </TextareaAutosize>
                                        <ErrorMessage name="description"></ErrorMessage>

                                        <FieldArray
                                        name="extras"
                                        render={
                                            arrayHelpers => (
                                                <FormGroup>
                                                    {
                                                        categories.map(category =>(
                                                            <FormControlLabel
                                                            control={
                                                              <Checkbox
                                                                checked={props.values.extras.includes(category.id)}
                                                                onChange={
                                                                    e => {
                                                                        if (e.target.checked) arrayHelpers.push(category.id);
                                                                        else {
                                                                          const idx = props.values.extras.indexOf(category.id);
                                                                          arrayHelpers.remove(idx);
                                                                        }}
                                                                }
                                                                name="extras"
                                                                color="primary"
                                                               
                                                              />
                                                            }
                                                            label={category.name}
                                                          />
                                                        ))
                                                    }
                                                </FormGroup>
                                            )
                                        }
                                        
                                        >

                                        </FieldArray>
                                    </div>

                                    <Button
                                        type="submit"
                                    >
                                        ADD
                           </Button>
                                </Form>

                            )

                        }



                    </Formik>


                </CardContent>

            </Card>

        </Modal>

    );
}

export default ModalAddRoomType;