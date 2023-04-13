import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

export const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [city, setCity] = useState("istanbul");
  const [dailyWeather, setDailyWeather] = useState("")
  useEffect(() => {
    async function getData() {
      const data = await axios(
        `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=c4ba719abbcf7b4830e32fedee30ff40`
      );
      console.log(data);
      const lat = data.data[0].lat;
      const lon = data.data[0].lon;

      const {data: dailyWeatherValue} = await axios(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=c4ba719abbcf7b4830e32fedee30ff40&units=metric`
      );
      console.log(dailyWeatherValue)
      setDailyWeather(dailyWeatherValue)
    }
    getData();
  }, [city]);

  const values = {
    city,
    setCity,
    dailyWeather,
    setDailyWeather,
  };

  return (
    <WeatherContext.Provider value={values}>{children}</WeatherContext.Provider>
  );
};