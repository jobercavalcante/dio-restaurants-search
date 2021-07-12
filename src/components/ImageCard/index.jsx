import Skeleton from '../Skeleton';
import React, { useState, useEffect } from 'react';
import { Card, TitleCard } from './styles';

const ImageCard = ({ photo, title }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const imgLoader = new Image();
    imgLoader.src = photo;
    imgLoader.onload = () => setImageLoaded(true);
  }, [photo]);

  return (
    <>
      {imageLoaded ? (
        <Card photo={photo}>
          <TitleCard>{title || ''}</TitleCard>
        </Card>
      ) : (
        <Skeleton width="90px" height="90px" />
      )}
    </>
  );
};

export default ImageCard;
