'use client';

import Link from 'next/link';
import { Target, TrendingUp, Users, Brain, Trophy } from 'lucide-react';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.main}>
      <section className={styles.hero}>
        <h1 className={styles.title}>
          막막한 취업 준비,<br />
          하루 10분 퀘스트로<br />
          합격 레벨업
        </h1>
        <p className={styles.subtitle}>
          게이미피케이션으로 즐겁게, AI로 똑똑하게.<br />
          커리어 퀘스트와 함께 당신의 커리어 여정을 시작하세요.
        </p>
        <Link href="/map" className={styles.ctaButton}>
          퀘스트 시작하기 <Trophy size={20} />
        </Link>

        {/* CSS-only Dashboard Visual */}
        <div className={styles.heroVisual}>
          <div className={styles.mockWindow}>
            <div className={styles.windowHeader}>
              <div className={styles.windowDot} />
              <div className={styles.windowDot} />
              <div className={styles.windowDot} />
            </div>
            <div className={styles.windowContent}>
              <div className={styles.mockSidebar}>
                <div style={{ padding: '1rem', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <div className={styles.mockBar} style={{ width: '60%' }} />
                  <div className={styles.mockBar} style={{ width: '80%' }} />
                  <div className={styles.mockBar} style={{ width: '50%' }} />
                </div>
              </div>
              <div className={styles.mockMain}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <div className={styles.mockBar} style={{ width: '30%', height: '40px' }} />
                  <div className={styles.mockBar} style={{ width: '20%', height: '40px', background: 'var(--primary-light)' }} />
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div className={styles.mockCard} />
                  <div className={styles.mockCard} />
                  <div className={styles.mockCard} />
                  <div className={styles.mockCard} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className={styles.statsSection}>
        <div className={styles.statItem}>
          <div className={styles.statNumber}>10,000+</div>
          <div className={styles.statLabel}>취업 준비생</div>
        </div>
        <div className={styles.statItem}>
          <div className={styles.statNumber}>500,000+</div>
          <div className={styles.statLabel}>퀘스트 달성</div>
        </div>
        <div className={styles.statItem}>
          <div className={styles.statNumber}>98%</div>
          <div className={styles.statLabel}>자소서 면접 합격률</div>
        </div>
      </section>

      <section className={styles.features}>
        <div className={styles.featureCard}>
          <div className={styles.iconWrapper}>
            <TrendingUp size={24} />
          </div>
          <h3 className={styles.featureTitle}>스킬 트리 로드맵</h3>
          <p className={styles.featureDesc}>
            직무 적성부터 면접까지, 합격에 필요한 모든 역량을 단계별로 정복하세요.
          </p>
        </div>

        <div className={styles.featureCard}>
          <div className={styles.iconWrapper}>
            <Target size={24} />
          </div>
          <h3 className={styles.featureTitle}>스트릭 & 보상</h3>
          <p className={styles.featureDesc}>
            매일 연속 학습으로 불꽃을 유지하고 하트를 모아보세요.
          </p>
        </div>

        <div className={styles.featureCard}>
          <div className={styles.iconWrapper}>
            <Brain size={24} />
          </div>
          <h3 className={styles.featureTitle}>AI 맞춤 코칭</h3>
          <p className={styles.featureDesc}>
            AI가 분석하는 취약점과 면접 피드백으로 더욱 완벽하게 대비하세요.
          </p>
        </div>
      </section>

      {/* Testimonials */}
      <section className={styles.testimonialsSection}>
        <h2 className={styles.sectionTitle}>합격자들의 리얼 후기</h2>
        <div className={styles.testimonialGrid}>
          <div className={styles.testimonialCard}>
            <div className={styles.userProfile}>
              <div className={styles.userAvatar}>S</div>
              <div className={styles.userInfo}>
                <span className={styles.userName}>김서연</span>
                <span className={styles.userRole}>삼성전자 합격</span>
              </div>
            </div>
            <p className={styles.quote}>
              "막막했던 NCS 준비가 게임처럼 느껴져서 매일 하게 됐어요. 결국 합격했습니다!"
            </p>
          </div>
          <div className={styles.testimonialCard}>
            <div className={styles.userProfile}>
              <div className={styles.userAvatar} style={{ color: 'var(--success)' }}>J</div>
              <div className={styles.userInfo}>
                <span className={styles.userName}>이종훈</span>
                <span className={styles.userRole}>한국전력기술 합격</span>
              </div>
            </div>
            <p className={styles.quote}>
              "AI 면접 코칭이 정말 도움이 많이 됐습니다. 예상 질문 적중률이 소름돋네요."
            </p>
          </div>
          <div className={styles.testimonialCard}>
            <div className={styles.userProfile}>
              <div className={styles.userAvatar} style={{ color: 'var(--warning)' }}>M</div>
              <div className={styles.userInfo}>
                <span className={styles.userName}>박민지</span>
                <span className={styles.userRole}>카카오 합격</span>
              </div>
            </div>
            <p className={styles.quote}>
              "스트릭 깨지기 싫어서 들어오다 보니 어느새 역량이 올라가 있더라고요. 강력 추천!"
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
