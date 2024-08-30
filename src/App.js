import React, { useEffect, useState } from "react";
import { CssBaseline, Grid } from "@material-ui/core";
import Heading from "./components/Heading/Heading";
import Map from "./components/Map/Map";
import ListofPlaces from "./components/ListofPlaces/ListofPlaces";
import { fetchData } from "./api/api";

const App = () => {
  const [type, setType] = useState("restaurants");  
  const [rating, setRating] = useState("");
  const [locations, setLocations] = useState([]);
  const [coordinates, setCoordinates] = useState({ lat: 52, lng: 13 });
  const [corners, setCorners] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [filteredPlaces, setFilteredPlaces] = useState([]);
  const [autocomplete, setAutocomplete] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoordinates({ lat: latitude, lng: longitude });
      }
    );
  }, []);


  

  useEffect(() => {
    if (corners) {
      console.log(coordinates, corners);
      setIsLoading(true);
      fetchData(type, corners.sw, corners.ne).then((data) => {
        console.log(data);
        setLocations(data);
        setIsLoading(false);
        setFilteredPlaces([]);
      });
    }
  }, [type, coordinates, corners]);

  useEffect(() => {
    const filtered = locations.filter((place) => Number(place.rating) > rating);

    setFilteredPlaces(filtered);
  }, [rating]);


  const onLoad = (autoC) => setAutocomplete(autoC);

  const onLocationChanged = () => {
    const lat = autocomplete.getPlace().geometry.location.lat();
    const lng = autocomplete.getPlace().geometry.location.lng();

    setCoordinates({ lat, lng });
  };

  return (
    <>
      <CssBaseline />
      <Heading onLocationChanged={onLocationChanged} onLoad={onLoad}/>
      <Grid container spacing={3} style={{ width: "100%" }}>
        <Grid item xs={12} md={4}>
          <ListofPlaces  
          places={filteredPlaces.length ? filteredPlaces : locations}
          type={type}
          setType={setType} 
          rating={rating}
          setRating={setRating}
          isLoading={isLoading}
          />
          
        </Grid>
        <Grid item xs={12} md={8}>
          <Map
            setCoordinates={setCoordinates}
            setBounds={setCorners}
            coordinates={coordinates}
            locations={filteredPlaces.length ? filteredPlaces : locations}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default App;
