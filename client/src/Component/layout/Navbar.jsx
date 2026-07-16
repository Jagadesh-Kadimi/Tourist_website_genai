import { Link } from "react-router-dom";


function NavBar(){
    return(
        <nav className="flex justify-between items-center px-12 py-5 bg-white shadow-md">
            <div className="text-2xl font-bold text-blue-600">
                <Link to ="/">AI TOURISM</Link>

            </div>
            <ul className="flex gap-8 text-lg">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/search">Destinations</Link></li>
                <li><Link to="/hotels">Hotels</Link></li>
                <li><Link to="/budget">Budget</Link></li>
                <li><Link to="/login">Login</Link></li>
            </ul>
        </nav>
    );
}
export default NavBar;