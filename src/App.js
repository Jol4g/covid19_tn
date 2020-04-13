import React, { Component } from 'react';

import './App.css';
//import DMap from './Map/Map'
import DHeader from './Header/Header'
import Stat from './Stat/Stat'
import Foooter from './Footer/Footer'
import Mapbox from './Map/MAPbox'
class App extends Component {
  render() {
    return (<>
  <div className="header"> <DHeader/></div>
  <div className=""><div className="Map col "> <Mapbox/> </div>
  <div className="content col"><Stat/></div></div>
  <div className="footer"><Foooter/></div>
   </>
    )}
}

export default App;