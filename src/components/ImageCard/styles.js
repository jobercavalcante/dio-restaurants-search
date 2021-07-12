import styled from 'styled-components';

export const Card = styled.div`
  width: 90px;
  height: 90px;
  border-radius: 4px;
  background-image: url(${(props) => props.photo});
  background-size: cover;
`;

export const TitleCard = styled.h2`
  font-family: ${(props) => props.theme.fonts.regular};
  font-size: 1rem;
  color: #fff;
  padding: 3px;
`;
