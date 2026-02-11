import { QUIZ_DATA } from '@/lib/data';
import QuizClient from './QuizClient';

export async function generateStaticParams() {
    return Object.keys(QUIZ_DATA).map((id) => ({
        id: id,
    }));
}

export default function QuizPage() {
    return <QuizClient />;
}
