'use client';

import { createTheme } from '@mui/material/styles';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';

export const Theme = createTheme({
    palette: {
        primary: {
            main: '#fcba03',
        },
    },
});

export const ThemeProvider = MuiThemeProvider;
