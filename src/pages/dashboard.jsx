import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import { db, ref, onValue } from "../services/firebase";
import { fetchWeather } from "../services/weather";

import SensorCard from "../components/SensorCard";
import Header from "../components/Header";
import WeatherCard from "../components/WeatherCard";
import SensorChart from "../components/SensorChart";

export default function Dashboard() {
    const [suhu, setSuhu] = useState(0);
    const [humidity, setHumidity] = useState(0);
    const [soil, setSoil] = useState(0);
    const [weather, setWeather] = useState(null);

    const [tempData, setTempData] = useState([]);
    const [humData, setHumData] = useState([]);
    const [soilData, setSoilData] = useState([]);

    const pushData = (setFn, value) => {
      setFn(prev => [
        ...prev.slice(-19),
      {
        time: new Date().toLocaleDateString(),
        value
      }
  ]);
};

useEffect(() => {
  onValue(ref(db, "DataSuhu"), snap => {
      const v = Number(snap.val()) || 0;
      setSuhu(v);
      pushData(setTempData, v);
    });

  onValue(ref(db, "DataHumidity"), snap => {
      const v = Number(snap.val()) || 0;
      setHumidity(v);
      pushData(setHumData, v);
    });

  onValue(ref(db, "DataSoil"), snap => {
      const v = Number(snap.val()) || 0;
      setSoil(v);
      pushData(setSoilData, v);
    });
  }, []);

  useEffect(() => {
    fetchWeather(-6.2, 106.8).then(setWeather);
}, []);

  return (
  <div className="min-h-screen bg-slate-900 text-white p-6">
    {/* Header */}
    <Header />

    {/* Sensor Cards */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
    <SensorCard
      title="Temperature"
      value={suhu}
      unit="°C"
      icon="🌡"
    />

    <SensorCard
      title="Humidity"
      value={humidity}
      unit="%"
      icon="💧"
    />

    <SensorCard
      title="Soil Moisture"
      value={soil}
      unit="%"
      icon="🌱"
    />
  </div>

    {/* Weather Card */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="mb-6"
    >
      <WeatherCard weather={weather} />
    </motion.div>

    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
      <SensorChart
        title="Temperature Trend"
        data={tempData}
        color="#4ade80"
        />
      <SensorChart
        title="Humidity Trend"
        data={humData}
        color="#60a5fa"
        />
      <SensorChart
        title="Soil Moisture Trend"
        data={soilData}
        color="#facc15"
        />  
    </div>
  </div>
  );
}

