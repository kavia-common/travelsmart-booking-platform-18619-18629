/**
 * PUBLIC_INTERFACE
 * HomePage
 * Minimal landing content to confirm Tailwind CSS is applied.
 * Returns: A centered headline and subtext styled with Tailwind utilities.
 */
export default function HomePage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-b from-blue-50 to-gray-50">
      <div className="mx-auto max-w-2xl px-6 py-16 text-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900">
          TravelSmart
        </h1>
        <p className="mt-4 text-base sm:text-lg text-gray-600">
          Next.js App Router baseline is ready. Tailwind utilities are working.
        </p>
        <p className="mt-2 text-sm text-blue-700">
          Edit this page to restore full UI incrementally.
        </p>
      </div>
    </main>
  );
}
