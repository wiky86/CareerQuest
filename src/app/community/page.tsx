'use client';

import { useState } from 'react';
import { MessageSquare, ThumbsUp, MessageCircle, PenSquare, Search } from 'lucide-react';
import styles from './page.module.css';

// Mock Data
const POSTS = [
    { id: 1, title: '2026 하반기 삼성전자 DS 공채 일정 떴습니다!', author: '취뽀맨', date: '방금 전', views: 120, likes: 45, comments: 12, tag: '채용속보' },
    { id: 2, title: 'NCS 의사소통 질문있습니다. (사진)', author: '합격가자', date: '30분 전', views: 56, likes: 2, comments: 4, tag: '질문' },
    { id: 3, title: '면접 스터디 같이 하실 분 구합니다 (강남역)', author: '꾸준히', date: '2시간 전', views: 89, likes: 5, comments: 8, tag: '스터디' },
    { id: 4, title: '현직자가 말하는 공정기술 직무 현실', author: '현직이', date: '어제', views: 1205, likes: 320, comments: 45, tag: '현직자Q&A' },
    { id: 5, title: '떨어질 때마다 멘탈 관리 어떻게 하시나요?', author: '유리멘탈', date: '어제', views: 340, likes: 56, comments: 23, tag: '자유' },
];

export default function CommunityPage() {
    const [filter, setFilter] = useState('전체');

    const filteredPosts = filter === '전체' ? POSTS : POSTS.filter(p => p.tag === filter);

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <div>
                    <h1 className={styles.title}>정보 공유</h1>
                    <p className={styles.subtitle}>함께 나누면 합격이 가까워집니다.</p>
                </div>
                <button className={styles.writeButton}>
                    <PenSquare size={20} /> 글쓰기
                </button>
            </header>

            <div className={styles.searchBar}>
                <Search size={20} className={styles.searchIcon} />
                <input type="text" placeholder="관심있는 키워드를 검색해보세요 (예: 면접, NCS)" className={styles.searchInput} />
            </div>

            <div className={styles.filterBar}>
                {['전체', '채용속보', '질문', '스터디', '현직자Q&A', '자유'].map(tag => (
                    <button
                        key={tag}
                        className={`${styles.filterTag} ${filter === tag ? styles.activeFilter : ''}`}
                        onClick={() => setFilter(tag)}
                    >
                        {tag}
                    </button>
                ))}
            </div>

            <div className={styles.postList}>
                {filteredPosts.map(post => (
                    <div key={post.id} className={styles.postItem}>
                        <div className={styles.postMain}>
                            <span className={styles.postTag}>{post.tag}</span>
                            <h3 className={styles.postTitle}>{post.title}</h3>
                            <div className={styles.postMeta}>
                                <span>{post.author}</span> • <span>{post.date}</span> • <span>조회 {post.views}</span>
                            </div>
                        </div>
                        <div className={styles.postStats}>
                            <div className={styles.statBox}>
                                <ThumbsUp size={16} /> {post.likes}
                            </div>
                            <div className={`${styles.statBox} ${styles.commentBox}`}>
                                <MessageCircle size={16} /> {post.comments}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
