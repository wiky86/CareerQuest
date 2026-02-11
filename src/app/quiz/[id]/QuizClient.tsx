'use client';

import { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import Link from 'next/link';
import { useGame } from '@/context/GameContext';
import { QUIZ_DATA } from '@/lib/data';
import { X, Check, ArrowRight, RefreshCcw } from 'lucide-react';
import styles from './page.module.css';

export default function QuizPage() {
    const params = useParams();
    const router = useRouter();
    const { id } = params as { id: string };
    const levelData = QUIZ_DATA[id];

    const { loseHeart, addXp, unlockLevel } = useGame();

    const [currentQIndex, setCurrentQIndex] = useState(0);
    const [selectedOption, setSelectedOption] = useState<number | null>(null);
    const [isAnswered, setIsAnswered] = useState(false);
    const [isCorrect, setIsCorrect] = useState(false);
    const [score, setScore] = useState(0);
    const [isComplete, setIsComplete] = useState(false);

    // Handle case where ID is invalid
    if (!levelData) {
        return <div className={styles.container}>Level not found</div>;
    }

    const currentQuestion = levelData.questions[currentQIndex];
    const progress = ((currentQIndex) / levelData.questions.length) * 100;

    const handleSelect = (index: number) => {
        if (isAnswered) return;
        setSelectedOption(index);
    };

    const handleCheck = () => {
        if (selectedOption === null) return;

        const correct = selectedOption === currentQuestion.answer;
        setIsAnswered(true);
        setIsCorrect(correct);

        if (correct) {
            setScore(prev => prev + 1);
            // Play sound?
        } else {
            loseHeart();
            // Play sound?
        }
    };

    const handleContinue = () => {
        if (currentQIndex < levelData.questions.length - 1) {
            setCurrentQIndex(prev => prev + 1);
            setSelectedOption(null);
            setIsAnswered(false);
            setIsCorrect(false);
        } else {
            finishQuiz();
        }
    };

    const finishQuiz = () => {
        setIsComplete(true);
        // Add XP based on score
        const earnedXp = score * 10 + (score === levelData.questions.length ? 50 : 0); // Bonus for perfect
        addXp(earnedXp);

        // Unlock next level if score is sufficient (e.g., > 50%)
        if (score >= Math.ceil(levelData.questions.length / 2)) {
            unlockLevel(levelData.id + 1);
        }
    };

    if (isComplete) {
        return (
            <div className={styles.container}>
                <div className={styles.resultContainer}>
                    <h1 className={styles.resultTitle}>Quest Complete!</h1>
                    <div className={styles.resultStats}>
                        <div className={styles.statItem}>
                            <span className={styles.statValue}>{score} / {levelData.questions.length}</span>
                            <span className={styles.statLabel}>Correct Answers</span>
                        </div>
                        <div className={styles.statItem}>
                            <span className={styles.statValue}>+{score * 10}</span>
                            <span className={styles.statLabel}>XP Earned</span>
                        </div>
                    </div>

                    <Link href="/map" className="btn btn-primary">
                        Back to Map <ArrowRight size={20} style={{ marginLeft: '8px' }} />
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <Link href="/map" className={styles.closeButton}>
                    <X size={24} />
                </Link>
                <div className={styles.progressBar}>
                    <div className={styles.progressFill} style={{ width: `${progress}%` }} />
                </div>
            </div>

            <div className={styles.questionContainer}>
                <h2 className={styles.question}>{currentQuestion.question}</h2>

                <div className={styles.options}>
                    {currentQuestion.options.map((option, index) => {
                        let optionClass = styles.option;
                        if (selectedOption === index) {
                            optionClass += ` ${styles.optionSelected}`;
                        }
                        if (isAnswered) {
                            if (index === currentQuestion.answer) {
                                optionClass += ` ${styles.optionCorrect}`;
                            } else if (selectedOption === index && !isCorrect) {
                                optionClass += ` ${styles.optionWrong}`;
                            }
                        }

                        return (
                            <button
                                key={index}
                                className={optionClass}
                                onClick={() => handleSelect(index)}
                                disabled={isAnswered}
                            >
                                {option}
                            </button>
                        );
                    })}
                </div>
            </div>

            <div className={styles.footer}>
                {!isAnswered ? (
                    <button
                        className={`${styles.checkButton} btn`}
                        onClick={handleCheck}
                        disabled={selectedOption === null}
                    >
                        정답 확인
                    </button>
                ) : (
                    <div className={`${styles.feedback} ${isCorrect ? styles.feedbackCorrect : styles.feedbackWrong}`}>
                        <div className={styles.feedbackTitle}>
                            {isCorrect ? <><Check size={24} /> 정답입니다!</> : <><X size={24} /> 오답입니다.</>}
                        </div>
                        {!isCorrect && <p className={styles.feedbackText}>{currentQuestion.explanation}</p>}

                        <button
                            className={`${styles.checkButton} ${isCorrect ? '' : styles.checkButtonWrong} btn`}
                            onClick={handleContinue}
                            style={{ marginTop: '1rem' }}
                        >
                            계속하기
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}

// Static params for export

