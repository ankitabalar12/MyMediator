import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useTheme } from '../Componets/ThemeContext';

const NavidemoScreen = () => {
 
  const { theme, toggleTheme,themeStyles  } = useTheme();
    return (
      <View style={[styles.container, { backgroundColor: themeStyles[theme].backgroundColor }]}>
        <Text style={{ color: themeStyles[theme].textColor }}>Booking Screen</Text>
      
      </View>
    )
  }
 

export default NavidemoScreen

const styles = StyleSheet.create({
 
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },

  
})