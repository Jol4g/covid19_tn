import React, { Component } from 'react'
import L from 'leaflet'
import {Map, TileLayer, Marker, Popup} from 'react-leaflet'


class DMap extends Component{

    state = {
        green: {
          lat: 33.81897,
          lng: 10.16579,
        },
        redIcon: {
          lat: 35.774416,
          lng: -78.633271,
        },
        orangeIcon: {
          lat: 35.772790,
          lng: -78.652305,
        },
        zoom: 6.4
      }

    render(){
        return (
            <Map className="map" center={[this.state.green.lat, this.state.green.lng]}  zoom={this.state.zoom}>
            <TileLayer
              attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

          </Map>
        );
    }
}

export default DMap;