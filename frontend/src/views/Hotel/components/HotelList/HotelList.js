import styles from "./HotelList.module.css";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TablePagination from "@material-ui/core/TablePagination";
//material-ui
import { useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import SearchIcon from "@material-ui/icons/Search";
import MobileStepper from "@material-ui/core/MobileStepper";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
// component
import HotelItem from "../HotelItem";

import { fetchPaginationHotel } from "redux/actionCreators/hotelActionCreator";

const HotelList = ({ hotels, count }) => {
  const dispatch = useDispatch();
  const theme = useTheme();

  const [pagination, setPagination] = useState(paginationInitValue);
  const [activeStep, setActiveStep] = useState(0);

  let valueSearchChanged = "";

  useEffect(() => {
    fetchPagination();
  }, [pagination]);

  useEffect(() => {
    setPagination({
      ...pagination,
      index: activeStep,
    });
  }, [activeStep]);

  const handleSearch = () => {
    setPagination({
      ...pagination,
      valueSearch: valueSearchChanged,
      index: 0,
    });
  };

  const handleChangeInputSearch = (event) => {
    valueSearchChanged = event.target.value;
  };

  const fetchPagination = () => {
    dispatch(fetchPaginationHotel(pagination));
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <div>
      <Grid container className={styles.container_search}>
        <Grid item xs={12}>
          <TextField
            id="standard-basic"
            label="Search something!!!"
            className={styles.item_search}
            onChange={handleChangeInputSearch}
          />

          <Button
            onClick={handleSearch}
            startIcon={<SearchIcon />}
            className={styles.item_search}
          >
            Search
          </Button>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        {hotels.map((item) => {
          return (
            <Grid item xs={3} key={item.id}>
              <HotelItem hotel={item}></HotelItem>
            </Grid>
          );
        })}
        <Grid item xs={12}>
          <MobileStepper
            className={styles.pagination}
            variant="progress"
            steps={parseInt(count / paginationInitValue.size) + 1}
            position="static"
            activeStep={activeStep}
            nextButton={
              <Button
                size="small"
                onClick={handleNext}
                disabled={
                  activeStep === parseInt(count / paginationInitValue.size)
                }
              >
                Next
                {theme.direction === "rtl" ? (
                  <KeyboardArrowLeft />
                ) : (
                  <KeyboardArrowRight />
                )}
              </Button>
            }
            backButton={
              <Button
                size="small"
                onClick={handleBack}
                disabled={activeStep === 0}
              >
                {theme.direction === "rtl" ? (
                  <KeyboardArrowRight />
                ) : (
                  <KeyboardArrowLeft />
                )}
                Back
              </Button>
            }
          />
        </Grid>
      </Grid>
    </div>
  );
};

export const paginationInitValue = {
  size: 8,
  index: 0,
  valueSearch: "",
  keySort: "",
};

export default HotelList;
