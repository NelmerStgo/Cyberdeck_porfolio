import { useState, useCallback } from "react";

export const useGlitch = (duration = 200) => {
    const [isGlitching, setIsGlitching] = useState(false);

    const triiggerGlitch = useCallback(() => {
        setIsGlitching(true);
        setTimeout(() => setIsGlitching(false), duration);
    }, [duration]);

    return { isGlitching, triiggerGlitch };
}