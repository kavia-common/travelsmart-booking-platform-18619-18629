 /**
  * PUBLIC_INTERFACE
  * HomePage renders the landing hero to verify Tailwind and asset loading.
  * Returns: A styled landing section with brand colors and sample imagery.
  */
export default function HomePage() {
  return (
    <main className="min-h-[70vh] bg-gradient-to-b from-blue-50 to-gray-50">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="rounded-2xl bg-white shadow-soft p-10">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <span className="inline-flex items-center rounded-full bg-blue-100 text-blue-700 px-3 py-1 text-sm font-medium">
                Ocean Professional Theme
              </span>
              <h1 className="mt-4 text-4xl md:text-5xl font-bold text-gray-900">
                Plan smarter. Book faster.
              </h1>
              <p className="mt-4 text-gray-600">
                AI-powered flight and hotel bookings with real-time pricing and personalized recommendations.
              </p>
              <div className="mt-6 flex gap-3">
                <a
                  href="/search/flights"
                  className="inline-flex items-center rounded-lg bg-primary px-5 py-3 text-white font-semibold hover:opacity-95 transition"
                >
                  Search Flights
                </a>
                <a
                  href="/search/hotels"
                  className="inline-flex items-center rounded-lg border border-gray-200 bg-white px-5 py-3 font-semibold text-gray-800 hover:bg-gray-50 transition"
                >
                  Search Hotels
                </a>
              </div>
            </div>
            <div className="flex-1">
              {/* Sample static asset path. Ensure public/assets contains referenced images. */}
              <img
                src="/assets/hero-travel.png"
                alt="Travel illustration"
                className="w-full h-auto rounded-xl border border-gray-100 shadow"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
