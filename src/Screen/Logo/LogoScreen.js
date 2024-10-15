import { StyleSheet, Text, View,Image } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native';

import { icons } from '../../Helper/icons';
import LinearGradient from 'react-native-linear-gradient';
import { styles } from './styles';

const LogoScreen = () => {
    const navigation = useNavigation();
    useEffect(() => {
        const timeout = setTimeout(() => {
         navigation.navigate('LoginScreen');
        },2000);
        return () => clearTimeout(timeout);
    }, [navigation]);
  return (
    <LinearGradient
    colors={['#000000', '#110218', '#22042f', '#320547',
        '#43075f', '#4a0869',  '#540977', '#650b8e',
        '#750ca6', ]}
    start={{ x: 0.10, y: 0.20 }}
    end={{ x: 6, y: 2 }}
    style={styles.containerre}
>
<Image source={icons.Primees} style={styles.propartylogo} />
</LinearGradient>
  )
}

export default LogoScreen

