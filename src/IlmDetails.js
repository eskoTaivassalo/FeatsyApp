import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";
import React, { useState } from 'react';
import Add from './Add.js';


const   IlmDetails = () => {
    const { id } = useParams();
    const {data: ilmoitus, error, isPending } = useFetch('http://localhost:8000/ilmoitukset/' + id);
    const history =useHistory(); 
    
    
    const handleClick = ()=> {
        fetch('http://localhost:8000/ilmoitukset/' + ilmoitus.id, {
            method: 'DELETE'
        }).then(() => {
            history.push('/')
        })

    }

    const [showAdd, setShowAdd] = useState(true)
    const handleClose = () => {
      setShowAdd(false)
    }
   
    return (
        
        <div className="ilmoituksen-tiedot">
           {showAdd && <Add handleClose={handleClose}>
      <h2>Lorem ipsumi runo</h2>
      
    
    </Add>}
        {isPending  && <div>Lataa...</div> }
        {error && <div>{ error }</div> }
        {ilmoitus && (
            <article>
                <h2> {ilmoitus.title} </h2>
                <div>{ilmoitus.body}</div>
                <div>Ilmoittaja {ilmoitus.author}</div>
                <div>Paikkakunta {ilmoitus.location}</div>
                
                <div><button onClick={handleClick}>Delete</button></div>
                <div><nappi onClick>Home</nappi></div>
            </article>
        )}
      
        </div>
      );
}
 
export default IlmDetails;