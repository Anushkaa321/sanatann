"use client";
import React from "react";
import { motion } from "framer-motion";
import {
 IconGolfFilled,
} from "@tabler/icons-react";

const data = [
  {
    title: "संस्कृति संरक्षण",
    description: "हमारी समृद्ध सांस्कृतिक परंपराओं और विरासत की रक्षा और उत्सव।",
    icon: <IconGolfFilled size={40} className="text-orange-600" />,
  },
  {
    title: "सामाजिक सेवा",
    description: "जरूरतमंदों की मदद के लिए मानवीय गतिविधियों में भाग लेना।",
    icon: <IconGolfFilled size={40} className="text-orange-600" />,
  },
  {
    title: "शैक्षिक कार्यक्रम",
    description:
      "हिंदू धर्म के बारे में ज्ञान और जागरूकता फैलाने के लिए शैक्षिक पहल।",
    icon: <IconGolfFilled size={40} className="text-orange-600" />,
  },
  {
    title: "सामुदायिक कार्यक्रम",
    description:
      "लोगों को एकजुट करने और सांझा विरासत का उत्सव मनाने के लिए आयोजन।",
    icon: <IconGolfFilled size={40} className="text-orange-600" />,
  },
  {
    title: "युवा सशक्तिकरण",
    description:
      "सांस्कृतिक और सामाजिक गतिविधियों में युवाओं की भागीदारी को प्रोत्साहित करना।",
    icon: <IconGolfFilled size={40} className="text-orange-600" />,
  },
  {
    title: "वैश्विक संपर्क",
    description:
      "हिंदू समुदायों को वैश्विक एकता और सांस्कृतिक आदान-प्रदान के लिए जोड़ना।",
    icon: <IconGolfFilled size={40} className="text-orange-600" />,
  },
  {
    title: "Innovation",
    description: "Building the future together.",
    icon: <IconGolfFilled size={40} className="text-orange-600" />,
  },
];

function Card({ card }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -5 }}
      className={`min-w-[260px] max-w-[260px] mx-6 p-8 
        rounded-2xl shadow-xl flex flex-col items-center transition-all
        bg-gradient-to-br from-orange-200 to-orange-400 text-white`}
    >
      <div className="p-3 rounded-full bg-white/20 shadow-md mb-4">
        {card.icon}
      </div>
      <h3 className="text-lg font-bold text-center">{card.title}</h3>
      <p className="text-sm text-center mt-2">{card.description}</p>
    </motion.div>
  );
}

export default function AutoScrollCards() {
  return (
    <div className="relative w-full overflow-hidden py-16 bg-gradient-to-b from-orange-50 via-yellow-50 to-white min-h-[520px]">
      <h2 className="text-3xl font-extrabold text-center text-orange-700 mt-10 mb-10 drop-shadow-lg">
         हमारी प्रमुख सेवाएँ 
      </h2>

      <motion.div
        className="flex"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
      >
        {[...data, ...data].map((card, i) => (
          <Card key={i} card={card} />
        ))}
      </motion.div>
    </div>
  );
}
