import './globals.css';
import DataProvider from './providers/data.provider';
import {ThemeProvider} from './providers/theme.provider';

export const metadata = {
    title: 'Ale Yeah!',
    description: 'A website that celebrates all things ale-related.',
};

export default function RootLayout({children}: {
    children: JSX.Element;
}) {
    return (
        <html lang="en">
            <ThemeProvider>
                <DataProvider>
                    <body>
                        {children}
                    </body>
                </DataProvider>
            </ThemeProvider>
        </html>
    );
}
