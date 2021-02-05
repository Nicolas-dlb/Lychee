import React from 'react';
import './Navbar.css';
import lychee from './images/lychee.svg';
import { useHistory } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import DehazeIcon from '@material-ui/icons/Dehaze';

function Navbar({explore}) {
  const history = useHistory();
  

  function toggle() {
    let n = document.getElementById('menu');
	if (n.style.display !== 'none') 
	  {
	  n.style.display = 'none';
      document.getElementById("TLink").setAttribute('aria-expanded', 'false');
  }
  else
  {
  n.style.display = 'flex';
  document.getElementById("TLink").setAttribute('aria-expanded', 'true');
	  }
  }
    return (
        <div className={`navbar ${explore && "bg_white justify_space_evenly box_shadow"}`}>
          <div class={`navbar__left ${explore && "display"}`}>
             <img src={lychee} onClick={() => history.push('/')} className="logo" alt=""/>
             <h1 onClick={() => history.push('/')}>Lychee</h1>
          </div>
            <div class={`navbar__center ${explore && "display"}`}>
               <div className={`searchbox animated zoomIn ${explore && "display"}`}>
              <form method="get">
                <input autoComplete="off" onInput="triggercross(this.value)" type="text" placeholder="search" id="search" name="search" class="search" />
                <i class="fas fa-search"></i>
                
              </form>
            </div>
            </div>
            <div className="navbar__right">
              <div className="expandMore" onClick={toggle} id="TLink" aria-expanded="false">
                  <DehazeIcon className='dehazeIcon' />
                  <Avatar className="expandMore__avatar" />
              </div>
              
              <div class="menu" id="menu">
                <p>Paramètres</p>
                <p>Deconnexion</p>
              </div>
            </div>
        </div>
    )
}

export default Navbar
