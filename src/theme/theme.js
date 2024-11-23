import { createTheme } from '@mui/material/styles';
import { colors, typography } from './themeConfig';

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: colors.primary },
    secondary: { main: colors.secondary },
    background: {
      default: colors.backgroundLight,
      paper: '#f4f4f4',
    },
    text: {
      primary: colors.textPrimaryLight,
      secondary: colors.textSecondaryLight,
    },
    success: { main: colors.success },
    warning: { main: colors.warning },
    error: { main: colors.error },
  },
  typography: {
    ...typography,
  },
});

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: colors.primary },
    secondary: { main: colors.secondary },
    background: {
      default: colors.backgroundDark,
      paper: '#1c1c1c',
    },
    text: {
      primary: colors.textPrimaryDark,
      secondary: colors.textSecondaryDark,
    },
    success: { main: colors.success },
    warning: { main: colors.warning },
    error: { main: colors.error },
  },
  typography: {
    ...typography,
  },
});

export { lightTheme, darkTheme };
