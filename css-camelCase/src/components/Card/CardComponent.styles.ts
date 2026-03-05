import { type CSSProperties } from 'react';

export const useStyles = () => {
  const classes = {
    root: {
      display: 'flex',
      flexDirection: 'column',
      gap: '8px',
    } as CSSProperties,
    card: {
      backgroundColor: '#ffffff',
      border: '1px solid #e0e0e0',
      borderRadius: '8px',
      padding: '16px',
      transition: 'all 0.3s ease',
      cursor: 'pointer',
      userSelect: 'none',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      outline: 'none',
      '&:hover': {
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
        transform: 'translateY(-2px)',
      },
      '&:focus': {
        outline: '2px solid #007bff',
        outlineOffset: '2px',
      },
    } as CSSProperties,
    sizeSmall: {
      padding: '8px 12px',
      fontSize: '12px',
    } as CSSProperties,
    sizeMedium: {
      padding: '16px',
      fontSize: '14px',
    } as CSSProperties,
    sizeLarge: {
      padding: '24px',
      fontSize: '16px',
    } as CSSProperties,
    colorDefault: {
      backgroundColor: '#ffffff',
      borderColor: '#e0e0e0',
      color: '#333333',
    } as CSSProperties,
    colorPrimary: {
      backgroundColor: '#007bff',
      borderColor: '#0056b3',
      color: '#ffffff',
    } as CSSProperties,
    colorSuccess: {
      backgroundColor: '#28a745',
      borderColor: '#1e7e34',
      color: '#ffffff',
    } as CSSProperties,
    colorDanger: {
      backgroundColor: '#dc3545',
      borderColor: '#bd2130',
      color: '#ffffff',
    } as CSSProperties,
    colorWarning: {
      backgroundColor: '#ffc107',
      borderColor: '#e0a800',
      color: '#333333',
    } as CSSProperties,
    active: {
      backgroundColor: '#007bff',
      borderColor: '#0056b3',
      color: '#ffffff',
      boxShadow: '0 4px 12px rgba(0, 123, 255, 0.3)',
      transform: 'scale(1.02)',
    } as CSSProperties,
    focused: {
      boxShadow: '0 0 15px 8px rgba(0, 123, 255, 0.25)',
    } as CSSProperties,
    disabled: {
      opacity: 0.6,
      cursor: 'not-allowed',
      backgroundColor: '#f5f5f5',
      borderColor: '#d0d0d0',
      color: '#999999',
      pointerEvents: 'none',
    } as CSSProperties,
    loading: {
      opacity: 0.7,
      position: 'relative',
    } as CSSProperties,
    pressed: {
      backgroundColor: '#0056b3',
      boxShadow: 'inset 0 2px 4px rgba(0, 0, 0, 0.2)',
      transform: 'scale(0.98)',
    } as CSSProperties,
    highlighted: {
      backgroundColor: '#fff3cd',
      borderColor: '#ffc107',
      boxShadow: '0 0 0 2px rgba(255, 193, 7, 0.3)',
    } as CSSProperties,
    header: {
      fontWeight: 600,
      marginBottom: '8px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    } as CSSProperties,
    title: {
      margin: 0,
      fontSize: 'inherit',
    } as CSSProperties,
    badge: {
      display: 'inline-block',
      padding: '2px 8px',
      borderRadius: '12px',
      fontSize: '10px',
      fontWeight: 600,
      backgroundColor: 'rgba(0, 0, 0, 0.1)',
      color: 'inherit',
    } as CSSProperties,
    content: {
      margin: '8px 0',
      lineHeight: 1.5,
    } as CSSProperties,
    footer: {
      marginTop: '8px',
      paddingTop: '8px',
      borderTop: '1px solid rgba(0, 0, 0, 0.1)',
      fontSize: '12px',
      color: 'rgba(0, 0, 0, 0.6)',
    } as CSSProperties,
    footerActive: {
      color: '#fff',
      border: '2px solid #fff',
      borderRadius: '5px',
    } as CSSProperties,
    stateIndicators: {
      marginTop: '8px',
      fontSize: '10px',
      opacity: 0.6,
    } as CSSProperties,
  };

  return classes;
};
