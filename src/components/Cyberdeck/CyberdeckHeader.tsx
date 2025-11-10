import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import BinaryStream from './CyberDeckHeader/BinaryStream';
import ScanningProgress from './CyberDeckHeader/ScanningProgress';
import styles from './CyberdeckHeader.module.css';

const systemMessages = [
    "SYSTEM INTEGRITY: OK",
    "RUNNING DIAGNOSTICS...",
    "NETWORK CACHE PURGED",
    "SECURITY PROTOCOL: ACTIVE",
    "COMPILING SHADERS..."
];


const fileMessages = [
    "624 / 1440 FILES",
    "VERIFYING FILE HASH...",
    "1029 / 1440 FILES",
    "ALL FILES VERIFIED",
    "SYNCING... 88%"
];

function getOrdinalDay(day: number) {
    const s = ["th", "st", "nd", "rd"];
    const v = day % 100;
    return day + (s[(v - 20) % 10] || s[v] || s[0]);
}

const getFormattedDate = () => {
    const today = new Date();
    const weekday = today.toLocaleDateString('en-US', { weekday: 'long' }).toUpperCase();
    const month = today.toLocaleDateString('en-US', { month: 'long' }).toUpperCase();
    const day = getOrdinalDay(today.getDate());

    // Formato: TUESDAY, FEBRUARY 1ST
    return `${weekday}, ${month} ${day}`;
};

const CyberdeckHeader: React.FC = () => {

    const [currentDate, setCurrentDate] = useState(getFormattedDate());
    const [sysMsg, setSysMsg] = useState(systemMessages[0]);
    const [fileMsg, setFileMsg] = useState(fileMessages[0]);

    useEffect(() => {
        // Intervalo para los mensajes del sistema
        const messageInterval = setInterval(() => {
            const sysIndex = Math.floor(Math.random() * systemMessages.length);
            const fileIndex = Math.floor(Math.random() * fileMessages.length);
            
            setSysMsg(systemMessages[sysIndex]);
            setFileMsg(fileMessages[fileIndex]);
        }, 3500); // 3.5 segundos

        // Intervalo para la fecha (por si el usuario deja la página abierta hasta medianoche)
        const dateInterval = setInterval(() => {
            setCurrentDate(getFormattedDate());
        }, 60000); // Revisa la fecha cada minuto

        return () => {
            clearInterval(messageInterval);
            clearInterval(dateInterval);
        };
    }, []);

    return (
        <motion.header
            className={styles.cyberdeckHeader}
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
        >
            <div className={styles.terminalBar}>
                <div className={styles.terminalTitle}>
                    <span data-text="CYBERDECK V 552 322:3876 383 1098 5492">
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
                    <ScanningProgress />
                </div>
                <div className={styles.systemRow}>
                    <span> {sysMsg} </span>
                    <span> {fileMsg} </span>
                </div>
                <div className={styles.systemRow}>
                    <span> {currentDate} </span>
                    <span className={styles.warning}>ATTENTION</span>
                </div>
            </div>

            <BinaryStream />

            <div className={styles.alert}>
                <span className={styles.alertIcon}>⚠</span>
                <span>OUTSIDE LINK CONNECTED</span>
                <span className={styles.alertAction}>CLOSE HACK IMMEDIATELY TO AVOID DATA BREACH</span>
            </div>
        </motion.header>
    );
};

export default CyberdeckHeader;