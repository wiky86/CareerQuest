export interface Question {
    id: number;
    type: 'multiple-choice';
    question: string;
    options: string[];
    answer: number; // Index of correct answer
    explanation: string;
}

export interface LevelData {
    id: number;
    title: string;
    questions: Question[];
}

export const QUIZ_DATA: Record<string, LevelData> = {
    '1': {
        id: 1,
        title: 'NCS 기초: 의사소통능력',
        questions: [
            {
                id: 101,
                type: 'multiple-choice',
                question: "다음 중 '결재'와 '결제'의 쓰임이 올바른 문장은?",
                options: [
                    "이번 프로젝트 비용을 법인카드로 결재했다.",
                    "부장님께 휴가 신청서를 올리고 결제를 받았다.",
                    "밀린 핸드폰 요금을 결제해야 한다.",
                    "서류 전형 합격자 명단을 결제 바랍니다."
                ],
                answer: 2,
                explanation: "'결제(決濟)'는 대금을 주고받는 것을 의미하며, '결재(決裁)'는 안건을 허가하는 것을 의미합니다. 3번 '요금을 결제하다'가 올바른 표현입니다."
            },
            {
                id: 102,
                type: 'multiple-choice',
                question: "공문서 작성 원칙으로 가장 적절하지 않은 것은?",
                options: [
                    "숫자는 아라비아 숫자로 쓴다.",
                    "날짜는 연, 월, 일의 글자를 생략하고 온점(.)을 찍어 표시한다.",
                    "시간은 24시각제로 표시한다.",
                    "금액을 표기할 때는 일금 일십만원정(￦100,000)과 같이 쓴다."
                ],
                answer: 3,
                explanation: "금액을 표기할 때는 '금113,560원(금일십일만삼천오백육십원)'과 같이 아라비아 숫자로 쓰되, 숫자 다음에 괄호를 하고 한글로 기재하는 것이 원칙입니다. (행정효율과 협업 촉진에 관한 규정)"
            },
            {
                id: 103,
                type: 'multiple-choice',
                question: "다음 단어들의 공통적인 관계는? [ 수요 - 공급,  매수 - 매도 ]",
                options: [
                    "유의어 관계",
                    "반의어 관계",
                    "상하 관계",
                    "인과 관계"
                ],
                answer: 1,
                explanation: "주어진 단어 쌍들은 서로 반대되는 뜻을 가진 '반의어 관계'입니다."
            }
        ]
    },
    '2': {
        id: 2,
        title: '직무 상식: 경영/경제',
        questions: [
            {
                id: 201,
                type: 'multiple-choice',
                question: "기업이 일정 기간 동안 벌어들인 순이익을 발행 주식 수로 나눈 값은?",
                options: ["PER", "PBR", "EPS", "ROE"],
                answer: 2,
                explanation: "EPS(Earning Per Share)는 주당순이익을 의미합니다."
            }
        ]
    }
};
