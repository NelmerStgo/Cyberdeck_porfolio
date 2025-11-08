import React from "react";
import type { Tab } from "../../../types/cyberdeck";
import CyberButton from "../../UI/Button/CyberButton";
import { useSound } from "../../../hooks/useSound";
import styles from "./Tabs.module.css";

interface TabsProps {
    activeTab: Tab;
    onTabChange: (tab: Tab) => void;
}

const Tabs: React.FC<TabsProps> = ({ activeTab, onTabChange }) => {
    const { play: playClick } = useSound('/sounds/click.wav');
    const { play: playHover } = useSound('/sounds/hover.wav');

    const tabs: { id: Tab; label: string }[] = [
        { id: 'projects', label: 'PROYECTOS' },
        { id: 'skills', label: 'HABILIDADES' },
        { id: 'contact', label: 'CONTACTO' },
    ];

    const handleTabClick = (tab: Tab) => {
        playClick();
        onTabChange(tab);
    };

    const handleTabHover = () => {
        playHover();
    };

    return (
        <nav className={styles.tabsContainer}>
            {tabs.map((tab) => (
                <CyberButton
                    key={tab.id}
                    variant={activeTab === tab.id ? 'primary' : 'secondary'}
                    onClick={() => handleTabClick(tab.id)}
                    onMouseEnter={handleTabHover}
                    className={styles.tabButton}
                >
                    {tab.label}
                </CyberButton>
            ))}
        </nav>
    );
};

export default Tabs;