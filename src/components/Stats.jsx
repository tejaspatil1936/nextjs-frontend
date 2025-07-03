"use client";
import { motion } from "framer-motion";
import CountUpOnView from "./CountUpOnView";

export default function Stats() {
  return (
    <section className="bg-teal-50 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-5xl font-bold text-teal-800 mb-2">
              <CountUpOnView end={8} duration={2} suffix="+" />
            </h3>
            <p className="text-xl text-gray-700">Years of practice</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-5xl font-bold text-teal-800 mb-2">
              <CountUpOnView end={500} duration={2.5} suffix="+" />
            </h3>
            <p className="text-xl text-gray-700">Sessions</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
