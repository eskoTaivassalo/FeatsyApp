

import Lista from './Lista';                //npx json-server --watch data/db.json --port 8000//
import useFetch from './useFetch';



const Home = () => {
    const { data: ilmoitukset , isPending, error} = useFetch('http://localhost:8000/ilmoitukset');
   

    return (
      
        <div className="Home">
          { error && <div>{error}</div>}
          {isPending && <div>Hetki...hae kahvia!!</div>}
          {ilmoitukset && <Lista ilmoitukset={ilmoitukset} title="Kaikki ilmoitukset" />}
        </div>
      );
}
 
export default Home;