import React from 'react';
import { motion } from 'framer-motion'; /* AnimatePresence */
import styles from './BreachProtocolModal.module.css';

// Importar la imagen
import avatarImage from '../../../assets/avatar/avatar.png';

interface BreachProtocolModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const BreachProtocolModal: React.FC<BreachProtocolModalProps> = ({ isOpen, onClose }) => {
    const profileData = {
        name: "NELMER SANTIAGO PADRÓN",
        title: "Computer Systems Engineer",
        specialization: "Mobile & Web Developer",
        location: "Oaxaca, México",

        education: {
            institution: "Instituto Tecnológico del Itsmo",
            degree: "Bachelor's Degree in Computer Systems Engineering",
            period: "2019 - 2024"
        },

        bio: "Systems engineer specialized in frontend development with React and TypeScript. Experience in mobile and web application development, with focus on creating efficient and user-friendly interfaces. Currently working on innovative projects that combine technology with creative solutions.",

        skills: [
            "React & TypeScript",
            "Mobile Development",
            "Web Architecture",
            "UI/UX Design",
            "System Optimization"
        ]
    };

    if (!isOpen) return null;

    return (
        <motion.div
            className={styles.overlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
        >
            <motion.div
                className={styles.modal}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: "spring", damping: 25 }}
                onClick={(e) => e.stopPropagation()}
            >
                {/* Header Simple */}
                <div className={styles.modalHeader}>
                    <div className={styles.headerTitle}>
                        <h2>OPERATIVE PROFILE</h2>
                        <p>SYSTEMS ENGINEER DOSSIER</p>
                    </div>
                    <motion.button
                        className={styles.closeButton}
                        onClick={onClose}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        CLOSE
                    </motion.button>
                </div>

                <div className={styles.modalContent}>
                    {/* Sección Principal */}
                    <div className={styles.mainProfile}>
                        <div className={styles.avatarSection}>
                            <div className={styles.avatarContainer}>
                                <img
                                    src={avatarImage}
                                    alt="Profile"
                                    className={styles.avatar}
                                    onError={(e) => {
                                        e.currentTarget.style.display = 'none';
                                        e.currentTarget.nextElementSibling?.classList.remove(styles.hidden);
                                    }}
                                />
                                <div className={`${styles.avatarFallback} ${styles.hidden}`}>
                                    PROFILE IMAGE
                                </div>
                            </div>
                        </div>

                        <div className={styles.basicInfo}>
                            <h1 className={styles.name}>{profileData.name}</h1>
                            <div className={styles.title}>{profileData.title}</div>
                            <div className={styles.specialization}>{profileData.specialization}</div>
                            <div className={styles.location}>{profileData.location}</div>
                        </div>
                    </div>

                    {/* Información Detallada */}
                    <div className={styles.detailsGrid}>
                        {/* Educación */}
                        <div className={styles.detailCard}>
                            <h3>EDUCATION</h3>
                            <div className={styles.educationInfo}>
                                <div className={styles.institution}>{profileData.education.institution}</div>
                                <div className={styles.degree}>{profileData.education.degree}</div>
                                <div className={styles.period}>{profileData.education.period}</div>
                            </div>
                        </div>

                        {/* Habilidades */}
                        <div className={styles.detailCard}>
                            <h3>SKILLS</h3>
                            <div className={styles.skillsList}>
                                {profileData.skills.map((skill, index) => (
                                    <div key={index} className={styles.skill}>
                                        {skill}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Biografía */}
                        <div className={styles.detailCard}>
                            <h3>PROFILE</h3>
                            <div className={styles.bio}>
                                {profileData.bio}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Efectos sutiles */}
                <div className={styles.scanlines} />
            </motion.div>
        </motion.div>
    );
};

export default BreachProtocolModal;