'use client';

import Link from 'next/link';
import { BookOpen, Video, FileText, PlayCircle, Lock } from 'lucide-react';
import styles from './page.module.css';

// Mock Data
interface StudyItem {
    id: number;
    title: string;
    type: 'video' | 'doc';
    duration?: string;
    pages?: number;
    completed: boolean;
    locked?: boolean;
}

interface StudySection {
    category: string;
    items: StudyItem[];
}

const STUDY_MATERIALS: StudySection[] = [
    {
        category: 'NCS 기초',
        items: [
            { id: 1, title: '의사소통능력 핵심 요약', type: 'video', duration: '15:00', completed: true },
            { id: 2, title: '수리능력 - 자료해석 공식 모음', type: 'doc', pages: 5, completed: false },
            { id: 3, title: '문제해결능력 실전 풀이', type: 'video', duration: '22:30', completed: false },
        ]
    },
    {
        category: '면접 대비',
        items: [
            { id: 4, title: '1분 자기소개 스크립트 가이드', type: 'doc', pages: 3, completed: false },
            { id: 5, title: '직무 면접 빈출 질문 50선', type: 'doc', pages: 10, completed: false },
            { id: 6, title: '임원 면접 시뮬레이션', type: 'video', duration: '30:00', completed: false, locked: true },
        ]
    },
    {
        category: '기업 분석',
        items: [
            { id: 7, title: '2026 삼성전자 DS 사업부 분석', type: 'doc', pages: 15, completed: false },
            { id: 8, title: 'SK하이닉스 반도체 시장 동향', type: 'doc', pages: 12, completed: false, locked: true },
        ]
    }
];

export default function StudyPage() {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1 className={styles.title}>학습 공간</h1>
                <p className={styles.subtitle}>합격에 필요한 모든 이론과 자료를 만나보세요.</p>
            </header>

            <div className={styles.contentGrid}>
                {STUDY_MATERIALS.map((section, index) => (
                    <section key={index} className={styles.section}>
                        <h2 className={styles.sectionTitle}>{section.category}</h2>
                        <div className={styles.cardList}>
                            {section.items.map((item) => (
                                <div key={item.id} className={`${styles.card} ${item.locked ? styles.lockedCard : ''}`}>
                                    <div className={styles.iconWrapper}>
                                        {item.locked ? <Lock size={24} /> :
                                            item.type === 'video' ? <PlayCircle size={24} /> : <FileText size={24} />}
                                    </div>
                                    <div className={styles.cardContent}>
                                        <h3 className={styles.cardTitle}>{item.title}</h3>
                                        <div className={styles.cardMeta}>
                                            {item.type === 'video' ? `동영상 • ${item.duration}` : `문서 • ${item.pages}p`}
                                            {item.completed && <span className={styles.completedBadge}>완료</span>}
                                        </div>
                                    </div>
                                    {!item.locked && (
                                        <button className={styles.actionButton}>
                                            학습하기
                                        </button>
                                    )}
                                </div>
                            ))}
                        </div>
                    </section>
                ))}
            </div>

            <div className={styles.banner}>
                <div className={styles.bannerContent}>
                    <h3>프리미엄 자료를 원하시나요?</h3>
                    <p>멤버십 가입 시 기업별 심층 분석 리포트가 무제한!</p>
                </div>
                <button className={styles.premiumButton}>멤버십 알아보기</button>
            </div>
        </div>
    );
}
