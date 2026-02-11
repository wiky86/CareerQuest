'use client';

import { useState } from 'react';
import { Trophy, Medal, Briefcase, Building2 } from 'lucide-react';
import styles from './page.module.css';

// Mock data
const JOB_LEAGUE_DATA = [
    { rank: 1, name: '취뽀하자', score: 2450, streak: 15, tier: 'Diamond' },
    { rank: 2, name: '삼성가자', score: 2320, streak: 8, tier: 'Diamond' },
    { rank: 3, name: '나야나', score: 2100, streak: 21, tier: 'Platinum' },
    { rank: 4, name: '코딩왕', score: 1950, streak: 5, tier: 'Platinum' },
    { rank: 5, name: '서지수', score: 1250, streak: 3, tier: 'Gold', isMe: true }, // User
];

const COMPANY_LEAGUE_DATA = [
    { rank: 1, name: '반도체마스터', score: 3100, streak: 45, tier: 'Challenger' },
    { rank: 2, name: 'DS합격', score: 2890, streak: 12, tier: 'Diamond' },
    { rank: 3, name: '하이닉스', score: 2750, streak: 30, tier: 'Diamond' },
    { rank: 4, name: '서지수', score: 1800, streak: 10, tier: 'Platinum', isMe: true }, // User
    { rank: 5, name: '공정설계', score: 1600, streak: 2, tier: 'Gold' },
];

export default function LeaguePage() {
    const [activeTab, setActiveTab] = useState<'job' | 'company'>('job');

    const data = activeTab === 'job' ? JOB_LEAGUE_DATA : COMPANY_LEAGUE_DATA;

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1 className={styles.title}>리그 랭킹</h1>
                <p className={styles.subtitle}>경쟁자들과 실력을 겨루고 상위 리그로 승급하세요!</p>
            </header>

            {/* League Tabs */}
            <div className={styles.tabs}>
                <button
                    className={`${styles.tab} ${activeTab === 'job' ? styles.activeTab : ''}`}
                    onClick={() => setActiveTab('job')}
                >
                    <Briefcase size={20} /> 희망 직무 (SW개발)
                </button>
                <button
                    className={`${styles.tab} ${activeTab === 'company' ? styles.activeTab : ''}`}
                    onClick={() => setActiveTab('company')}
                >
                    <Building2 size={20} /> 희망 기업 (삼성전자)
                </button>
            </div>

            {/* Leaderboard */}
            <div className={styles.leaderboard}>
                <div className={styles.tableHeader}>
                    <span className={styles.colRank}>순위</span>
                    <span className={styles.colName}>유저</span>
                    <span className={styles.colTier}>티어</span>
                    <span className={styles.colStreak}>스트릭</span>
                    <span className={styles.colScore}>점수</span>
                </div>

                {data.map((user) => (
                    <div key={user.rank} className={`${styles.row} ${user.isMe ? styles.myRow : ''}`}>
                        <div className={styles.colRank}>
                            {user.rank <= 3 ? <Medal size={24} className={styles[`medal${user.rank}`]} /> : user.rank}
                        </div>
                        <div className={styles.colName}>
                            <div className={styles.avatar}>{user.name[0]}</div>
                            {user.name} {user.isMe && <span className={styles.meBadge}>나</span>}
                        </div>
                        <div className={styles.colTier}>
                            <span className={`${styles.tierBadge} ${styles[user.tier.toLowerCase()]}`}>{user.tier}</span>
                        </div>
                        <div className={styles.colStreak}>
                            🔥 {user.streak}일
                        </div>
                        <div className={styles.colScore}>
                            {user.score.toLocaleString()} XP
                        </div>
                    </div>
                ))}
            </div>

            <div className={styles.leagueInfo}>
                <Trophy size={48} className={styles.trophyIcon} />
                <div>
                    <h3>주간 리그 종료까지 3일 남았습니다</h3>
                    <p>상위 3명은 다음 리그로 승급합니다!</p>
                </div>
            </div>
        </div>
    );
}
