import { styled, css, type Theme } from "@mui/material";

export interface CardContainerProps {
  $sizeVariant?: "small" | "medium" | "large";
  $colorVariant?: "default" | "primary" | "success" | "danger" | "warning";
  $isActive?: boolean;
  $isFocused?: boolean;
  $isLoading?: boolean;
  $isPressed?: boolean;
  $isHighlighted?: boolean;
  $isDisabled?: boolean;
}

const getSizeStyles = (size?: string) => {
  switch (size) {
    case "small":
      return `
        padding: 8px 12px;
        font-size: 12px;
      `;
    case "large":
      return `
        padding: 24px;
        font-size: 16px;
      `;
    default:
      return `
        padding: 16px;
        font-size: 14px;
      `;
  }
};

const getColorStyles = (theme: Theme, color?: string) => {
  switch (color) {
    case "primary":
      return `
        background-color: #007bff;
        border-color: #0056b3;
        color: ${theme.palette.common.white};
      `;
    case "success":
      return `
        background-color: #28a745;
        border-color: #1e7e34;
        color: ${theme.palette.common.white};
      `;
    case "danger":
      return `
        background-color: #dc3545;
        border-color: #bd2130;
        color: ${theme.palette.common.white};
      `;
    case "warning":
      return `
        background-color: #ffc107;
        border-color: #e0a800;
        color: #333333;
      `;
    default:
      return `
        background-color: ${theme.palette.common.white};
        border-color: #e0e0e0;
        color: ${theme.palette.common.black};
      `;
  }
};

export const CardContainer = styled("div")<CardContainerProps>`
  background-color: ${({ theme }) => theme.palette.common.white};
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 16px;
  transition: all 0.3s ease;
  cursor: pointer;
  user-select: none;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  ${({ $sizeVariant }) => getSizeStyles($sizeVariant)}
  ${({ theme, $colorVariant }) => getColorStyles(theme, $colorVariant)}

  &:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    transform: ${({ $isDisabled }) => ($isDisabled ? "none" : "translateY(-2px)")};
  }

  &:focus {
    outline: 2px solid #007bff;
    outline-offset: 2px;
  }

  ${({ theme, $isActive }) =>
    $isActive &&
    css`
      background-color: #007bff;
      border-color: #0056b3;
      color: ${theme.palette.common.white};
      box-shadow: 0 4px 12px rgba(0, 123, 255, 0.3);
      transform: scale(1.02);
    `}

  ${({ $isFocused }) =>
    $isFocused &&
    `
    box-shadow: 0 0 15px 8px rgba(0, 123, 255, 0.25);
  `}

  ${({ $isLoading }) =>
    $isLoading &&
    css`
      opacity: 0.7;
      position: relative;

      &::after {
        content: "";
        position: absolute;
        top: 50%;
        left: 50%;
        width: 16px;
        height: 16px;
        margin: -8px 0 0 -8px;
        border: 2px solid #007bff;
        border-right-color: transparent;
        border-radius: 50%;
        animation: rotate 0.8s linear infinite;
      }

      @keyframes rotate {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(360deg);
        }
      }
    `}

  ${({ $isPressed }) =>
    $isPressed &&
    css`
      background-color: #0056b3;
      box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.2);
      transform: scale(0.98);
    `}

  ${({ $isHighlighted }) =>
    $isHighlighted &&
    css`
      background-color: #fff3cd;
      border-color: #ffc107;
      box-shadow: 0 0 0 2px rgba(255, 193, 7, 0.3);
      color: #000;
    `}

  ${({ theme, $isDisabled }) =>
    $isDisabled &&
    css`
      opacity: 0.6;
      cursor: not-allowed;
      background-color: ${theme.palette.primary.light};
      border-color: #d0d0d0;
      color: #999999;
      pointer-events: none;
    `}

  @media (max-width: 768px) {
    padding: 12px;
  }
`;

export const CardHeader = styled("div")`
  font-weight: 600;
  margin-bottom: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CardTitle = styled("h3")`
  margin: 0;
  font-size: inherit;
`;

export const CardBadge = styled("span")`
  display: inline-block;
  padding: 2px 8px;
  border-radius: 12px;
  font-size: 10px;
  font-weight: 600;
  background-color: rgba(0, 0, 0, 0.1);
  color: inherit;
`;

export const CardContent = styled("div")`
  margin: 8px 0;
  line-height: 1.5;
`;

export const CardFooter = styled("footer")<{$isActive: boolean}>`
  margin-top: 8px;
  padding-top: 8px;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  font-size: 12px;
  color: ${({ theme, $isActive }) => $isActive ? theme.palette.common.white : "#00000099"};
  border: ${({ $isActive }) => $isActive && "2px solid #fff"};
  border-radius: ${({ $isActive }) => $isActive && "5px"};
`;

export const StateIndicators = styled("div")`
  margin-top: 8px;
  font-size: 10px;
  opacity: 0.6;
`;
