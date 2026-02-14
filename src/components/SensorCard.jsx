import { motion } from "framer-motion";

export default function SensorCard({ title, value, unit, icon }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-slate-800 rounded-xl p-6 shadow-lg cursor-pointer
                 hover:shadow-green-500/30 transition-all"
    >
      <div className="flex items-center justify-between">
        <h3 className="text-slate-400">{title}</h3>
        <span className="text-2xl">{icon}</span>
      </div>

      <p className="mt-4 text-3xl font-bold text-green-400">
        {value} {unit}
      </p>
    </motion.div>
  );
}
