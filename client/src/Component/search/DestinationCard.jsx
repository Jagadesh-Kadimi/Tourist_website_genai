import destination from "../../data/home/destination";

function Destinationcard({destination}){
    return(
        <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300">
            <img src={destination.image} alt={destination.name} />
            <div className="p-5">
                <h3 className="text-xl font-bold">
                    {destination.name}
                </h3>
                <p className="text-gray-500 mt-2">
                    📍{destination.state}
                </p>
                <div className="flex justify-between item-center mt-4">
                    <span className="br-green-100 text-green-700 px-3 py-1 rounded-full text-5m">

                    
                    ⭐{destination.rating}
                    </span>
                    <span className="font-bold text-blue-600">
                    ₹{destination.price}
                    </span>
                </div>
                <button className="mt-5 w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition">
                    View Details
                </button>
            </div>
        </div>
    );
}

export default Destinationcard;