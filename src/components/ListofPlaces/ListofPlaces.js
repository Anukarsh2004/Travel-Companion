import React, { useState, useEffect, createRef } from "react";
import {
  CircularProgress,
  Grid,
  Typography,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
} from "@material-ui/core";
import useStyles from "./ListStyles";
import LocationDetails from "../LocationDetails/LocationDetails";
const ListofPlaces = ({
  places,
  type,
  setType,
  rating,
  setRating,
  isLoading,
}) => {
  const classes = useStyles(0);

  return (
    <div className={classes.container}>
      <Typography variant="h4">
        Restaurants, Hotels and Attractions Nearby
      </Typography>
      {isLoading ? (
        <div className={classes.loading}>
          <CircularProgress size="5rem" />
        </div>
      ) : (
        <>
          <FormControl className={classes.form}>
            <InputLabel id="type">Type</InputLabel>
            <Select
              id="type"
              value={type}
              onChange={(e) => setType(e.target.value)}
            >
              <MenuItem value="restaurants">Restaurants</MenuItem>
              <MenuItem value="hotels">Hotels</MenuItem>
              <MenuItem value="attractions">Attractions</MenuItem>
            </Select>
          </FormControl>
          <FormControl className={classes.form}>
            <InputLabel id="rating">Rating</InputLabel>
            <Select
              id="rating"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
            >
              <MenuItem value={0}>All</MenuItem>
              <MenuItem value={3}>Above 3.0 Stars</MenuItem>
              <MenuItem value={4}>Above 4.0 Stars</MenuItem>
              <MenuItem value={4.5}>Above 4.5 Stars</MenuItem>
            </Select>
          </FormControl>
          <Grid container spacing={3} className={classes.list}>
            {places?.map((place, index) => (
              <Grid item key={index} xs={12}>
                <LocationDetails location={place} />
              </Grid>
            ))}
          </Grid>
        </>
      )}
    </div>
  );
};
export default ListofPlaces;
