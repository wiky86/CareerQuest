'use client';

import { useGame } from '@/context/GameContext';
import { Activity, Calendar, Award, Zap } from 'lucide-react';
import styles from './page.module.css';

export default function ActivityPage() {
    const { xp, streak } = useGame();

    // Mock data for heatmap (last 30 days)
    const heatmapData = Array.from({ length: 30 }, (_, i) => ({
        date: new Date(Date.now() - (29 - i) * 24 * 60 * 60 * 1000),
        value: Math.random() > 0.3 ? Math.floor(Math.random() * 5) : 0,
    }));

    // Mock data for skills
    const skills = [
        { name: 'NCS 의사소통', level: 75 },
        { name: '자료해석', level: 40 },
        { name: '문제해결', level: 60 },
        { name: '비즈니스 영어', level: 20 },
        { name: '면접 태도', level: 85 },
    ];

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1 className={styles.title}>내 활동 대시보드</h1>
                <p className={styles.subtitle}>나의 성장 기록을 한눈에 확인하세요.</p>
            </header>

            <div className={styles.mainGrid}>
                {/* Profile / Basic Stats */}
                <div className={styles.card}>
                    <h2 className={styles.cardTitle}><Activity size={20} /> 학습 요약</h2>
                    <div className={styles.summaryStats}>
                        <div className={styles.statItem}>
                            <span className={styles.statLabel}>총 학습 시간</span>
                            <span className={styles.statValue}>12시간 30분</span>
                        </div>
                        <div className={styles.statItem}>
                            <span className={styles.statLabel}>해결한 문제</span>
                            <span className={styles.statValue}>142개</span>
                        </div>
                        <div className={styles.statItem}>
                            <span className={styles.statLabel}>평균 정답률</span>
                            <span className={styles.statValue}>84%</span>
                        </div>
                    </div>
                </div>

                {/* Radar Chart Visual (Simplified with bars for MVP) */}
                <div className={styles.card}>
                    <h2 className={styles.cardTitle}><Zap size={20} /> 역량 분석</h2>
                    <div className={styles.skillList}>
                        {skills.map((skill) => (
                            <div key={skill.name} className={styles.skillItem}>
                                <div className={styles.skillHeader}>
                                    <span>{skill.name}</span>
                                    <span>{skill.level}%</span>
                                </div>
                                <div className={styles.skillBarBg}>
                                    <div
                                        className={styles.skillBarFill}
                                        style={{ width: `${skill.level}%`, background: skill.level > 70 ? 'var(--primary)' : skill.level > 40 ? '#F59E0B' : '#EF4444' }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Heatmap */}
                <div className={`${styles.card} ${styles.fullWidth}`}>
                    <h2 className={styles.cardTitle}><Calendar size={20} /> 학습 잔디 (Streak Heatmap)</h2>
                    <div className={styles.heatmapGrid}>
                        {heatmapData.map((day, i) => (
                            <div
                                key={i}
                                className={styles.heatmapCell}
                                data-level={day.value}
                                title={`${day.date.toLocaleDateString()}: ${day.value} 퀘스트 완료`}
                            />
                        ))}
                    </div>
                    <div className={styles.heatmapLegend}>
                        <span>Less</span>
                        <div className={styles.legendCell} data-level="0" />
                        <div className={styles.legendCell} data-level="1" />
                        <div className={styles.legendCell} data-level="2" />
                        <div className={styles.legendCell} data-level="3" />
                        <div className={styles.legendCell} data-level="4" />
                        <span>More</span>
                    </div>
                </div>

                {/* Badges */}
                <div className={`${styles.card} ${styles.fullWidth}`}>
                    <h2 className={styles.cardTitle}><Award size={20} /> 획득한 배지</h2>
                    <div className={styles.badgeGrid}>
                        <div className={styles.badgeItem}>
                            <div className={styles.badgeIcon}>🐣</div>
                            <span className={styles.badgeName}>첫 시작</span>
                        </div>
                        <div className={styles.badgeItem}>
                            <div className={styles.badgeIcon}>🔥</div>
                            <span className={styles.badgeName}>3일 연속</span>
                        </div>
                        <div className={styles.badgeItem} style={{ opacity: 0.5 }}>
                            <div className={styles.badgeIcon}>💯</div>
                            <span className={styles.badgeName}>만점왕</span>
                        </div>
                        <div className={styles.badgeItem} style={{ opacity: 0.5 }}>
                            <div className={styles.badgeIcon}>👑</div>
                            <span className={styles.badgeName}>리그 우승</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
