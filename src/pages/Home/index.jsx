import React from 'react';
import {
  Carousel,
  CarouselTitle,
  Container,
  Search,
  Wrapper,
  ModalTitle,
  ModalContent,
} from './styles';
import TextField, { Input } from '@material/react-text-field';

import logo from '../../assets/logo.svg';
import { useState } from 'react';
import MaterialIcon from '@material/react-material-icon';
import {
  Card,
  RestaurantCard,
  Modal,
  Map,
  Loader,
  Skeleton,
} from '../../components';

import { useSelector } from 'react-redux';

export default function Home() {
  const [busca, setBusca] = useState('');
  const [query, setQuery] = useState('');
  const [modalOpened, setModalOpened] = useState(false);
  const [placeId, setPlaceId] = useState(null);
  const { restaurants, restaurantSelected } = useSelector(
    (state) => state.restaurants,
  );

  const carouselSettings = {
    dots: false,
    autoplay: true,
    infinite: true,
    speed: 450,
    slidesToShow: 4,
    slidesToScroll: 4,
    adaptiveHeight: true,
  };

  function handleKeyPress(e) {
    if (e.key === 'Enter') {
      setQuery(busca);
    }
  }

  function handleOpenModal(placeId) {
    setPlaceId(placeId);
    setModalOpened(true);
  }

  return (
    <Wrapper>
      <Container>
        <Search>
          <img src={logo} alt="logo" />
          <TextField
            label="Pesquisar restaurante"
            outlined
            style={{ with: '100%' }}
            trailingIcon={<MaterialIcon role="button" icon="search" />}
          >
            <Input
              value={busca}
              onKeyPress={handleKeyPress}
              onChange={(e) => setBusca(e.target.value)}
            ></Input>
          </TextField>
          {!restaurants.length ? (
            <Loader />
          ) : (
            <>
              <CarouselTitle>Na sua área</CarouselTitle>
              <Carousel {...carouselSettings}>
                {restaurants.map((restaurant) => (
                  <Card
                    key={restaurant.place_id}
                    photo={
                      restaurant.photos
                        ? restaurant.photos[0].getUrl()
                        : restaurant.icon
                    }
                    title={restaurant.name}
                  />
                ))}
              </Carousel>
            </>
          )}
        </Search>
        {restaurants.map((restaurant) => (
          <RestaurantCard
            onClick={() => handleOpenModal(restaurant.place_id)}
            key={restaurant.place_id}
            restaurant={restaurant}
          />
        ))}
      </Container>
      <Map query={query} placeId={placeId} />
      <Modal open={modalOpened} onClose={() => setModalOpened(!modalOpened)}>
        {restaurantSelected ? (
          <>
            <ModalTitle>{restaurantSelected?.name}</ModalTitle>
            <ModalContent>
              <div>
                <strong>Contato: </strong>
                {restaurantSelected?.formatted_phone_number}
              </div>
              <div>
                <strong>Endereço: </strong>{' '}
                {restaurantSelected?.formatted_address}
              </div>
              <div>
                <strong>Funcionamento: </strong>
                {restaurantSelected?.opening_hours?.isOpen()
                  ? 'Aberto agora'
                  : 'Fechado'}
              </div>
            </ModalContent>
          </>
        ) : (
          <>
            <Skeleton width="100px" height="10px" />
            <Skeleton width="100px" height="10px" />
            <Skeleton width="100px" height="10px" />
            <Skeleton width="100px" height="10px" />
          </>
        )}
      </Modal>
    </Wrapper>
  );
}
