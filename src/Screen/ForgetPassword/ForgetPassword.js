import { Alert, Image, ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { styles } from './styles'
import { icons } from '../../Helper/icons'
import { string } from '../../Helper/string'
import CustomTextInput from '../../Componets/TextInput/CustomTextInput'
import ButtonComponets from '../../Componets/Button/ButtonComponets'
import { forgotPasswordAPI } from '../../../APICall'

const ForgetPassword = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const forgotpassword = async () => {
    const newErrors = {};

    // Basic email format validation
    if (!email) {
      newErrors.email = 'Please enter email';
    }

    // If validation fails, set errors and return
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setErrors({});
    setLoading(true);
    const data = { email: email };

    try {
      console.log('Request Payload (Forgot Password Data):', data);
      const res = await forgotPasswordAPI(global.url + 'forgotpassword', data);
      console.log('API Response:', res);
      if (res && res.success === true) {
        Alert.alert('Success', 'Password reset link has been sent to your email.');
        navigation.navigate('LoginScreen');
      } else {
        Alert.alert('Invalid', 'This email is not registeredk. Please check your email address.');

      }
    } catch (error) {
      console.error('Forgot Password process error:', error);
      Alert.alert('Error', 'An unexpected error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <ImageBackground
      source={icons.backgroundimg}
      style={[styles.backgroundImage]}

    >
      {/* <ScrollView> */}
      <Image source={icons.PasswordImg} style={styles.PasswordImg} />
      <View style={styles.viewstyle}>
        <Text style={styles.login}>{string.ForgetPassword}</Text>
        <Text style={styles.dontworry}>{string.dontworry}</Text>
        <CustomTextInput
          placeholder="Enter your Email"
          placeholderTextColor="#8391A1"
          value={email}

          onChangeText={(email) => setEmail(email)}
        />
        {errors.email && <Text style={styles.error}>{errors.email}</Text>}
        <ButtonComponets
          title={string.Save}
          onPress={forgotpassword}
          stylesbutton={styles.stylesbutton}

        />
      </View>
      <View style={styles.marbottom} />
      {/* </ScrollView> */}
    </ImageBackground>
  )
}

export default ForgetPassword

