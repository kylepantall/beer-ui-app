'use client';

import { MantineProvider } from '@mantine/core';

export default function ThemeProvider({ children }: { children: JSX.Element }): JSX.Element {
  return (
    <MantineProvider
      withCSSVariables
      withGlobalStyles
      withNormalizeCSS
      theme={{
        colorScheme: 'dark',
        primaryColor: 'yellow',
      }}>
      {children}
    </MantineProvider>
  );
}
