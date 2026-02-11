import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
    title: 'Career Quest',
    description: 'Gamified Career Preparation Platform',
};

import { GameProvider } from '@/context/GameContext';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="ko">
            <body className={inter.className}>
                <GameProvider>
                    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
                        <Header />
                        <main style={{ flex: 1 }}>{children}</main>
                        <Footer />
                    </div>
                </GameProvider>
            </body>
        </html>
    );
}
