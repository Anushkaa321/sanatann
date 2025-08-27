// "use client";
// import React, { useRef, useEffect, useState } from "react";
// import { motion } from "framer-motion";

// export default function AnimatedBackgroundSection() {

//  const audioRef = useRef(null);
//  const [audioStarted, setAudioStarted] = useState(false);

//  const handleStartAudio = () => {
//     if (!audioStarted && audioRef.current) {
//       audioRef.current.volume = 0.5; // set volume
//       audioRef.current.play().catch(() => {
//         console.log("Audio play failed");
//       });
//       setAudioStarted(true);
//     }
//   };
//   return (
//     <div className="relative w-full overflow-hidden min-h-[900px] flex items-center justify-center text-white" 
//      onClick={handleStartAudio} 
//     >
     
//       {/* Background image with motion */}
//       <motion.div
//         className="absolute inset-0 bg-cover bg-center"
//         style={{
//           backgroundImage: "url('/ab.png')",
//            backgroundPosition: "center -500px", // 👈 shifts image upward (crop top)
//   backgroundSize: "cover",  // ✅ replace with your image
//         }}
//         animate={{
//           scale: [1, 1.1, 1],        // zoom in/out
//           backgroundPosition: ["0% 60%", "100% 60%", "0% 60%"], // left → right → left
//         }}
//         transition={{
//           duration: 15,  // slow and smooth
//           repeat: Infinity,
//           ease: "easeInOut",
//         }}
//       ></motion.div>

//     {/* Dark overlay */}
// <div className="absolute inset-0 bg-black/40"></div>

// {/* Content */}
// <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 mb-40">
//  <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold drop-shadow-2xl mb-4">
//   सनातन युवा वाहिनी
// </h1>
// <p className="sm:mt-4 font-extrabold max-w-md sm:max-w-2xl text-base sm:text-lg md:text-2xl text-white leading-relaxed">
//   हिंदू धर्म की आध्यात्मिक और सांस्कृतिक विरासत को संरक्षित और बढ़ावा देने के लिए समर्पित। 
//   एकता, सेवा और सामुदायिक भागीदारी को बढ़ावा देने के लिए हमारे साथ जुड़ें।
// </p>
// <div className="mt-6 flex gap-4">
//     <button className="px-6 py-3 border-2 border-orange-500 text-white font-bold rounded-lg shadow-lg hover:bg-yellow-600 transition">
//       हमारे साथ जुड़ें
//     </button>
//     <button className="px-6 py-3 bg-transparent border-2 border-orange-500 text-white-500 font-bold rounded-lg shadow-lg hover:bg-yellow-600 hover:text-white transition">
//       और जानें
//     </button>
//   </div>
// </div>

 
      
// {/* Background Audio */}
// <audio ref={audioRef} src="/ramm.mp3" loop hidden />
// </div>
//   );
// }






"use client";
import React from "react";
import Link from "next/link";

export default function AnimatedBackgroundSection() {
  return (
    <div className="relative w-full overflow-hidden min-h-[900px] flex items-center justify-center text-white">
    
      <video
        src="/oo.mp4" 
        autoPlay
        loop
        controls
        playsInline
        className="absolute inset-0 w-full h-full object-cover "
      />

     
      <div className="absolute inset-0 bg-black/40"></div>

    
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 mb-20">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold drop-shadow-2xl mb-2">
          सनातन युवा वाहिनी
        </h1>
        <p className="sm:mt-4 font-extrabold max-w-md sm:max-w-2xl text-base sm:text-lg md:text-2xl text-white leading-relaxed">
          हिंदू धर्म की आध्यात्मिक और सांस्कृतिक विरासत को संरक्षित और बढ़ावा
          देने के लिए समर्पित। एकता, सेवा और सामुदायिक भागीदारी को बढ़ावा देने
          के लिए हमारे साथ जुड़ें।
        </p>
        <div className="mt-6 flex gap-4">
            <Link href="/contact">
          <button className="px-6 py-3 border-2 border-orange-500 text-white font-bold rounded-lg shadow-lg hover:bg-yellow-600 transition">
            हमारे साथ जुड़ें
          </button>
          </Link>
           <Link href="/hamare-baareme">
          <button className="px-6 py-3 bg-transparent border-2 border-orange-500 text-white font-bold rounded-lg shadow-lg hover:bg-yellow-600 hover:text-white transition">
            और जानें
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

