import { memo, useEffect, useState, type ReactNode, CSSProperties } from 'react';
import { useStyles } from './CardComponent.styles';

export interface CardProps {
  id: number;
  title: string;
  cardState?: CardState;
  content?: string;
  footer?: string;
  badge?: string;
  size?: 'small' | 'medium' | 'large';
  color?: 'default' | 'primary' | 'success' | 'danger' | 'warning';
  disabled?: boolean;
  children?: ReactNode;
}

export interface CardState {
  isActive: boolean;
  isFocused: boolean;
  isLoading: boolean;
  isPressed: boolean;
  isHighlighted: boolean;
}

export const CardComponent = memo<CardProps>(
  ({
    id,
    title,
    cardState = {
      isActive: false,
      isFocused: false,
      isLoading: false,
      isPressed: false,
      isHighlighted: false
    },
    content,
    footer,
    badge,
    size = 'medium',
    color = 'default',
    disabled = false,
    children,
  }) => {
    const classes = useStyles();
    const [cardStateInternal, setCardStateInternal] = useState<CardState>(cardState);

    useEffect(() => {
        setCardStateInternal(cardState)
    }, [cardState])

    const handleClick = (): void => {
      if (disabled) return;
      setCardStateInternal((prev) => {
        const newState = {
          ...prev,
          isActive: !prev.isActive,
          isLoading: false,
        };
        return newState;
      });
    };

    const handleMouseDown = (): void => {
      if (disabled) return;
      setCardStateInternal((prev) => ({
        ...prev,
        isPressed: true,
      }));
    };

    const handleMouseUp = (): void => {
      setCardStateInternal((prev) => ({
        ...prev,
        isPressed: false,
      }));
    };

    const handleFocus = (): void => {
      if (disabled) return;
      setCardStateInternal((prev) => ({
        ...prev,
        isFocused: true,
      }));
    };

    const handleBlur = (): void => {
      setCardStateInternal((prev) => ({
        ...prev,
        isFocused: false,
      }));
    };

    // Compute combined styles based on state
    const computeCardStyle = (): CSSProperties => {
      let style: CSSProperties = { ...classes.card };

      // Apply size styles
      const sizeStyleKey = `size${size.charAt(0).toUpperCase() + size.slice(1)}` as keyof typeof classes;
      if (classes[sizeStyleKey]) {
        style = { ...style, ...classes[sizeStyleKey] };
      }

      // Apply color styles
      const colorStyleKey = `color${color.charAt(0).toUpperCase() + color.slice(1)}` as keyof typeof classes;
      if (classes[colorStyleKey]) {
        style = { ...style, ...classes[colorStyleKey] };
      }

      // Apply state-based styles
      if (cardStateInternal.isActive) {
        style = { ...style, ...classes.active };
      }

      if (cardStateInternal.isFocused) {
        style = { ...style, ...classes.focused };
      }

      if (cardStateInternal.isLoading) {
        style = { ...style, ...classes.loading };
      }

      if (cardStateInternal.isPressed) {
        style = { ...style, ...classes.pressed };
      }

      if (cardStateInternal.isHighlighted) {
        style = { ...style, ...classes.highlighted };
      }

      if (disabled) {
        style = { ...style, ...classes.disabled };
      }

      return style;
    };

    return (
      <div
        style={computeCardStyle()}
        onClick={handleClick}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onFocus={handleFocus}
        onBlur={handleBlur}
        tabIndex={disabled ? -1 : 0}
        role="button"
        aria-pressed={cardStateInternal.isActive}
        aria-disabled={disabled}
        data-card-id={id}
        data-card
      >
        <div style={classes.header}>
          <h3 style={classes.title}>{title}</h3>
          {badge && <span style={classes.badge}>{badge}</span>}
        </div>

        {content && <div style={classes.content}>{content}</div>}

        {children}

        {footer && <footer style={cardStateInternal.isActive ? { ...classes.footer, ...classes.footerActive } : classes.footer}>{footer}</footer>}

        <div style={classes.stateIndicators}>
          {cardStateInternal.isLoading && '⏳'}
          {cardStateInternal.isActive && '✓'}
          {cardStateInternal.isHighlighted && '⭐'}
        </div>
      </div>
    );
  }
);

