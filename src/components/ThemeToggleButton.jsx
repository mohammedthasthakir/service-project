import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../store/themeSlice';
import IconButton from '@mui/material/IconButton';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

const ThemeToggleButton = () => {
  const dispatch = useDispatch();
  const themeMode = useSelector((state) => state.theme.mode); // Get the current theme mode

  const handleToggle = () => {
    dispatch(toggleTheme()); // Dispatch action to toggle theme
  };

  return (
    <IconButton
      onClick={handleToggle}
      color="inherit"
      aria-label={`Switch to ${themeMode === 'light' ? 'dark' : 'light'} mode`}
    >
      {themeMode === 'light' ? <DarkModeIcon /> : <LightModeIcon />}
    </IconButton>
  );
};

export default ThemeToggleButton;
