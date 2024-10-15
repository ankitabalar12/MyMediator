import { StyleSheet, Text, View,Image, ImageBackground } from 'react-native'
import React, { useEffect, useState } from 'react'

import { icons } from '../../Helper/icons'
import { useNavigation } from '@react-navigation/native'
import { colors } from '../../Helper/colors'
import AsyncStorage from '@react-native-community/async-storage'
// import { styles } from './Styles'


const Splash = () => {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [timeLeft, setTimeLeft] = useState(3); 
    const navigation = useNavigation();
    useEffect(() => {
      async function fetchData() {
        setLoading(true);
        const result = await AsyncStorage.getItem('logindata');
        console.log('result----', result);
        const screenData = JSON.parse(result);
        console.log('screenData----', screenData);
        if (screenData) {
           navigation.navigate('DeshboardScreen');
        } else {
           navigation.navigate('LoginScreen');
        }
        setLoading(false);
      }
      const timer = setTimeout(() => {
        if (timeLeft > 0) {
            setTimeLeft(timeLeft - 1);
        } else {
            fetchData(); // After timer finishes, fetch data
        }
    }, 1000);

    // Clear timeout to avoid memory leaks
    return () => clearTimeout(timer);
    
    }, [navigation, timeLeft]);
  return (
    <View style={styles.cantainer}>
      <ImageBackground style={styles.backimg} source={icons.Rectangle}>
      <Image source={icons.propartylogoimages} style={styles.propartylogo} />
      </ImageBackground>
    </View>
  )
}

 const styles = StyleSheet.create({
  cantainer: {
      flex: 1,
      // backgroundColor:'#245501',
  },
  propartylogo: {
      height: 270,
      width: "80%",
      justifyContent: 'center',
      alignItems:"center",
       alignSelf: 'center',
      marginTop: "50%"
  },
  allhomeicon:{
      height:250, 
      width:490,
      position:'absolute',
      bottom:-20, alignSelf:"center"
  },
  backimg:{
    height:"100%"
  }
})

export default Splash

