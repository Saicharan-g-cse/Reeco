import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';

export const palette = {
    primary: {
        main: '#0F9D58',
    },
    secondary: {
        main: '#4285F4',
    },
};

const theme = createTheme({
    palette,
});

export default function ReccoTheme({ children }) {
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
