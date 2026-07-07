import { Link } from "react-router-dom";


function NavBar(){
    return(
        <nav className="navbar">
            <div className="navbar__Logo">
                <Link to ="/">AI TOURISM</Link>

            </div>
            <ul className="nan-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">Destinations</Link></li>
                <li><Link to="/services">Hotels</Link></li>
                <li><Link to="/contact">Budget Planner</Link></li>
                <li><Link to="/login">Login</Link></li>
            </ul>
        </nav>
    );
}
export default NavBar;