import React from 'react';
import { motion } from 'framer-motion';
import type { Project } from '../../../types/cyberdeck';
import CyberCard from '../../UI/Card/CyberCard';
import styles from './styles/Projects.module.css';

const Projects: React.FC = () => {
    const projects: Project[] = [
        {
            id: '1',
            title: 'Neural Network Visualizer',
            description: 'Una herramienta interactiva para visualizar redes neuronales en tiempo real con datos de entrenamiento.',
            technologies: ['React', 'D3.js', 'TensorFlow.js'],
            githubUrl: 'https://github.com/usuario/neural-visualizer',
            liveUrl: 'https://usuario.github.io/neural-visualizer'
        },
        {
            id: '2',
            title: 'CyberMarket',
            description: 'Plataforma de e-commerce con temática cyberpunk y sistema de pago con criptomonedas.',
            technologies: ['Node.js', 'MongoDB', 'Blockchain', 'React'],
            githubUrl: 'https://github.com/usuario/cybermarket'
        },
        {
            id: '3',
            title: 'Glitch Art Generator',
            description: 'Aplicación web que transforma imágenes en arte glitch con múltiples filtros y efectos.',
            technologies: ['Canvas API', 'WebGL', 'JavaScript'],
            githubUrl: 'https://github.com/usuario/glitch-art',
            liveUrl: 'https://usuario.github.io/glitch-art'
        },
        {
            id: '4',
            title: 'DataStream Dashboard',
            description: 'Dashboard en tiempo real para monitorear múltiples fuentes de datos con visualizaciones interactivas.',
            technologies: ['Vue.js', 'WebSockets', 'Chart.js', 'Node.js'],
            githubUrl: 'https://github.com/usuario/datastream-dashboard'
        }
    ];

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
                    <span className={styles.glitchText} data-text="PROTOCOL DATABASE">
                        PROTOCOL DATABASE
                    </span>
                </motion.h2>
                <div className={styles.panelStatus}>
                    <span>ACCESS LEVEL:
                        <span className={styles.accessLevel}> ADMIN</span>
                    </span>
                    <span>PROTOCOLS: 
                        <span className={styles.protocolCount}> {projects.length}</span>
                    </span>
                    <span>ENCRYPTION:
                        <span className={styles.encryption}> ACTIVE</span>
                    </span>
                </div>
            </div>

            <motion.div
                className={styles.projectsGrid}
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {projects.map((project, index) => (
                    <motion.div key={project.id} variants={itemVariants}>
                        <CyberCard
                            title={project.title}
                            description={project.description}
                            tags={project.technologies}
                            links={{
                                github: project.githubUrl,
                                live: project.liveUrl
                            }}
                            delay={index * 0.1}
                        />
                    </motion.div>
                ))}
            </motion.div>
        </motion.div>
    );
};

export default Projects;