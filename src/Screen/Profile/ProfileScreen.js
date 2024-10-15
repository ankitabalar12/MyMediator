import { Alert, Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import React, { createContext, useContext, useEffect, useState } from 'react'
import HeaderTitle from '../../Componets/HeaderTitle/HeaderTitle'
import { styles } from './styles'
import { string } from '../../Helper/string'
import { icons } from '../../Helper/icons'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker'
import SearchComponest from '../../Componets/SearchComponets/SearchComponest'
import HeaderUserName from '../../Componets/HeaderUserName/HeaderUserName'

import ButtonComponets from '../../Componets/Button/ButtonComponets'
import ReactNativeModal from 'react-native-modal'
import { Switch, } from 'react-native-elements'
import AsyncStorage from '@react-native-community/async-storage'
import { getconfigall, getconfigprivacy, updateUserProfileData, uploadimagedata } from '../../../APICall'
import WebView from 'react-native-webview'
import { ActivityIndicator } from 'react-native'
// const ThemeContext = createContext();

// // Create a custom hook to use the theme
// const useTheme = () => useContext(ThemeContext);

const ProfileScreen = ({ navigation }) => {
  const [is_select, setSelect] = useState(null)
  const [selectedImage, setSelectedImage] = useState([]);
  console.log('selectedImages-----', selectedImage)
  const [modalVisible, setModalVisible] = useState()
  const [id, setID] = useState('');
  const [name, setName] = useState(false);
  const [imageUri, setImageUri] = useState();
  const [imageUpdated, setImageUpdated] = useState()
  const [loading, setLoading] = useState(false);
  const [PhoneNumber, setPhoneNumber] = useState('');
  const [email_id, setEmail_id] = useState('');
  const [data, setData] = useState([])

  useEffect(() => {
    const loginallData = async () => {
      const userdata = await AsyncStorage.getItem('logindata');
      const finaluserdata = JSON.parse(userdata);
      setName(finaluserdata.name);
      setID(finaluserdata.id);

      console.log('name >', finaluserdata.name);

    }
    loginallData();
    updateProfileData();
    getconfigData();
  }, [])

  const toggleModal = () => {
    setModalVisible(!modalVisible)
  }
  const selectcard = async (id) => {
    setSelect(id)
  }


  const handleLogout = () => {
    Alert.alert(
      'Logout',
      'Are you sure you want to log out?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Logout',
          onPress: async () => {
            const finalRes = await AsyncStorage.removeItem('logindata');
            console.log(finalRes)
            navigation.navigate('LoginScreen');
          },
        },
      ],
      { cancelable: false }
    );
  };
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
          onPress: () => {
            selectImage();

          },

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

  const openCamera = async () => {
    let options = {
      mediaType: 'photo',
      includeBase64: true,
    }
    launchCamera(options, async (resp) => {
      const includeBase64 = resp.assets[0].base64;
      const data = {
        base64: 'data:image/jpeg;base64,' + includeBase64,
      }
      const userpic = await uploadimagedata(global.url + 'uploadimage', data)
      if (userpic.data) {
        console.log('userpic >>> ', userpic.data)
        setImageUri(`https://www.demo603.amrithaa.com/mymediator/public/` + userpic.data);
        setImageUpdated(userpic.data)
        await AsyncStorage.setItem('profile_image', `https://www.demo603.amrithaa.com/mymediator/public/` + userpic.data);
      }
    });
  }

  const openLibrary = () => {
    let options = {
      mediaType: 'photo',
      includeBase64: true,
      base64: true,
      maxHeight: 200,
      maxWidth: 200,
    };
    launchImageLibrary(options, async (res) => {
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

  const getconfigData = async () => {
    try {
      setLoading(true);
      const res = await getconfigall(global.url + 'getconfig', data);
      setData(res.data[1]);
    } catch (error) {
      console.error('Error fetching onboardscreen data:', error);
    } finally {
      setLoading(false);
    }
  };
  const parseHtml = (html) => {
    const paragraphs = html.split(/<\/?p>/).filter(Boolean);
    return paragraphs.map((para, index) => (
      <Text key={index} style={styles.paragraph}>
        {para.replace(/<strong>(.*?)<\/strong>/g, (match, p1) => `\n${p1}\n`)} {/* Handling strong tags */}
      </Text>
    ));
  };

  const htmlContent = `
      <p>Terms & condition</p>
    `;


  const parseHtml2 = (html) => {
    const elements = html.split(/<\/?p>|<br\s*\/?>/).filter(Boolean);
    return elements.map((element, index) => {
      if (element.includes('<strong>')) {
        const parts = element.split(/<strong>(.*?)<\/strong>/g);
        return (
          <Text key={index}>
            {parts.map((part, i) =>
              part === ''
                ? <Text key={i} style={styles.bold}>{part}</Text>
                : <Text key={i}>{part}</Text>
            )}
          </Text>
        );
      }
      return <Text key={index}>{element}</Text>;
    });
  };
  const htmlContent2 = `
  <p><strong>Terms &amp; condition text</strong><br><br>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
`;
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
        profile_image: imageUri,
      };

      if (imageUri !== null) {
        const res = await updateUserProfileData(global.url + 'updateuserprofile', data);
      }
      setID(userData.id);
      setPhoneNumber(userData.mobile);
      setName(userData.name);
      setEmail_id(userData.email);
      setImageUri(userData.profile_image);
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
        <Text style={styles.make}>Profile</Text>
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
        {/* </View> */}
        <TouchableOpacity onPress={() => {
          selectcard(1);
          navigation.navigate('MyDetails')
        }} style={[styles.boxview, { backgroundColor: is_select === 1 ? '#02487C' : '#fff' }]}>
          <View style={styles.flexrow}>
            <Image source={icons.myditails} style={[styles.myditails, { tintColor: is_select === 1 ? '#fff' : '#000' }]}
            />
            <Text style={[styles.textstyl3, { color: is_select === 1 ? "#fff" : '#000' }]}>{string.Mydetails}</Text>
          </View>
        </TouchableOpacity >
        <TouchableOpacity onPress={() => {
          selectcard(2);
          navigation.navigate('Enquirylist')
        }} style={[styles.boxview, { backgroundColor: is_select === 2 ? '#02487C' : '#fff' }]}>
          <View style={styles.flexrow}>
            <Image source={icons.enquryimg} style={[styles.bell, { tintColor: is_select === 2 ? '#fff' : '#000' }]} />
            <Text style={[styles.textstyle2, { color: is_select === 2 ? "#fff" : '#000' }]}>{string.Enquirylist}</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {
          selectcard(3);
          navigation.navigate('Subscription')
        }} style={[styles.boxview, { backgroundColor: is_select === 3 ? '#02487C' : '#fff' }]}>
          <View style={styles.flexrow}>
            <Image source={icons.subscrition} style={[styles.subscrition, { tintColor: is_select === 3 ? '#fff' : '#000' }]} />
            <Text style={[styles.textstyl3, { color: is_select === 3 ? "#fff" : '#000' }]}>{string.SubscriptionHistory}</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {
          selectcard(4);
          navigation.navigate('ProfileMyPropertyDetails')
        }} style={[styles.boxview, { backgroundColor: is_select === 4 ? '#02487C' : '#fff' }]}>
          <View style={styles.flexrow}>
            <Image source={icons.gallaryimg} style={[styles.gallaryimg, { tintColor: is_select === 4 ? '#fff' : '#000' }]} />
            <Text style={[styles.textstyl3, { color: is_select === 4 ? "#fff" : '#000' }]}>{string.MyPropertydetails}</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {
          selectcard(5);
          setModalVisible(true);
        }} style={[styles.boxview, { backgroundColor: is_select === 5 ? '#02487C' : '#fff' }]}>
          <View style={styles.flexrow}>
            <Image source={icons.searchim} style={[styles.myditails, { tintColor: is_select === 5 ? '#fff' : '#000' }]} />
            <Text style={[styles.textstyl3, { color: is_select === 5 ? "#fff" : '#000' }]}>{string.TermsandConditions}</Text>
          </View>
        </TouchableOpacity>

        <ReactNativeModal
          isVisible={modalVisible}
          onBackdropPress={toggleModal}
          transparent={true}
          backdropColor={'rgba(0, 0, 0, 0.5)'}
          style={{ margin: 0, bottom: 0 }}
          backdropOpacity={0.5}
          termsandconditionstyle={styles.termsandconditionstyle}>
          <View style={styles.mainvew}>
            <Text style={styles.styleoftext}>{parseHtml(htmlContent)}</Text>
            <Text style={styles.textstyle4}>{parseHtml2(htmlContent2)}</Text>
            <ButtonComponets
              savebutton={styles.savebutton}
              title={string.ok}
              onPress={() => {
                setModalVisible(false);
              }}
            />
          </View>
        </ReactNativeModal>
        <TouchableOpacity onPress={() => {
          selectcard(6);
          navigation.navigate('Privacypolicy')
        }}
          style={[styles.boxview, { backgroundColor: is_select === 6 ? '#02487C' : '#fff' }]}>
          <View style={styles.flexrow}>
            <Image source={icons.papar} style={[styles.myditails, { tintColor: is_select === 6 ? '#fff' : '#000' }]} />
            <Text style={[styles.textstyl3, { color: is_select === 6 ? "#fff" : '#000' }]}>{string.Privacypolicy}</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {
          selectcard(8);
        }}
          style={[styles.boxview, { backgroundColor: is_select === 8 ? '#02487C' : '#fff' }]}>
          <View style={styles.flexrow}>
            <Image source={icons.deleteAccoun} style={[styles.deleteAccoun, { tintColor: is_select === 8 ? '#fff' : '#000' }]} />
            <Text style={[styles.textstyl3, { color: is_select === 8 ? "#fff" : '#000' }]}>Delete Account</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {
          selectcard(9);
          navigation.navigate('PostProfiles')
        }}
          style={[styles.boxview, { backgroundColor: is_select === 9 ? '#02487C' : '#fff' }]}>
          <View style={styles.flexrow}>
            <Image source={icons.postoffice} style={[styles.deleteAccoun, { tintColor: is_select === 9 ? '#fff' : '#000' }]} />
            <Text style={[styles.textstyl3, { color: is_select === 9 ? "#fff" : '#000' }]}>Post Profiles</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleLogout} style={[styles.boxview, { backgroundColor: is_select === 7 ? '#02487C' : '#fff' }]}>
          <View style={styles.flexrow}>
            <Image source={icons.checkout} style={[styles.myditails, { tintColor: is_select === 7 ? '#fff' : '#000' }]} />
            <Text style={[styles.textstyl3, { color: is_select === 7 ? "#fff" : '#000' }]}>{string.logout}</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.marinbottom} />
      </ScrollView>
    </View>

  )
}

export default ProfileScreen

