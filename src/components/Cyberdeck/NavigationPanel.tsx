import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Tab } from '../../types/cyberdeck';
import { useSound } from '../../hooks/useSound';
import styles from './NavigationPanel.module.css';

import clickSound from '../../assets/audio/click.wav';
import hoverSound from '../../assets/audio/hover.wav';
import enableSound from '../../assets/audio/enable.wav';

interface NavigationPanelProps {
    activeTab: Tab;
    onTabChange: (tab: Tab) => void;
}

const NavigationPanel: React.FC<NavigationPanelProps> = ({ activeTab, onTabChange }) => {
    const { play: playClick } = useSound(clickSound);
    const { play: playHover } = useSound(hoverSound);
    const { play: playEnable } = useSound(enableSound);

    const [isAudioEnabled, setIsAudioEnabled] = useState(false);
    const [showAudioModal, setShowAudioModal] = useState(true);

    const navItems = [
        { id: 'projects' as Tab, label: 'PROTOCOLS', icon: '🔒', description: 'ACCESS PROJECT DATABASE' },
        { id: 'skills' as Tab, label: 'SYSTEMS', icon: '⚡', description: 'SKILL MATRIX ANALYSIS' },
        { id: 'contact' as Tab, label: 'NETWORK', icon: '📡', description: 'ESTABLISH CONNECTION' },
    ];

    const handleEnableAudio = () => {
        playEnable();
        setIsAudioEnabled(true);
        setShowAudioModal(false);
    };

    const handleSkipAudio = () => {
        setIsAudioEnabled(false);
        setShowAudioModal(false);
    };

    const handleNavClick = (tab: Tab) => {
        if (isAudioEnabled) {
            playClick();
        }
        onTabChange(tab);
    };

    const handleHover = () => {
        if (isAudioEnabled) {
            playHover();
        }
    };

    return (
        <>
            <AnimatePresence>
                {showAudioModal && (
                    <motion.div
                        /* Animation del fondo oscuro overlay */
                        className={styles.audioEnableOverlay}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        {/* Animacion Modal */}
                        <motion.div
                            className={styles.audioEnableModal}
                            initial={{ opacity: 0, scale: 0.8, y: 50 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.8, y: -50 }}
                            transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 0.1 }}
                        >
                            <div className={styles.audioIcon}>🔊</div>
                            <h3>EXPERIENCIA INMERSIVA</h3>
                            <p>habilita el audio para efectos sonoros</p>
                            <button
                                className={styles.enableButton}
                                onClick={handleEnableAudio}
                            >
                                HABILITAR AUDIO
                            </button>
                            <button
                                className={styles.skipButton}
                                onClick={handleSkipAudio}
                            >
                                Continuar sin audio
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.nav
                className={styles.navigationPanel}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
            >
                <div className={styles.navHeader}>
                    <span>NAVIGATION MATRIX</span>
                    <div className={styles.loadingBar}>
                        <div className={styles.loadingProgress} style={{ width: '104%' }}></div>
                    </div>
                </div>

                <div className={styles.navItems}>
                    {navItems.map((item, index) => (
                        <motion.div
                            key={item.id}
                            className={`${styles.navItem} ${activeTab === item.id ? styles.active : ''}`}
                            onClick={() => handleNavClick(item.id)}
                            onMouseEnter={handleHover}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <div className={styles.navIcon}>{item.icon}</div>

                            <div className={styles.navContent}>
                                <div className={styles.navLabel}>{item.label}</div>
                                <div className={styles.navDescription}>{item.description}</div>
                            </div>

                            <div className={styles.navStatus}>
                                {activeTab === item.id ? 'ACTIVE' : 'STANDBY'}
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className={styles.navFooter}>
                    <div className={styles.systemMessage}>
                        <span>BREADHPROTOCOL 104.0%</span>
                        <span>ROOT@HARADAN: ~ #</span>
                    </div>
                </div>
            </motion.nav>
        </>
    );
};

export default NavigationPanel;