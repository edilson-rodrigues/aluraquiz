import React from 'react';
import styled from 'styled-components';
import Widget from '../Widget';

const Spinner = styled.div`
  @keyframes spin {
  to { transform: rotate(360deg);}
  }

  border: 8px solid rgba(0, 0, 0, 0.1);
  border-left-color: ${({ theme }) => theme.colors.primary};
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: spin 1.2s linear infinite;      
`;

const ContentSpinner = styled.div`  
  display: flex;
  align-items: center;
  justify-content: center;  
  `;

const ProgressSpinner: React.FC = () => (
  <ContentSpinner>
    <Spinner />
  </ContentSpinner>
);

const LoadingWidget: React.FC = () => (
  <Widget>
    <Widget.Header>
      Carregando...
    </Widget.Header>

    <Widget.Content>
      <ProgressSpinner />
    </Widget.Content>
  </Widget>
);

export default LoadingWidget;
