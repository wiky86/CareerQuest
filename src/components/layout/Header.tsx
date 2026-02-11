'use client';

import Link from 'next/link';
import { useGame } from '@/context/GameContext';
import { Flame, Heart, Map, LayoutDashboard, Trophy, BookOpen, MessageSquare, Activity } from 'lucide-react';
import styles from './Header.module.css';

export default function Header() {
    const { hearts, streak } = useGame();

    return (
        <header className={styles.header}>
            <div className={`container ${styles.container}`}>
                <Link href="/" className={styles.logo}>
                    Career Quest
                </Link>

                <nav className={styles.nav}>
                    <Link href="/dashboard" className={styles.navItem}>
                        <LayoutDashboard size={20} />
                        <span className={styles.navLabel}>대시보드</span>
                    </Link>
                    <Link href="/map" className={styles.navItem}>
                        <Map size={20} />
                        <span className={styles.navLabel}>스킬 트리</span>
                    </Link>
                    <Link href="/league" className={styles.navItem}>
                        <Trophy size={20} />
                        <span className={styles.navLabel}>리그</span>
                    </Link>
                    <Link href="/study" className={styles.navItem}>
                        <BookOpen size={20} />
                        <span className={styles.navLabel}>학습</span>
                    </Link>
                    <Link href="/community" className={styles.navItem}>
                        <MessageSquare size={20} />
                        <span className={styles.navLabel}>커뮤니티</span>
                    </Link>
                    <Link href="/activity" className={styles.navItem}>
                        <Activity size={20} />
                        <span className={styles.navLabel}>내 활동</span>
                    </Link>

                    <div className={styles.divider} />

                    <div className={styles.stat} title="Current Streak">
                        <Flame size={20} className={streak > 0 ? styles.fireActive : styles.fireInactive} />
                        <span>{streak}</span>
                    </div>

                    <div className={styles.stat} title="Hearts Remaining">
                        <Heart size={20} className={styles.heartIcon} fill={hearts > 0 ? "currentColor" : "none"} />
                        <span>{hearts}</span>
                    </div>
                </nav>
            </div>
        </header>
    );
}
