import React from "react";
import { motion } from "framer-motion";
import styles from "./CyberButtton.module.css";

interface CyberButtonProps {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary' | 'danger';
    onClick?: () => void;
    onMouseEnter?: () => void;
    className?: string;
    disabled?: boolean;
    type?: "button" | "submit" | "reset";
}

const CyberButton: React.FC<CyberButtonProps> = ({
    children,
    variant = 'primary',
    onClick,
    onMouseEnter,
    className = '',
    disabled = false,
    type = "button"
}) => {
    const getVariantClass = () => {
        switch (variant) {
            case 'primary':
                return styles.primary;
            case 'secondary':
                return styles.secondary;
            case 'danger':
                return styles.danger;
            default:
                return styles.primary;
        }
    };

    return (
        <motion.button
            type={type}
            className={`${styles.cyberButton} ${getVariantClass()} ${className}`}
            onClick={onClick}
            onMouseEnter={onMouseEnter}
            disabled={disabled}
            whileHover={{ scale: disabled ? 1 : 1.05 }}
            whileTap={{ scale: disabled ? 1 : 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
            {children}
        </motion.button>
    );
};

export default CyberButton;