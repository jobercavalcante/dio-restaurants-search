import React from 'react';
import {
  Restaurante,
  RestauranteInfo,
  Address,
  RestaurantePhoto,
} from './styles';

import Skeleton from '../Skeleton';
import ReactStars from 'react-rating-stars-component';
import { useState } from 'react';

const RestaurantCard = ({ restaurant, onClick }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  return (
    <Restaurante onClick={() => onClick()}>
      <RestauranteInfo>
        <h1>{restaurant.name}</h1>
        <ReactStars
          value={restaurant.rating}
          edit={false}
          count={5}
          isHalf
          size={24}
          activeColor="#ffd700"
        />
        <Address>{restaurant.vicinity || restaurant.formatted_adress}</Address>
      </RestauranteInfo>
      <RestaurantePhoto
        imageLoaded={imageLoaded}
        onLoad={() => setImageLoaded(true)}
        src={
          restaurant.photos ? restaurant.photos[0].getUrl() : restaurant.icon
        }
        alt=""
      />
      {!imageLoaded && <Skeleton width="100px" height="100px" />}
    </Restaurante>
  );
};

export default RestaurantCard;
