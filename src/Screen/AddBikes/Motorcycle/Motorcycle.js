import { Alert, Image, PermissionsAndroid, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import HeaderUserName from '../../../Componets/HeaderUserName/HeaderUserName'
import { styles } from './styles'
import AsyncStorage from '@react-native-community/async-storage'
import { string } from '../../../Helper/string'
import CustomTextInput from '../../../Componets/TextInput/CustomTextInput'
import ButtonComponets from '../../../Componets/Button/ButtonComponets'
import { icons } from '../../../Helper/icons'
import { Dropdown } from 'react-native-element-dropdown'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker'
import { addBikeApi, addcarApi, selectedUploadimg, selectedUploadimgbike, updateelbike } from '../../../../APICall'
import { ActivityIndicator } from 'react-native'
const modalandbrand = [
  { name: 'a', value: 'a' },
  { name: 'b', value: 'b' },
  { name: 'c', value: 'c' },
  { name: 'd', value: 'd' },

]

const Motorcycle = ({ navigation, route }) => {
  const [errors, setErrors] = useState({});
  const [Brandmodel, setBrandModel] = useState('');
  const [yaer, setYear] = useState('');
  const [KmDriven, setKmDriven] = useState('');
  const [amount, setAmount] = useState('');
  const [AdTitle, setAdtitle] = useState('');
  const [Description, setDescription] = useState('');
  const [imageUri, setImageUri] = useState([]);
  const [videoUri, setVideoUri] = useState([]);
  const [Id, setID] = useState('')
  const [updatedImages, setUpdatedImages] = useState([]);
  const [bike_Id, setBike_id] = useState('');
  const [loading, setLoading] = useState(false);
  const [location, setLocation] = useState()
  const bike_id = route?.params?.bike_id;
  useEffect(() => {
    const loginallData = async () => {
      const userdata = await AsyncStorage.getItem('logindata');
      const finaluserdata = JSON.parse(userdata);
      setID(finaluserdata.id);
      setBrandModel(bike_id.brand_model)
      setBike_id(bike_id.id)
      setAmount(bike_id.amount)
      console.log('============', bike_id.amount)
      setAdtitle(bike_id.ad_title)
      setDescription(bike_id.description)
      setImageUri(bike_id.image ? bike_id.image.split(',') : []);
      console.log('bike_id.image ? bike_id.image.split(', ') : [] ', bike_id.image ? bike_id.image.split(',') : [])
      setVideoUri(bike_id.video)
      setKmDriven(bike_id.km_driven)
      setLocation(bike_id.location)

      console.log('km_driven -------------', bike_id.km_driven)
      if (bike_id && bike_id && bike_id.year) {
        setYear(bike_id.year.toString());
      }
    }
    loginallData()
  }, [])
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
      maxHeight: 500,
      maxWidth: 500,
      selectionLimit: 50 - (imageUri?.length || 0)
    };

    try {
      const res = await launchImageLibrary(options);

      if (res?.didCancel) {
        console.log('User cancelled image selection');
        return;
      }

      if (!res?.assets || res.assets.length === 0) {
        Alert.alert('Error', 'No image selected.');
        return;
      }

      let images = [];
      for (let i = 0; i < res.assets.length; i++) {
        const asset = res.assets[i];
        if (asset.fileSize > 3 * 1024 * 1024) {
          Alert.alert('Error', 'Image size should be within 3MB.');
          continue;
        }
        if (asset.base64) {
          const data = {
            base64: 'data:image/jpeg;base64,' + asset.base64,
          };
          const userpic = await selectedUploadimgbike(`${global.url}uploadimage`, data);
          if (userpic?.data) {
            images.push(userpic.data);
          }
        }
      }
      console.log('selectedImages---', images);
      setImageUri(prevImages => [...prevImages, ...images]);
      setUpdatedImages(images);
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
      maxHeight: 500,
      maxWidth: 500,
    };

    try {
      const res = await launchCamera(options);

      if (res?.didCancel) {
        console.log('User cancelled camera');
        return;
      }

      if (!res?.assets || res.assets.length === 0) {
        Alert.alert('Error', 'No image captured.');
        return;
      }

      let images = [];
      for (let i = 0; i < res.assets.length; i++) {
        const asset = res.assets[i];
        if (asset.fileSize > 3 * 1024 * 1024) {
          Alert.alert('Error', 'Image size should be within 3MB.');
          continue;
        }
        if (asset.base64) {
          const data = {
            base64: 'data:image/jpeg;base64,' + asset.base64,
          };
          const userpic = await selectedUploadimgbike(`${global.url}uploadimage`, data);
          if (userpic?.data) {
            images.push(userpic.data);
          }
        }
      }
      console.log('selectedImages---', images);
      setImageUri(prevImages => [...prevImages, ...images]);
      setUpdatedImages(images);
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
      mediaType: 'video', // Changed to video
      cameraType: 'back',
    };

    launchCamera(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled camera picker');
      } else if (response.errorCode) {
        console.log('Camera Error: ', response.errorMessage);
      } else if (response.assets && response.assets.length > 0) {
        setVideoUri(response.assets[0].uri); // Use setVideoUri for videos
      }
    });
  };

  const openGalleryVideo = () => {
    let options = {
      mediaType: 'video', // Changed to video
    };
    launchImageLibrary(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.errorCode) {
        console.log('Gallery Error: ', response.errorMessage);
      } else {
        setVideoUri(response.assets[0].uri); // Use setVideoUri for videos
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
  const handleMotorcycle = async () => {

    const newErrors = {};
    if (!Brandmodel) {
      newErrors.Brandmodel = 'Please enter Brandmodel';
    }
    if (!yaer) {
      newErrors.yaer = 'Please enter yaer';
    }
    if (!KmDriven) {
      newErrors.KmDriven = 'Please enter KmDriven';
    }

    if (!Description) {
      newErrors.Description = 'Please enter Description';
    }

    if (!amount) {
      newErrors.amount = 'Please enter amount';
    }
    if (!AdTitle) {
      newErrors.AdTitle = 'Please enter AdTitle';
    }
    if (!location) {
      newErrors.location = 'Please enter location';
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
    setLoading(true);

    try {
      const data = {
        user_id: Id,
        brand_model: Brandmodel,
        year: yaer,
        km_driven: KmDriven,
        amount: amount,
        ad_title: AdTitle,
        description: Description,
        image: imageUri.toString(),
        video: videoUri,
        form_type: 1,
        location: location,
      };
      console.log('data -------------', data)
      const res = await addBikeApi(global.url + 'addbike ', data);
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

  const updateBikedata = async () => {
    setLoading(true);
    try {

      const data = {
        id: bike_Id,
        brand_model: Brandmodel,
        year: yaer,
        km_driven: KmDriven,
        amount: amount,
        ad_title: AdTitle,
        description: Description,
        image: updatedImages.toString(),
        video: videoUri,
        form_type: 1,
        location: location,
      };
      console.log('data <dgfd>', data);
      console.log('global.url <>', global.url);
      const res = await updateelbike(global.url + 'updatebike', data);
      console.log('------------------', res)
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
        {/* <SearchComponest
          onPress={() => {
            // setModalVisible(true)
          }}
        /> */}
        <Text style={styles.make}>{string.UploadMotorcycle}</Text>

        <Text style={styles.inuttextstyletext}>{string.BrandModel}</Text>
        <CustomTextInput
          placeholder="Select Property types"
          placeholderTextColor="#C2C2C2"
          value={Brandmodel}
          onChangeText={(Brandmodel) => setBrandModel(Brandmodel)}
          styleview={styles.styleview}
        />
        {/* <View style={styles.dropdownview}> */}
        {/* <Dropdown
            style={styles.dropdown}
            placeholderStyle={styles.placeholder}
            selectedTextStyle={styles.selectedText}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={modalandbrand}
            search
            maxHeight={300}
            labelField="name"
            valueField="value"
            placeholder="Select Property types"
            searchPlaceholder="Search..."
            value={Brandmodel}
            onChange={(item) => {
              setBrandModel(item.value);
            }}
          /> */}
        {/* </View> */}
        {errors.Brandmodel && <Text style={styles.error}>{errors.Brandmodel}</Text>}
        <Text style={styles.inuttextstyletext}>{string.year}</Text>
        <CustomTextInput
          placeholder="Select the year"
          placeholderTextColor="#C2C2C2"
          value={yaer}
          onChangeText={(yaer) => setYear(yaer)}
          styleview={styles.styleview}
        />
        {errors.yaer && <Text style={styles.error}>{errors.yaer}</Text>}
        <Text style={styles.inuttextstyletext}>{string.KmDiven}</Text>
        <CustomTextInput
          placeholder="Enter the year"
          placeholderTextColor="#C2C2C2"
          value={KmDriven}

          onChangeText={(KmDriven) => setKmDriven(KmDriven)}
          styleview={styles.styleview}
        />
        {errors.KmDriven && <Text style={styles.error}>{errors.KmDriven}</Text>}
        <Text style={styles.inuttextstyletext}>{string.amo}</Text>
        <CustomTextInput
          placeholder="Enter the amount"
          placeholderTextColor="#C2C2C2"
          value={amount}

          onChangeText={(amount) => setAmount(amount)}
          styleview={styles.styleview}
        />
        {errors.amount && <Text style={styles.error}>{errors.amount}</Text>}
        <Text style={styles.inuttextstyletext}>{string.AdTile}</Text>
        <CustomTextInput
          placeholder="Enter ad title"
          placeholderTextColor="#C2C2C2"
          value={AdTitle}

          onChangeText={(AdTitle) => setAdtitle(AdTitle)}
          styleview={styles.styleview}
        />
        {errors.KmDriven && <Text style={styles.error}>{errors.KmDriven}</Text>}
        <Text style={styles.inuttextstyletext}>{string.Description}</Text>
        <View style={styles.styleviewdescrip}>
          <TextInput
            placeholder="Enter Description"
            placeholderTextColor="#C2C2C2"
            value={Description}
            onChangeText={(Description) => setDescription(Description)}
            style={styles.sttyinput}
            multiline={true}
          />
        </View>
        {errors.Description && <Text style={styles.error}>{errors.Description}</Text>}
        <Text style={styles.inuttextstyletext}>{string.location}</Text>
        <CustomTextInput
          placeholder="Enter location"
          placeholderTextColor="#C2C2C2"
          value={location}
          onChangeText={(location) => setLocation(location)}
          styleview={styles.styleview}
        />
        {errors.location && <Text style={styles.error}>{errors.location}</Text>}
        <Text style={styles.inuttextstyletext}>{string.ImageUpload}</Text>
        <View style={styles.styleviewdescrip2}>
          <View style={styles.flexrow3}>
            <TouchableOpacity onPress={selectImage}>
              <Image source={icons.propauplodimg} style={styles.propgallary} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={selectImage}
            // onPress={() => setModalVisible(true)} 
            >
              <Image source={icons.propgallary} style={styles.propgallary2} />
            </TouchableOpacity>
          </View>
        </View>
        {errors.imageUri && <Text style={styles.error}>{errors.imageUri}</Text>}
        <Text style={styles.inuttextstyletext}>{string.VideoUpload}</Text>
        <View style={styles.styleviewdescrip2}>
          <View style={styles.flexrow3}>
            <TouchableOpacity onPress={selectVideo}>
              <Image source={icons.propauplodimg} style={styles.propgallary} />
            </TouchableOpacity>
            <TouchableOpacity onPress={selectVideo}>
              <Image source={icons.propgallary} style={styles.propgallary2} />
            </TouchableOpacity>
            {/* <View style={{height:100, width:100, borderRadius:11, backgroundColor:"red"}}></View> */}
          </View>
        </View>
        {errors.videoUri && <Text style={styles.error}>{errors.videoUri}</Text>}
        {loading && <ActivityIndicator size="large" color="#02487C" />}
        {!bike_id && (
          <ButtonComponets
            stylebutton={styles.stylebutton}
            title={string.Submit}
            onPress={() => {
              handleMotorcycle();

            }}
          />
        )}

        {bike_id && (
          <ButtonComponets
            stylebutton={styles.stylebutton}
            title={'save'}
            onPress={() => {
              updateBikedata();
            }}
          />
        )}
      </ScrollView>

    </View>
  )
}

export default Motorcycle

