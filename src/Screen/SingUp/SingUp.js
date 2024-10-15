import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook from React Navigation
import { icons } from '../../Helper/icons';
import { string } from '../../Helper/string';
import CustomTextInput from '../../Componets/TextInput/CustomTextInput';
import CustomTextInputIcon from '../../Componets/TexInputIcon/CustomTextInputicon';
import ButtonComponets from '../../Componets/Button/ButtonComponets';
import { styles } from './Styles';
import { getconfigall, registration } from '../../../APICall';



const SingUp = () => {
  const navigation = useNavigation(); // Get navigation object
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [PhoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    getconfigData();
}, []);
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };


  


  const handleLogin = async () => {
    const newErrors = {};

    if (!name) {
      newErrors.name = 'Please enter name';
    }
    if (!email) {
      errors.email = 'Please enter email';
    } else if (!validateEmail(email)) {
      errors.email = 'Please enter a valid email';
    }
    if (!PhoneNumber.trim() || PhoneNumber.length !== 10 || isNaN(PhoneNumber)) {
      newErrors.PhoneNumber = 'Please enter a valid 10-digit phone number';
    }

    if (!password) {
      newErrors.password = 'Please enter password';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setErrors({});
    navigation.navigate('OtpScreen');

    const data = {
      email: email,
      mobile: PhoneNumber,
      password: password,
      name: name
    };
    try {
      const res = await registration(global.url + 'register', data);
      console.log('res---->', res)
      console.log('global.url -----', global.url)
      console.log('data--------', data)
      console.log('-------->>>>>>', data.name)
      console.log('-------->>>>>>', data.id)
      if (res && res.success === true) {
        console.log('Registration successful:', res);
        navigation.navigate('OtpScreen', { user_id: res.data[0].id });
        console.log('id-----', res.data[0].id);
      } else {
        if (res.data.mobile && res.data.mobile[0]) {
          Alert.alert('Registration Error', res.data.mobile[0]);
        } else if (res.data.email && res.data.email[0]) {
          Alert.alert('Registration Error', res.data.email[0]);
        } else {
          Alert.alert('Registration Error', res ? res.message : 'An unexpected error occurred.');
        }
      }
    } catch (error) {
      console.error('Registration process error:', error);
      Alert.alert('Error', 'An unexpected error occurred during registration.');
    } finally {
      setLoading(false);
    }
  };

  return (

    <ImageBackground
      source={icons.BluebstracDesign}
      style={styles.backgroundImage}
    >
      {/* <View style={styles.overlay} /> */}
      {/* <Text style={styles.welcomtext}>{string.welcom}</Text> */}
      {/* <ScrollView> */}
        <Image source={icons.singupicon} style={styles.propartylogo} />
        <View style={styles.viewstyle}>
          <Text style={styles.login}>{string.Signup}</Text>
          <CustomTextInput
            placeholder="Enter your name"
            placeholderTextColor="#8391A1"
            value={name}
            onChangeText={setName}
            styviewmar={styles.styviewmar}
          />
          {errors.name && <Text style={styles.error}>{errors.name}</Text>}
          {/* <CustomTextInput
            placeholder="Enter your email"
            placeholderTextColor="#8391A1"
            value={email}
            onChangeText={setEmail}
            styviewmar={styles.styviewmar}
          />
          {errors.email && <Text style={styles.error}>{errors.email}</Text>} */}
          <CustomTextInputIcon
            IconName={icons.india}
            IconName2={icons.down}
            title="+91"
            placeholder="Enter your phone number"
            placeholderTextColor="#8391A1"
            maxLength={10}
            value={PhoneNumber}
            keyboardType="number-pad"
            onChangeText={setPhoneNumber}
            styviewmartwo={styles.styviewmartwo}
          />
          {errors.PhoneNumber && <Text style={styles.error}>{errors.PhoneNumber}</Text>}
          <CustomTextInput
            placeholder="Enter the password"
            placeholderTextColor="#8391A1"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            styviewmar={styles.styviewmar}
          />
          {errors.password && <Text style={styles.error}>{errors.password}</Text>}

          <ButtonComponets
            title={string.Signup}
            onPress={handleLogin}
            stylesbutton={styles.stylesbutton}
          />
          <Text style={styles.textor}>{string.or}</Text>
          <View style={styles.flexroww}>
            <Text style={styles.textor2}>{string.already}</Text>
            <TouchableOpacity onPress={() => { navigation.navigate('LoginScreen') }}>
              <Text style={styles.textor3}>{string.loginrsc}</Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* <View style={styles.marbottom} /> */}
      {/* </ScrollView> */}
    </ImageBackground>

  );
};

export default SingUp;


