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
    "X-RapidAPI-Key": "3112fe1ec6mshc1b341621ff8c03p12db54jsn44e2ce1f2171",
    "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
  },
}

  try {
    const {data: {data}} = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, options);
    return data;

  } catch (error) {
    console.error(error);
  }
}

