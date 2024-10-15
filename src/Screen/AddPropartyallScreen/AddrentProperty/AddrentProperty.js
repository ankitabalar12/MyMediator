import { Alert, Image, PermissionsAndroid, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { styles } from './styles'
import AsyncStorage from '@react-native-community/async-storage'
import { Dropdown } from 'react-native-element-dropdown'
import ReactNativeModal from 'react-native-modal'
import HeaderUserName from '../../../Componets/HeaderUserName/HeaderUserName'
import SearchComponest from '../../../Componets/SearchComponets/SearchComponest'
import CustomTextInput from '../../../Componets/TextInput/CustomTextInput'
import ButtonComponets from '../../../Componets/Button/ButtonComponets'
// import TabbottomviewComponets from '../../../Componets/TabViewComponets/TabbottomviewComponets'
import { icons } from '../../../Helper/icons'
import { string } from '../../../Helper/string'
import TabbottomviewComponets from '../../../Componets/TabViewComponets/TabbottomviewComponets'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker'
import { addpropertydata, selectedUploadimg, updateelHome } from '../../../../APICall'
import { ActivityIndicator } from 'react-native'

const Propertytypese = [
  { name: 'Houses & Villas', value: 'Houses & Villas' },
  { name: 'Apartment', value: 'Apartment' },
  { name: 'Builders Floors', value: 'Builders Floors' },
  { name: 'Frame Houses', value: 'Frame Houses' },

]
const Bedroomstypes = [
  { name: '1+ Bedrooms', value: '1' },
  { name: '2+ Bedrooms', value: '2' },
  { name: '3+ Bedrooms', value: '3' },
  { name: '4+ Bedrooms', value: '4' },

]
const Bathroomstypes = [
  { name: '1+ Bathrooms', value: '1' },
  { name: '2+ Bathrooms', value: '2' },
  { name: '3+ Bathrooms', value: '3' },
  { name: '4+ Bathrooms', value: '4' },

]
const Furnisheddata = [
  { name: 'Furnished', value: 'Furnished' },
  { name: 'Semi-Furnished', value: 'Semi-Furnished' },
  { name: 'UnFurnished', value: 'UnFurnished' },

]
const constructionsatatus = [
  { name: 'Under construction', value: 'Flat' },
  { name: 'Ready to Move', value: 'Ready to Move' },
  { name: 'New Launch', value: 'New Launch' },
 
]
const SuperBuildup = [
  { name: '1000 SQ.FT', value: '1000 SQ.FT' },
  { name: '1500 SQ.FT', value: '1500 SQ.FT' },
  { name: '3000 SQ.FT', value: '3000 SQ.FT' },

]
const carpetQ = [
  { name: '100 SQ.FT', value: '100 SQ.FT' },
  { name: '200 SQ.FT', value: '200 SQ.FT' },
  { name: '300 SQ.FT', value: '300 SQ.FT' },
  { name: '400 SQ.FT', value: '400 SQ.FT' },

]
   const List = [
  { name: 'Owner', value: 'Owner' },
    { name: 'Delear', value: 'Delear' },
    { name: 'Builder', value: 'Builder' },

]
const Bachlors = [
  { name: 'Yes', value: 'Yes' },
    { name: 'No', value: 'No' },
]
const AddrentProperty = ({ navigation, route }) => {
  const [errors, setErrors] = useState({});
  const [PropertyName, setPropertyName] = useState('');
  const [Mobilenumber, setMobilenumber] = useState('');
  const [Description, setDescription] = useState('');
  const [PropertyType, setPropertyType] = useState('');
  const [Bedrooms, setbedroom] = useState('');
  const [Bathrooms, setBathrooms] = useState('');
  const [Furnished, setFurnished] = useState('');
  const [selectbuildup, setSelectbuildup] = useState();
  const [constructionStatus, setConstructionStatus] = useState('');
  const [SelectListed, setSelectListed] = useState();
  const [carpetaery, setCarpetaery] = useState()
  const [Maintenance, setMaintenance] = useState('');
  const [SelectedBachlors, setSelectedBachlors] = useState();
  const [totalfloors, setTotalfloors] = useState('');
  const [floorno, setFloorNo] = useState('');
  const [BuildingFacing, setBuildingFacing] = useState('');
  const [carparking, setCarparking] = useState(false);
  const [amount, setAmount] = useState('');
  const [imageUri, setImageUri] = useState([]);
  const [videoUri, setVideoUri] = useState();
  const [Id, setID] = useState('')
  const [home_id, setHome_Id] = useState()
  const [loading, setLoading] = useState(false);
  const [location, setLocation] = useState('')
  const [updatedImages, setUpdatedImages] = useState([]);
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
      setAmount(Home_id.amount)
      setbedroom(Home_id.bedrooms)
      setFurnished(Home_id.furnished)
      setBuildingFacing(Home_id.facing)
      setMaintenance(Home_id.maintenance)
      setCarparking(Home_id.car_parking)
      setConstructionStatus(Home_id.construction_status)
      setSelectedBachlors(Home_id.bachelors_allowed)
      setSelectListed(Home_id.listedby)
      setSelectbuildup(Home_id.sqft)
      setTotalfloors(Home_id.total_floors)
      setBathrooms(Home_id.bathrooms)
      setCarpetaery(Home_id.carpetarea)
      setFloorNo(Home_id.floor_no)
      setVideoUri(Home_id.video)
      setImageUri(Home_id.image)
      setLocation(Home_id.location)

    }
    loginallData()
  }, [])

  const handleChangeProperty = (value) => {
    setPropertyType(value);
  };
  const ChangePropertybedroom = (value) => {
    setbedroom(value);
  };
  const ChangePropertyBathroom = (value) => {
    setBathrooms(value);
  };
  const ChangeFurnished = (value) => {
    setFurnished(value);
  };
  const ChangeStatus = (value) => {
    setConstructionStatus(value);
  };
  const Changedilisted = (value) => {
    setSelectListed(value);
  };
  const ChangesBuildarea = (value) => {
    setSelectbuildup(value);
  };
  const handleChancarpet = (selectedValue) => {
    setCarpetaery(selectedValue);
  };

  const ChangeBachelors = (value) => {
    setSelectedBachlors(value);
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
    if (!Bedrooms) {
      newErrors.Bedrooms = 'Please enter Bedrooms';
    }
    if (!Bathrooms) {
      newErrors.Bathrooms = 'Please enter Bathrooms';
    }
    if (!Furnished) {
      newErrors.Furnished = 'Please enter Furnished';
    }
    if (!constructionStatus) {
      newErrors.constructionStatus = 'Please enter constructionStatus';
    }
    if (!SelectListed) {
      newErrors.SelectListed = 'Please enter SelectListed';
    }
    if (!selectbuildup) {
      newErrors.selectbuildup = 'Please enter selectbuildup';
    }
    if (!carpetaery) {
      newErrors.carpetaery = 'Please enter carpetaery';
    }
    if (!Maintenance) {
      newErrors.Maintenance = 'Please enter Maintenance';
    }
    if (!SelectedBachlors) {
      newErrors.SelectedBachlors = 'Please enter SelectedBachlors';
    }
    if (!totalfloors) {
      newErrors.totalfloors = 'Please enter total floors';
    }
    if (!floorno) {
      newErrors.floorno = 'Please enter floorno';
    }
    if (!BuildingFacing) {
      newErrors.BuildingFacing = 'Please enter BuildingFacing';
    }
    if (!carparking) {
      newErrors.carparking = 'Please enter carparking';
    }
    if (!imageUri) {
      newErrors.imageUri = 'Please enter image';
    }
    if (!videoUri) {
      newErrors.videoUri = 'Please enter video';
    }
    if (!location) {
      newErrors.location = 'Please enter location';
    }
    if (!amount) {
      newErrors.amount = 'Please enter amount';
    }
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      // return;
    }
    setErrors({});
    // alert('111')
    setLoading(true);
    try {
      const data = {
        user_id: Id,
        property_name: PropertyName,
        mobile_number: Mobilenumber,
        property_type: PropertyType,
        furnished: Furnished,
        images: imageUri.toString(),
        facing: BuildingFacing,
        video: videoUri,
        bedrooms: Bedrooms,
        bathrooms: Bathrooms,
        listedby: SelectListed,
        carpetarea: carpetaery,
        maintenance: Maintenance,
        bachelors_allowed: SelectedBachlors,
        total_floors: totalfloors,
        floor_no: floorno,
        car_parking: carparking,
        description: Description,
        amount: amount,
        location: location,
        roomtype: '',
        mealsincluded: '',
        construction_status: constructionStatus,
        Length: '',
        Breadth: '',
        Washrooms: '',
        sqft: selectbuildup,
        potarea: '',
        form_type: 3
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
        furnished: Furnished,
        images: updatedImages.toString(),
        facing: BuildingFacing,
        video: videoUri,
        bedrooms: Bedrooms,
        bathrooms: Bathrooms,
        listedby: SelectListed,
        carpetarea: carpetaery,
        maintenance: Maintenance,
        bachelors_allowed: SelectedBachlors,
        total_floors: totalfloors,
        floor_no: floorno,
        car_parking: carparking,
        description: Description,
        amount: amount,
        location: location,
        roomtype: '',
        mealsincluded: '',
        construction_status: constructionStatus,
        Length: '',
        Breadth: '',
        Washrooms: '',
        sqft: selectbuildup,
        potarea: '',
        form_type: 3,
        
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
        <Text style={styles.make}>{string.RentApartmen}</Text>
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
        <Text style={styles.inuttextstyletext}>{string.location}</Text>
        <CustomTextInput
          placeholder="Enter location"
          placeholderTextColor="#C2C2C2"
          value={location}
          onChangeText={(location) => setLocation(location)}
          styleview={styles.styleview}
        />
        {errors.location && <Text style={styles.error}>{errors.location}</Text>}
        <Text style={styles.inuttextstyletext}>{string.PropertyMethods}</Text>
        <View style={styles.dropdownview}>
          <Dropdown
            style={styles.dropdown}
            placeholderStyle={styles.placeholder}
            selectedTextStyle={styles.selectedText}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={Bedroomstypes}
            search
            maxHeight={300}
            labelField="name"
            valueField="value"
            placeholder="Select Bedrooms"
            searchPlaceholder="Search..."
            value={Bedrooms}
            onChange={(item) => {
              ChangePropertybedroom(item.value);
            }}
          />
        </View>
        {errors.Bedrooms && <Text style={styles.error}>{errors.Bedrooms}</Text>}
        <Text style={styles.inuttextstyletext}>{string.Bathrooms}</Text>
        <View style={styles.dropdownview}>
          <Dropdown
            style={styles.dropdown}
            placeholderStyle={styles.placeholder}
            selectedTextStyle={styles.selectedText}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={Bathroomstypes}
            search
            maxHeight={300}
            labelField="name"
            valueField="value"
            placeholder="Select Bathrooms"
            searchPlaceholder="Search..."
            value={Bathrooms}
            onChange={(item) => {
              ChangePropertyBathroom(item.value);
            }}
          />
        </View>

        {errors.Bathrooms && <Text style={styles.error}>{errors.Bathrooms}</Text>}
        <Text style={styles.inuttextstyletext}>{string.Furnished}</Text>
        <View style={styles.dropdownview}>
          <Dropdown
            style={styles.dropdown}
            placeholderStyle={styles.placeholder}
            selectedTextStyle={styles.selectedText}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={Furnisheddata}
            search
            maxHeight={300}
            labelField="name"
            valueField="value"
            placeholder="Select item"
            searchPlaceholder="Search..."
            value={Furnished}
            onChange={item => {
              ChangeFurnished(item.value);
            }} />
        </View>
        {errors.Furnished && <Text style={styles.error}>{errors.Furnished}</Text>}
        <Text style={styles.inuttextstyletext}>{string.ConstructionStatus}</Text>
        <View style={styles.dropdownview}>
          <Dropdown
            style={styles.dropdown}
            placeholderStyle={styles.placeholder}
            selectedTextStyle={styles.selectedText}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={constructionsatatus}
            search
            maxHeight={300}
            labelField="name"
            valueField="value"
            placeholder="Select construction status"
            searchPlaceholder="Search..."
            value={constructionStatus}
            onChange={(item) => {
              ChangeStatus(item.value);
            }}
          />

        </View>
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
        <Text style={styles.inuttextstyletext}>{string.Selectstate}</Text>
        <View style={styles.dropdownview}>
          <Dropdown
            style={styles.dropdown}
            placeholderStyle={styles.placeholder}
            selectedTextStyle={styles.selectedText}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={SuperBuildup}
            search
            maxHeight={300}
            labelField="name"
            valueField="value"
            placeholder="Select item"
            searchPlaceholder="Search..."
            value={selectbuildup}
            onChange={item => {
              ChangesBuildarea(item.value);
            }} />
        </View>
        {errors.selectstate && <Text style={styles.error}>{errors.selectstate}</Text>}
        <Text style={styles.inuttextstyletext}>{string.carpet}</Text>
        <View style={styles.dropdownview}>
          <Dropdown
            style={styles.dropdown}
            placeholderStyle={styles.placeholder}
            selectedTextStyle={styles.selectedText}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={carpetQ}
            search
            maxHeight={300}
            labelField="name"
            valueField="value"
            placeholder="Select item"
            searchPlaceholder="Search..."
            value={carpetaery}
            onChange={item => {
              handleChancarpet(item.value);
            }} />
        </View>
        {errors.carpetaery && <Text style={styles.error}>{errors.carpetaery}</Text>}
        <Text style={styles.inuttextstyletext}>{string.Maintenance}</Text>
        <CustomTextInput
          placeholder="Enter Maintenance "
          placeholderTextColor="#C2C2C2"
          value={Maintenance}
          onChangeText={(Maintenance) => setMaintenance(Maintenance)}
          styleview={styles.styleview}
        />
        {errors.Maintenance && <Text style={styles.error}>{errors.Maintenance}</Text>}
        <Text style={styles.inuttextstyletext}>{string.Selectcity}</Text>
        <View style={styles.dropdownview}>
          <Dropdown
            style={styles.dropdown}
            placeholderStyle={styles.placeholder}
            selectedTextStyle={styles.selectedText}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={Bachlors}
            search
            maxHeight={300}
            labelField="name"
            valueField="value"
            placeholder="Select item"
            searchPlaceholder="Search..."
            value={SelectedBachlors}
            onChange={item => {
              ChangeBachelors(item.value);
            }} />
        </View>
        {errors.SelectedBachlors && <Text style={styles.error}>{errors.SelectedBachlors}</Text>}
        <Text style={styles.inuttextstyletext}>{string.tottal}</Text>
        <CustomTextInput
          placeholder="Enter Total floors"
          placeholderTextColor="#C2C2C2"
          value={totalfloors}
          onChangeText={(totalfloors) => setTotalfloors(totalfloors)}
          styleview={styles.styleview}
        />
        {errors.totalfloors && <Text style={styles.error}>{errors.totalfloors}</Text>}
        <Text style={styles.inuttextstyletext}>{string.AgeofBuilding}</Text>
        <CustomTextInput
          placeholder="Enter floor no "
          placeholderTextColor="#C2C2C2"
          value={floorno}
          onChangeText={(floorno) => setFloorNo(floorno)}
          styleview={styles.styleview}
        />
        {errors.floorno && <Text style={styles.error}>{errors.floorno}</Text>}

        <Text style={styles.inuttextstyletext}>{string.Value}</Text>
        <CustomTextInput
          placeholder="Enter Building Facing"
          placeholderTextColor="#C2C2C2"
          value={BuildingFacing}
          onChangeText={(BuildingFacing) => setBuildingFacing(BuildingFacing)}
          styleview={styles.styleview}
        />
        {errors.BuildingFacing && <Text style={styles.error}>{errors.BuildingFacing}</Text>}
        <Text style={styles.inuttextstyletext}>{string.BuildingFacing}</Text>
        <CustomTextInput
          placeholder="Enter Car Parking"
          placeholderTextColor="#C2C2C2"
          value={carparking}
          onChangeText={(carparking) => setCarparking(carparking)}
          styleview={styles.styleview}
        />
        {errors.carparking && <Text style={styles.error}>{errors.carparking}</Text>}
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
            <TouchableOpacity onPress={selectImage}
            >
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

export default AddrentProperty

