import React, { useState, useEffect } from 'react';

const BinaryStream: React.FC = () => {
  const [columns, setColumns] = useState<string[]>([]);

  useEffect(() => {
    // Calcular cuántas columnas caben en el ancho de la pantalla
    const calculateColumns = () => {
      const charWidth = 8; // Ancho aproximado de cada carácter en píxeles
      const screenWidth = window.innerWidth;
      return Math.floor(screenWidth / charWidth);
    };

    const initializeColumns = () => {
      const columnCount = calculateColumns();
      const newColumns = Array.from({ length: columnCount }, () => 
        Math.round(Math.random()).toString()
      );
      setColumns(newColumns);
    };

    initializeColumns();

    const handleResize = () => {
      initializeColumns();
    };

    window.addEventListener('resize', handleResize);

    const interval = setInterval(() => {
      setColumns(prev => prev.map(() => Math.round(Math.random()).toString()));
    }, 100);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const styles = {
    container: {
      position: 'relative' as const,
      width: '100%',
      overflow: 'hidden',
      /* padding: '10px 0', */
      display: 'flex',
      justifyContent: 'center',
      gap: '0px',
    },
    binaryChar: {
      fontFamily: '"Courier New", monospace',
      fontSize: '10px',
      color: '#1ded83',
      opacity: 0.8,
      textAlign: 'center' as const,
      minWidth: '8px',
    },
    fadeLeft: {
      position: 'absolute' as const,
      top: '0',
      left: '0',
      width: '50px',
      height: '100%',
      background: 'linear-gradient(to right, rgba(10, 10, 10, 1) 0%, transparent 100%)',
      pointerEvents: 'none' as const,
    },
    fadeRight: {
      position: 'absolute' as const,
      top: '0',
      right: '0',
      width: '50px',
      height: '100%',
      background: 'linear-gradient(to left, rgba(10, 10, 10, 1) 0%, transparent 100%)',
      pointerEvents: 'none' as const,
    },
  };

  return (
    <div style={styles.container}>
      {columns.map((char, index) => (
        <span key={index} style={styles.binaryChar}>
          {char}
        </span>
      ))}
      <div style={styles.fadeLeft} />
      <div style={styles.fadeRight} />
    </div>
  );
};

export default BinaryStream;