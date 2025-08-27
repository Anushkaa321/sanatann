"use client";

import { motion } from "framer-motion";

export default function GalleryPage() {
  const images = [
    "/backgrounda.png",
     "/backgrounda.png",
    "/backgrounda.png",
   "/backgrounda.png",
    "/backgrounda.png",
   "/backgrounda.png",
   "/backgrounda.png",
   "/backgrounda.png",
   "/backgrounda.png",
  ];

  return (
    <main className="bg-gradient-to-b from-orange-50 via-yellow-50 to-white min-h-screen mt-15">
    

 


      {/* Gallery Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 mt-10 text-orange-700">
            हमारी यादें
          </h2>

          {/* Masonry Style Grid with animation */}
          <div className="columns-1 sm:columns-2 md:columns-3 gap-6 space-y-6">
            {images.map((src, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative overflow-hidden rounded-2xl shadow-lg transform transition duration-500 hover:scale-[1.03] hover:rotate-1 group"
              >
                <motion.img
                  src={src}
                  alt={`Gallery ${index + 1}`}
                  className="w-full object-cover rounded-2xl group-hover:scale-110 transition-transform duration-700"
                  whileHover={{ scale: 1.1, rotate: 2 }}
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-500 flex items-end justify-center p-4">
                  <p className="text-white text-lg font-semibold">
                    याद {index + 1}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
