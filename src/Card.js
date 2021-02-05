import React from 'react';
import './Card.css';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteTwoToneIcon from '@material-ui/icons/FavoriteTwoTone';

function Card({city, name, image, description}) {
    return (
        <div class="card">
            <div class="card_image">
              <img src={image} alt=""/>
              <FavoriteTwoToneIcon className="heart_icon_image"/>
            </div>
            <div class="card_info">
              <div class="card_info_title">
               <div class="card_info_name">
                  <p>{city} |</p>
                  <h4>{name}</h4>
               </div>
                <FavoriteBorderIcon className="heart_icon_info"/>
              </div>
              <p id="description">{description}</p>
            </div>          
        </div>
    )
}

export default Card
