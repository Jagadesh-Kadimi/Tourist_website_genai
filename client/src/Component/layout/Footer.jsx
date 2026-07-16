import {Link} from "react-router-dom"

function FootBar(){
    return (
        <footer className="bg-slate-900 text-white py-12">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
             <div>
             <h2>AI TOURISM</h2>
             </div>
            <p clasName="text-gray-300">Explore the world with AI-powered travel recommendations.

            </p>
            <div>
                <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                <ul className="space-y-2">
                    <li><Link to="/" className="text-gray-300 hover:text-white">Home</Link></li>
                    <li><Link to="/destinations" className="text-gray-300 hover:text-white">Destinations</Link></li>
                    <li><Link to="/hotels" className="text-gray-300 hover:text-white">Hotels</Link></li>
                    <li><Link to="/contact" className="text-gray-300 hover:text-white">Contact</Link></li>
                </ul>
            </div>
            <div>
            <h3 className="text-lg font-semibold mb-4">
              Services
            </h3>

            <ul className="space-y-2 text-gray-400">
              <li>Hotel Booking</li>
              <li>Travel Planning</li>
              <li>Emergency Support</li>
              <li>Language Translation</li>
              <li>Guide Booking</li>
            </ul>
          </div>
           <div>
            <h3 className="text-lg font-semibold mb-4">
              Contact
            </h3>

            <p className="text-gray-400">
              📍 India
            </p>

            <p className="text-gray-400">
              📧 support@aitourism.com
            </p>

            <p className="text-gray-400">
              ☎ +91 6303555014
            </p>
          </div>

        </div>

        <hr className="my-8 border-gray-700" />

        <div className="text-center text-gray-500">
          © 2026 AI Tourism Guide. All Rights Reserved.
        </div>

      </div>
        </footer>
    );
}
export default FootBar;
