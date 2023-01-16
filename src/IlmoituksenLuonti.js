import { useState } from "react";
import {useHistory} from 'react-router-dom';

const IlmoituksenLuonti = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor,] = useState('');
    const [location, setLocation,] = useState('');
    const [date,setDate] = useState('');
    
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const ilmoitus = {title, body, author,location};

        setIsPending(true);

        fetch('http://localhost:8000/ilmoitukset/', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(ilmoitus)
        }).then(() => {
            
            setIsPending(false);
        })
       // history.go(-1);
       history.push('/');
    }
    return (  
        <div className="luo-uusi">
            <h2>Luo ilmoitus </h2>
            <form
             onSubmit= {handleSubmit}>
            <label>valitse aihe</label>
                <select
                value={title}
                onChange={(e) => setTitle(e.target.value)}>
                <option value="Pallopelit">pallopelit</option>
                <option value="Joukkuelajit">joukkuelajit</option>
                <option value="kaksinpelit">kaksinpelattavat pallopelit</option>
                <option value="lenkkiseuraa">lenkkiseuraa</option>
                <option value="leffaseuraa">leffaseuraa</option>
                <option value="kimppakyydit">kimppakyydit</option>
                <option value="naapuriapu">naapuriapu</option>
                <option value="työpaikat">työpaikat</option>
                <option value="yritykset ilmoittavat">Paikallisten yrittäjien ilmoitukset</option>
                 onChange={(e) => setTitle(e.target.value)}
                </select>
                <label>Ilmoitus teksti</label>
                <textarea
                    required
                    onChange={(e) => setBody(e.target.value)}
                    value={body}
                    ></textarea>
                

                <label>Ilmoittaja, henkilö/yritys</label>
                
                <input type="author"
                onChange={(e) => setAuthor(e.target.value)}
                value={author}
                />
                <label>
                <span>päivämäärä</span>
                <input type="date"
                onChange={(e) => setDate(e.target.value)}
                value={date}
                />
                </label>

                <label> Kirjoita kaupunki tai valitse listalta</label>
               
                <input type="location"
                onChange={(e) => setLocation(e.target.value)}
                value={location}
                />
                <select
                value={location}
                onChange={(e) => setLocation(e.target.value)}>
                <option value="Helsinki">helsinki</option>
                <option value="Espoo">espoo</option>
                <option value="Vantaa">vantaa</option>
                <option value="Rovaniemi">rovaniemi</option>
                <option value="Kouvola">kouvola</option>
                <option value="Tampere">tampere</option>
                <option value="Jyväskylä">jyväskylä</option>
                <option value="Kuopio">kuopio</option>

                onChange={(e) => setLocation(e.target.value)}
                </select>
               
                {!isPending && <button>Lähetä ilmoitus </button> }
              
                {isPending && <button disabled>Luo ilmoitusta</button>}

            </form>
        </div>
    );
}
 
export default IlmoituksenLuonti;