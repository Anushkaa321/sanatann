export default function DaanKrePage() {
  return (
    <main className="relative w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-200 via-orange-200 to-yellow-200 p-4">
      <div className="text-center w-full max-w-2xl p-4 sm:p-6 bg-white bg-opacity-80 rounded-2xl shadow-lg">
        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-orange-700 mb-4 sm:mb-6">
          दान करें 🙏
        </h1>

        {/* Paragraph */}
        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-800 mb-4 sm:mb-6 leading-relaxed px-1 sm:px-2">
          सनातन धर्म और समाज सेवा कार्यों में आपका योगदान अमूल्य है।  
          आपके द्वारा किया गया दान हमारी गतिविधियों, शिक्षा, और सेवा कार्यों को आगे बढ़ाने में मदद करेगा।  
        </p>

        {/* Donation Button */}
        <button className="w-full sm:w-auto px-5 sm:px-6 py-2.5 sm:py-3 bg-orange-600 text-white rounded-lg shadow-lg text-base sm:text-lg font-semibold hover:bg-orange-700 transition">
          अभी दान करें
        </button>
      </div>
    </main>
  );
}
