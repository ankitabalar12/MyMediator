import React, { createContext, useState, useContext } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { icons } from '../Helper/icons';

// Images for light and dark modes
const sunImage = icons.sun;
const moonImage = icons.moon;

// Create a ThemeContext
const ThemeContext = createContext();

// Create a custom hook to use the theme
const useTheme = () => useContext(ThemeContext);

// App component
const Demo = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Function to toggle theme
  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  // Define theme styles and image
  const theme = {
    backgroundColor: isDarkMode ? '#121212' : '#ffffff',
    color: isDarkMode ? '#ffffff' : '#000000',
    imageSource: isDarkMode ? icons.moon : icons.contrast,
    imageStyle: isDarkMode ? styles.darkImage : styles.lightImage,
  };

  return (
    <ThemeContext.Provider value={theme}>
      <View style={[styles.container, { backgroundColor: theme.backgroundColor }]}>
        {/* <Text style={[styles.text, { color: theme.color }]}>Hello, Dark Mode!</Text>
        <TouchableOpacity onPress={toggleTheme} style={styles.button}>
          <Text style={styles.buttonText}>Toggle Theme</Text>
        </TouchableOpacity> */}
        <TouchableOpacity onPress={toggleTheme} style={styles.imageContainer}>
          <Image source={theme.imageSource} style={[styles.image,{tintColor: isDarkMode ? '#fff' : '#000'}]} />
        </TouchableOpacity>
      </View>
    </ThemeContext.Provider>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 24,
  },
  button: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#2196F3',
    borderRadius: 5,
  },
  buttonText: {
    color: '#ffffff',
  },
  imageContainer: {
    marginTop: 20,
    padding: 10,
    // backgroundColor: '#ffffff',
    borderRadius: 50,
  },
  image: {
    width: 50,
    height: 50,
    tintColor:'#000'
  },
  darkImage: {
    tintColor: '#ffffff', // White color for dark mode
  },
  lightImage: {
    tintColor: '#000000', // Black color for light mode
  },
});

export default Demo;
