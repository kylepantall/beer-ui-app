import ThemeProvider from './components/theme-provider';
import './globals.css';

export const metadata = {
  title: 'Ale Yeah!',
  description: 'A website that celebrates all things ale-related.',
};

export default function RootLayout({ children }: { children: JSX.Element }) {
  return (
    <html lang="en">
      <ThemeProvider>
        <body>{children}</body>
      </ThemeProvider>
    </html>
  );
}
