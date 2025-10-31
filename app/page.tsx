import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-linear-to-br from-blue-50 to-blue-200">
      <Navbar />

      {/* Hero Section */}
      <section className="flex flex-col items-center text-center px-6 pt-20 pb-16">
        <h1 className="text-4xl md:text-6xl font-extrabold text-slate-800 drop-shadow-sm">
          Welcome to <span className="text-blue-600">Windy</span> 🌬️
        </h1>

        <p className="text-lg md:text-xl text-slate-600 mt-4 max-w-xl">
          Get real-time weather updates, forecasts and alerts for cities worldwide.
        </p>

        <div className="mt-6 flex flex-col md:flex-row gap-4">
          <a
            href="/dashboard"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg text-lg font-medium shadow hover:bg-blue-700 transition"
          >
            View Dashboard
          </a>
          <a
            href="/profile"
            className="px-6 py-3 bg-white text-blue-600 border border-blue-600 rounded-lg text-lg font-medium shadow hover:bg-blue-50 transition"
          >
            My Profile
          </a>
        </div>
      </section>

      {/* Illustration Section */}
      <section className="flex justify-center px-6 pb-20">
        <img
          src="https://cdn-icons-png.flaticon.com/512/4814/4814785.png"
          alt="Weather Illustration"
          className="w-64 md:w-96 opacity-90 drop-shadow-md"
        />
      </section>

      <Footer />
    </main>
  );
}
