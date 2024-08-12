// src/components/Loading.js

import styled from 'styled-components';

const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.bodyBackground};
`;

const Spinner = styled.div`
  border: 8px solid ${({ theme }) => theme.colors.btnColorPrimary}; 
  border-top: 8px solid ${({ theme }) => theme.colors.textSecoundary}; 
  border-radius: 50%;
  width: 80px;
  height: 80px;
  animation: spin 1.5s linear infinite;

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

const Loading = () => {
  return (
    <LoaderWrapper>
      <Spinner />
    </LoaderWrapper>
  );
};

export default Loading;
