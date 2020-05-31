import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Formik, Form, ErrorMessage, FieldArray } from 'formik';
import { TextField, Card, CardHeader, CardContent, Typography, Divider, TextareaAutosize, Button, Checkbox, FormControlLabel, FormGroup, FormLabel } from '@material-ui/core';
import * as Yup from 'yup';
import Dropzone from 'react-dropzone';
import Thumb from './Thumb';
import { storage } from 'utils/firebase';
AddRoomType.propTypes = {

};

function AddRoomType(props) {
    const classes = useStyles();

    return (
        <div
            className={classes.root}

        >



            <Card className={classes.card} >
                <div style={{ width: "100%", textAlign: "center", padding: "1rem" }}>
                    <Typography variant="h3">Add Roomtype</Typography>
                </div>
                <Divider></Divider>

                <Formik

                    initialValues={
                        {
                            name: "",
                            type: "",
                            price: 100,
                            size: 100,
                            capacity: 1,
                            extras: ["Plush pillows and breathable bed linens"],
                            description: "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
                            images: [],
                            attachments: []
                        }
                    }
                    validationSchema={Yup.object().shape({
                        name: Yup.string()
                            .required("Roomtype name is required !"),
                        type: Yup.string()
                            .required("Type is required !"),
                        price: Yup.number()
                            .required("Price of room is required !")
                            .min(100, "Minimum 100$")
                            .max(2000, "Maximum 2000$"),
                        size: Yup.number()
                            .required("Size of room is required !")
                            .min(100, "Minimum 100 M2")
                            .max(500, "Maximum 500 M2"),
                        capacity: Yup.number()
                            .required("Capacity of room is required !")
                            .min(1, "Minimum 1 people.")
                            .max(6, "Maximum 6 peoples."),
                        description: Yup.string()
                            .required("Description is required !")
                    })

                    }
                    onSubmit={(value) => {
                        console.log(value)
                    }}
                    >
                    {
                        (props) =>{
                     //   console.log(props.values)
                            return (   <Form onSubmit={props.handleSubmit}>
                                <div style={{ display: "flex" }}>
                                    <Card style={{ width: '50%' }}>
                                        <CardContent>
                                            <div className={classes.fields}>
                                                <TextField
                                                    error={props.errors.name && props.touched.name ? true : false}
                                                    helperText={
                                                        props.errors.name && props.touched.name ? props.errors.name : null
                                                    }
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

                                                <TextField
                                                    error={props.errors.type && props.touched.type ? true : false}
                                                    helperText={
                                                        props.errors.type && props.touched.type ? props.errors.type : null
                                                    }
                                                    size="small"
                                                    onChange={props.handleChange}
                                                    onBlur={props.handleBlur}
                                                    name="type"
                                                    value={props.values.type}
                                                    label="Type of room"
                                                    placeholder="single, double, family, presidential..."
                                                    variant="outlined"
                                                >
                                                </TextField>

                                                <TextField
                                                    fullWidth
                                                    error={props.errors.price && props.touched.price ? true : false}
                                                    helperText={
                                                        props.errors.price && props.touched.price ? props.errors.price : null
                                                    }
                                                    type="number"
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

                                                <TextField
                                                    fullWidth
                                                    error={props.errors.size && props.touched.size ? true : false}
                                                    helperText={
                                                        props.errors.size && props.touched.size ? props.errors.size : null
                                                    }
                                                    type="number"
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
                                            </div>
                                            <div className={classes.fields}>
                                                <TextField
                                                    error={props.errors.capacity && props.touched.capacity ? true : false}
                                                    helperText={
                                                        props.errors.capacity && props.touched.capacity ? props.errors.capacity : null
                                                    }
                                                    type="number"
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
                                            </div>
                                        </CardContent>
                                    </Card>
                                    <Card style={{ width: '50%' }}>
                                        <CardContent>

                                            <TextField
                                                multiline
                                                label="Description"
                                                error={props.errors.description && props.touched.description ? true : false}
                                                helperText={
                                                    props.errors.description && props.touched.description ? props.errors.description : null
                                                }
                                                className={classes.textArea}
                                                name="description"
                                                onChange={props.handleChange}
                                                onBlur={props.handleBlur}
                                                placeholder="Description"
                                                value={props.values.description}
                                                rowsMax="10"
                                                rows="10"
                                                variant="outlined"
                                            >
                                            </TextField>

                                        </CardContent>
                                    </Card>
                                </div>
                               
                               <FieldArray
                                    name="extras"
                                    render={
                                        arrayHelpers => (
                                            <Card>
                                                <CardHeader title="Extras"></CardHeader>
                                                <Divider></Divider>
                                                <CardContent style={{ display: 'grid', gridTemplateColumns: 'auto auto auto' }}>

                                                    {
                                                        categories.map(category => (
                                                            <FormControlLabel key={category.id}
                                                                control={
                                                                    <Checkbox
                                                                        checked={props.values.extras.includes(category.id)}
                                                                        onChange={
                                                                            e => {
                                                                                if (e.target.checked) arrayHelpers.push(category.id);
                                                                                else {
                                                                                    const idx = props.values.extras.indexOf(category.id);
                                                                                    arrayHelpers.remove(idx);
                                                                                }
                                                                            }
                                                                        }
                                                                        name="extras"
                                                                        color="primary"

                                                                    />
                                                                }
                                                                label={category.name}
                                                            />
                                                        ))
                                                    }

                                                </CardContent>
                                            </Card>
                                        )
                                    }

                                >
                                </FieldArray>
                                
                                <Card>
                                    <CardHeader title="Add image. Note: This may take several minutes :( "></CardHeader>
                                </Card>
                                <CardContent>
                                    <Dropzone className={classes.dropzoneStyle} accept="image/*" onDrop={acceptedFiles => {
                                        //if (acceptedFiles.length === 0) { return; }
                                        //   console.log("ngoai",acceptedFiles);
                                        // map(acceptedFiles, acceptedFiles =>{
                                        //   // do nothing if no files
                                       // console.log(acceptedFiles);

                                        //ACEPTED FILES tra ve ARAAY nen dung map hoac dung arr[0]
                                       // props.setFieldValue("attachments", props.values.attachments.concat(acceptedFiles));
                                        storage.ref('guests')
                                            .child(acceptedFiles[0].name)
                                            .put(acceptedFiles[0], {
                                                contentType: acceptedFiles[0].type,
                                            })
                                            .then((snapshot) => {
                                               
                                                
                                                snapshot.ref.getDownloadURL().then(url => {
                                                   // console.log(url);
                                                    //console.log(props.values.attachments)
                                                    props.setFieldValue("attachments", props.values.attachments.concat(acceptedFiles));
                                                    
                                                    return url;
                                                    
                                                }).then((url)=>{
                                                    props.setFieldValue("images", props.values.images.concat(url));
                                                })
                                            })

                                      


                                    }}>
                                        {({ isDragActive, isDragReject, acceptedFiles, rejectedFiles }) => {
                                            if (isDragActive) {
                                                return "This file is authorized";
                                            }

                                            if (isDragReject) {
                                                return "This file is not authorized";
                                            }

                                            if (props.values.attachments.length === 0) {
                                                return <p>Try dragging a file here!</p>
                                            }

                                            return props.values.attachments.map((file, i) => (<Thumb key={i} file={file} />));
                                        }}
                                    </Dropzone>
                                </CardContent>

                                <Button
                                    type="submit"
                                >
                                    ADD
                   </Button>
                   
                            </Form>)}
                        
                       

                    }


                
                </Formik>




            </Card>
        </div>
    );
}
const categories = [
    { id: "Plush pillows and breathable bed linens", name: "Plush pillows and breathable bed linens" },
    { id: "Complimentary refreshments", name: "Complimentary refreshments" },
    { id: "Comfortable beds", name: "Comfortable beds" },
    { id: "Soft, oversized bath towels", name: "Soft, oversized bath towels" },
    { id: "Adequate safety/security", name: "Adequate safety/security" },
    { id: "Full-sized, pH-balanced toiletries", name: "Full-sized, pH-balanced toiletries" },
    { id: "Internet", name: "Internet" },
];
const useStyles = makeStyles(theme => ({
    root: {
        width: "100%",
        display: 'flex',
        justifyContent: 'center',
    },
    card: {
        width: "100%"
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
    textArea: {
        width: "100%"
    },
    dropzoneStyle: {
        height: 'auto',
        width: "100%",
        padding: "1rem",
        borderWidth: 2,
        borderColor: "rgb(102, 102, 102)",
        borderStyle: 'solid',
        borderRadius: 5,
    }
}))
export default AddRoomType;