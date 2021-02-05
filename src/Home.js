import React from 'react';
import './Home.css';
import logo from './images/lychee.svg';
import Navbar from './Navbar';
import { useHistory } from "react-router-dom";

function Home() {
  const history = useHistory();
 
    return (
        <div className="home">
            <Navbar />
          <div class="home__title">
            <img src={logo} className="lychee" alt=""/>
            <h1 id="logo">Lychee</h1>
          </div>  
          <h1 id="explore" onClick={() => history.push('/explore')}>Explorez l'ile de la Réunion</h1>
          <h1 id="experience" >Offrez vous des <br></br> experiences inoubliables</h1>
        </div>
    )
}

export default Home