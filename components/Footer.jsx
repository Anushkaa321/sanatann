import React from "react";
import Link from "next/link"; 

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col">

      {/* Feature Image Section */}
      <section className="relative -mt-2 z-10 px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          <img
            src="/Footer.png"
            alt="Feature"
            className="w-full h-auto md:h-[390px] object-cover rounded-2xl shadow-xl"
          />
        </div>
      </section>

      {/* Footer */}
     <footer className="bg-orange-600 text-white pt-16 md:pt-24 pb-8 mt-[-5rem] relative z-0">
  <div className="max-w-7xl mx-auto px-4 md:px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center md:text-left">
    {/* Logo + Address */}
    <div>
      <h2 className="text-white text-lg md:text-xl font-bold mt-6 md:mt-10 mb-3 md:mb-5">
        सनातन युवा वाहिनी
      </h2>
      <p className="text-xs md:text-sm leading-relaxed">
       देहरादून, बल्लूपुर चौक <br/>
उत्तराखण्ड
      </p>
      <p className="mt-3 text-xs md:text-sm">फ़ोन: 1-800-201-1019</p>
      <p className="text-xs md:text-sm"> ईमेल: support@sanatanyuvavahini.com</p>
    </div>

    {/* Quick Links */}
    <div>
      <h3 className="text-white font-semibold mb-3 mt-6 md:mt-10 text-sm md:text-base">
        प्रमुख लिंक
      </h3>
      <ul className="space-y-2 text-xs md:text-sm">
        <li><Link href="/home" className="hover:text-white">होम</Link></li>
        <li><Link href="/mukhya-uddesh" className="hover:text-white">मुख्य उद्देश्य</Link></li>
        <li><Link href="/hamare-baareme" className="hover:text-white">हमारे बारे में</Link></li>
        <li><Link href="/gallery" className="hover:text-white">गैलरी</Link></li>
        <li><Link href="/sewayein" className="hover:text-white">सेवाएँ</Link></li>
        <li><Link href="/blog" className="hover:text-white">ब्लॉग</Link></li>
        <li><Link href="/daan-kre" className="hover:text-white">दान करें</Link></li>
        <li><Link href="/contact" className="hover:text-white">संपर्क करें</Link></li>
      </ul>
    </div>

    {/* Social */}
    <div>
      <h3 className="text-white font-semibold mb-3 mt-6 md:mt-10 text-sm md:text-base">
    सोशल मीडिया
      </h3>
      <ul className="space-y-2 text-xs md:text-sm">
        <li><a href="#" className="hover:text-white">इंस्टाग्राम</a></li>
        <li><a href="#" className="hover:text-white">फ़ेसबुक</a></li>
        <li><a href="#" className="hover:text-white">यूट्यूब</a></li>
        <li><a href="#" className="hover:text-white">ट्विटर</a></li>
        <li><a href="#" className="hover:text-white">लिंक्डइन</a></li>
      </ul>
    </div>

    {/* Legal */}
    <div>
      <h3 className="text-white font-semibold mb-3 mt-6 md:mt-10 text-sm md:text-base">
       वैधानिक
      </h3>
      <ul className="space-y-2 text-xs md:text-sm">
        <li><a href="#" className="hover:text-white">नीति की शर्तें</a></li>
        <li><a href="#" className="hover:text-white">गोपनीयता नीति</a></li>
        <li><a href="#" className="hover:text-white">कुकी नीति</a></li>
      </ul>
    </div>
  </div>

  {/* Bottom line */}
  <div className="mt-10 md:mt-12 border-t border-white pt-4 md:pt-6 text-center text-xs md:text-sm text-white">
    © 2024 सनातन युवा वाहिनी. सर्वाधिकार सुरक्षित
  </div>
</footer>

    </div>
  );
}
