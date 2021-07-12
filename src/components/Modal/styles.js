import styled from 'styled-components';

export const Overlay = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(78, 89, 131, 0.1);
  backdrop-filter: blur(1px);
`;

export const Dialog = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-height: calc(100% - 200px);
  width: 500px;
  padding: 20px;
  background-color: #fff;

  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.64) 0px 3px 8px;
`;
