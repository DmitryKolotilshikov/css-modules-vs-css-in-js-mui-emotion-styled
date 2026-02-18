import { useState } from 'react';
import { type CardState, CardComponent } from './components/Card';
import { Button } from '@mui/material';
import './App.css';

interface CardData {
  id: number;
  title: string;
  content: string;
  badge: string;
  footer: string;
  size: 'small' | 'medium' | 'large';
  color: 'default' | 'primary' | 'success' | 'danger' | 'warning';
}


const COLORS: Array<'default' | 'primary' | 'success' | 'danger' | 'warning'> = [
  'default',
  'primary',
  'success',
  'danger',
  'warning',
];

const SIZES: Array<'small' | 'medium' | 'large'> = ['small', 'medium', 'large'];

const BADGES = ['New', 'Hot', 'Sale', 'Premium', 'Limited'];


const generateCardData = (): CardData[] => {
  return Array.from({ length: 500 }, (_, index) => ({
    id: index,
    title: `Card ${index + 1}`,
    content: `This is the content for card ${index + 1}. Click to toggle active state.`,
    badge: BADGES[index % BADGES.length],
    footer: `Created at ${new Date().toLocaleDateString()}`,
    size: SIZES[index % SIZES.length] as 'small' | 'medium' | 'large',
    color: COLORS[index % COLORS.length] as 'default' | 'primary' | 'success' | 'danger' | 'warning',
  }));
};

function App() {
  const [cardState, setCardState] = useState<CardState>({
      isActive: false,
      isFocused: false,
      isLoading: false,
      isPressed: false,
      isHighlighted: false
    });


  const toggleAllActive = (): void => {
    setCardState(prev => ({
      ...cardState,
      isActive: !prev.isActive
    }));
  };

  const toggleAllFocused = (): void => {
    setCardState(prev => ({
      ...cardState,
      isFocused: !prev.isFocused
    }));
  };

  const toggleAllLoading = (): void => {
    setCardState(prev => ({
      ...cardState,
      isLoading: !prev.isLoading
    }));
  };

  const toggleAllPressed = (): void => {
     setCardState(prev => ({
      ...cardState,
      isPressed: !prev.isPressed
     }));
  };

  const toggleAllHighlighted = (): void => {
   setCardState(prev => ({
      ...cardState,
      isHighlighted: !prev.isHighlighted
     }));
  };

  return (
    <div className="app-container">
      <div className="control-panel">
        <h1>Card Component Demo</h1>
        <div className="control-buttons">
          <Button onClick={toggleAllActive} variant="contained">
            Toggle All isActive
          </Button>
          <Button onClick={toggleAllFocused} variant="contained">
            Toggle All isFocused
          </Button>
          <Button onClick={toggleAllLoading} variant="contained">
            Toggle All isLoading
          </Button>
          <Button onClick={toggleAllPressed} variant="contained">
            Toggle All isPressed
          </Button>
          <Button onClick={toggleAllHighlighted} variant="contained">
            Toggle All isHighlighted
          </Button>
        </div>
      </div>

      <div className="cards-grid">
        {generateCardData().map((card) => (
          <CardComponent
            key={card.id}
            id={card.id}
            title={card.title}
            cardState={cardState}
            content={card.content}
            badge={card.badge}
            footer={card.footer}
            size={card.size}
            color={card.color}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
