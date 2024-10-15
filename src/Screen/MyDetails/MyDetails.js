import { Alert, Image, PermissionsAndroid, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { styles } from './styles'
import { string } from '../../Helper/string'
import { icons } from '../../Helper/icons'
import ButtonComponets from '../../Componets/Button/ButtonComponets'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker'
import HeaderUserName from '../../Componets/HeaderUserName/HeaderUserName'
import SearchComponest from '../../Componets/SearchComponets/SearchComponest'
import AsyncStorage from '@react-native-community/async-storage'
import { updateUserProfileData, uploadimagedata } from '../../../APICall'


const MyDetails = ({ navigation }) => {
  const [name, setName] = useState('');
  const [PhoneNumber, setPhoneNumber] = useState('');
  const [Address, setAddress] = useState('');
  const [email_id, setEmail_id] = useState('');
  const [errors, setErrors] = useState({});
  const [selectedImage, setSelectedImage] = useState([]);
  const [imageUri, setImageUri] = useState();
  const [loading, setLoading] = useState(false);
  const [imageUpdated, setImageUpdated] = useState()
  const [id, setID] = useState('');
  useEffect(() => {
    const loginallData = async () => {
      const userdata = await AsyncStorage.getItem('logindata');
      const finaluserdata = JSON.parse(userdata);
      setName(finaluserdata.name);
      setPhoneNumber(finaluserdata.mobile);
      setEmail_id(finaluserdata.email);
      setID(finaluserdata.id);
    }
    loginallData();
    updateProfileData();
  }, [])

  const handleChangeProfile = () => {
    Alert.alert(
      'Confirmation',
      'Are you sure you want to change your profile picture?',
      [
        {
          text: 'Cancel',
          onPress: () => { },
          style: 'cancel',
        },
        {
          text: 'Confirm',
          onPress: () => selectImage(),
        },
      ]
    );
  };

  const selectImage = () => {
    Alert.alert('Alert', 'Choose an option', [
      {
        text: 'Back',
        onPress: () => { },
      },
      {
        text: 'Camera',
        onPress: () => openCamera(),
      },
      {
        text: 'Library',
        onPress: () => openLibrary(),
      },
    ]);
  };
  const openLibrary = () => {
    let options = {
      mediaType: 'photo',
      includeBase64: true,
      base64: true,
      maxHeight: 200,
      maxWidth: 200,
    };
    launchImageLibrary(options, async (res) => {
      console.log('res', res);
      if (res) {
        const includeBase64 = res.assets[0].base64;
        const data = {
          base64: 'data:image/jpeg;base64,' + includeBase64,
        };
        const userpic = await uploadimagedata(global.url + 'uploadimage', data);
        if (userpic.data) {
          setImageUri(`https://www.demo603.amrithaa.com/mymediator/public/` + userpic.data);
          setSelectedImage(userpic.data);
          await AsyncStorage.setItem('profile_image', `https://www.demo603.amrithaa.com/mymediator/public/` + userpic.data);
        }

      }
    });
  };
  const openCamera = async () => {
    const hasPermission = await requestCameraPermission();
    if (!hasPermission) {
      Alert.alert("Camera Permission", "Permission to access camera was denied.");
      return;
    }

    try {
      let options = {
        mediaType: 'photo',
        includeBase64: true,
      };

      launchCamera(options, async (response) => {
        if (response.didCancel) {
          console.log('User cancelled image picker');
          return;
        } else if (response.errorCode) {
          console.error('Image picker error:', response.errorMessage);
          Alert.alert('Error', 'Failed to launch camera.');
          return;
        } else if (response.assets && response.assets.length > 0) {
          const base64Image = response.assets[0].base64;
          const imageData = {
            base64: 'data:image/jpeg;base64,' + base64Image,
          };

          const userpic = await uploadimagedata(global.url + 'uploadimage', imageData);

          if (userpic && userpic.data) {
            const imageUrl = `https://www.demo603.amrithaa.com/mymediator/public/${userpic.data}`;
            console.log('Uploaded image URL:', imageUrl);
            setImageUri(imageUrl);
            setImageUpdated(userpic.data);
            await AsyncStorage.setItem('profile_image', imageUrl);
          } else {
            console.warn('Image upload failed.');
          }
        }
      });
    } catch (error) {
      console.error('Camera operation failed:', error);
      Alert.alert('Error', 'Something went wrong while accessing the camera.');
    }
  };

  const requestCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: "Camera Permission",
          message: "App needs access to your camera to take photos.",
          buttonNeutral: "Ask Me Later",
          buttonNegative: "Cancel",
          buttonPositive: "OK",
        }
      );

      return granted === PermissionsAndroid.RESULTS.GRANTED;
    } catch (err) {
      console.warn('Permission request error:', err);
      return false;
    }
  };
  const updateData = async () => {
    try {
      setLoading(true);
      const userData = await getUserData();
      console.log('userData----', userData);
      const storedProfileImage = await AsyncStorage.getItem('profile_image');
      let imageUri = null;
      if (storedProfileImage) {
        imageUri = storedProfileImage;
      } else {
        console.log('No profile image found.');
      }
      const data = {
        user_id: id,
        name: name,
        email: email_id,
        address: Address,
        mobile: PhoneNumber,
        profile_image: imageUri,
      };
      console.log('email', email_id)
      const res = await updateUserProfileData(global.url + 'updateuserprofile', data);
      const result = await AsyncStorage.getItem('logindata');
      const finalUserData = JSON.parse(result);

      const newUpdatedUserInfo = {
        ...finalUserData,
        "name": name,
        "email": email_id,
        "mobile": PhoneNumber,
        "address": Address,
        "profile_image": imageUri,
      };
      AsyncStorage.setItem('logindata', JSON.stringify(newUpdatedUserInfo));
      const updateget = await AsyncStorage.getItem('logindata');

      Alert.alert('Success', 'User data updated successfully', [
        {
          text: 'OK',
          onPress: () => {
            navigation.navigate('ProfileScreen')
          },
        },
      ]);
    } catch (error) {
      console.error('Error updating user data:', error);
      Alert.alert('Success', 'User data updated successfully');
      setLoading(false);
    }
  };


  const updateProfileData = async () => {
    try {
      setLoading(true);
      const userData = await getUserData();
      const storedProfileImage = await AsyncStorage.getItem('profile_image');
      let imageUri = null;
      if (storedProfileImage) {
        imageUri = storedProfileImage;
      } else {
        console.log('No profile image found.');
      }
      const data = {
        user_id: userData.id,
        name: userData.name,
        email: userData.email,
        mobile: userData.mobile,
        address: userData.Address,
        profile_image: imageUri,
      };
      console.log('<email>', userData.email)
      console.log('<>', userData.Address)
      if (imageUri !== null) {
        const res = await updateUserProfileData(global.url + 'updateuserprofile', data);
        console.log('res', res)
      }
      setID(userData.id);
      setPhoneNumber(userData.mobile);
      setName(userData.name);
      setEmail_id(userData.email);
      setImageUri(userData.profile_image);
      setAddress(userData.address);

      console.log('address <>', userData.address)
      console.log('email <>', userData.email)
    }
    catch (error) {
      console.error('Error updating user data:', error);
      setLoading(false);
    }
  };
  const getUserData = async () => {
    try {
      const storedUserData = await AsyncStorage.getItem('logindata');
      const userData = JSON.parse(storedUserData);
      return userData;
    } catch (error) {
      console.error('Error fetching user data:', error);
      throw error;
    }
  };



  return (
    <View style={styles.container}>
      <ScrollView>
        <HeaderUserName
          onPress={() => { navigation.navigate('Notification') }}
        />
        <SearchComponest

          onPress={() => {
            // setModalVisible(true)
          }}
        />
        <Text style={[styles.proname, styles.proname2]}>{string.Profile}</Text>
        <View style={styles.proview}>
          {imageUri ?
            <Image source={{ uri: imageUri }} style={styles.proimg} />
            :
            <Image source={{ uri: imageUri }} style={styles.proimg} />
          }
          <TouchableOpacity onPress={handleChangeProfile} style={styles.selectedpro}>
            <Image source={icons.editpro} style={styles.proimg2} />
          </TouchableOpacity>
        </View>
        <Text style={styles.proname}>{name}</Text>
        <Text style={[styles.nametext, styles.nametext2]}>{string.Name}</Text>
        <View style={styles.textinputmainview}>
          <TextInput
            style={styles.input}
            value={name}
            placeholder="Name"
            onChangeText={setName}
          />
        </View>
        {errors.name && <Text style={styles.error}>{errors.name}</Text>}
        <Text style={styles.nametext}>{string.Mobilenumber}</Text>
        <View style={styles.textinputmainview}>
          <TextInput
            style={styles.input}
            maxLength={10}
            value={PhoneNumber}
            keyboardType="numeric"
            placeholder="Mobile number"
            onChangeText={setPhoneNumber}
          />
        </View>
        {errors.PhoneNumber && <Text style={styles.error}>{errors.PhoneNumber}</Text>}
        <Text style={styles.nametext}>{string.EmailID}</Text>
        <View style={styles.textinputmainview}>
          <TextInput
            style={styles.input}
            value={email_id}
            placeholder="Email_ID"
            onChangeText={setEmail_id}
          />
        </View>
        {errors.email_id && <Text style={styles.error}>{errors.email_id}</Text>}
        <Text style={styles.nametext}>{string.Address}</Text>
        <View style={styles.textinputmainview}>
          <TextInput
            style={styles.input}
            value={Address}
            placeholder="Address"
            onChangeText={setAddress}
          />
        </View>
        {errors.Address && <Text style={styles.error}>{errors.Address}</Text>}
        <ButtonComponets
          savebutton={styles.savebutton}
          title={string.Save}
          onPress={updateData}
        />
        <View style={styles.margintop}></View>
      </ScrollView>

    </View>
  )
}

export default MyDetails

