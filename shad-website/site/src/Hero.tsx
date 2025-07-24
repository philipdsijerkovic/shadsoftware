import { cn } from "@/lib/utils";

export default function Hero() {
  return (
    <section className="relative min-h-screen px-4 overflow-hidden">
      {/* Background gradient covering entire viewport */}
      <div className="fixed inset-0 z-0">
        <img
          src="/gradientbottom.png"
          alt="Background gradient"
          className="w-full h-full object-cover opacity-17"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl lg:text-6xl font-normal text-black leading-tight">
            Web Development,
            <br />
            <span>For your small business</span>
          </h1>
          <p className="mt-6 text-lg text-gray-600">
            Request a quote or go to our interactive quote tool for more
            information.
          </p>

          {/* Email input with buttons */}
          <div className="mt-8 flex flex-col sm:flex-row gap-3 items-center justify-center max-w-xl mx-auto">
            <div className="relative w-full sm:w-[350px] sm:flex-shrink-0">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-6 py-3 pr-20 rounded-full bg-gray-100/30 border border-gray-300/50 text-gray-800 placeholder-gray-500 focus:ring-0 focus:border-transparent"
              />
              <button className="absolute right-1 top-1 bottom-1 px-4 bg-blue-400 text-white rounded-full hover:bg-blue-500 transition-colors">
                Submit
              </button>
            </div>
            <button className="px-6 py-3 bg-gray-100/30 border border-gray-300/50 text-gray-700 rounded-full hover:bg-gray-100/50 transition-colors whitespace-nowrap">
              Interactive Quote Tool
            </button>
          </div>

          {/* Test image */}
          <div className="mt-8">
            <img
              src="/test.jpg"
              alt="Test image"
              className="mx-auto rounded-lg w-full max-w-3xl h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
