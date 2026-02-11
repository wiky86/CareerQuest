'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

interface GameState {
    hearts: number;
    maxHearts: number;
    streak: number;
    xp: number;
    lastLoginDate: string | null;
    unlockedLevels: number[]; // Array of level IDs
}

interface GameContextType extends GameState {
    loseHeart: () => void;
    gainHeart: () => void;
    addXp: (amount: number) => void;
    checkStreak: () => void;
    unlockLevel: (levelId: number) => void;
}

const defaultState: GameState = {
    hearts: 5,
    maxHearts: 5,
    streak: 0,
    xp: 0,
    lastLoginDate: null,
    unlockedLevels: [1], // Level 1 unlocked by default
};

const GameContext = createContext<GameContextType | undefined>(undefined);

export function GameProvider({ children }: { children: React.ReactNode }) {
    const [state, setState] = useState<GameState>(defaultState);

    // Load state from localStorage on mount
    useEffect(() => {
        const savedState = localStorage.getItem('career-quest-state');
        if (savedState) {
            try {
                const parsed = JSON.parse(savedState);
                // Merge with default to ensure new fields (unlockedLevels) exist if loading old state
                setState({ ...defaultState, ...parsed });
            } catch (e) {
                console.error('Failed to parse game state', e);
            }
        }
    }, []);

    // Save state to localStorage on change
    useEffect(() => {
        localStorage.setItem('career-quest-state', JSON.stringify(state));
    }, [state]);

    const loseHeart = () => {
        setState((prev) => ({
            ...prev,
            hearts: Math.max(0, prev.hearts - 1),
        }));
    };

    const gainHeart = () => {
        setState((prev) => ({
            ...prev,
            hearts: Math.min(prev.maxHearts, prev.hearts + 1),
        }));
    };

    const addXp = (amount: number) => {
        setState((prev) => ({
            ...prev,
            xp: prev.xp + amount,
        }));
    };

    const unlockLevel = (levelId: number) => {
        setState((prev) => {
            if (prev.unlockedLevels.includes(levelId)) return prev;
            return {
                ...prev,
                unlockedLevels: [...prev.unlockedLevels, levelId],
            };
        });
    };

    const checkStreak = () => {
        const today = new Date().toDateString();
        setState((prev) => {
            if (prev.lastLoginDate === today) return prev;

            const yesterday = new Date();
            yesterday.setDate(yesterday.getDate() - 1);

            const isConsecutive = prev.lastLoginDate === yesterday.toDateString();

            return {
                ...prev,
                streak: isConsecutive ? prev.streak + 1 : 1,
                lastLoginDate: today,
            };
        });
    };

    // Check streak on mount
    useEffect(() => {
        checkStreak();
    }, []);

    return (
        <GameContext.Provider value={{ ...state, loseHeart, gainHeart, addXp, checkStreak, unlockLevel }}>
            {children}
        </GameContext.Provider>
    );
}

export function useGame() {
    const context = useContext(GameContext);
    if (context === undefined) {
        throw new Error('useGame must be used within a GameProvider');
    }
    return context;
}
