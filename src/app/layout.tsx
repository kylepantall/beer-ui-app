import './globals.css';
import React from 'react';
import { Theme, ThemeProvider } from './utils/theme';

export const metadata = {
    title: 'Ale Yeah!',
    description: 'A website that celebrates all things ale-related.',
};

export default function RootLayout({ children}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <ThemeProvider theme={Theme}>
                <body>
                    {children}
                </body>
            </ThemeProvider>
        </html>
    );
}
