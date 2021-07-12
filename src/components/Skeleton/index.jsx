import React from 'react';
import styled, { keyframes } from 'styled-components';

const keyFrameLoading = keyframes`
  0%{
    opacity: 0.5;
  }
  100%{
    opacity: 1;
  }
`;

const LoadingSkeleton = styled.span`
  display: block;
  background-color: gray;
  border-radius: 4px;
  margin-bottom: 10px;
  min-width: ${(props) => props.width};
  height: ${(props) => props.height};
  animation: ${keyFrameLoading} 500ms infinite alternate;
`;

const Skeleton = ({ width, height }) => {
  return <LoadingSkeleton width={width} height={height} />;
};
export default Skeleton;
