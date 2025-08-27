export default function MukhyaUddesh() {
  return (
    <main className="relative w-full min-h-screen overflow-hidden">
      {/* Background Video Section */}
      <section className="relative w-full h-screen overflow-hidden">
        {/* Video */}
        <video
          src="/oo.mp4"
          autoPlay
          loop
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        />

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6">
          <h1 className="text-5xl font-bold mb-4">मुख्य उद्देश्य</h1>
          <p className="text-lg max-w-2xl">
            यहाँ आपके उद्देश्य का संक्षिप्त विवरण होगा।
          </p>
        </div>
      </section>

      {/* Detailed Description Section */}
      <section className="relative py-16 px-6 bg-gradient-to-b from-orange-50 to-yellow-100">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-orange-700 mb-8">
            मुख्य उद्देश्य का विस्तृत विवरण
          </h2>

          <ul className="text-lg md:text-xl text-gray-700 leading-relaxed space-y-4 text-left max-w-3xl mx-auto list-disc list-inside">
            <li>
              सनातन धर्म न केवल एक आस्था है, बल्कि यह जीवन जीने की कला है। इसका
              उद्देश्य मानवता को सही दिशा देना और हर व्यक्ति को धर्म, संस्कार,
              और संस्कृति से जोड़ना है।
            </li>
            <li>
              समाज में शिक्षा, महिला सशक्तिकरण, और सांस्कृतिक मूल्यों का
              प्रचार-प्रसार करना।
            </li>
            <li>
              आधुनिक तकनीक के माध्यम से सनातन धर्म की शिक्षाओं को हर घर तक पहुँचाना।
            </li>
            <li>
              जब समाज अपने मूल्यों और धर्म को समझेगा, तभी सच्चे अर्थों में राष्ट्र
              और विश्व का कल्याण संभव होगा।
            </li>
            <li>
              अखंड भारत को पुनः स्थापित करने के साथ-साथ हिन्दू राष्ट्र की घोषणा।
            </li>
            <li>
              हिन्दू मान बिन्दुओं की रक्षा, हिन्दू धार्मिक स्थलों का प्रचार प्रसार।
            </li>
            <li>
              चारधाम यात्रा का बाजारीकरण बंद हो, गैर धार्मिक लोगों का प्रवेश वर्जित हो।
            </li>
            <li>गौ हत्या पूर्ण रूप से प्रतिबंधित हो।</li>
            <li>
              पहाड़ों के हिन्दू परिवारों के जीवन यापन की व्यवस्था सुनिश्चित करना व उन्हें स्वावलम्बी बनाना।
            </li>
            <li>
              सनातन धर्म में पुनः घर वापसी करने वालों के जीवन यापन की समुचित व्यवस्था के लिए आयोग बने।
            </li>
            <li>देश और धर्म की रक्षा हेतु युवाओं को संगठित व सशक्त बनाना।</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
