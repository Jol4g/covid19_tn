import React, { Component } from 'react'
import L from 'leaflet'
import statesData from './tn.js'

class Mapbox extends Component{
  componentDidMount(){
var mapboxAccessToken = 'pk.eyJ1Ijoiam9sNGciLCJhIjoiY2s4ZjdndDNxMDEzbTNtcGIydGo2MXlqbiJ9.8Y41f-0P6WXhzKxzWWwIMA'
var map = L.map('map').setView([34.5, 10], 6);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=' + mapboxAccessToken, {
    id: 'mapbox/light-v9',
    attribution: "Fedi Sarray",
    tileSize: 512,
    zoomOffset: -1
}).addTo(map);

L.geoJson(statesData).addTo(map);
var info = L.control();

	info.onAdd = function (map) {
		this._div = L.DomUtil.create('div', 'info');
		this.update();
		return this._div;
	};

	info.update = function (props) {
		this._div.innerHTML = '<h4>حالات العدوى</h4>' +  (props ?
			'<h6><b>' + props.gouv_ar + '</b></h6>'  + props.density+ ' شخص'
			: 'ضع السهم فوق الولاية');
	};

	info.addTo(map);


	// get color depending on population density value
	function getColor(d) {
        return  d > 100 ? '#800026' :
                d > 60  ? '#800000' :
				d > 50  ? '#BD0026' :
				d > 40  ? '#E31A1C' :
                d > 30  ? '#FC4E2A' :                
                d > 20  ? '#FC6E3A' :
				d > 10  ? '#FD8D3C' :
				d > 5   ? '#FEB24C' :
				d > 0   ? '#FED970' :
							'#FFEDBF';
	}

	function style(feature) {
		return {
			weight: 2,
			opacity: 1,
			color: 'white',
			dashArray: '3',
			fillOpacity: 0.7,
			fillColor: getColor(feature.properties.density)
		};
	}

	function highlightFeature(e) {
		var layer = e.target;

		layer.setStyle({
			weight: 5,
			color: '#666',
			dashArray: '',
			fillOpacity: 0.8
		});

		if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
			layer.bringToFront();
		}

		info.update(layer.feature.properties);
	}

	var geojson;

	function resetHighlight(e) {
		geojson.resetStyle(e.target);
		info.update();
	}

	function zoomToFeature(e) {
		map.fitBounds(e.target.getBounds());
	}

	function onEachFeature(feature, layer) {
		layer.on({
			mouseover: highlightFeature,
			mouseout: resetHighlight,
			click: zoomToFeature
		});
	}

	geojson = L.geoJson(statesData, {
		style: style,
		onEachFeature: onEachFeature
	}).addTo(map);

	map.attributionControl.addAttribution('Project &copy; <a href="https://github.com/Jol4g/covid19_tn.git">Git repos.</a>');


	var legend = L.control({position: 'bottomright'});

	legend.onAdd = function (map) {

		var div = L.DomUtil.create('div', 'info legend'),
			grades = [0, 5, 10, 20, 50, 60, 100],
			labels = [],
			from, to;

		for (var i = 0; i < grades.length; i++) {
			from = grades[i];
			to = grades[i + 1];

			labels.push(
				'<i style="background:' + getColor(from + 1) + '"></i> ' +
				from + (to ? '&ndash;' + to : '+'));
		}

		div.innerHTML = labels.join('<br>');
		return div;
	};

    legend.addTo(map);}
    render(){
        return(<div id="map"></div>)
    }}
    export default Mapbox