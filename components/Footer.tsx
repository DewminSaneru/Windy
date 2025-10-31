export default function Footer() {
  return (
    <footer className="mt-16 bg-linear-to-r from-blue-600 to-blue-400 text-white py-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Branding */}
        <div>
          <h2 className="text-2xl font-bold flex items-center gap-2">
            🌤️ WINDY
          </h2>
          <p className="text-sm mt-3 text-blue-100">
            Your daily source for accurate weather updates and forecasts.
            Stay prepared, stay safe.
          </p>
        </div>

        {/* Quick links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-blue-100">
            <li><a href="/" className="hover:text-white transition">Home</a></li>
            <li><a href="/dashboard" className="hover:text-white transition">Dashboard</a></li>
            <li><a href="/profile" className="hover:text-white transition">Profile</a></li>
          </ul>
        </div>

        {/* Contact / Social */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Connect</h3>
          <p className="text-blue-100 text-sm mb-2">Have questions or feedback?</p>
          <a 
            href="mailto:support@weathervibe.com" 
            className="font-medium hover:text-white underline"
          >
            support@windy.com
          </a>

          <div className="flex gap-4 mt-4 text-xl">
            <a href="#" className="hover:text-white transition">📘</a>
            <a href="#" className="hover:text-white transition">🐦</a>
            <a href="#" className="hover:text-white transition">📸</a>
            <a href="#" className="hover:text-white transition">💼</a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-blue-300/40 mt-10 pt-4 text-center text-sm text-blue-100">
        © {new Date().getFullYear()} WINDY. All rights reserved.
      </div>
    </footer>
  );
}
