import React from 'react';
import { motion } from 'framer-motion';
import type { Tab } from '../../types/cyberdeck';
import { useSound } from '../../hooks/useSound';
import styles from './NavigationPanel.module.css';

interface NavigationPanelProps {
    activeTab: Tab;
    onTabChange: (tab: Tab) => void;
}

const NavigationPanel: React.FC<NavigationPanelProps> = ({ activeTab, onTabChange }) => {
    const { play: playClick } = useSound('/sounds/click.wav');
    const { play: playHover } = useSound('/sounds/hover.wav');

    const navItems = [
        { id: 'projects' as Tab, label: 'PROTOCOLS', icon: '🔒', description: 'ACCESS PROJECT DATABASE' },
        { id: 'skills' as Tab, label: 'SYSTEMS', icon: '⚡', description: 'SKILL MATRIX ANALYSIS' },
        { id: 'contact' as Tab, label: 'NETWORK', icon: '📡', description: 'ESTABLISH CONNECTION' },
    ];

    const handleNavClick = (tab: Tab) => {
        playClick();
        onTabChange(tab);
    };

    return (
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
                        onMouseEnter={playHover}
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
    );
};

export default NavigationPanel;