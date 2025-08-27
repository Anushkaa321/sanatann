"use client";
import React from "react";
import { motion } from "framer-motion";

const photos = [
  { src: "/Abhay.jpg", name: "अभय कुमार", position: "राष्ट्रीय अध्यक्ष" },
  { src: "/Sanjay.png", name: "संजय सिंह", position: "राष्ट्रीय महामंत्री" },
  { src: "/Mayank.jpg", name: "मयंक पाण्डेय", position: "राष्ट्रीय संगठन मंत्री" },
  { src: "/photo4.jpg", name: "गिरीश डालाकोटी", position: "प्रदेश महामंत्री" },
];

export default function PhotoSection() {
  return (
    <section className="py-12 sm:py-16 bg-gradient-to-b from-orange-50 via-orange-100 to-yellow-50">
      {/* Heading */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-center text-orange-700 mb-8 sm:mb-12 drop-shadow-lg px-4">
    आइए, जानिए हमारे समर्पित संस्थापकों को
      </h2>

      {/* Grid container */}
      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 sm:px-6">
        {photos.map((person, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50, rotate: -5 }}
            whileInView={{ opacity: 1, y: 0, rotate: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, rotate: 2 }}
            transition={{
              duration: 0.8,
              type: "spring",
              stiffness: 120,
            }}
            className="flex flex-col items-center text-center"
          >
            {/* Photo */}
            <div className="relative overflow-hidden rounded-lg sm:rounded-xl shadow-md sm:shadow-xl cursor-pointer aspect-square max-w-[140px] sm:max-w-[180px] mx-auto">
              <motion.img
                src={person.src}
                alt={person.name}
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.5 }}
              />
            </div>

            {/* Name + Position */}
            <h3 className="mt-3 text-sm sm:text-base md:text-lg font-bold text-orange-800">
              {person.name}
            </h3>
            <p className="text-xs sm:text-sm md:text-base text-gray-600">
              {person.position}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
