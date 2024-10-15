import { Image, ImageBackground, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { styles } from './styles'
import Swiper from 'react-native-swiper'
import { icons } from '../../Helper/icons'
import { string } from '../../Helper/string'
import TabbottomviewComponets from '../../Componets/TabViewComponets/TabbottomviewComponets'
import ReactNativeModal from 'react-native-modal'
import ButtonComponets from '../../Componets/Button/ButtonComponets'
import { useNavigation } from '@react-navigation/native'
import MapView, { Marker } from 'react-native-maps';
import { getaddreviewapi, getrecommendationsapi, reportsadsapi } from '../../../APICall'
import AsyncStorage from '@react-native-community/async-storage'
import { ActivityIndicator } from 'react-native'
const PropertyDetails = ({ route }) => {
  const [modalVisible, setModalVisible] = useState()
  const [modalVisible2, setModalVisible2] = useState()
  const [loading, setLoading] = useState(false);
  const [rating, setRating] = useState(0);
  const [text, setText] = useState();
  const navigation = useNavigation();
  const [proprrtyrecommendations, setPropertyRecommendations] = useState('')
  const homedetails = route?.params?.homedetails;
  console.log('homedetails------------', homedetails)
  const PropertyImages = homedetails.image.split(',');
  console.log('========================', PropertyImages)
  const [id, setID] = useState('');
  useEffect(() => {
    const loginallData = async () => {
      const userdata = await AsyncStorage.getItem('logindata');
      const finaluserdata = JSON.parse(userdata);
      // console.log('finaluserdata ----------------------------', finaluserdata)
      setID(finaluserdata.id);
      getrecommendationsdata(finaluserdata.id);
      // console.log('finaluserdata.id ===========================', finaluserdata.id)
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
      setPropertyRecommendations(res.data.property)
    } finally {
      setLoading(false);
    }
  };


  const addreviewdata = async () => {
    setLoading(true);
    try {
      const data = {
        user_id: homedetails.user_id,
        type: 1,
        property_id: homedetails.id,
        rate: rating
      };
      console.log('data --------Review--------', data)
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
        user_id: homedetails.user_id,
         type: 1,
         ads_id:homedetails.id,
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

            {PropertyImages.map((imagePath, index) => (
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
          <Text style={styles.microtext}>{homedetails.property_name}</Text>
          <TouchableOpacity style={styles.viewhe}>
            <View style={styles.mdiforw}>
              <Image source={icons.mdiii} style={styles.mdiiistylle}></Image>
              <Text style={styles.VERIFIEDtext}>{string.VERIFIEDSELLER}</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.mdiforw2}>
          <Text style={styles.modelstyle}>2022 Model </Text>
          <TouchableOpacity onPress={() => { setModalVisible(true); }} style={styles.marle}>

            <Image source={icons.star} style={styles.star} />
          </TouchableOpacity>
          <Text style={[styles.modelstyle, styles.modelstyle3]}>
            {homedetails.avg_rate ? roundToHalf(homedetails.avg_rate) : '0.0'}
          </Text>
        </View>
        <View style={[styles.mdiforw2, styles.mdiforwre]}>
          <Image source={icons.mapsandflags} style={styles.mapsandflags2} />
          <Text style={[styles.West]}>{homedetails.area_location}</Text>
          <Text style={styles.rupes}>₹ {homedetails.amount}</Text>
        </View>
        <View style={[styles.viewstyles]}></View>
        <View style={styles.threeviewstylerow}>
          <View style={styles.threewi}>
            <View style={styles.flexrowcon}>
              <Image source={icons.homere} style={styles.datedstyle}></Image>

              <Text style={[styles.ownertext, styles.ownertext2]}>{homedetails.sqft}</Text>

            </View>
          </View>
          <View style={styles.threewi}>
            <View style={styles.flexrowcon}>
              <Image source={icons.nourth} style={styles.datedstyle}></Image>

              <Text style={[styles.ownertext, styles.ownertext2]}>North Facing</Text>

            </View>
          </View>
          <View style={styles.threewi}>
            <View style={styles.flexrowcon}>
              <Image source={icons.fluentxs} style={styles.datedstyle}></Image>

              <Text style={[styles.ownertext, styles.ownertext2]}>{homedetails.bedrooms}</Text>

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
                <Text style={styles.ownertext}>{formatDate(homedetails.created_date)}</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.viewstyles}></View>
        <Text style={styles.Description}>{string.Description}</Text>
        <Text style={styles.Microsoft}>{homedetails.description}</Text>
        <Text style={styles.Description}> Property Details</Text>
        <View style={styles.flexrowviewtec}>
          <View style={styles.threebott}>
            <Text style={[styles.Processor]}>Type</Text>
          </View>
          <View style={styles.dotstyle}>
            <Text style={[styles.Processor]}>:</Text>
          </View>
          <View style={styles.dotstylein}>
            <Text style={styles.Inteltext}>{homedetails.property_type}</Text>
          </View>
        </View>
        <View style={styles.flexrowviewtec}>
          <View style={styles.threebott}>
            <Text style={[styles.Processor]}>Bedrooms</Text>
          </View>
          <View style={styles.dotstyle}>
            <Text style={[styles.Processor]}>:</Text>
          </View>
          <View style={styles.dotstylein}>
            <Text style={styles.Inteltext}>{homedetails.bedrooms}</Text>
          </View>
        </View>
        <View style={styles.flexrowviewtec}>
          <View style={styles.threebott}>
            <Text style={[styles.Processor]}>Construction
              Status</Text>
          </View>
          <View style={styles.dotstyle}>
            <Text style={[styles.Processor]}>:</Text>
          </View>
          <View style={styles.dotstylein}>
            <Text style={styles.Inteltext}>{homedetails.construction_status}</Text>
          </View>
        </View>
        <View style={styles.flexrowviewtec}>
          <View style={styles.threebott}>
            <Text style={[styles.Processor]}>Maintainers Monthly
              Fees </Text>
          </View>
          <View style={styles.dotstyle}>
            <Text style={[styles.Processor]}>:</Text>
          </View>
          <View style={styles.dotstylein}>
            <Text style={styles.Inteltext}>Rs : {homedetails.maintenance}</Text>
          </View>
        </View>
        <View style={styles.flexrowviewtec}>
          <View style={styles.threebott}>
            <Text style={[styles.Processor]}>Listed by</Text>
          </View>
          <View style={styles.dotstyle}>
            <Text style={[styles.Processor]}>:</Text>
          </View>
          <View style={styles.dotstylein}>
            <Text style={styles.Inteltext}>{homedetails.listedby}</Text>
          </View>
        </View>
        <View style={styles.flexrowviewtec}>
          <View style={styles.threebott}>
            <Text style={[styles.Processor]}>Super Buildup Area ( FT2 )</Text>
          </View>
          <View style={styles.dotstyle}>
            <Text style={[styles.Processor]}>:</Text>
          </View>
          <View style={styles.dotstylein}>
            <Text style={styles.Inteltext}>600</Text>
          </View>
        </View>
        <View style={styles.flexrowviewtec}>
          <View style={styles.threebott}>
            <Text style={[styles.Processor]}>Carpet Area ( FT2 )</Text>
          </View>
          <View style={styles.dotstyle}>
            <Text style={[styles.Processor]}>:</Text>
          </View>
          <View style={styles.dotstylein}>
            <Text style={styles.Inteltext}>{homedetails.carpetarea}</Text>
          </View>
        </View>
        <View style={styles.flexrowviewtec}>
          <View style={styles.threebott}>
            <Text style={[styles.Processor]}>Bachelors Allowed </Text>
          </View>
          <View style={styles.dotstyle}>
            <Text style={[styles.Processor]}>:</Text>
          </View>
          <View style={styles.dotstylein}>
            <Text style={styles.Inteltext}>{homedetails.bachelors_allowed}</Text>
          </View>
        </View>
        <View style={styles.flexrowviewtec}>
          <View style={styles.threebott}>
            <Text style={[styles.Processor]}>Total Floors</Text>
          </View>
          <View style={styles.dotstyle}>
            <Text style={[styles.Processor]}>:</Text>
          </View>
          <View style={styles.dotstylein}>
            <Text style={styles.Inteltext}>{homedetails.total_floors}</Text>
          </View>
        </View>

        <View style={styles.flexrowviewtec}>
          <View style={styles.threebott}>
            <Text style={[styles.Processor]}>Car Parking</Text>
          </View>
          <View style={styles.dotstyle}>
            <Text style={[styles.Processor]}>:</Text>
          </View>
          <View style={styles.dotstylein}>
            <Text style={styles.Inteltext}>{homedetails.car_parking}</Text>
          </View>
        </View>

        <View style={styles.flexrowviewtec}>
          <View style={styles.threebott}>
            <Text style={[styles.Processor]}>Floor No</Text>
          </View>
          <View style={styles.dotstyle}>
            <Text style={[styles.Processor]}>:</Text>
          </View>
          <View style={styles.dotstylein}>
            <Text style={styles.Inteltext}>{homedetails.floor_no}</Text>
          </View>
        </View>
        <View style={styles.flexrowviewtec}>
          <View style={styles.threebott}>
            <Text style={[styles.Processor]}>Facing</Text>
          </View>
          <View style={styles.dotstyle}>
            <Text style={[styles.Processor]}>:</Text>
          </View>
          <View style={styles.dotstylein}>
            <Text style={styles.Inteltext}>{homedetails.facing}</Text>
          </View>
        </View>
        <View style={styles.flexrowviewtec}>
          <View style={styles.threebott}>
            <Text style={[styles.Processor]}>Age of building</Text>
          </View>
          <View style={styles.dotstyle}>
            <Text style={[styles.Processor]}>:</Text>
          </View>
          <View style={styles.dotstylein}>
            <Text style={styles.Inteltext}>{homedetails.age_of_building}</Text>
          </View>
        </View>
        <View style={styles.flexrowviewtec}>
          <View style={styles.threebott}>
            <Text style={[styles.Processor]}>Furnished</Text>
          </View>
          <View style={styles.dotstyle}>
            <Text style={[styles.Processor]}>:</Text>
          </View>
          <View style={styles.dotstylein}>
            <Text style={styles.Inteltext}>{homedetails.furnished}</Text>
          </View>
        </View>
        <View style={styles.ownerview}>
          <View style={styles.ownerunderview}>
            <View style={styles.imgview}>
              <Image
                source={{ uri: `https://www.demo603.amrithaa.com/mymediator/public/${homedetails.profile_image}` }} // Use backticks for template literals
                style={styles.proonwersty}></Image>
            </View>
            <View>
              <Text style={styles.Jayalakshmitext}>{homedetails.user_name}</Text>
              <Text style={styles.own}>Owner</Text>
            </View>
            <TouchableOpacity onPress={() => { navigation.navigate('ProfileScreen') }} style={styles.potext}>
              <Text style={styles.SeeProfile}>See Profile</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.viewstyles}></View>
        <View style={styles.flexrowstylesmsp}>
          <View style={[styles.mapviewstyle2]}>
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
        <Text style={styles.Description}>{string.RecommendedProparty}</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {/* <View style={styles.detailscreen}>
            <Image style={[styles.lep, styles.lep3]} source={icons.home2}></Image>
            <View style={styles.imagview}></View>
            <Text style={[styles.rupes, styles.rupestwo]}>₹ 5,00,000</Text>
            <Text style={styles.microtext3}>YAMAHA MT 15 V2</Text>
            <Text style={styles.yeartext}>2019 - 13,000 km</Text>
            <View style={[styles.mdiforw2, styles.mdiforwre]}>
              <Image source={icons.mapsandflags} style={styles.mapsandflags22} />
              <Text style={[styles.Mambalam]}>West Mambalam, Chennai</Text>
            </View>
          </View> */}


          {proprrtyrecommendations.length > 0 ? (
            proprrtyrecommendations.map((recompro, index) => (
              <View key={index}>
                <View style={styles.detailscreen}>
                  <Image style={[styles.lep, styles.lep3]} source={{
                    uri: recompro.image ? `https://www.demo603.amrithaa.com/mymediator/public/${recompro.image.split(',')[0]}` : null
                  }} ></Image>
                  <View style={styles.imagview}></View>
                  <View style={styles.flrpropr}>
                    <Text style={[styles.microtext3, styles.microtext3s]}>{recompro.property_name}</Text>
                    <Image source={icons.mapsandflags} style={[styles.mapsandflags22, styles.mapsandflags22ds]} />
                    <Text style={[styles.Mambalam, styles.Mambalamas]}>{recompro.location}</Text>
                  </View>
                  <Text style={styles.yeartext}>{recompro.property_type}</Text>
                  <View style={[styles.mdiforw2, styles.mdiforwre]}>
                    <Image source={icons.squre} style={styles.squre} />
                    <Text style={styles.yeartext}>{recompro.sqft}</Text>
                    <Text style={[styles.rupes, styles.rupestwo]}>₹ {recompro.amount}</Text>

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
          <TouchableOpacity onPress={() => { navigation.navigate('PropertyEnquiry', { property_Id: homedetails.id }) }} style={styles.enqubutton}>
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

export default PropertyDetails

