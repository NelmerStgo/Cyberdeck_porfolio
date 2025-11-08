import { useRef, useCallback, useEffect } from 'react';

export const useSound = (soundFile: string, volume: number = 0.3) => {
    const audioRef = useRef<HTMLAudioElement | null>(null);

    const loadSound = useCallback(() => {
        if (!audioRef.current) {
            audioRef.current = new Audio(soundFile);
            audioRef.current.preload = 'auto';
            audioRef.current.volume = volume;
        }
    }, [soundFile, volume]);

    const play = useCallback(() => {
        loadSound();
        if (audioRef.current) {
            audioRef.current.currentTime = 0;
            audioRef.current.play().catch((error) => {
                console.warn('Audio playback failed:', error);
            });
        }
    }, [loadSound]);

    // Precargar el sonido cuando el componente se monta
    useEffect(() => {
        loadSound();
    }, [loadSound]);

    return { play, loadSound };
};