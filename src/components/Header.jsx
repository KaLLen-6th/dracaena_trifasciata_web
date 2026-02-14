import { motion } from "framer-motion";

export default function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="mb-8"
    >
      <h1 className="text-3xl font-bold text-green-400">
        🌿 Smart Plant Monitoring
      </h1>
      <p className="text-gray-400">Realtime IoT Dashboard</p>
    </motion.header>
  );
}
