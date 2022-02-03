import axios from "axios";

export function data(latitud,longitud) {
  return async function (dispatch) {
    console.log(latitud,longitud)
    let data = await axios.get(`http://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_KEY}&q=${latitud},${longitud}`);
    return dispatch({
      type: "DATA",
      payload: data.data,
    });
  };
}
