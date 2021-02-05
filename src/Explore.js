import React, { useState } from 'react';
import './Explore.css';
import Card from './Card';
import explore from './explore.json';
import Map from './Map';
import "leaflet/dist/leaflet.css";

function Explore() {
  const [mapCenter, setMapCenter] = useState({ lat: -21.114533, lng: 55.532062499999995 });
  const [mapZoom, setMapZoom] = useState(11);
    return (
        <div className="explore">
         <div class="explore__left">
           <h1>Explorations de l'île</h1>
            <div class="filtres">
              <span>Type d'exploration</span>
              <span>Distance</span>
           </div>
            {explore.map(item =>
             <Card city={item.city} name={item.name} image={item.img} description={item.description}/>
            )}
         </div>
         <div class="explore__right">
           <Map center={mapCenter} zoom={mapZoom} explorations={explore}/>
         </div>
        </div>
    )
}

export default Explore
