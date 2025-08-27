"use client";

export default function SewayeinPage() {
  const services = [
    {
      title: "शिक्षा",
      description: "बच्चों और युवाओं को संस्कार और आधुनिक शिक्षा प्रदान करना।",
      image: "/education.jpg", // add your image path
    },
    {
      title: "महिला सशक्तिकरण",
      description: "महिलाओं को स्वरोजगार और आत्मनिर्भरता की दिशा में आगे बढ़ाना।",
      image: "/women.jpg",
    },
    {
      title: "स्वास्थ्य",
      description: "समाज में स्वास्थ्य संबंधी जागरूकता और सेवाएँ उपलब्ध कराना।",
      image: "/health.jpg",
    },
    {
      title: "पर्यावरण संरक्षण",
      description: "प्रकृति और पर्यावरण की रक्षा हेतु जागरूकता और कार्य।",
      image: "/environment.jpg",
    },
    {
      title: "धार्मिक एवं सांस्कृतिक कार्यक्रम",
      description: "सनातन संस्कृति और परंपराओं को बढ़ावा देना।",
      image: "/cultural.jpg",
    },
  ];

  return (
    <main className="bg-orange-50 min-h-screen mt-15">
      {/* Hero Section */}
     

      {/* Services Section */}
      <section className="py-20 relative">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 mt-10 text-orange-700">
            हमारी प्रमुख सेवाएँ 
          </h2>

          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {services.map((service, index) => (
              <div
                key={index}
                className="flex flex-col overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-transform duration-500 hover:scale-[1.02] bg-white"
              >
                {/* Image */}
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover"
                />

                {/* Text */}
                <div className="p-6 text-center">
                  <h3 className="text-2xl font-semibold mb-2 text-orange-700">
                    {service.title}
                  </h3>
                  <p className="text-gray-700">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
