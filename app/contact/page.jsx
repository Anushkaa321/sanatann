export default function ContactPage() {
  return (
    <main className="relative w-full min-h-screen bg-gradient-to-br from-pink-100 via-orange-100 to-indigo-100 flex items-center justify-center px-4 sm:px-6 py-8 sm:py-12 mt-16">
      <div className="w-full max-w-lg sm:max-w-2xl md:max-w-3xl bg-white rounded-2xl shadow-xl p-4 sm:p-6 md:p-8">
        {/* Heading */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-orange-600 mb-3 sm:mb-4">
          संपर्क करें
        </h1>
        <p className="text-sm sm:text-base md:text-lg text-center text-gray-600 mb-6 sm:mb-8">
          हमें आपके विचार और सुझाव जानकर खुशी होगी। कृपया नीचे दिया गया फॉर्म भरें और हम जल्द ही आपसे संपर्क करेंगे।
        </p>

        {/* Contact Form */}
        <form className="space-y-5 sm:space-y-6">
          {/* Name */}
          <div>
            <label className="block text-gray-700 font-medium mb-1 sm:mb-2">
              नाम
            </label>
            <input
              type="text"
              placeholder="अपना नाम लिखें"
              className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 text-sm sm:text-base"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-700 font-medium mb-1 sm:mb-2">
              ईमेल
            </label>
            <input
              type="email"
              placeholder="आपका ईमेल"
              className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 text-sm sm:text-base"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-gray-700 font-medium mb-1 sm:mb-2">
              संदेश
            </label>
            <textarea
              rows="4"
              placeholder="अपना संदेश लिखें"
              className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 text-sm sm:text-base resize-none"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-2.5 sm:py-3 bg-orange-600 text-white text-sm sm:text-base font-semibold rounded-lg shadow-md hover:bg-indigo-700 transition"
          >
            भेजें
          </button>
        </form>
      </div>
    </main>
  );
}
