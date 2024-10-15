import { Alert, Image, PermissionsAndroid, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { styles } from './styles'
import AsyncStorage from '@react-native-community/async-storage'
import { Dropdown } from 'react-native-element-dropdown'
import HeaderUserName from '../../../Componets/HeaderUserName/HeaderUserName'
import CustomTextInput from '../../../Componets/TextInput/CustomTextInput'
import ButtonComponets from '../../../Componets/Button/ButtonComponets'
import { icons } from '../../../Helper/icons'
import { string } from '../../../Helper/string'
import { addpropertydata, selectedUploadimg, updateelHome } from '../../../../APICall'
import { ActivityIndicator } from 'react-native'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker'
const Propertytypese = [
  { name: 'Houses & Villas', value: 'Houses & Villas' },
  { name: 'Apartment', value: 'Apartment' },
  { name: 'Builders Floors', value: 'Builders Floors' },
  { name: 'Frame Houses', value: 'Frame Houses' },

]
const List = [
  { name: 'Owner', value: 'Owner' },
  { name: 'Delear', value: 'Delear' },
  { name: 'Builder', value: 'Builder' },

]

const LandPlotAddProperty = ({ navigation, route }) => {
  const [errors, setErrors] = useState({});
  const [PropertyName, setPropertyName] = useState('');
  const [Mobilenumber, setMobilenumber] = useState('');
  const [Description, setDescription] = useState('');
  const [PropertyType, setPropertyType] = useState('');
  const [SelectListed, setSelectListed] = useState();
  const [BuildingFacing, setBuildingFacing] = useState('');
  const [amount, setAmount] = useState('');
  const [selectedImages, setselectedImages] = useState([]);
  const [modalVisible, setModalVisible] = useState()
  const [lengths, setLength] = useState()
  const [plotareas, setPlotareas] = useState()
  const [breadth, setBreadth] = useState()
  const [imageUri, setImageUri] = useState([]);
  const [videoUri, setVideoUri] = useState(null);
  const [Id, setID] = useState('')
  const [home_id, setHome_Id] = useState()
  const [location, setLocation] = useState()
  const [updatedImages, setUpdatedImages] = useState([]);

  const [loading, setLoading] = useState(false);
  const Home_id = route?.params?.Home_id;
  useEffect(() => {
    const loginallData = async () => {
      const userdata = await AsyncStorage.getItem('logindata');
      const finaluserdata = JSON.parse(userdata);
      setID(finaluserdata.id);
      setHome_Id(Home_id.id)
      setPropertyName(Home_id.property_name)
      setMobilenumber(Home_id.mobile_number)
      setDescription(Home_id.description)
      setPropertyType(Home_id.property_type)
      setSelectListed(Home_id.listedby)
      setBuildingFacing(Home_id.facing)
      setAmount(Home_id.amount)
      setLength(Home_id.length)
      setPlotareas(Home_id.area_location)
      setBreadth(Home_id.breadth)
      setImageUri(Home_id.images)
      setVideoUri(Home_id.video)
      setLocation(Home_id.location)
    }
    loginallData()
  }, [])

  const handleChangeProperty = (value) => {
    setPropertyType(value);
  };
  const Changedilisted = (value) => {
    setSelectListed(value);
  };
  const handleAddproperty = async () => {

    const newErrors = {};
    if (!PropertyName) {
      newErrors.PropertyName = 'Please enter PropertyName';
    }
    if (!Mobilenumber) {
      newErrors.Mobilenumber = 'Please enter Mobilenumber';
    }
    if (!Description) {
      newErrors.Description = 'Please enter Description';
    }
    if (!PropertyType) {
      newErrors.PropertyType = 'Please enter PropertyType';
    }
    if (!SelectListed) {
      newErrors.SelectListed = 'Please enter SelectListed';
    }
    if (!location) {
      newErrors.location = 'Please enter location';
    }
    if (!breadth) {
      newErrors.breadth = 'Please enter breadth';
    }
    if (!imageUri) {
      newErrors.imageUri = 'Please enter image';
    }
    if (!videoUri) {
      newErrors.videoUri = 'Please enter video';
    }
    if (!lengths) {
      newErrors.lengths = 'Please enter lengths';
    }
    if (!BuildingFacing) {
      newErrors.BuildingFacing = 'Please enter BuildingFacing';
    }
    if (!amount) {
      newErrors.amount = 'Please enter amount';
    }
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    }
    setErrors({});
    try {
      const data = {
        user_id: Id,
        property_name: PropertyName,
        mobile_number: Mobilenumber,
        property_type: PropertyType,
        furnished: '',
        images: imageUri.toString(),
        facing: BuildingFacing,
        video: videoUri,
        bedrooms: '',
        bathrooms: '',
        listedby: SelectListed,
        carpetarea: '',
        maintenance: '',
        bachelorsallowed: '',
        totalfloors: '',
        floorno: '',
        carparking: '',
        description: Description,
        amount: amount,
        roomtype: '',
        mealsincluded: '',
        ConstructionStatus: '',
        length: lengths,
        breadth: breadth,
        Washrooms: '',
        sqft: '',
        area_location: plotareas,
        form_type: 5,
        location: location,

      };
      console.log('data <>', data)
      const res = await addpropertydata(global.url + 'addproperty', data);
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


  const updateHomedata = async () => {
    setLoading(true);
    try {
      const data = {
        id: home_id,
        property_name: PropertyName,
        mobile_number: Mobilenumber,
        property_type: PropertyType,
        furnished: '',
        images: updatedImages.toString(),
        facing: BuildingFacing,
        video: videoUri,
        bedrooms: '',
        bathrooms: '',
        listedby: SelectListed,
        carpetarea: '',
        maintenance: '',
        bachelorsallowed: '',
        totalfloors: '',
        floorno: '',
        carparking: '',
        description: Description,
        amount: amount,
        roomtype: '',
        mealsincluded: '',
        ConstructionStatus: '',
        length: lengths,
        breadth: breadth,
        Washrooms: '',
        sqft: '',
        area_location: plotareas,
        form_type: 5,
        location: location,
      };
      console.log('data <dgfd>', data);
      console.log('global.url <>', global.url);
      const res = await updateelHome(global.url + 'updateproperty', data);
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

        <Text style={styles.make}>{string.landplot}</Text>
        <Text style={styles.inuttextstyletext}>{string.PropertyName}</Text>
        <CustomTextInput
          placeholder="Enter property name"
          placeholderTextColor="#C2C2C2"
          value={PropertyName}
          onChangeText={(PropertyName) => setPropertyName(PropertyName)}
          styleview={styles.styleview}
        />
        {errors.PropertyName && <Text style={styles.error}>{errors.PropertyName}</Text>}
        <Text style={styles.inuttextstyletext}>{string.Mobilenumber}</Text>
        <CustomTextInput
          placeholder="Enter Mobile number"
          placeholderTextColor="#C2C2C2"
          value={Mobilenumber}
          maxLength={10}
          keyboardType="numeric"
          onChangeText={(Mobilenumber) => setMobilenumber(Mobilenumber)}
          styleview={styles.styleview}
        />
        {errors.Mobilenumber && <Text style={styles.error}>{errors.Mobilenumber}</Text>}
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
        <Text style={styles.inuttextstyletext}>{string.PropertyType}</Text>
        <View style={styles.dropdownview}>
          <Dropdown
            style={styles.dropdown}
            placeholderStyle={styles.placeholder}
            selectedTextStyle={styles.selectedText}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={Propertytypese}
            search
            maxHeight={300}
            labelField="name"
            valueField="value"
            placeholder="Select Property types"
            searchPlaceholder="Search..."
            value={PropertyType}
            onChange={(item) => {
              handleChangeProperty(item.value);
            }}
          />
        </View>
        {errors.Propertytypese && <Text style={styles.error}>{errors.Propertytypese}</Text>}
        <Text style={styles.inuttextstyletext}>{string.location}</Text>
        <CustomTextInput
          placeholder="Enter location"
          placeholderTextColor="#C2C2C2"
          value={location}
          onChangeText={(location) => setLocation(location)}
          styleview={styles.styleview}
        />
        {errors.location && <Text style={styles.error}>{errors.location}</Text>}
        <Text style={styles.inuttextstyletext}>{string.SelectDistrict}</Text>
        <View style={styles.dropdownview}>
          <Dropdown
            style={styles.dropdown}
            placeholderStyle={styles.placeholder}
            selectedTextStyle={styles.selectedText}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={List}
            search
            maxHeight={300}
            labelField="name"
            valueField="value"
            placeholder="Select item"
            searchPlaceholder="Search..."
            value={SelectListed}
            onChange={item => {
              Changedilisted(item.value);
            }} />
        </View>
        {errors.SelectListed && <Text style={styles.error}>{errors.SelectListed}</Text>}
        <Text style={styles.inuttextstyletext}>{string.plotarea}</Text>
        <CustomTextInput
          placeholder="Enter Maintenance "
          placeholderTextColor="#C2C2C2"
          value={plotareas}
          onChangeText={(plotareas) => setPlotareas(plotareas)}
          styleview={styles.styleview}
        />
        {errors.plotareas && <Text style={styles.error}>{errors.plotareas}</Text>}
        <Text style={styles.inuttextstyletext}>{string.length}</Text>
        <CustomTextInput
          placeholder="Enter length"
          placeholderTextColor="#C2C2C2"
          value={lengths}
          onChangeText={(lengths) => setLength(lengths)}
          styleview={styles.styleview}
        />
        {errors.lengths && <Text style={styles.error}>{errors.lengths}</Text>}
        <Text style={styles.inuttextstyletext}>{string.breadth}</Text>
        <CustomTextInput
          placeholder="Enter breadth "
          placeholderTextColor="#C2C2C2"
          value={breadth}
          onChangeText={(breadth) => setBreadth(breadth)}
          styleview={styles.styleview}
        />
        {errors.breadth && <Text style={styles.error}>{errors.breadth}</Text>}
        <Text style={styles.inuttextstyletext}>{string.Value}</Text>
        <CustomTextInput
          placeholder="Enter Building Facing"
          placeholderTextColor="#C2C2C2"
          value={BuildingFacing}
          onChangeText={(BuildingFacing) => setBuildingFacing(BuildingFacing)}
          styleview={styles.styleview}
        />
        {errors.BuildingFacing && <Text style={styles.error}>{errors.BuildingFacing}</Text>}
        <Text style={styles.inuttextstyletext}>{string.Commission}</Text>
        <CustomTextInput
          placeholder="Enter Amount"
          placeholderTextColor="#C2C2C2"
          value={amount}
          onChangeText={(amount) => setAmount(amount)}
          styleview={styles.styleview}
        />
        {errors.amount && <Text style={styles.error}>{errors.amount}</Text>}
        <Text style={styles.inuttextstyletext}>{string.ImageUpload}</Text>
        <View style={styles.styleviewdescrip2}>
          <View style={styles.flexrow3}>
            <TouchableOpacity onPress={selectImage}>
              <Image source={icons.propauplodimg} style={styles.propgallary} />
            </TouchableOpacity>
            <TouchableOpacity onPress={selectImage} >
              <Image source={icons.propgallary} style={styles.propgallary2} />
            </TouchableOpacity>
            {selectedImages && typeof selectedImages === 'string' && (<Image source={{ uri: `https://www.demo603.amrithaa.com/mymediator/public/${imageUri}` }} style={styles.propgallary2}></Image>)}
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
          </View>
        </View>
        {errors.videoUri && <Text style={styles.error}>{errors.videoUri}</Text>}
        {loading && <ActivityIndicator size="large" color="#02487C" />}
        {!Home_id && (
          <ButtonComponets
            stylebutton={styles.stylebutton}
            title={string.Submit}
            onPress={() => {
              handleAddproperty();

            }}
          />
        )}

        {Home_id && (
          <ButtonComponets
            stylebutton={styles.stylebutton}
            title={'save'}
            onPress={() => {
              updateHomedata();
            }}
          />
        )}
        <View style={styles.marbotttom} />
      </ScrollView>

    </View>
  )
}

export default LandPlotAddProperty

