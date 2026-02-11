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
    </div>
  );
}
