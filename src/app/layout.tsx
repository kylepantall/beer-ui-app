import { ThemeProvider } from './components';
import './globals.css';

export const metadata = {
   title: 'Ale Yeah!',
   description: 'A website that celebrates all things ale-related.',
};

export default function RootLayout({ children }: { children: JSX.Element }) {
   return (
      <html lang="en">
         <body>
            <ThemeProvider>{children}</ThemeProvider>
         </body>
      </html>
   );
}
