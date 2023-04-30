'use client';

import { MantineProvider, MantineThemeOverride } from '@mantine/core';

export const Theme: MantineThemeOverride = {
    colorScheme: 'dark',
    primaryColor: 'yellow',
};

export const ThemeProvider = ({children}: {children: JSX.Element}): JSX.Element => (
    <MantineProvider withNormalizeCSS withGlobalStyles theme={Theme}>
        {children}
    </MantineProvider>
);
