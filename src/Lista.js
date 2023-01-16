import { Link } from "react-router-dom";


const Lista = ({ilmoitukset, title}) => {

    return ( 
        <div className="ilmoitukset-lista">
            <h2>{title}</h2>
            {ilmoitukset.map((ilmoitus) => (
                <div className="ilmoitus-preview" key={ilmoitus.id}>
                    <Link to={`/ilmoitukset/${ilmoitus.id}`}>
                    <h2>{ilmoitus.title}</h2>
                    <p>{ilmoitus.location}</p>
                    <p>{ilmoitus.author}</p>
                    </Link>
                  
                    </div>
            ))}
        </div>
     );
}
 
export default Lista;