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

// Función para agregar cero a la izquierda
const padZero = (num: number, length: number = 2): string => {
    return num.toString().padStart(length, '0');
};

const getFormattedDate = () => {
    const today = new Date();
    const weekday = today.toLocaleDateString('en-US', { weekday: 'long' }).toUpperCase();
    const month = today.toLocaleDateString('en-US', { month: 'long' }).toUpperCase();
    const day = getOrdinalDay(today.getDate());

    const hours = padZero(today.getHours());
    const minutes = padZero(today.getMinutes());
    const seconds = padZero(today.getSeconds());
    const milliseconds = padZero(today.getMilliseconds(), 3);

    // Formato: "14:30:45.123 | TUESDAY, FEBRUARY 1ST"
    /* return `${weekday}, ${month} ${day}`; */
    /* console.log(`${nanoSec} : ${second} : ${min} : ${hr}, - ,${weekday}, ${month} ${day}`); */
    return `${hours}:${minutes}:${seconds}.${milliseconds} || ${weekday}, ${month} ${day}`;
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
        }, 100); // Revisa la fecha cada minuto

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
                    <span data-text="NELMER SANTIAGO PADRÓN">
                        NELMER SANTIAGO PADRÓN
                    </span>
                </div>
                <div className={styles.terminalStatus}>
                    <span>// ADMIN ACCESS GRANTED</span>
                    <span className={styles.blink}>_</span>
                </div>
            </div>

            <div className={styles.systemInfo}>
                <div className={styles.systemRow}>
                    <span>ING. EN SISTEMAS COMPUTACIONALES</span>
                    <ScanningProgress />
                </div>

                <div className={styles.systemRow}>
                    <span> {sysMsg} </span>
                    <span> {fileMsg} </span>
                </div>

                <div className={styles.systemRow}>
                    <span className={styles.dateStyle}> {currentDate} </span>
                    <span className={styles.warning}>NETWORK INTEGRITY</span>
                </div>
                    <div className={styles.alert}>
                        <span>HIRE PROTOCOL: AVAILABLE</span>
                        <span className={styles.alertIcon}>⚠</span>
                        <span className={styles.alertAction}>ACCESS SKILL MATRIX FOR FULL DATA</span>
                    </div>
            </div>

            <BinaryStream />

        </motion.header>
    );
};

export default CyberdeckHeader;