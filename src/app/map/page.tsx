'use client';

import Link from 'next/link';
import { useGame } from '@/context/GameContext';
import { Star, Lock, Check, Zap, BookOpen, MessageCircle, Briefcase, Brain } from 'lucide-react';
import styles from './page.module.css';

const LEVELS = [
    { id: 1, title: 'NCS 기초', icon: Zap, unlocked: true },
    { id: 2, title: '직무 상식', icon: BookOpen, unlocked: true },
    { id: 1, title: 'NCS 기초', icon: Zap },
    { id: 2, title: '직무 상식', icon: BookOpen },
    { id: 3, title: '비즈니스 영어', icon: MessageCircle },
    { id: 4, title: '면접 실전', icon: Briefcase },
    { id: 5, title: 'AI 심화', icon: Brain },
];

export default function MapPage() {
    const { xp, unlockedLevels } = useGame();

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Skill Tree</h1>

            <div className={styles.map}>
                {LEVELS.map((level, index) => {
                    const Icon = level.icon;
                    const isActive = unlockedLevels.includes(level.id);

                    return (
                        <div key={level.id} className={styles.level}>
                            <Link href={isActive ? `/quiz/${level.id}` : '#'} passHref>
                                <div
                                    className={`${styles.node} ${isActive ? styles.nodeActive : styles.nodeLocked}`}
                                >
                                    {isActive ? (
                                        <Icon className={styles.nodeIcon} />
                                    ) : (
                                        <Lock className={styles.nodeIcon} />
                                    )}
                                </div>
                            </Link>

                            <div className={styles.starRating}>
                                {[1, 2, 3].map((star) => (
                                    <Star
                                        key={star}
                                        size={16}
                                        fill={isActive && star <= 1 ? "currentColor" : "none"}
                                        color={isActive ? "var(--warning)" : "var(--text-muted)"}
                                    />
                                ))}
                            </div>

                            <div className={styles.levelTitle}>{level.title}</div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
