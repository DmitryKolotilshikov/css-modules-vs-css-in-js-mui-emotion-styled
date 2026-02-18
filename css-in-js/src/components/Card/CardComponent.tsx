import { memo, useEffect, useState, type ReactNode } from 'react';
import * as S from './CardComponent.styles';

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
  className?: string;
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
      isHighlighted: false,
    },
    content,
    footer,
    badge,
    size = 'medium',
    color = 'default',
    disabled = false,
    className = "card",
    children,
  }) => {
    const [cardStateInternal, setCardStateInternal] = useState<CardState>(cardState);

    useEffect(() => {
      setCardStateInternal(cardState);
    }, [cardState]);

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

    return (
      <S.CardContainer
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
        className={className}

        $sizeVariant={size}
        $colorVariant={color}
        $isActive={cardStateInternal.isActive}
        $isFocused={cardStateInternal.isFocused}
        $isLoading={cardStateInternal.isLoading}
        $isPressed={cardStateInternal.isPressed}
        $isHighlighted={cardStateInternal.isHighlighted}
        $isDisabled={disabled}
      >
        <S.CardHeader>
          <S.CardTitle>{title}</S.CardTitle>
          {badge && <S.CardBadge>{badge}</S.CardBadge>}
        </S.CardHeader>

        {content && <S.CardContent>{content}</S.CardContent>}

        {children}

        {footer && <S.CardFooter $isActive={cardStateInternal.isActive}>{footer}</S.CardFooter>}

        <S.StateIndicators>
          {cardStateInternal.isLoading && '⏳'}
          {cardStateInternal.isActive && '✓'}
          {cardStateInternal.isHighlighted && '⭐'}
        </S.StateIndicators>
      </S.CardContainer>
    );
  }
);

CardComponent.displayName = 'CardComponent';
