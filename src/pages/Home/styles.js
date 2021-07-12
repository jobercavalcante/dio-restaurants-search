import styled from 'styled-components';
import Slider from 'react-slick';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Container = styled.div`
  background-color: ${(props) => props.theme.colors.background};
  width: 480px;
  height: 100vh;
  overflow-y: auto;
  overflow-x: hidden;
`;

export const Search = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #fff;
  padding: 16px;

  > img {
    width: 200px;
    align-self: center;
    margin-bottom: 15px;
  }
`;

export const Map = styled.div`
  background: #1b5465;
  height: 100vh;
  width: 100%;
`;

export const CarouselTitle = styled.h2`
  font-family: ${(props) => props.theme.fonts.regular};
  color: ${(props) => props.theme.colors.text};
  font-size: 1.6rem;
  font-weight: bold;
  line-height: 1.9rem;
  margin: 16px 0;
`;

export const Carousel = styled(Slider)`
  .slick-slide {
    margin-right: 15px;
  }
`;

export const ModalTitle = styled.h2`
  font-family: ${(props) => props.theme.fonts.regular};
  color: ${(props) => props.theme.colors.text};
  font-size: 1.3rem;
  font-weight: bold;
  line-height: 1.9rem;
  margin-bottom: 16px;
`;

export const ModalContent = styled.div`
  margin: 5px 10px;

  strong {
    font-weight: bold;
  }

  > div {
    padding: 5px 0;
  }
  > div:not(:last-child) {
    border-bottom: 1px solid #cecece;
  }
`;
