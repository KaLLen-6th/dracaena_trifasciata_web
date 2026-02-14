import { motion } from "framer-motion";

export default function WeatherCard({ weather }) {
  if (!weather) return null;

  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="bg-gradient-to-r from-blue-600 to-indigo-600
                 rounded-xl p-6 shadow-lg"
    >
      <h3 className="text-lg font-semibold mb-2">
        ☁️ Weather - {weather.name}
      </h3>
      <p className="text-3xl font-bold">{weather.main.temp} °C</p>
      <p className="capitalize text-blue-100">
        {weather.weather[0].description}
      </p>
    </motion.div>
  );
}
