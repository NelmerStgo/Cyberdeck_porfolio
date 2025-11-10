// BinaryStream.tsx
import React, { useState, useEffect } from 'react';
import styles from '../CyberdeckHeader.module.css';

const generateBinary = (length: number) => {
  let output = '';
  for (let i = 0; i < length; i++) {
    output += Math.round(Math.random());
    if ((i + 1) % 8 === 0) {
      output += ' ';
    }
  }
  return output;
};

const BinaryStream: React.FC = () => {
  const [binary, setBinary] = useState(generateBinary(56)); // 56 chars

  useEffect(() => {
    const interval = setInterval(() => {
      setBinary(generateBinary(56));
    }, 150); // Cambia cada 150ms

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.binaryStream}>
      {binary}
    </div>
  );
};

export default BinaryStream;
