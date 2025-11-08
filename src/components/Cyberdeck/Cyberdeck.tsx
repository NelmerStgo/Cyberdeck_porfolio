import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion'; /* motion */
import type { Tab } from '../../types/cyberdeck';
import CyberdeckHeader from './CyberdeckHeader';
import NavigationPanel from './NavigationPanel';
import Projects from './Content/Projects';
import Skills from './Content/Skills';
import Contact from './Content/Contact';
import Scanlines from '../UI/Layout/Scanlines';
import Noise from '../UI/Layout/Noise';
import styles from './Cyberdeck.module.css';
/* import Particles from '../UI/Layout/Particles'; */

const Cyberdeck: React.FC = () => {
    const [activeTab, setActiveTab] = useState<Tab>('projects');

    const renderContent = () => {
        switch (activeTab) {
            case 'projects':
                return <Projects key="projects" />;
            case 'skills':
                return <Skills key="skills" />;
            case 'contact':
                return <Contact key="contact" />;
            default:
                return <Projects key="projects" />;
        }
    };

    return (
        <div className={styles.cyberdeck}>
            <Scanlines />
            <Noise />
            {/* <Particles /> */}
            <div className={styles.cyberdeckBackground} />

            <CyberdeckHeader />

            <div className={styles.mainContainer}>
                <NavigationPanel activeTab={activeTab} onTabChange={setActiveTab} />

                <main className={styles.contentArea}>
                    <AnimatePresence mode="wait">
                        {renderContent()}
                    </AnimatePresence>
                </main>
            </div>
        </div>
    );
};

export default Cyberdeck;