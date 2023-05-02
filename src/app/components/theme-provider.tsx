'use client';

import { MantineProvider } from '@mantine/core';

export function ThemeProvider({ children }: { children: JSX.Element }): JSX.Element {
   return (
      <MantineProvider
         withCSSVariables
         withGlobalStyles
         withNormalizeCSS
         theme={{
            colorScheme: 'dark',
            colors: {
               brand: [
                  '#fff6dc',
                  '#fce4b1',
                  '#f8d285',
                  '#f4c156',
                  '#d7950e',
                  '#f1af28',
                  '#a77407',
                  '#785303',
                  '#493200',
                  '#1c1000',
               ],
            },
            primaryColor: 'brand',
            defaultGradient: {
               from: '#f1b12e',
               to: '#c65931',
            },
         }}>
         {children}
      </MantineProvider>
   );
}
