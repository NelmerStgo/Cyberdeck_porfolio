import React, { useState } from 'react';
import { motion } from 'framer-motion';
import CyberButton from '../../UI/Button/CyberButton';
import { useSound } from '../../../hooks/useSound';
import styles from './styles/Contact.module.css';

const Contact: React.FC = () => {
    const { play: playHover } = useSound('/sounds/hover.wav');
    const { play: playClick } = useSound('/sounds/click.wav');

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        playClick();
        // Aquí iría la lógica para enviar el formulario
        console.log('Formulario enviado:', formData);
        // Reset form
        setFormData({ name: '', email: '', message: '' });
    };

    const contactInfo = [
        {
            icon: '✉',
            label: 'Email',
            value: 'nelmerstgopadron@gmail.com',
            link: 'mailto:nelmerstgopadron@gmail.com'
        },
        {
            icon: '🔗',
            label: 'GitHub',
            value: 'github.com/NelmerStgo',
            link: 'https://github.com/NelmerStgo'
        },
        {
            icon: '💼',
            label: 'LinkedIn',
            value: 'linkedin.com/in/nelmer-santiago-padron/',
            link: 'https://www.linkedin.com/in/nelmer-santiago-padron/'
        },
        {
            icon: '📱',
            label: 'Teléfono',
            value: '+52 951 110 9070',
            link: 'tel:+529511109070'
        }
    ];

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
                    <span className={styles.glitchText} data-text="NETWORK INTERFACE">
                        NETWORK INTERFACE
                    </span>
                </motion.h2>
                <div className={styles.panelStatus}>
                    <span>ACCESS LEVEL: ADMIN</span>
                    <span>PROTOCOL: SECURE</span>
                    <span className={styles.encryption}>ENCRYPTION: ACTIVE</span>
                </div>
            </div>

            <div className={styles.contactContainer}>
                <div className={styles.contactInfo}>
                    {contactInfo.map((item, index) => (
                        <motion.div
                            key={item.label}
                            className={styles.contactItem}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            onMouseEnter={playHover}
                        >
                            <div className={styles.contactIcon}>{item.icon}</div>
                            <div className={styles.contactDetails}>
                                <span className={styles.contactLabel}>{item.label}</span>
                                <a
                                    href={item.link}
                                    className={styles.contactLink}
                                    onClick={() => playClick()}
                                >
                                    {item.value}
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.form
                    className={styles.contactForm}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    onSubmit={handleSubmit}
                >
                    <div className={styles.formGroup}>
                        <label htmlFor="name" className={styles.formLabel}>
                            OPERATOR ID
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            className={styles.formInput}
                            required
                            onFocus={playHover}
                            placeholder="ENTER YOUR IDENTIFIER"
                        />
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="email" className={styles.formLabel}>
                            ENCRYPTION KEY
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className={styles.formInput}
                            required
                            onFocus={playHover}
                            placeholder="SECURE@CHANNEL.NET"
                        />
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="message" className={styles.formLabel}>
                            MESSAGE PROTOCOL
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            className={styles.formTextarea}
                            rows={5}
                            required
                            onFocus={playHover}
                            placeholder="INITIATE SECURE COMMUNICATION..."
                        />
                    </div>

                    <CyberButton
                        type="submit"
                        variant="primary"
                        className={styles.submitButton}
                    >
                        INITIATE TRANSMISSION
                    </CyberButton>
                </motion.form>
            </div>
        </motion.div>
    );
};

export default Contact;