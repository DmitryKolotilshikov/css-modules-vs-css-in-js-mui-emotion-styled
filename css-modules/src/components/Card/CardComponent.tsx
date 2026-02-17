import { memo, useEffect, useState, type ReactNode } from 'react';
import styles from './CardComponent.module.css';

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
  onStateChange?: (cardId: number, state: CardState) => void;
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
    onStateChange,
    children,
  }) => {
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
        onStateChange?.(id, newState);
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

    const classNames = [
      styles.card,
      styles[`size${size.charAt(0).toUpperCase() + size.slice(1)}`],
      styles[`color${color.charAt(0).toUpperCase() + color.slice(1)}`],
      cardStateInternal.isActive && styles.active,
      cardStateInternal.isFocused && styles.focused,
      cardStateInternal.isLoading && styles.loading,
      cardStateInternal.isPressed && styles.pressed,
      cardStateInternal.isHighlighted && styles.highlighted,
      disabled && styles.disabled,
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <div
        className={classNames}
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
      >
        <div className={styles.header}>
          <h3 className={styles.title}>{title}</h3>
          {badge && <span className={styles.badge}>{badge}</span>}
        </div>

        {content && <div className={styles.content}>{content}</div>}

        {children}

        {footer && <div className={styles.footer}>{footer}</div>}

        <div style={{ marginTop: '8px', fontSize: '10px', opacity: 0.6 }}>
          {cardStateInternal.isLoading && '⏳'}
          {cardStateInternal.isActive && '✓'}
          {cardStateInternal.isHighlighted && '⭐'}
        </div>
      </div>
    );
  }
);

