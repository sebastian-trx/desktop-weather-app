import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { data } from "../actions";

export function Weather() {
  const dispatch = useDispatch();
  const weather = useSelector((state) => state.weather);
  

  useEffect(() => {
    async function location() {
      let loc = await axios.get(
        `http://api.weatherapi.com/v1/ip.json?key=${process.env.REACT_APP_KEY}&q=auto:ip`
      );
      dispatch(data(loc.data.lat, loc.data.lon));
    }
    location();
  }, []);

  return (
    <>
      <div>
        {Object.keys(weather).length === 0 ? null : weather.location.name}
      </div>
      <div>
        {Object.keys(weather).length === 0 ? null : weather.location.localtime}
      </div>
      <div>
        {Object.keys(weather).length === 0 ? null : weather.current.humidity} %
      </div>
      <div>
        {Object.keys(weather).length === 0 ? null : weather.current.wind_kph}{" "}
        km/h
      </div>
      <div>
        {Object.keys(weather).length === 0 ? null : weather.current.wind_dir}{" "}
      </div>
      <div>
        {Object.keys(weather).length === 0 ? null : weather.current.temp_c}°C{" "}
      </div>
    </>
  );
}
