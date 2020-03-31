import React, { Component } from 'react';

import './App.css';
//import DMap from './Map/Map'
import Header from './Header/Header'
import Stat from './Stat/Stat'
import Footer from './Footer/Footer'
import Mapbox from './Map/MAPbox'
class App extends Component {
  render() {
    return (<>
   <Header/>
   <Mapbox/> 
   <Stat/>
   <Footer/>
   </>
    )}
}

export default App;