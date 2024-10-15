// ThemeContext.js
import React, { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const themeStyles = {
    light: {
      backgroundColor: 'white',
      textColor: 'black',
    },
    dark: {
      backgroundColor: 'black',
      textColor: 'white',
    },
  };
  const themeStylestext = {
    light: {
      backgroundColor: 'white',
      textColor: 'red',
    },
    dark: {
      backgroundColor: 'black',
      textColor: 'yellow',
    },
  }
  const updateThemeForAllScreens = newTheme => {
    setTheme(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, themeStyles, updateThemeForAllScreens, themeStylestext }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
