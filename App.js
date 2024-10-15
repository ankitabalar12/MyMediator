// App.js

import React from 'react';

import MainNavigation from './src/Componets/Navigation/MainNavigation';
import { ThemeProvider } from './src/Componets/ThemeContext';


export default function App() {
  return (
    <ThemeProvider>
      <MainNavigation />
    </ThemeProvider>
  );
}
