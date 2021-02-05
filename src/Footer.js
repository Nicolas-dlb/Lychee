import React from 'react';
import './Footer.css';
import SearchIcon from '@material-ui/icons/Search';
import { useHistory } from 'react-router-dom';

function Footer() {
  const history = useHistory();
    return (
        <div className="footer">
           <div class="link" onClick={() => history.push("/")}>
            <SearchIcon />
            <p>Explorer</p>
          </div>
          <div class="link">
            <i class="far fa-heart"></i>
            <p>Enregistrés</p>
          </div>
          <div class="link">
            <i class="far fa-user-circle"></i>
            <p>Mon compte</p>
          </div>
        </div>
    )
}

export default Footer
