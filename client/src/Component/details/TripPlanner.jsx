import { useState } from "react";

function TripPlanner({ destination, onClose }) {
  const [days, setDays] = useState(3);
  const [travelers, setTravelers] = useState(1);
  const [budget, setBudget] = useState("Medium");
  const [tripPlan, setTripPlan] = useState(null);

  const generateTripPlan = () => {
    const attractions = destination.attractions || [];
    const food = destination.famousFood || [];

    const plan = [];

    for (let i = 0; i < days; i++) {
      const attraction =
        attractions.length > 0
          ? attractions[i % attractions.length]
          : "Explore local attractions";

      const meal =
        food.length > 0
          ? food[i % food.length]
          : "Try local food";

      plan.push({
        day: i + 1,
        attraction,
        meal,
      });
    }

    setTripPlan(plan);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4 overflow-y-auto">
      
      <div className="bg-white w-full max-w-2xl rounded-3xl shadow-2xl p-6 md:p-8 relative my-8">

        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-5 w-10 h-10 flex items-center justify-center rounded-full text-2xl text-gray-500 hover:bg-gray-100 hover:text-red-500 transition"
          aria-label="Close trip planner"
        >
          ×
        </button>

        {/* Heading */}
        <h2 className="text-3xl font-bold text-gray-800">
          Plan Your Trip
        </h2>

        <p className="text-gray-500 mt-2">
          Create a personalized travel plan for {destination.name}
        </p>

        {/* Days and Travelers */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">

          {/* Number of Days */}
          <div>
            <label className="block font-semibold text-gray-700 mb-2">
              Number of Days
            </label>

            <select
              value={days}
              onChange={(e) => {
                setDays(Number(e.target.value));
                setTripPlan(null);
              }}
              className="w-full border border-gray-300 rounded-xl p-3 outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="1">1 Day</option>
              <option value="2">2 Days</option>
              <option value="3">3 Days</option>
              <option value="4">4 Days</option>
              <option value="5">5 Days</option>
              <option value="7">7 Days</option>
            </select>
          </div>

          {/* Travelers */}
          <div>
            <label className="block font-semibold text-gray-700 mb-2">
              Travelers
            </label>

            <select
              value={travelers}
              onChange={(e) => setTravelers(Number(e.target.value))}
              className="w-full border border-gray-300 rounded-xl p-3 outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="1">1 Traveler</option>
              <option value="2">2 Travelers</option>
              <option value="3">3 Travelers</option>
              <option value="4">4 Travelers</option>
              <option value="5">5 Travelers</option>
              <option value="6">6+ Travelers</option>
            </select>
          </div>

        </div>

        {/* Budget */}
        <div className="mt-6">
          <label className="block font-semibold text-gray-700 mb-3">
            Budget Preference
          </label>

          <div className="grid grid-cols-3 gap-4">
            {["Budget", "Medium", "Luxury"].map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => {
                  setBudget(item);
                  setTripPlan(null);
                }}
                className={`border rounded-xl py-3 font-semibold transition ${
                  budget === item
                    ? "bg-blue-600 text-white border-blue-600"
                    : "bg-white text-gray-700 hover:border-blue-500"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        {/* Trip Summary */}
        <div className="mt-8 bg-blue-50 rounded-2xl p-5">
          <h3 className="font-bold text-gray-800">
            Trip Summary
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4 text-gray-600">
            <p>📍 {destination.name}</p>

            <p>
              📅 {days} {days === 1 ? "Day" : "Days"}
            </p>

            <p>
              👥 {travelers}{" "}
              {travelers === 1 ? "Traveler" : "Travelers"}
            </p>

            <p>
              💰 {budget} Budget
            </p>
          </div>
        </div>

        {/* Generate Button */}
        <button
          type="button"
          onClick={generateTripPlan}
          className="w-full mt-6 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-4 rounded-xl transition hover:shadow-lg"
        >
          Generate Trip Plan ✨
        </button>

        {/* Generated Itinerary */}
        {tripPlan && (
          <div className="mt-8 border-t pt-8">

            <h3 className="text-2xl font-bold text-gray-800 mb-2">
              Your Trip Itinerary
            </h3>

            <p className="text-gray-500 mb-6">
              Your {days}-day trip plan for {destination.name}
            </p>

            <div className="space-y-4">

              {tripPlan.map((item) => (
                <div
                  key={item.day}
                  className="bg-gray-50 border border-gray-200 rounded-2xl p-5 hover:shadow-md transition"
                >
                  <div className="flex items-center gap-3 mb-4">

                    <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
                      {item.day}
                    </div>

                    <h4 className="text-lg font-bold text-gray-800">
                      Day {item.day}
                    </h4>

                  </div>

                  <div className="space-y-3">

                    <p className="text-gray-700">
                      📍{" "}
                      <span className="font-semibold">
                        Explore:
                      </span>{" "}
                      {item.attraction}
                    </p>

                    <p className="text-gray-700">
                      🍴{" "}
                      <span className="font-semibold">
                        Food:
                      </span>{" "}
                      {item.meal}
                    </p>

                  </div>
                </div>
              ))}

            </div>

            <div className="mt-6 bg-green-50 border border-green-200 rounded-2xl p-5">
  <h4 className="font-bold text-green-800">
    Trip Ready! 🎉
  </h4>

  <p className="text-green-700 text-sm mt-1">
    Your travel itinerary has been generated successfully.
  </p>

  <button
    type="button"
    onClick={onClose}
    className="w-full mt-4 bg-gray-800 hover:bg-black text-white font-semibold py-3 rounded-xl transition"
  >
    Close Planner
  </button>
</div>
          </div>
        )}

      </div>
    </div>
  );
}

export default TripPlanner;