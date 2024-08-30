import React from "react";
import {
  Box,
  Typography,
  Button,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Chip,
} from "@material-ui/core";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import PhoneIcon from "@material-ui/icons/Phone";
import Rating from "@material-ui/lab/Rating";
import useStyles from "./DetailsStyles";

const LocationDetails = ({ location}) => {



  const classes = useStyles();
  return (
    <Card elevation={9}>
      <CardMedia
        style={{ height: 400 }}
        image={
          location.photo
            ? location.photo.images.large.url
            : "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        }
        title={location.name}
      />

      <CardContent>
        <Typography gutterBottom variant="h5">
          {location.name}
        </Typography>

        {location.description && (
          <Typography gutterBottom variant="subtitle1">
            {location.description}
          </Typography>
        )}
        <Box display="flex" justifyContent="space-between">
          <Typography variant="subtitle1">Price</Typography>
          <Typography gutterBottom variant="subtitle1">
            {location.price_level}
          </Typography>
        </Box>
        <Box display="flex" justifyContent="space-between" my={2}>
          <Rating name="read-only" value={Number(location.rating)} readOnly />
          <Typography component="legend">
            {location.num_reviews} review{location.num_reviews > 1 && "s"}
          </Typography>
        </Box>
        {location?.awards?.map((award) => (
          <Box
            display="flex"
            justifyContent="space-between"
            my={1}
            alignItems="center"
          >
            <img src={award.images.small} alt={award.display_name} />
            <Typography variant="subtitle2" color="textSecondary">
              {award.display_name}
            </Typography>
          </Box>
        ))}
        {location?.cuisine?.map(({ name }) => (
          <Chip key={name} size="small" label={name} className={classes.chip} />
        ))}
        {location.address && (
          <Typography gutterBottom variant="body2" className={classes.subtitle}>
            <LocationOnIcon />
            {location.address}
          </Typography>
        )}
        {location.phone && (
          <Typography variant="body2" className={classes.spacing}>
            <PhoneIcon /> {location.phone}
          </Typography>
        )}
      </CardContent>

      <CardActions>
        <Button
          size="small"
          color="primary"
          onClick={() => window.open(location.web_url, "_blank")}
        >
          Trip Advisor
        </Button>
        <Button
          size="small"
          color="primary"
          onClick={() => window.open(location.website, "_blank")}
        >
          Website
        </Button>
      </CardActions>
    </Card>
  );
};
export default LocationDetails;
