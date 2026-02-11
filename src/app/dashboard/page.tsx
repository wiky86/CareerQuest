'use client';

import { useGame } from '@/context/GameContext';
import Link from 'next/link';
import { Flame, Trophy, Map, BookOpen, Target, ArrowRight } from 'lucide-react';
import styles from './page.module.css';

export default function DashboardPage() {
    const { xp, level, hearts, streak, unlockedLevels } = useGame();

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1 className={styles.title}>안녕하세요, 예비 합격자님! 👋</h1>
                <p className={styles.subtitle}>오늘도 목표 달성을 위해 한 걸음 더 나아가볼까요?</p>
            </header>

            <div className={styles.statsGrid}>
                <div className={styles.statCard}>
                    <div className={styles.statIcon} style={{ background: 'var(--primary-bg)', color: 'var(--primary)' }}>
                        <Target size={24} />
                    </div>
                    <div>
                        <div className={styles.statLabel}>현재 레벨</div>
                        <div className={styles.statValue}>LV. {Math.floor(xp / 100) + 1}</div>
                    </div>
                </div>
                <div className={styles.statCard}>
                    <div className={styles.statIcon} style={{ background: '#FEF3C7', color: '#D97706' }}>
                        <Flame size={24} />
                    </div>
                    <div>
                        <div className={styles.statLabel}>연속 학습</div>
                        <div className={styles.statValue}>{streak}일</div>
                    </div>
                </div>
                <div className={styles.statCard}>
                    <div className={styles.statIcon} style={{ background: '#E0E7FF', color: '#4F46E5' }}>
                        <Trophy size={24} />
                    </div>
                    <div>
                        <div className={styles.statLabel}>총 경험치</div>
                        <div className={styles.statValue}>{xp} XP</div>
                    </div>
                </div>
            </div>

            <section className={styles.section}>
                <div className={styles.sectionHeader}>
                    <h2 className={styles.sectionTitle}>학습 바로가기</h2>
                </div>
                <div className={styles.actionGrid}>
                    <Link href="/map" className={styles.actionCard}>
                        <div className={styles.actionIcon}>
                            <Map size={32} />
                        </div>
                        <div className={styles.actionContent}>
                            <h3 className={styles.actionTitle}>스킬 트리 계속하기</h3>
                            <p className={styles.actionDesc}>현재 {unlockedLevels.length}단계 진행 중</p>
                        </div>
                        <ArrowRight className={styles.arrow} />
                    </Link>
                    <Link href="/league" className={styles.actionCard}>
                        <div className={styles.actionIcon} style={{ background: '#ECFDF5', color: '#059669' }}>
                            <Trophy size={32} />
                        </div>
                        <div className={styles.actionContent}>
                            <h3 className={styles.actionTitle}>리그 랭킹 확인</h3>
                            <p className={styles.actionDesc}>상위 5% 도전하기</p>
                        </div>
                        <ArrowRight className={styles.arrow} />
                    </Link>
                    <Link href="/study" className={styles.actionCard}>
                        <div className={styles.actionIcon} style={{ background: '#EFF6FF', color: '#2563EB' }}>
                            <BookOpen size={32} />
                        </div>
                        <div className={styles.actionContent}>
                            <h3 className={styles.actionTitle}>오늘의 학습 자료</h3>
                            <p className={styles.actionDesc}>새로운 아티클 3건</p>
                        </div>
                        <ArrowRight className={styles.arrow} />
                    </Link>
                </div>
            </section>
        </div>
    );
}
