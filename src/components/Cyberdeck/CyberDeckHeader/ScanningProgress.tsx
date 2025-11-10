import React from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import styles from '../CyberdeckHeader.module.css';

const ScanningProgress: React.FC = () => {

  const progress = useMotionValue(0);

  const progressText = useTransform(progress, (latest) => `${Math.round(latest)}%`);

  return (
    <div className={styles.scanningContainer}>
      <span className={styles.neonText}>SCANNING ... </span>

      <motion.span className={styles.neonText}>{progressText}</motion.span>

      <div className={styles.progressBar}>
        <motion.div
          className={styles.progressBarInner}

          animate={{ width: ["0%", "100%", "0%"] }}
          transition={{
            duration: 180, 
            ease: "linear",
            repeat: Infinity, 
          }}

          style={{ width: progress }}

          onUpdate={(latest) => {
            const widthPercent = parseFloat(latest.width as string);
            progress.set(widthPercent);
          }}
        />
      </div>
    </div>
  );
};

export default ScanningProgress; // Exporta si es un archivo separado