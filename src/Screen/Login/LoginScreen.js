import React, { useEffect, useRef, useState } from 'react';
import { StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity, ScrollView, BackHandler, ToastAndroid, Alert, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook from React Navigation
import { icons } from '../../Helper/icons';
import { string } from '../../Helper/string';
import CustomTextInput from '../../Componets/TextInput/CustomTextInput';
import CustomTextInputIcon from '../../Componets/TexInputIcon/CustomTextInputicon';
import ButtonComponets from '../../Componets/Button/ButtonComponets';
import { styles } from './styles';
import { login, loginuser } from '../../../APICall';
import AsyncStorage from '@react-native-community/async-storage';

const LoginScreen = () => {
  const navigation = useNavigation(); // Get navigation object
  const [name, setName] = useState('');
  const [PhoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [backPressed, setBackPressed] = useState(0);
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const webviewRef = useRef(null);
  useEffect(() => {
    let update = true;

    const backAction = () => {
      if (update) {
        if (backPressed > 0) {
          BackHandler.exitApp();
        } else {
          if (webviewRef.current) {
            webviewRef.current.goBack();
            console.log('-------------', webviewRef.current)
          }
          setBackPressed(backPressed + 1);
          ToastAndroid.show("Press back again to exit", ToastAndroid.SHORT);
          setTimeout(() => setBackPressed(0), 1000);
        }
        return true;
      }
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => {
      backHandler.remove();
      update = false;
    };
  }, [backPressed]);
  
  const logindata = async () => {
    const newErrors = {};
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
 if (PhoneNumber && password) {
      setLoading(true); 
      if (!global.token) {
        console.error('Token is not available.');
        return;
       }
      const data = {
        email: PhoneNumber,
        password: password,
        device_id:global.tokenId.token
      };
      console.log('data login ----------------------', data)
      try {
         console.log('Request Payload (Login Data):', data);
        const res = await loginuser(global.url + 'login', data);
        console.log('API Response:', res);
        if (res && res.success === true) {
          navigation.navigate('DeshboardScreen');
        } else {
          Alert.alert('Invalid Login', 'Please check your mobile number and password.');
        }
      } catch (error) {
        console.error('Login process error:', error);
        Alert.alert('Error', 'An unexpected error occurred. Please try again.');
      } finally {
        setLoading(false);
      }
    } else {
      Alert.alert('Validation Error', 'Please fill in all required fields.');
    }
  };

  const handleButtonClick = () => {
    logindata();
  };
  return (
    <View style={styles.container}>
      <ImageBackground
        source={icons.BluebstracDesign}
        style={styles.backgroundImage}
      >
        {/* <ScrollView> */}
        {/* <View style={styles.overlay} /> */}
        {/* <Image source={icons.propartylogo} style={styles.propartylogo} /> */}
        <Text style={styles.welcomtext}>{string.welcom}</Text>
        <Image source={icons.loginig} style={styles.loginig} />
        <View style={styles.viewstyle}>
          <Text style={styles.login}>{string.login}</Text>
          {/* <CustomTextInput
          placeholder="Enter your name"
          placeholderTextColor="#8391A1"
          value={name}
          onChangeText={(city) => setName(city)}
        />
        {errors.name && <Text style={styles.error}>{errors.name}</Text>} */}
          <CustomTextInputIcon
            IconName={icons.india}
            IconName2={icons.down}
            title="+91"
            placeholder="Enter your phone number"
            placeholderTextColor="#8391A1"
            maxLength={10}
            value={PhoneNumber}
            keyboardType="number-pad"
            // onChangeText={setPhoneNumber}
            onChangeText={(PhoneNumber) => setPhoneNumber(PhoneNumber)}
          />
          {errors.PhoneNumber && <Text style={styles.error}>{errors.PhoneNumber}</Text>}
          <CustomTextInput
            placeholder="Enter the password"
            placeholderTextColor="#8391A1"
            value={password}

            onChangeText={(password) => setPassword(password)}
            secureTextEntry
          />

          {errors.password && <Text style={styles.error}>{errors.password}</Text>}
          <TouchableOpacity onPress={() => { navigation.navigate('ForgetPassword') }}>
            <Text style={styles.forgrtpass}>{string.Forget}</Text>
          </TouchableOpacity>
          {loading && <ActivityIndicator size="large" color="#02487C" />}
          <ButtonComponets
            title={string.login}
            onPress={() => handleButtonClick()}

            stylesbutton={styles.stylesbutton}

          />
          <Text style={styles.textor}>{string.or}</Text>
          <View style={styles.flexroww}>
            <Text style={styles.textor2}>{string.Didn}</Text>
            <TouchableOpacity onPress={() => { navigation.navigate('SingUp') }}>
              <Text style={styles.textor3}>{string.Signup}</Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* <View style={styles.marbottom} /> */}
        {/* </ScrollView> */}
      </ImageBackground>
    </View>
  );
};

export default LoginScreen;


