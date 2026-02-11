'use client';

import Link from 'next/link';
import { useGame } from '@/context/GameContext';
import { Flame, Heart, Map } from 'lucide-react';
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
                    <Link href="/map" className={styles.navItem}>
                        <Map size={20} />
                        <span className={styles.navLabel}>Map</span>
                    </Link>

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
