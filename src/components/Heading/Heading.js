import React from "react";
import { Autocomplete } from "@react-google-maps/api";
import { AppBar, Toolbar, Typography, InputBase, Box } from "@mui/material";
import SearchIcon from "@material-ui/icons/Search";
import useStyles from "./HeadingStyles";

const Heading = ({ onLocationChanged, onLoad }) => {
  const classes = useStyles();
  return (
    <AppBar position="static">
      <Toolbar className={classes.toolbar}>
        <Typography variant="h5">Travel Assist</Typography>
        <Box display="flex">
          <Typography variant="h6">Plan Your Trip</Typography>
          <Autocomplete onLoad={onLoad} onPlaceChanged={onLocationChanged}>
            <div className={classes.searchbar}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Your Destination"
                classes={{ root: classes.inputRoot, input: classes.inputInput }}
              />
            </div>
         </Autocomplete>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
export default Heading;
