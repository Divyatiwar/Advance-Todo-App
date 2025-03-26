import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchWeather } from "../redux/tasksSlice";

function Weather() {
  const dispatch = useDispatch();
  const weather = useSelector((state) => state.tasks.weather);
  const status = useSelector((state) => state.tasks.status);
  const [location, setLocation] = useState({ lat: null, lon: null });

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation({ lat: latitude, lon: longitude });
          dispatch(fetchWeather({ lat: latitude, lon: longitude }));
        },
        (error) => {
          console.error("Geolocation error:", error);
          dispatch(fetchWeather({ city: "New Delhi" })); // Default city if geolocation fails
        }
      );
    } else {
      dispatch(fetchWeather({ city: "New Delhi" })); // Default city if geolocation is unavailable
    }
  }, [dispatch]);

  return (
    <div className="weather-container">
      {status === "loading" && <p>🌍 Fetching weather...</p>}
      {status === "succeeded" && weather && (
        <p>
          🌤 {weather.name}: {weather.main.temp}°C
        </p>
      )}
      {status === "failed" && <p>❌ Error fetching weather</p>}
    </div>
  );
}

export default Weather;
