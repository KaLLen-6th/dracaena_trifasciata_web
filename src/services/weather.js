import axios from "axios";

const API_KEY = "f4e8b6bfba801166f38bdc60caf9cd87";

export async function fetchWeather(lat, lon) {
    const res = await axios.get(
        'https://api.openweathermap.org/data/2.5/weather',
    {
        params: {
            lat,
            lon,
            units: "metric",
            appid: API_KEY,
            },
        }
    );
    return res.data
}