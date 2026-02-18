import { styled } from '@mui/material';

export const AppContainer = styled('div')`
  max-width: 1400px;
  margin: 0 auto;
  padding: 20px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu',
    'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  background-color: #f5f5f5;
  min-height: 100vh;

  @media (max-width: 768px) {
    padding: 12px;
  }

  @media (max-width: 480px) {
    padding: 8px;
  }
`;

export const ControlPanel = styled('div')`
  background-color: #ffffff;
  border-radius: 12px;
  padding: 30px;
  margin-bottom: 30px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 20px;
  z-index: 100;

  @media (max-width: 768px) {
    padding: 20px;
    margin-bottom: 20px;
    position: relative;
    top: 0;
  }
`;

export const ControlTitle = styled('h1')`
  margin: 0 0 20px 0;
  font-size: 28px;
  color: #333333;
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: 22px;
    margin-bottom: 15px;
  }
`;

export const ControlButtons = styled('div')`
  display: flex;
  gap: 12px;
  margin-bottom: 25px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
  }

  @media (max-width: 480px) {
    gap: 8px;
  }
`;

export const CardsGrid = styled('div')`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  padding-bottom: 40px;

  .card, .card:focus {
    outline: 2px solid lightsalmon;
    outline-offset: 2px;
    border-radius: 8px;
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 15px;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 12px;
  }
`;
