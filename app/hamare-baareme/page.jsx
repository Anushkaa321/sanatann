"use client";

import { useState, useEffect } from "react";

export default function HamareBare() {
  const fullText = " सनातन धर्म के बारे में "; // typing text
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayedText(fullText.slice(0, i + 1));
      i++;
      if (i === fullText.length) clearInterval(interval);
    }, 120); // typing speed

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="relative w-full min-h-screen bg-gradient-to-b from-orange-50 via-yellow-50 to-white flex items-center justify-center px-4 sm:px-6 py-20 sm:py-28 mt-17">
      <div className="max-w-5xl text-center relative">
        {/* Decorative Glow Circles */}
        <div className="absolute -top-16 -left-16 w-32 h-32 sm:w-48 sm:h-48 bg-orange-200 rounded-full blur-3xl opacity-40 animate-pulse hidden sm:block"></div>
        <div className="absolute -bottom-16 -right-16 w-40 h-40 sm:w-56 sm:h-56 bg-yellow-200 rounded-full blur-3xl opacity-40 animate-pulse hidden sm:block"></div>

        {/* Title with typing effect */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 sm:mb-8 text-orange-700 drop-shadow-lg">
          {displayedText}
          <span className="animate-pulse">|</span>
        </h1>

        {/* Content */}
        <div className="space-y-4 sm:space-y-6 text-gray-700 text-base sm:text-lg md:text-xl leading-relaxed">
          <p className="hover:scale-[1.02] transition-transform duration-300">
            <strong className="text-orange-600">सनातन धर्म</strong>, जिसे{" "}
            <em>शाश्वत धर्म</em> भी कहा जाता है, मानव जीवन का मार्गदर्शन करने
            वाला सबसे प्राचीन और सार्वभौमिक सिद्धांत है। यह केवल एक धर्म नहीं,
            बल्कि <span className="font-semibold text-orange-700">जीवन जीने की कला</span> है।
          </p>

          <p className="hover:scale-[1.02] transition-transform duration-300">
            इसका आधार <span className="text-orange-600 font-medium">सत्य</span>,{" "}
            <span className="text-orange-600 font-medium">अहिंसा</span>,{" "}
            <span className="text-orange-600 font-medium">प्रेम</span>,{" "}
            <span className="text-orange-600 font-medium">करुणा</span>, सहअस्तित्व
            और प्रकृति के प्रति सम्मान पर टिका हुआ है। यह हमें सिखाता है कि
            संपूर्ण सृष्टि ईश्वर की अभिव्यक्ति है और प्रत्येक जीव में वही परमात्मा
            विद्यमान है।
          </p>

          <p className="hover:scale-[1.02] transition-transform duration-300">
            वेद, उपनिषद, गीता और पुराण इसके{" "}
            <span className="text-orange-700 font-semibold">
              ज्ञान के शाश्वत स्रोत
            </span>{" "}
            हैं, जो आज भी मानवता को शांति, समरसता और आत्मबोध का मार्ग दिखाते हैं।
          </p>

          {/* Highlighted Sanskrit Quote */}
          <div className="bg-orange-100 px-4 sm:px-6 py-4 rounded-2xl shadow-md border border-orange-200">
            <p className="text-lg sm:text-xl md:text-2xl font-bold text-orange-800 mb-2">
              “वसुधैव कुटुम्बकम्”
            </p>
            <p className="text-gray-700 text-sm sm:text-base md:text-lg">
              अर्थात पूरी पृथ्वी एक परिवार है।
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
