import { useSelector } from 'react-redux';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { getTheme, extendTheme } from './themeUtils';
import customComponents from './customComponents';

const ThemeWrapper = ({ children }) => {
  const themeMode = useSelector((state) => state.theme.mode);
  const baseTheme = getTheme(themeMode);
  const theme = extendTheme(baseTheme, customComponents);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default ThemeWrapper;
