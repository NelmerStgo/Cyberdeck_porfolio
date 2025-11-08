import React from 'react';
import { motion } from 'framer-motion';
import styles from './CyberdeckHeader.module.css';

const CyberdeckHeader: React.FC = () => {
    const binaryCode = "01010011 01000001 01001101 01010010 01010101 01000001 01001001";

    return (
        <motion.header
            className={styles.cyberdeckHeader}
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
        >
            <div className={styles.terminalBar}>
                <div className={styles.terminalTitle}>
                    <span className={styles.glitchText} data-text="CYBERDECK V 552 322:3876 383 1098 5492">
                        CYBERDECK V 552 322:3876 383 1098 5492
                    </span>
                </div>
                <div className={styles.terminalStatus}>
                    <span>// ADMIN ACCESS GRANTED</span>
                    <span className={styles.blink}>_</span>
                </div>
            </div>

            <div className={styles.systemInfo}>
                <div className={styles.systemRow}>
                    <span>05 KILO MICROCYBER BATTLEDECK V02</span>
                    <span className={styles.neonText}>SCANNING ... 64%</span>
                </div>
                <div className={styles.systemRow}>
                    <span>FIRST DAY OF BLACK HISTORY MONTH</span>
                    <span>624 / 1440 FILES</span>
                </div>
                <div className={styles.systemRow}>
                    <span>TUESDAY, FEBRUARY 1ST</span>
                    <span className={styles.warning}>ATTENTION</span>
                </div>
            </div>

            <div className={styles.binaryStream}>
                {binaryCode}
            </div>

            <div className={styles.alert}>
                <span className={styles.alertIcon}>⚠</span>
                <span>OUTSIDE LINK CONNECTED</span>
                <span className={styles.alertAction}>CLOSE HACK IMMEDIATELY TO AVOID DATA BREACH</span>
            </div>
        </motion.header>
    );
};

export default CyberdeckHeader;