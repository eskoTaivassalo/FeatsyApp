import { Link } from "react-router-dom";

const Notfound = () => {
    return ( 
        <div className="not-found">
            <h2>sorry</h2>
            <p>Tämä sivu ei löydy</p>
            <Link to="/">Kotisivulle takaisin</Link>
        </div>
        

     );
}
 
export default Notfound;