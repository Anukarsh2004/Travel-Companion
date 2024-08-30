import React from "react";
import GoogleMapReact from "google-map-react";
import { Paper, Typography, useMediaQuery } from "@material-ui/core";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import Rating from "@material-ui/lab/Rating";
import useStyles from "./MapStyles";

const Map = ({ setCoordinates, setBounds, coordinates, locations, }) => {
  const classes = useStyles();


  return (
    <div className={classes.Container}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyC5tVYmpHSoppo5jwlNDsijnMcTcxaW3ks" }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={13}
        margin={[50, 50, 50, 50]}
        onChange={(e) => {
          setCoordinates({ lat: e.center.lat, lng: e.center.lng });
          setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
        }}
        options={""}
      >
        {locations?.map((location, i) => (
          <div
            className={classes.markerContainer}
            lat={Number(location.latitude)}
            lng={Number(location.longitude)}
            key={i}
          >
            {location?.name && (
              <Paper elevation={2} className={classes.paper}>
                <Typography
                  className={classes.typography}
                  variant="subtitle1"
                  gutterBottom
                >
                  {" "}
                  {location.name}
                </Typography>
                <img
                  className={classes.pointer}
                  src={
                    location.photo
                      ? location.photo.images.large.url
                      : "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  }
                  alt={""}
                />
                <Rating size="small" value={Number(location.rating)} readOnly />
              </Paper>
            )}
          </div>
        ))}
      </GoogleMapReact>
    </div>
  );
};
export default Map;
