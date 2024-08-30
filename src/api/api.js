import axios from "axios";



export const fetchData = async (type, bl, tr) => {


const options = {
    params: {
    bl_latitude: bl.lat,
    tr_latitude: tr.lat,
    bl_longitude: bl.lng,
    tr_longitude: tr.lng,
  },

  headers: {
    "X-RapidAPI-Key": {APIKey},
    "X-RapidAPI-Host: {APIHost},
  },
}

  try {
    const {data: {data}} = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, options);
    return data;

  } catch (error) {
    console.error(error);
  }
}

