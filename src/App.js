
import Navbar from './Navbar';     
import Home from './Home';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import IlmoituksenLuonti from './IlmoituksenLuonti';
import IlmDetails from './IlmDetails';
import Notfound from './Notfound';






function App() {
 
  return (

  <Router>
    <div className="App">
     <Navbar/>
      <div><h3>
              Tervetuloa käyttämään uutta yhteisöpalvelua nimeltään Featsy. 
              Featsy on sivusto jolla kuka tahansa voi hakea paikallisesti seuraa tapahtumiin, kuten harrastuksiin
              tai jakaa asioita. Featsyn käyttäminen lisää paikallisesti ihmisten välistä vuorovaikutusta
              ja vähentää yksinäisyyttä. Uskomme että se mitä joillakin on enemmän, voi olla hyödyksi
              heille joilla sitä on vähemmän, nimittäin sosiaalista rohkeutta. Vastaavasti se mitä sosiaalisesti rajoittuneemmat
              voivat antaa sinulle joka et sosiaalisia tilanteita pelkää, saattaa yllättä. Ole siis rohkea ja jaa Featsyn avulla
              asioita. Tulet yllättymään kuinka helppoa se on ja kuinka helppoa ja palkitsevaa on saada
              ihmiset toimimaan jälleen yhdessä, yhteisöllisesti.
              
             
              </h3>
              <hr />
            </div>
            
      <div className="content">
     
        <Switch>
          <Route exact path="/">
            <Home/>
             </Route>
          <Route  path="/IlmoituksenLuonti">
            <IlmoituksenLuonti/>
          </Route>
          <Route  path="/ilmoitukset/:id">
            <IlmDetails/>
          </Route>
           <Route path="*">
            <Notfound/>
           </Route>
        </Switch>
      </div>
     
    </div>
  </Router>
  );
 
}

export default App;
