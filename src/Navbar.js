import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 

        <nav className="navbar">
              
            <h1>Featsy</h1>
            <div className="links">
            <Link to="/">Koti</Link>
            <Link to="/">Kirjaudu tai rekisteröidy täältä (linkki)
                            </Link>
                <Link className="IlmoituksenLuonti" to="/IlmoituksenLuonti">Luo uusi</Link>
                
            </div>
        </nav>
     );
}
 
export default Navbar;


