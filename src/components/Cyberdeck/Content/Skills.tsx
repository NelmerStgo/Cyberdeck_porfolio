import React from 'react';
import { motion } from 'framer-motion';
import type { Skill } from '../../../types/cyberdeck';
import styles from './styles/Skills.module.css';

const Skills: React.FC = () => {
    const skills: { category: string; skills: Skill[] }[] = [
        {
            category: 'Frontend',
            skills: [
                { name: 'React', level: 'Advanced', category: 'frontend' },
                { name: 'TypeScript', level: 'Advanced', category: 'frontend' },
                { name: 'Vue.js', level: 'Intermediate', category: 'frontend' },
                { name: 'CSS/SCSS', level: 'Expert', category: 'frontend' },
                { name: 'HTML5', level: 'Expert', category: 'frontend' }
            ]
        },
        {
            category: 'Backend',
            skills: [
                { name: 'Node.js', level: 'Advanced', category: 'backend' },
                { name: 'Python', level: 'Intermediate', category: 'backend' },
                { name: 'MongoDB', level: 'Intermediate', category: 'backend' },
                { name: 'PostgreSQL', level: 'Intermediate', category: 'backend' },
                { name: 'Express.js', level: 'Advanced', category: 'backend' }
            ]
        },
        {
            category: 'Herramientas',
            skills: [
                { name: 'Git', level: 'Advanced', category: 'tools' },
                { name: 'Docker', level: 'Intermediate', category: 'tools' },
                { name: 'Figma', level: 'Intermediate', category: 'tools' },
                { name: 'Webpack', level: 'Intermediate', category: 'tools' },
                { name: 'Vite', level: 'Advanced', category: 'tools' }
            ]
        }
    ];

    const getLevelColor = (level: Skill['level']) => {
        switch (level) {
            case 'Beginner': return 'var(--text-secondary)';
            case 'Intermediate': return 'var(--neon-yellow)';
            case 'Advanced': return 'var(--neon-cyan)';
            case 'Expert': return 'var(--neon-pink)';
            default: return 'var(--text-primary)';
        }
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5
            }
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className={styles.contentPanel}
        >
            <div className={styles.panelHeader}>
                <motion.h2
                    className={styles.sectionTitle}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <span className={styles.glitchText} data-text="SYSTEMS MATRIX">
                        SYSTEMS MATRIX
                    </span>
                </motion.h2>
                <div className={styles.panelStatus}>
                    <span>ACCESS LEVEL: ADMIN</span>
                    <span>SYSTEMS: {skills.length}</span>
                    <span className={styles.encryption}>ENCRYPTION: ACTIVE</span>
                </div>
            </div>

            <motion.div
                className={styles.skillsContainer}
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {skills.map((category) => (
                    <motion.div
                        key={category.category}
                        className={styles.skillCategory}
                        variants={itemVariants}
                    >
                        <h3 className={styles.skillCategoryTitle}>{category.category}</h3>
                        <ul className={styles.skillList}>
                            {category.skills.map((skill) => (
                                <li key={skill.name} className={styles.skillItem}>
                                    <span className={styles.skillName}>{skill.name}</span>
                                    <span
                                        className={styles.skillLevel}
                                        style={{ color: getLevelColor(skill.level) }}
                                    >
                                        {skill.level}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                ))}
            </motion.div>
        </motion.div>
    );
};

export default Skills;