import styled from 'styled-components';

export const Restaurante = styled.div`
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  margin: 10px 5px 0;
  padding: 16px;
  background-color: #fff;
  border-radius: 4px;
  border-left: 5px solid transparent;

  :hover {
    border-left: 5px solid ${(props) => props.theme.colors.primary};
    background-color: #dddeee;
  }
`;

export const RestauranteInfo = styled.article`
  display: flex;
  flex-direction: column;
  margin-right: 5px;
  > h1 {
    font-family: ${(props) => props.theme.fonts.regular};
    font-size: 1.2rem;
    line-height: 1.4rem;
    font-weight: bold;
    color: ${(props) => props.theme.colors.text};
    margin-bottom: 8px;
  }
`;

export const Address = styled.p`
  font-family: ${(props) => props.theme.fonts.regular};
  color: ${(props) => props.theme.colors.text};
  font-size: 1rem;
  line-height: 1.2rem;
  margin-top: 8px;
`;

export const RestaurantePhoto = styled.img`
  display: ${(props) => (props.imageLoaded ? 'block' : 'none')};
  width: 100px;
  height: 100px;
  border-radius: 4px;
  object-fit: cover;
`;
