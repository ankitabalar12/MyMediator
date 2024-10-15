import { Alert, Image, PermissionsAndroid, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import HeaderUserName from '../../Componets/HeaderUserName/HeaderUserName'
import { styles } from './styles'
import { string } from '../../Helper/string'
import CustomTextInput from '../../Componets/TextInput/CustomTextInput'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import { icons } from '../../Helper/icons'
import ButtonComponets from '../../Componets/Button/ButtonComponets'
import TabbottomviewComponets from '../../Componets/TabViewComponets/TabbottomviewComponets'
import AsyncStorage from '@react-native-community/async-storage'
import { addcarApi, selectedUploadimg, updateelcar, updateelectronicsapi } from '../../../APICall'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker'
import { ActivityIndicator } from 'react-native'

const AddCar = ({ navigation, route }) => {
  const [brand, setBrand] = useState('')
  const [year, setYear] = useState('')
  const [fuel, setFuel] = useState('')
  const [updatedImages, setUpdatedImages] = useState([]);
  const [KMdrive, setKMDrive] = useState('')
  const [noofOwners, setNoOfOwners] = useState('')
  const [amount, setAmount] = useState('')
  const [adtitle, setAdTitle] = useState('')
  const [Description, setdescription] = useState('')
  const [errors, setErrors] = useState({});
  const [Id, setID] = useState('')
  const [imageUri, setImageUri] = useState([]);
  const [videoUri, setVideoUri] = useState(null);
  const [seletetedmenu, setSelectedMenu] = useState('')
  const [loading, setLoading] = useState(false);
  const [location, setLocation] = useState()
  const car_id = route?.params?.car_id;
  useEffect(() => {
    const loginallData = async () => {
      const userdata = await AsyncStorage.getItem('logindata');
      const finaluserdata = JSON.parse(userdata);
      setID(finaluserdata.id);
      setBrand(car_id.brand)
      setYear(car_id.year)
      setFuel(car_id.fuel)
      setKMDrive(car_id.km_drive)
      setNoOfOwners(car_id.no_of_owner)
      setAmount(car_id.amount)
      setAdTitle(car_id.ad_title)
      setdescription(car_id.description)
      setImageUri(car_id.image)
      setLocation(car_id.location)
      setVideoUri(car_id.video)
      if (car_id) {
        setSelectedMenu(car_id.transmission === '1' ? 1 : 2);
      }
    }

    loginallData()
  }, [car_id])
  const selectedmenu = (id) => {
    setSelectedMenu(id)
  }
  const handleAddcarproperty = async () => {

    const newErrors = {};
    if (!brand) {
      newErrors.brand = 'Please enter brand';
    }
    if (!year) {
      newErrors.year = 'Please enter year';
    }
    if (!Description) {
      newErrors.Description = 'Please enter Description';
    }
    if (!fuel) {
      newErrors.fuel = 'Please enter fuel';
    }
    if (!KMdrive) {
      newErrors.KMdrive = 'Please enter KMdrive';
    }
    if (!location) {
      newErrors.location = 'Please enter location';
    }
    if (!noofOwners) {
      newErrors.noofOwners = 'Please enter no of Owners';
    }
    if (!amount) {
      newErrors.amount = 'Please enter amount';
    }
    if (!adtitle) {
      newErrors.adtitle = 'Please enter ad title';
    }
    if (!Description) {
      newErrors.Description = 'Please enter Description';
    }
    if (!imageUri) {
      newErrors.imageUri = 'Please enter image';
    }
    if (!videoUri) {
      newErrors.videoUri = 'Please enter video';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      // return;
    }
    setErrors({});
    // alert('111')
    try {
      const data = {
        user_id: Id,
        brand: brand,
        year: year,
        fuel: fuel,
        transmission: seletetedmenu,
        km_drive: KMdrive,
        no_of_owner: noofOwners,
        amount: amount,
        ad_title: adtitle,
        description: Description,
        image: imageUri.toString(),
        video: videoUri,
        location: location,


      };
      console.log('data -------------', data)
      const res = await addcarApi(global.url + 'addcar ', data);
      console.log('res ><>><', res)
      if (res && res.success === true) {
        Alert.alert('Success', 'Data uploaded successfully.', [
          {
            text: 'OK',
            onPress: () => {

              navigation.navigate('HomeScreen');
            },
          },
        ]);
      } else {
        Alert.alert('Error', 'Failed to upload data. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      Alert.alert('Error', 'An unexpected error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  }

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
        onPress: () => openGallery(),
      },
    ]);
  };

  const openGallery = async () => {
    const options = {
      mediaType: 'photo',
      includeBase64: true,
      base64: true,
      maxHeight: 500,
      maxWidth: 500,
      selectionLimit: 50 - (imageUri?.length || 0)
    };
  
    try {
      const res = await launchImageLibrary(options);
      if (!res.didCancel && res.assets) {
        let images = [];
        for (let i = 0; i < res.assets.length; i++) {
          const asset = res.assets[i];
          if (asset.fileSize > 3 * 1024 * 1024) {
            Alert.alert('Error', 'Image size should be within 3MB.');
            continue;
          }
          const data = {
            base64: 'data:image/jpeg;base64,' + asset.base64,
          };
          const userpic = await selectedUploadimg(global.url + 'uploadimage', data);
          if (userpic.data) {
            images.push(userpic.data);
          }
        }
        console.log('selectedImages---', images);
        setImageUri(prevImages => [...prevImages, ...images]);
        setUpdatedImages(images);
      }
    } catch (error) {
      console.error('Error selecting images from library:', error);
      Alert.alert('Error', 'An unexpected error occurred while selecting images.');
    }
  };
  

  const openCamera = async () => {
    if (Platform.OS === 'android') {
      const hasPermission = await requestCameraPermission();
      if (!hasPermission) {
        Alert.alert("Permission Denied", "Camera permission is required to take photos.");
        return;
      }
    }

    const options = {
      mediaType: 'photo',
      includeBase64: true,
      base64: true,
      maxHeight: 500,
      maxWidth: 500,
    };
    
    try {
      const res = await launchCamera(options);
      if (!res.didCancel && res.assets) {
        let images = [];
        for (let i = 0; i < res.assets.length; i++) {
          const asset = res.assets[i];
          if (asset.fileSize > 3 * 1024 * 1024) {
            Alert.alert('Error', 'Image size should be within 3MB.');
            continue;
          }
          const data = {
            base64: 'data:image/jpeg;base64,' + asset.base64,
          };
          const userpic = await selectedUploadimg(`${global.url}uploadimage`, data);
          if (userpic.data) {
            images.push(userpic.data);
          }
        }
        console.log('selectedImages---', images);
        setImageUri(prevImages => [...prevImages, ...images]);
        setUpdatedImages(images);
      }
    } catch (error) {
      console.error('Error capturing image from camera:', error);
      Alert.alert('Error', 'An unexpected error occurred while capturing image from camera.');
    }
  };
  const selectVideo = () => {
    Alert.alert('Alert', 'Choose an option', [
      {
        text: 'Back',
        onPress: () => { },
      },
      {
        text: 'Video',
        onPress: () => openCameraVideo(),
      },
      {
        text: 'Library',
        onPress: () => openGalleryVideo(),
      },
    ]);
  };
  const requestCameraPermissionvideo = async () => {
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


  const openCameraVideo = async () => {
    if (Platform.OS === 'android') {
      const hasPermission = await requestCameraPermissionvideo();
      if (!hasPermission) {
        Alert.alert("Permission Denied", "Camera permission is required to take videos.");
        return;
      }
    }

    let options = {
      mediaType: 'video',
      cameraType: 'back',
    };

    launchCamera(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled camera picker');
      } else if (response.errorCode) {
        console.log('Camera Error: ', response.errorMessage);
      } else if (response.assets && response.assets.length > 0) {
        setVideoUri(response.assets[0].uri);
      }
    });
  };

  const openGalleryVideo = () => {
    let options = {
      mediaType: 'video',
    };
    launchImageLibrary(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.errorCode) {
        console.log('Gallery Error: ', response.errorMessage);
      } else {
        setVideoUri(response.assets[0].uri);
      }
    });
  };

  const requestCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: "Camera Permission",
          message: "App needs access to your camera to take videos.",
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
  const updateCardata = async () => {
    setLoading(true);
    try {
        const data = {
        id: car_id,
        brand: brand,
        year: year,
        fuel: fuel,
        transmission: seletetedmenu,
        km_drive: KMdrive,
        no_of_owner: noofOwners,
        amount: amount,
        ad_title: adtitle,
        description: Description,
        image: updatedImages.toString(),
        video: videoUri || null,
        location: location,
      };
      console.log('data <dgfd>', data);
      console.log('global.url <>', global.url);
      const res = await updateelcar(global.url + 'updatecar ', data);
      if (res.success) {
        if (res && res.success === true) {
          Alert.alert('Success', 'Data uploaded successfully.', [
            {
              text: 'OK',
              onPress: () => {
                navigation.navigate('ProfileMyPropertyDetails');
              },
            },
          ]);
        }
      } else {
        Alert.alert('Failed to update Car data: ' + (res.message || 'Unknown error'));
      }

    } catch (error) {
      console.error('Error updating Car data:', error);
      Alert.alert('Error updating Car data: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container} >
      <ScrollView>
        <HeaderUserName onPress={() => { navigation.navigate('Notification') }} />
        <Text style={styles.make}>{string.uploadcar}</Text>
        <Text style={styles.inuttextstyletext}>{string.brand}</Text>
        <CustomTextInput
          placeholder="Enter Brand"
          placeholderTextColor="#C2C2C2"
          value={brand}
          onChangeText={(brand) => setBrand(brand)}
          styleview={styles.styleview}
        />
        {errors.brand && <Text style={styles.error}>{errors.brand}</Text>}

        <Text style={styles.inuttextstyletext}>{string.year}</Text>
        <CustomTextInput
          placeholder="Enter the year"
          placeholderTextColor="#C2C2C2"
          value={year}
          onChangeText={(year) => setYear(year)}
          styleview={styles.styleview}
        />
        {errors.year && <Text style={styles.error}>{errors.year}</Text>}

        <Text style={styles.inuttextstyletext}>{string.location}</Text>
        <CustomTextInput
          placeholder="Enter location"
          placeholderTextColor="#C2C2C2"
          value={location}
          onChangeText={(location) => setLocation(location)}
          styleview={styles.styleview}
        />
        {errors.location && <Text style={styles.error}>{errors.location}</Text>}
        <Text style={styles.inuttextstyletext}>{string.fuel}</Text>
        <CustomTextInput
          placeholder="Enter  fuel"
          placeholderTextColor="#C2C2C2"
          value={fuel}
          onChangeText={(fuel) => setFuel(fuel)}
          styleview={styles.styleview}
        />
        {errors.fuel && <Text style={styles.error}>{errors.fuel}</Text>}

        <Text style={styles.inuttextstyletext}>{string.Transmission}</Text>
        <View style={styles.flexrowtextinput}>
          <TouchableOpacity onPress={() => {
            selectedmenu(1, 'Automatic')
          }} style={[styles.textinputrowstyle, { backgroundColor: seletetedmenu === 1 ? '#02487C' : '#fff' }]}>
            <Text style={[styles.textstyleauto, { color: seletetedmenu === 1 ? "#fff" : '#000' }]}>Automatic</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {
            selectedmenu(2, 'Manual')
          }} style={[styles.textinputrowstyle, { backgroundColor: seletetedmenu === 2 ? '#02487C' : '#fff' }]}>
            <Text style={[styles.textstyleauto, { color: seletetedmenu === 2 ? "#fff" : '#000' }]}>Manual</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.inuttextstyletext}>{string.KMDrive}</Text>
        <CustomTextInput
          placeholder="Enter KM Drive"
          placeholderTextColor="#C2C2C2"
          value={KMdrive}
          onChangeText={(KMdrive) => setKMDrive(KMdrive)}
          styleview={styles.styleview}
        />
        {errors.KMdrive && <Text style={styles.error}>{errors.KMdrive}</Text>}

        <Text style={styles.inuttextstyletext}>{string.noofOwners}</Text>
        <CustomTextInput
          placeholder="Enter No of Oweners"
          placeholderTextColor="#C2C2C2"
          value={noofOwners}
          onChangeText={(noofOwners) => setNoOfOwners(noofOwners)}
          styleview={styles.styleview}
        />
        {errors.noofOwners && <Text style={styles.error}>{errors.noofOwners}</Text>}

        <Text style={styles.inuttextstyletext}>{string.amount}</Text>
        <CustomTextInput
          placeholder="Enter Amount"
          placeholderTextColor="#C2C2C2"
          value={amount}
          onChangeText={(amount) => setAmount(amount)}
          styleview={styles.styleview}
        />
        <Text style={styles.inuttextstyletext}>{string.adtitle}</Text>
        <CustomTextInput
          placeholder="Enter adtitle"
          placeholderTextColor="#C2C2C2"
          value={adtitle}
          onChangeText={(adtitle) => setAdTitle(adtitle)}
          styleview={styles.styleview}
        />
        <Text style={styles.inuttextstyletext}>{string.Description}</Text>
        <View style={styles.styleviewdescrip}>
          <TextInput
            placeholder="Enter Description"
            placeholderTextColor="#C2C2C2"
            value={Description}
            onChangeText={(Description) => setdescription(Description)}
            style={styles.sttyinput}
            multiline={true}
          />
        </View>
        <Text style={styles.inuttextstyletext}>{string.ImageUpload}</Text>
        <View style={styles.styleviewdescrip2}>
          <View style={styles.flexrow3}>
            <TouchableOpacity
              onPress={selectImage}
            >
              <Image source={icons.propauplodimg} style={styles.propgallary} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={selectImage} >
              <Image source={icons.propgallary} style={styles.propgallary2} />
            </TouchableOpacity>
          </View>
        </View>
        {errors.imageUri && <Text style={styles.error}>{errors.imageUri}</Text>}
        <Text style={styles.inuttextstyletext}>{string.VideoUpload}</Text>
        <View style={styles.styleviewdescrip2}>
          <View style={styles.flexrow3}>
            <TouchableOpacity onPress={selectVideo} >
              <Image source={icons.propauplodimg} style={styles.propgallary} />
            </TouchableOpacity>
            <TouchableOpacity onPress={selectVideo} >
              <Image source={icons.propgallary} style={styles.propgallary2} />
            </TouchableOpacity>
          </View>
        </View>
        {errors.videoUri && <Text style={styles.error}>{errors.videoUri}</Text>}

        {!car_id && (
          <ButtonComponets
            stylebutton={styles.stylebutton}
            title={string.Submit}
            onPress={() => {
              handleAddcarproperty();

            }}
          />
        )}

        {car_id && (
          <ButtonComponets
            stylebutton={styles.stylebutton}
            title={'save'}
            onPress={() => {
              updateCardata();
            }}
          />
        )}
        {loading && <ActivityIndicator size="large" color="#02487C" />}

        <View style={styles.marbotttom} />
      </ScrollView>

    </View>
  )
}

export default AddCar

