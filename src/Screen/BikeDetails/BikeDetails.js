import { Image, ImageBackground, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { styles } from './styles'
import Swiper from 'react-native-swiper'
import { icons } from '../../Helper/icons'
import { string } from '../../Helper/string'
import ReactNativeModal from 'react-native-modal'
import ButtonComponets from '../../Componets/Button/ButtonComponets'
import { useNavigation } from '@react-navigation/native'
import MapView, { Marker } from 'react-native-maps';
import AsyncStorage from '@react-native-community/async-storage'
import { getaddreviewapi, getrecommendationsapi, reportsadsapi } from '../../../APICall'
import { ActivityIndicator } from 'react-native'
const BikeDetails = ({ route }) => {
  const [modalVisible, setModalVisible] = useState()
  const [modalVisible2, setModalVisible2] = useState()

  const [rating, setRating] = useState(0);
  const navigation = useNavigation();
  const [id, setID] = useState('');
  const [loading, setLoading] = useState(false);
  const [text, setText] = useState();
const [bikerecommendations, setBikeRecommendations] = useState('')
  const bikedetails = route?.params?.bikedetails;
  const bikeImages = bikedetails.image.split(',');
  useEffect(() => {
    const loginallData = async () => {
      const userdata = await AsyncStorage.getItem('logindata');
      const finaluserdata = JSON.parse(userdata);
      setID(finaluserdata.id);
      getrecommendationsdata(finaluserdata.id);
    };
    loginallData();
  }, []);
  const toggleModal = () => {
    setModalVisible(!modalVisible)
  }
  const toggleModal2 = () => {
    setModalVisible2(!modalVisible2)
  }
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-GB', {
      day: '2-digit',
      month: 'short',
      year: '2-digit'
    }).replace(/ /g, '-');
  };
  const getrecommendationsdata = async (id) => {
    setLoading(true);
    try {
      const data = {
        user_id: id,
      };
      const res = await getrecommendationsapi(global.url + 'getrecommendations', data);
       setBikeRecommendations(res.data.bike)
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  const addreviewdata = async () => {
    setLoading(true);
    try {
      const data = {
        user_id: bikedetails.user_id,
        type: 4,
        property_id: bikedetails.id,
        rate: rating
      };
      const res = await getaddreviewapi(global.url + 'addreview', data);
      console.log('res-------------', res)
   } finally {
      setLoading(false);
    }
  };


 
  const roundToHalf = (num) => {
    return (Math.round(num * 2) / 2).toFixed(1);
  };

  const reportsadsata = async () => {
    setLoading(true);
    try {
      const data = {
        user_id: bikedetails.user_id,
         type: 4,
         ads_id:bikedetails.id,
         message:text,

      };
      const res = await reportsadsapi(global.url + 'reportsads', data);
      console.log('res-------------', res)
   } finally {
      setLoading(false);
    }
  };
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.sliderview}>
          <Swiper style={styles.wrapper}
            loop={false}
            showsPagination
            paginationStyle={styles.paginationStyle}
            dotStyle={styles.dotStyle}
            activeDotStyle={styles.activeDotStyle}>

            {bikeImages.map((imagePath, index) => (
              <>
                <View style={styles.slide}>
                  <ImageBackground
                    // source={icons.bikeimg}
                    source={{ uri: `https://www.demo603.amrithaa.com/mymediator/public/${imagePath}` }} // Assuming the base URL for the images

                    style={styles.image}
                  >
                    {/* <Text>{imagePath}</Text> */}
                    <View style={styles.detaisview}>
                      <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Image source={icons.left} style={styles.leftarrow}></Image>
                      </TouchableOpacity>
                      <TouchableOpacity style={styles.shreicon}>
                        <Image source={icons.share} style={styles.sharearrow}></Image>
                      </TouchableOpacity>
                      <TouchableOpacity style={styles.shreicon2}>
                        <Image source={icons.heartw2} style={styles.sharearrow2}></Image>
                      </TouchableOpacity>
                    </View>
                  </ImageBackground>
                </View>

              </>
            ))}
        </Swiper>
        </View>
        <View style={styles.flexrowview}>
          <Text style={styles.microtext}>{bikedetails.brand_model}</Text>
          <TouchableOpacity style={styles.viewhe}>
            <View style={styles.mdiforw}>
              <Image source={icons.mdiii} style={styles.mdiiistylle}></Image>
              <Text style={styles.VERIFIEDtext}>{string.VERIFIEDSELLER}</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.mdiforw2}>
          <Text style={styles.modelstyle}>{bikedetails.year} Model </Text>
          <TouchableOpacity onPress={() => { setModalVisible(true) }} style={styles.marle}>
            <Image source={icons.star} style={styles.star} />
          </TouchableOpacity>
          <Text style={[styles.modelstyle, styles.modelstyle3]}>
            {bikedetails.avg_rate ? roundToHalf(bikedetails.avg_rate) : '0.0'}
            </Text>
        </View>
        <View style={[styles.mdiforw2, styles.mdiforwre]}>
          <Image source={icons.mapsandflags} style={styles.mapsandflags2} />
          <Text style={[styles.West]}>{bikedetails.location}</Text>
          <Text style={styles.rupes}>₹ {bikedetails.amount}</Text>
        </View>
        <View style={[styles.viewstyles]}></View>
        <View style={styles.threeviewstylerow}>
          <View style={styles.threewi}>
            <View style={styles.flexrowcon}>
              <Image source={icons.pretrol} style={styles.datedstyle}></Image>

              <Text style={[styles.ownertext, styles.ownertext2]}>Petrol</Text>

            </View>
          </View>
          <View style={styles.threewi}>
            <View style={styles.flexrowcon}>
              <Image source={icons.twotonespeed} style={styles.datedstyle}></Image>

              <Text style={[styles.ownertext, styles.ownertext2]}>{bikedetails.km_driven} KM</Text>

            </View>
          </View>
          <View style={styles.threewi}>
            <View style={styles.flexrowcon}>
              <Image source={icons.dated} style={styles.datedstyle}></Image>

              <Text style={[styles.ownertext, styles.ownertext2]}>{bikedetails.year} Model</Text>

            </View>
          </View>
        </View>
        <View style={[styles.viewstyles, styles.viewstylessa]}></View>
        <View style={styles.threeviewstylerow}>
          <View style={styles.threewi}>
            <View style={styles.flexrowcon}>
              <Image source={icons.mdipersonkey} style={styles.mdipersonkeystyle}></Image>
              <View style={styles.mrlft}>
                <Text style={styles.ownertext}>Owner</Text>
                <Text style={styles.ownertext}>1ST</Text>
              </View>
            </View>
          </View>
          <View style={styles.threewi}>
            <View style={styles.flexrowcon}>
              <Image source={icons.loc} style={styles.loc}></Image>
              <View style={styles.mrlft}>
                <Text style={styles.ownertext}>T.Nagar</Text>
                <Text style={styles.ownertext}>Chennai</Text>
              </View>
            </View>
          </View>
          <View style={styles.threewi}>
            <View style={styles.flexrowcon}>
              <Image source={icons.materialgh} style={styles.materialgh}></Image>
              <View style={styles.mrlft}>
                <Text style={styles.ownertext}>Posting Date</Text>
                <Text style={styles.ownertext}>{formatDate(bikedetails.created_date)}</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.viewstyles}></View>
        <Text style={styles.Description}>{string.Description}</Text>
        <Text style={styles.Microsoft}>{bikedetails.description}</Text>
        <Text style={styles.Description}>Details</Text>
        <View style={styles.flexrowviewtec}>
          <View style={styles.threebott}>
            <Text style={[styles.Processor]}>Brand</Text>
          </View>
          <View style={styles.dotstyle}>
            <Text style={[styles.Processor]}>:</Text>
          </View>
          <View style={styles.dotstylein}>
            <Text style={styles.Inteltext}>Royal Enfield</Text>
          </View>
        </View>
        <View style={styles.flexrowviewtec}>
          <View style={styles.threebott}>
            <Text style={[styles.Processor]}>Modern</Text>
          </View>
          <View style={styles.dotstyle}>
            <Text style={[styles.Processor]}>:</Text>
          </View>
          <View style={styles.dotstylein}>
            <Text style={styles.Inteltext}>Bullet Electra 350</Text>
          </View>
        </View>
        <View style={styles.flexrowviewtec}>
          <View style={styles.threebott}>
            <Text style={[styles.Processor]}>Year</Text>
          </View>
          <View style={styles.dotstyle}>
            <Text style={[styles.Processor]}>:</Text>
          </View>
          <View style={styles.dotstylein}>
            <Text style={styles.Inteltext}>{bikedetails.year}</Text>
          </View>
        </View>
        <View style={styles.flexrowviewtec}>
          <View style={styles.threebott}>
            <Text style={[styles.Processor]}>KM Driven</Text>
          </View>
          <View style={styles.dotstyle}>
            <Text style={[styles.Processor]}>:</Text>
          </View>
          <View style={styles.dotstylein}>
            <Text style={styles.Inteltext}>{bikedetails.km_driven}</Text>
          </View>
        </View>
        <View style={styles.ownerview}>
          <View style={styles.ownerunderview}>
            <View style={styles.imgview}>
              <Image
                source={{ uri: `https://www.demo603.amrithaa.com/mymediator/public/${bikedetails.profile_image}` }} // Use backticks for template literals
                style={styles.proonwersty}
              />
            </View>
            <View>
              <Text style={styles.Jayalakshmitext}>{bikedetails.user_name}</Text>
              <Text style={styles.own}>Owner</Text>
            </View>
            <TouchableOpacity
              onPress={() => { navigation.navigate('ProfileScreen') }}
              style={styles.potext}>
              <Text style={styles.SeeProfile}>See Profile</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.viewstyles}></View>
        <View style={styles.flexrowstylesmsp}>
          <View style={styles.mapviewstyle2}>
            <View style={styles.flexrowcon}>
              <Image source={icons.loc} style={styles.loc2}></Image>
              <View style={styles.mtm}>
                <Text style={[styles.ownertext,]}>T.Nagar</Text>
                <Text style={[styles.ownertext, styles.ownertext3]}>Chennai</Text>
              </View>
            </View>
          </View>
          <TouchableOpacity onPress={() => { navigation.navigate('Location') }} style={styles.mapviewstyle}>
            <MapView
              style={styles.map}
              initialRegion={{
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              }}>

            </MapView>
            <View style={styles.blueview}></View>
          </TouchableOpacity>

        </View>
        <View style={styles.mapview}>

          <View style={styles.adsrow}></View>
        </View>
        <View style={[styles.viewstyles, styles.viewstyles3]}></View>
        <View style={styles.flextrowid}>
          <Text style={styles.adstext}>ADS ID :
            <Text style={styles.idtext}>148562548</Text>
          </Text>
          <TouchableOpacity onPress={() => {
            setModalVisible2(true);
          }}>
            <Text style={styles.REPORT}>REPORT AD</Text>
          </TouchableOpacity>

        </View>
        <View style={styles.viewstyles}></View>
        <Text style={styles.Description}>{string.RecommendedBike}</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
         
          {bikerecommendations.length > 0 ? (
            bikerecommendations.map((recomelec, index) => (
              <View key={index}>
                <View style={styles.detailscreen}>
                  <Image style={[styles.lep, styles.lep3]} source={{
                    uri: recomelec.image ? `https://www.demo603.amrithaa.com/mymediator/public/${recomelec.image.split(',')[0]}` : null
                  }}></Image>
                  <View style={styles.imagview}></View>
                  <Text style={[styles.rupes, styles.rupestwo]}>₹ {recomelec.amount}</Text>
                  <Text style={styles.microtext3}>{recomelec.brand_model}</Text>
                  <Text style={styles.yeartext}>{recomelec.year} - {recomelec.km_drive}</Text>
                  <View style={[styles.mdiforw2, styles.mdiforwre]}>
                    <Image source={icons.mapsandflags} style={styles.mapsandflags22} />
                    <Text style={[styles.Mambalam]}>{recomelec.location}</Text>
                  </View>
                </View>

              </View>
            ))
          ) : (
            <Text style={styles.adstext}>No Data Found</Text>
          )}

        </ScrollView>
        {loading && <ActivityIndicator size="large" color="#02487C" />}
        <View style={styles.enquributton}>
          <TouchableOpacity onPress={() => { navigation.navigate('BikeEnquiry', { bike_id: bikedetails.id }) }} style={styles.enqubutton}>
            <View style={styles.underview}>
              <Image style={styles.enqicon} source={icons.enqic}></Image>
              <Text style={styles.Enquirytext}>Enquiry</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.enqubutton}>
            <View style={styles.underview}>
              <Image style={styles.callicostyle} source={icons.callico}></Image>
              <Text style={styles.Enquirytext}>Call</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.marto} />
        <ReactNativeModal
          isVisible={modalVisible}
          onBackdropPress={toggleModal}
          transparent={true}
          backdropColor={'rgba(0, 0, 0, 0.7)'}
          style={{ margin: 0, bottom: 0 }}
          backdropOpacity={0.5}>
          <View style={styles.rateingmodal}>
            <Text style={styles.Feedbacktext}>Share your Feedback</Text>
            <View style={styles.flexrowstar}>
              {[1, 2, 3, 4, 5].map((star) => (
                <TouchableOpacity key={star} onPress={() => setRating(star)}>
                  <Image
                    source={star <= rating ? icons.star : icons.star}
                    size={40}
                    style={star <= rating ? styles.star2 : styles.star3}
                  />
                </TouchableOpacity>
              ))}
            </View>
            <ButtonComponets
              stylebutton={styles.stylebutton}
              title={string.Submit}
              styletextelec={styles.styletextelec}
              onPress={() => { 
                addreviewdata()
                setModalVisible(false)
               }}

            />
          </View>

        </ReactNativeModal>
        <ReactNativeModal
          isVisible={modalVisible2}
          onBackdropPress={toggleModal2}
          transparent={true}
          backdropColor={'rgba(0, 0, 0, 0.7)'}
          style={{ margin: 0, bottom: 0 }}
          backdropOpacity={0.5}>
          <View style={styles.modalview}>
            <Text style={styles.repotsaddtext}>Report Ads</Text>
            <Text style={styles.repotsaddtext2}>Enter Your Feedback</Text>
            <View style={styles.styleviewdescrip}>
              <TextInput
                placeholder="Enter your feedback"
                placeholderTextColor="#C2C2C2"
                value={text}
                onChangeText={(text) => setText(text)}
                style={styles.sttyinput}
                multiline={true}
              />
            </View>
            <TouchableOpacity onPress={() => {
              reportsadsata()
              setModalVisible2(false);
            }}
              style={styles.subview}>
              <Text style={styles.submittext}>Submit</Text>
            </TouchableOpacity>
          </View>
          </ReactNativeModal>
      </ScrollView>
      {/* <TabbottomviewComponets
        selectedId={1} goBackToScreen={goBackToScreen} /> */}
    </View>
  )
}

export default BikeDetails

