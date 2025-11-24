import React from 'react';
import { delay, motion } from 'framer-motion';
import { useSound } from '../../../hooks/useSound';
import styles from './CyberCard.module.css';

import clickSound from '../../../assets/audio/click.wav';
import hoverSound from '../../../assets/audio/hover.wav';


interface CyberCardProps {
    title: string;
    description: string;
    tags: string[];
    links?: {
        github?: string;
        live?: string;
    };
    delay?: number;
}

const CyberCard: React.FC<CyberCardProps> = ({
    title,
    description,
    tags,
    links,
    delay = 0
}) => {
    const { play: playHover } = useSound(hoverSound);
    const { play: playClick } = useSound(clickSound);

    const handleLinkClick = (url?: string) => {
        if (url) {
            /* playClick(); */
            window.open(url, '_blank', 'noopener,noreferrer');
        }
    };

    return (
        <motion.div
            className={styles.projectCard}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.1, delay }}
            whileHover={{
                scale: 1,
                y: -5,
                transition: { duration: 0.1 }
            }}
            /* onMouseEnter={playHover} */
        >
            <h3 className={styles.projectTitle}>{title}</h3>
            <p className={styles.projectDescription}>{description}</p>

            <div className={styles.projectTech}>
                {tags.map((tag, index) => (
                    <span key={index} className={styles.techTag}>
                        {tag}
                    </span>
                ))}
            </div>

            {(links?.github || links?.live) && (
                <div className={styles.projectLinks}>
                    {links.github && (
                        <button
                            className={styles.linkButton}
                            onClick={() => handleLinkClick(links.github)}
                            /* onMouseEnter={playHover} */
                        >
                            GitHub
                        </button>
                    )}
                    {links.live && (
                        <button
                            className={styles.linkButton}
                            onClick={() => handleLinkClick(links.live)}
                            /* onMouseEnter={playHover} */
                        >
                            Live Demo
                        </button>
                    )}
                </div>
            )}
        </motion.div>
    );
};

export default CyberCard; // Exportación como default