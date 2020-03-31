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
  <div> <DHeader/></div>
  <div className="Map"> <Mapbox/> </div>
  <div ><Stat/></div>
  <div className="Footer"><Foooter/></div>
   </>
    )}
}

export default App;