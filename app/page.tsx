export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">
          Welcome to Noe MI Platform Cap
        </h1>
        <p className="text-xl text-gray-600">
          With Vercel Web Analytics enabled
        </p>
        <div className="mt-8 p-6 bg-blue-50 rounded-lg">
          <p className="text-sm text-gray-700">
            📊 Vercel Web Analytics is now tracking page views and performance metrics.
          </p>
          <p className="text-sm text-gray-600 mt-2">
            View your analytics data in the Vercel Dashboard.
          </p>
        </div>
      </div>
    </main>
  );
}
