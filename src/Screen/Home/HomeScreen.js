import { ActivityIndicator, BackHandler, Image, ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { styles } from './styles'
import { string } from '../../Helper/string'
import { icons } from '../../Helper/icons'
import SearchComponest from '../../Componets/SearchComponets/SearchComponest'
import Swiper from 'react-native-swiper';
import CustomModal from '../../Componets/CustomModal/CustomModal'
import { useIsFocused } from '@react-navigation/native'
import AsyncStorage from '@react-native-community/async-storage'
import { getbikeapi, getcarapi, getelectronicsapi, getpropertydataall, getrecommendationsapi, getsliderdata, mostvisitpropertyall, popularpropertyall } from '../../../APICall'
import TabbottomviewComponets from '../../Componets/TabViewComponets/TabbottomviewComponets'
import HeaderUserName from '../../Componets/HeaderUserName/HeaderUserName'


const HomeScreen = ({ navigation }) => {


  const [is_select, setSelect] = useState(null)
  const [modalVisible, setModalVisible] = useState()
  const isFocused = useIsFocused();
  const [id, setID] = useState('');
  const [name, setName] = useState(false);
  const [loading, setLoading] = useState(false);
  const [property_data, setProperty_data] = useState(false);
  const [bikeProduce, setBikeProduce] = useState(false);
  const [electronicsProduce, setElectronicsProduce] = useState(false);
  const [carProduce, setCarProduce] = useState(false);
  const [popular_data, setPopular_data] = useState(false);
  const [mostvisitproperty_data, setMostvisitproperty_data] = useState(false);
  const [data2, setData2] = useState([])
  const [proprrtyrecommendations, setPropertyRecommendations] = useState('')
  const [carrecommendations, setcarRecommendations] = useState('')
  const [electrecommendations, setElectRecommendations] = useState('')
  const [bikerecommendations, setBikeRecommendations] = useState('')
  const [selecteditem, setSelectedItem] = useState('');
  useEffect(() => {
    const loginallData = async () => {
      const userdata = await AsyncStorage.getItem('logindata');
      const finaluserdata = JSON.parse(userdata);
      setName(finaluserdata.name);
      setID(finaluserdata.id);
      getpropertydata(finaluserdata.id);
      popularpropertydata(finaluserdata.id);
      mostvisitpropertydata(finaluserdata.id)
      getbikedata(finaluserdata.id)
      getelectronicsdata(finaluserdata.id)
      getcardata(finaluserdata.id)
      getrecommendationsdata(finaluserdata.id);
      // console.log('created_at-xccccccz-->', finaluserdata.name);
      // console.log('is_agency--->', finaluserdata.is_agency);
      // getuser(finaluserdata.id);
    };
    const handleBackButton = () => {
      if (isFocused) {
        BackHandler.exitApp();
        return true;
      }
      return false;
    };
    loginallData();
    getsliderdataall();

    BackHandler.addEventListener('hardwareBackPress', handleBackButton);
    return () => BackHandler.removeEventListener('hardwareBackPress', handleBackButton);
  }, [isFocused]);

  const selectcard = async (id) => {
    setSelect(id)
  }
  useEffect(() => {
    const id = 1;
    selectcard(id);
    setSelectedItem(id)
  }, []);
  const toggleModal = () => {
    setModalVisible(!modalVisible)
  }
  const getsliderdataall = async () => {
    const res = await getsliderdata(global.url + 'getslider', data2);
    setData2(res.data)
    console.log(res.data[0].document)
    // console.log('res <><><>', res)

  }



  const getrecommendationsdata = async (id) => {
    setLoading(true);
    try {
      const data = {
        user_id: id,
      };
      const res = await getrecommendationsapi(global.url + 'getrecommendations', data);
      setPropertyRecommendations(res.data.property)
      setcarRecommendations(res.data.car)
      setElectRecommendations(res.data.electronics)
      setBikeRecommendations(res.data.bike)
      // console.log('res.data <rrrrrrrrrrrrrrrrrrrrrrrrrrr>', res.data)
      // console.log('res.data.property ---ppppppppppp----', res.data.property)
      // console.log('res.data.property ---car----', res.data.car)
      // console.log('res.data.property ---elect----', res.data.electronics)
      // console.log('res.data.property ---bike----', res.data.bike)
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  const getpropertydata = async (id) => {
    setLoading(true);
    try {
      const data = {
        user_id: id,
      };
      const res = await getpropertydataall(global.url + 'getproperty', data);
      setProperty_data(res.data)
      console.log('res.data <PPPPPPPPPPPPPPPPPPPPPPP>', res.data)
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };
  const getbikedata = async (id) => {
    setLoading(true);
    const data = {
      user_id: id,
    };
    // console.log('global.ur =======================', global.ur)
    const res = await getbikeapi(global.url + 'getbike', data);
    setBikeProduce(res.data)
    // console.log('res.data <vvvvvvvvvvvvvvvv>', res.data)

  };

  const getelectronicsdata = async (id) => {
    setLoading(true);
    const data = {
      user_id: id,
    };
    // console.log('global.ur =======Electronics================', global.ur)
    const res = await getelectronicsapi(global.url + 'getelectronics ', data);
    setElectronicsProduce(res.data)
   console.log('res.data <vvvvvvvvElectronicsvvvvvvvv>', res.data)

  };
  const getcardata = async (id) => {
    setLoading(true);
    const data = {
      user_id: id,
    };
    // console.log('global.ur =======car================', global.ur)
    const res = await getcarapi(global.url + 'getcar', data);
    setCarProduce(res.data)
    // console.log('res.data <vvvvvvvvcarvvvvvvvv>', res.data)

  };
  const popularpropertydata = async (id) => {
    setLoading(true);
    try {
      const data = {
        user_id: id,
      };
      const res = await popularpropertyall(global.url + 'popularproperty', data);
      setPopular_data(res.data)
      console.log('res.data--------------------popular', res.data)
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  const mostvisitpropertydata = async (id) => {
    setLoading(true);
    try {
      const data = {
        user_id: id,
      };
      const res = await mostvisitpropertyall(global.url + 'mostvisitproperty', data);
      setMostvisitproperty_data(res.data)
      console.log('res.data --------mosti-------', res.data)
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  const passpopulatproperty = () => {
    navigation.navigate('PopularProperty', { popular_data: popular_data });
    console.log('popular_data <uytuyuyt>', popular_data);

  };


  const Individual = Array.isArray(property_data) ? property_data.filter(property => property.property_type === 'Individual house') : [];
  const IndividualPopular = Array.isArray(popular_data) ? popular_data.filter(property => property.property_type === 'Individual house') : [];
  const IndividualMostvisit = Array.isArray(mostvisitproperty_data) ? mostvisitproperty_data.filter(property => property.property_type === 'Individual house') : [];
  const BHK = Array.isArray(property_data) ? property_data.filter(property => property.property_type === '2BHK') : [];
  const BHKPopular = Array.isArray(popular_data) ? popular_data.filter(property => property.property_type === '2BHK') : [];
  const BHKMostvisit = Array.isArray(mostvisitproperty_data) ? mostvisitproperty_data.filter(property => property.property_type === '2BHK') : [];
  const flat = Array.isArray(property_data) ? property_data.filter(property => property.property_type === 'Flat') : [];
  const flatPopular = Array.isArray(popular_data) ? popular_data.filter(property => property.property_type === 'Flat') : [];
  const flatMostvisit = Array.isArray(mostvisitproperty_data) ? mostvisitproperty_data.filter(property => property.property_type === 'Flat') : [];

  const selectedcategories = (id) => {
    setSelectedItem(id)
  }


  return (
    <View style={styles.container}>
      <ScrollView>
        <HeaderUserName onPress={() => { navigation.navigate('Notification') }} />
        <SearchComponest
          onPress={() => {
            setModalVisible(true)
          }}
        />
        <CustomModal
          isVisible={modalVisible}
          onBackdropPress={toggleModal}
          transparent={true}
          backdropColor={'#fff'}
          style={{ margin: 0, bottom: 0 }}
          backdropOpacity={0}
          modalestyle={styles.modalestyle}

        />

        <View style={styles.subscrptionview}>
          <Text style={styles.your}>{string.Premium}</Text>

          <View style={styles.flexrowdraction}>
            <Image source={icons.premiummy} style={styles.premiummy} />
            <Text style={styles.yourtwo}>{string.YourSubscription}</Text>
          </View>
          <TouchableOpacity onPress={() => { navigation.navigate('Subscription') }} style={styles.viewnowstyle}>
            <Text style={styles.Viewnowtext}>{string.Viewnow}</Text>
          </TouchableOpacity>
        </View>
        <Text style={[styles.populartext, styles.Categoriestext]}>{string.Categories}</Text>

        <View style={[styles.flexrow3, styles.flexrowcar]}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <TouchableOpacity onPress={() => selectedcategories(1)} style={[styles.selecitemview, { borderColor: selecteditem === 1 ? '#d7d9db' : '#fff' }]}>
              <View>
                <Image source={icons.imagesgh} style={styles.slectedimg}></Image>
                <Text style={styles.pro}>PROPERTY</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => selectedcategories(2)} style={[styles.selecitemview, { borderColor: selecteditem === 2 ? '#d7d9db' : '#fff' }]}>
              <View>
                <Image source={icons.elecsel} style={styles.slectedimg}></Image>
                <Text style={styles.pro}>ELECTRONICS</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => selectedcategories(3)} style={[styles.selecitemview, { borderColor: selecteditem === 3 ? '#d7d9db' : '#fff' }]}>
              <View>
                <Image source={icons.carnew} style={styles.slectedimg}></Image>
                <Text style={styles.pro}>CAR</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => selectedcategories(4)} style={[styles.selecitemview, { borderColor: selecteditem === 4 ? '#d7d9db' : '#fff' }]} >
              <View>
                <Image source={icons.bikenew} style={styles.slectedimg4}></Image>
                <Text style={styles.pro}>BIKE</Text>
              </View>
            </TouchableOpacity>
          </ScrollView>
        </View>

        <View style={styles.haviewrow}>
          <View style={selecteditem === 1 ? styles.haflview : styles.haflview2} />
          <View style={selecteditem === 2 ? styles.haflview : styles.haflview2} />
          <View style={selecteditem === 3 ? styles.haflview : styles.haflview2} />
          <View style={selecteditem === 4 ? styles.haflview : styles.haflview2} />
        </View>
        <View style={styles.showviewstyle} />

        <ScrollView>
          {selecteditem == '1' ? (
            <>
              <View style={styles.flexrow3}>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                  <TouchableOpacity onPress={() => selectcard(1)} style={[styles.viewstyleselected, { backgroundColor: is_select === 1 ? '#1D74B5' : '#fff' }]}>
                    <Text style={[styles.alltextstyle, { color: is_select === 1 ? '#fff' : '#b3b3b3' }]}>{string.all}</Text>
                  </TouchableOpacity>

                  <TouchableOpacity onPress={() => selectcard(2)} style={[styles.viewstyleselected2, { backgroundColor: is_select === 2 ? '#1D74B5' : '#fff' }]}>
                    <Text style={[styles.alltextstyle, { color: is_select === 2 ? '#fff' : '#b3b3b3' }]}>{string.bhk}</Text>
                  </TouchableOpacity>

                  <TouchableOpacity onPress={() => selectcard(3)} style={[styles.viewstyleselected2, { backgroundColor: is_select === 3 ? '#1D74B5' : '#fff' }]}>
                    <Text style={[styles.alltextstyle, { color: is_select === 3 ? '#fff' : '#b3b3b3' }]}>{string.Plot}</Text>
                  </TouchableOpacity>

                  <TouchableOpacity onPress={() => selectcard(4)} style={[styles.viewstyleselected3, { backgroundColor: is_select === 4 ? '#1D74B5' : '#fff' }]}>
                    <Text style={[styles.alltextstyle, { color: is_select === 4 ? '#fff' : '#b3b3b3' }]}>{string.individual}</Text>
                  </TouchableOpacity>
                </ScrollView>
              </View>
              {is_select == '1' ? (
                <View>
                  <View style={styles.scrollvirestylerow}>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                      {property_data.length > 0 ? (
                        property_data.map((item3, index) => (
                          <View key={index}>
                            <TouchableOpacity onPress={() => { navigation.navigate('PropertyDetails', { homedetails: item3 }) }} style={styles.scrollviewstyle}>
                              <Image source={{ uri: `https://www.demo603.amrithaa.com/mymediator/public/${item3.image ? item3.image.split(',')[0] : null}` }} style={styles.homeimg1} />
                              <View style={styles.flexrow5}>
                                <Text style={styles.renttext}>{item3.property_name}</Text>

                                <Image source={icons.mapsandflags} style={styles.star} />
                                <Text style={styles.renttext2}>{item3.location}</Text>
                              </View>
                              <Text style={styles.Individual223}>{item3.property_type}</Text>
                              <View style={styles.flexrow65}>
                                <Image source={icons.squre} style={styles.squre} />
                                <Text style={styles.renttext4asd}>{item3.sqft}</Text>
                                <Image source={icons.Vector} style={styles.rupeesimg}></Image>
                                <Text style={styles.renttext4ree}>{item3.amount}</Text>
                              </View>
                            </TouchableOpacity>
                          </View>
                        ))
                      ) : (
                        <Text style={styles.adstext}></Text>
                      )}
                    </ScrollView>
                  </View>
                  <View style={[styles.rowview, { marginTop: -15 }]}>
                    <Text style={styles.populartext}>{string.Popular}</Text>
                    <TouchableOpacity onPress={passpopulatproperty} >
                      <Text style={styles.populartext}>{string.Viewall}</Text>
                    </TouchableOpacity>
                  </View>

                  {popular_data.length > 0 ? (
                    popular_data.slice(0, 3).map((item, index) => (

                      <View key={index}>
                        <TouchableOpacity style={styles.seconview} onPress={() => { navigation.navigate('PropertyDetails', { homedetails: item }) }}>
                          <View style={styles.flexdreac}>
                            <View style={styles.imgview}>
                              <Image source={{ uri: `https://www.demo603.amrithaa.com/mymediator/public/${item.image ? item.image.split(',')[0] : null}` }} style={styles.imgview} />
                            </View>
                            <View>
                              <View style={styles.textrow}>
                                <View style={styles.stylemenu}>
                                  <Text style={styles.sale}>{item.property_name}</Text>
                                </View>
                                <View style={styles.locview}>
                                  <View style={styles.flexmenustyle}>
                                    <Image source={icons.mapsandflags} style={styles.star} />

                                    <Text style={styles.West1}>{item.location}</Text>
                                  </View>
                                </View>
                              </View>

                              <View>
                                <View style={styles.rowtextstyle}>

                                  <Text style={styles.ind}>{string.Individual}</Text>
                                </View>
                              </View>
                              <View style={styles.viewstylesnew}>
                                <Image source={icons.squre} style={styles.squre1} />
                                <Text style={styles.renttext4asd}>{item.sqft}</Text>
                              </View>
                              <View style={styles.menutwo}>
                                <View style={styles.flexmenu}>
                                  <Image source={icons.Vector} style={styles.rupeesimgtwo}></Image>
                                  <Text style={styles.renttext5}>{item.amount}</Text>
                                  <View style={styles.greenbuttonstyle}>
                                    <TouchableOpacity style={styles.backiconstyle}
                                      onPress={() => { navigation.navigate('PropertyDetails', { homedetails: item }) }}>
                                      <Image source={icons.next} style={styles.next} />
                                    </TouchableOpacity>
                                  </View>
                                </View>
                              </View>
                            </View>
                          </View>
                        </TouchableOpacity>
                      </View>
                    ))
                  ) : (
                    <Text style={styles.adstext}>No ads popular property</Text>

                  )}
                  {loading && <ActivityIndicator size="large" color="#02487C" />}
                  <View style={styles.swiperviewstyle}>
                    <Swiper
                      loop={false}
                      showsPagination
                      paginationStyle={styles.paginationStyle}
                      dotStyle={styles.dotStyle}
                      activeDotStyle={styles.activeDotStyle}
                    >
                      {data2.map((item2, index) => (
                        <View key={index} style={styles.imageContainer}>
                          <Image
                            source={{
                              uri: `https://www.demo603.amrithaa.com/mymediator/public/images/${item2.document}`
                            }}
                            style={styles.visitcard}
                          />
                        </View>
                      ))}
                    </Swiper>
                  </View>
                  <View style={styles.rowview}>
                    <Text style={styles.populartext}>{string.Today}</Text>
                    <TouchableOpacity onPress={() => {
                      { navigation.navigate('Mostvisitproperty', { mostvisitproperty_data: mostvisitproperty_data }) };
                      console.log(mostvisitproperty_data)
                    }}>
                      <Text style={styles.populartext}>{string.Viewall}</Text>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.flexview}>
                    {mostvisitproperty_data.length > 0 ? (
                      mostvisitproperty_data.slice(0, 4).map((item4, index) => (
                        <View key={index}>
                          <View style={styles.viewstyles}>
                            <ImageBackground source={{ uri: `https://www.demo603.amrithaa.com/mymediator/public/${item4.image ? item4.image.split(',')[0] : null}` }} borderRadius={11}
                              style={styles.backgroundImage}>
                            </ImageBackground>
                            <Text style={styles.textstylehome}>{item4.property_name}</Text>
                            <View style={styles.flextop}>
                              <View style={styles.propertyview}>
                                <Text style={styles.BHK}>{item4.property_type}</Text>
                              </View>
                              <Image source={icons.mapsandflags} style={styles.mapsandflags2} />
                              <Text style={styles.West}>{item4.location}</Text>
                            </View>
                            <View style={styles.flexbotview}>
                              <Image source={icons.squre} style={styles.squre} />
                              <Text style={styles.sqtext}>{item4.sqft}</Text>
                              <Image source={icons.Vector} style={styles.rupeesimgthree}></Image>
                              <Text style={styles.renttexpraise}>{item4.amount}</Text>
                            </View>
                          </View>
                        </View>
                      ))
                    ) : (
                      <Text style={styles.adstext}>No ads Mostvisitproperty</Text>
                    )}
                  </View>
                </View>
              ) : null}
              <View style={styles.marbottom}></View>
              {is_select == '2' ? (
                <View>
                  <View style={[styles.scrollvirestylerow, styles.scrollvirestylerowtwo]}>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                      {BHK.length > 0 ? (
                        BHK.map((item3, index) => (
                          <View key={index}>
                            <View style={styles.scrollviewstyle}>
                              <Image source={{ uri: `https://www.demo603.amrithaa.com/mymediator/public/${item3.image ? item3.image.split(',')[0] : null}` }} style={styles.homeimg1} />
                              <View style={styles.flexrow5}>
                                <Text style={styles.renttext}>{item3.property_name}</Text>

                                <Image source={icons.mapsandflags} style={styles.star} />
                                <Text style={styles.renttext2}>{item3.location}</Text>
                              </View>
                              <Text style={styles.Individual223}>{item3.property_type}</Text>
                              <View style={styles.flexrow65}>
                                <Image source={icons.squre} style={styles.squre} />
                                <Text style={styles.renttext4asd}>{item3.sqft}</Text>
                                <Image source={icons.Vector} style={styles.rupeesimg}></Image>
                                <Text style={styles.renttext4ree}>{item3.amount}</Text>
                              </View>
                            </View>
                          </View>
                        ))
                      ) : (
                        <Text style={styles.adstext}></Text>
                      )}
                    </ScrollView>
                  </View>
                  <View style={[styles.rowview, { marginTop: -15 }]}>
                    <Text style={styles.populartext}>{string.Popular}</Text>
                    <TouchableOpacity onPress={passpopulatproperty} >
                      <Text style={styles.populartext}>{string.Viewall}</Text>
                    </TouchableOpacity>
                  </View>
                  {BHKPopular.length > 0 ? (
                    BHKPopular.map((item, index) => (

                      <View key={index}>
                        <TouchableOpacity style={styles.seconview} onPress={() => { navigation.navigate('PropertyDetails', { homedetails: item }) }}>
                          <View style={styles.flexdreac}>
                            <View style={styles.imgview}>
                              <Image source={{ uri: `https://www.demo603.amrithaa.com/mymediator/public/${item.image ? item.image.split(',')[0] : null}` }} style={styles.imgview} />
                            </View>
                            <View>
                              <View style={styles.textrow}>
                                <View style={styles.stylemenu}>
                                  <Text style={styles.sale}>{item.property_type}</Text>
                                </View>
                                <View style={styles.locview}>
                                  <View style={styles.flexmenustyle}>
                                    <Image source={icons.mapsandflags} style={styles.star} />

                                    <Text style={styles.West1}>{item.location}</Text>
                                  </View>
                                </View>
                              </View>
                              <View>
                                <View style={styles.rowtextstyle}>
                                  <Text style={styles.ind}>{string.Individual}</Text>
                                </View>
                              </View>
                              <View style={styles.viewstylesnew}>
                                <Image source={icons.squre} style={styles.squre1} />
                                <Text style={styles.renttext4asd}>{item.sqft}</Text>
                              </View>
                              <View style={styles.menutwo}>
                                <View style={styles.flexmenu}>
                                  <Image source={icons.Vector} style={styles.rupeesimgtwo}></Image>
                                  <Text style={styles.renttext5}>{item.amount}</Text>
                                  <View style={styles.greenbuttonstyle}>
                                    <TouchableOpacity style={styles.backiconstyle}
                                      onPress={() => { navigation.navigate('PropertyDetails', { propertydata_id: item }) }}>
                                      <Image source={icons.next} style={styles.next} />
                                    </TouchableOpacity>
                                  </View>
                                </View>
                              </View>
                            </View>
                          </View>
                        </TouchableOpacity>
                      </View>
                    ))
                  ) : (
                    <Text style={styles.adstext}>No 2BHK popular property</Text>
                  )}
                  {loading && <ActivityIndicator size="large" color="#02487C" />}
                  <View style={styles.rowview}>
                    <Text style={styles.populartext}>{string.Today}</Text>
                    <TouchableOpacity onPress={() => {
                      { navigation.navigate('Mostvisitproperty', { mostvisitproperty_data: mostvisitproperty_data }) };
                      console.log(mostvisitproperty_data)
                    }}>
                      <Text style={styles.populartext}>{string.Viewall}</Text>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.flexview}>
                    {BHKMostvisit.length > 0 ? (
                      BHKMostvisit.map((item4, index) => (
                        <View key={index}>
                          <View style={styles.viewstyles}>
                            <ImageBackground source={{ uri: `https://www.demo603.amrithaa.com/mymediator/public/${item4.image ? item4.image.split(',')[0] : null}` }} borderRadius={11}
                              style={styles.backgroundImage}>
                            </ImageBackground>
                            <Text style={styles.textstylehome}>{item4.property_name}</Text>
                            <View style={styles.flextop}>
                              <Text style={styles.BHK}>{item4.property_type}</Text>
                              <Image source={icons.mapsandflags} style={styles.mapsandflags2} />
                              <Text style={styles.West}>{item4.location}</Text>
                            </View>
                            <View style={styles.flexbotview}>
                              <Image source={icons.squre} style={styles.squre} />
                              <Text style={styles.sqtext}>{item4.sqft}</Text>
                              <Image source={icons.Vector} style={styles.rupeesimgthree}></Image>
                              <Text style={styles.renttexpraise}>{item4.amount}</Text>
                            </View>
                          </View>
                        </View>
                      ))
                    ) : (
                      <Text style={styles.adstext}>No 2BHK Mostvisitproperty</Text>
                    )}
                  </View>
                </View>
              ) : null}
              {is_select == '3' ? (
                <View>
                  <View style={[styles.scrollvirestylerow, styles.scrollvirestylerowtwo]}>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                      {flat.length > 0 ? (
                        flat.map((item3, index) => (
                          <View key={index}>
                            <View style={styles.scrollviewstyle}>
                              <Image source={{ uri: `https://www.demo603.amrithaa.com/mymediator/public/${item3.image ? item3.image.split(',')[0] : null}` }} style={styles.homeimg1} />
                              <View style={styles.flexrow5}>
                                <Text style={styles.renttext}>{item3.property_name}</Text>

                                <Image source={icons.mapsandflags} style={styles.star} />
                                <Text style={styles.renttext2}>{item3.location}</Text>
                              </View>
                              <Text style={styles.Individual223}>{item3.property_type}</Text>
                              <View style={styles.flexrow65}>
                                <Image source={icons.squre} style={styles.squre} />
                                <Text style={styles.renttext4asd}>{item3.sqft}</Text>
                                <Image source={icons.Vector} style={styles.rupeesimg}></Image>
                                <Text style={styles.renttext4ree}>{item3.amount}</Text>
                              </View>
                            </View>
                          </View>
                        ))
                      ) : (
                        <Text style={styles.adstext}></Text>
                      )}
                    </ScrollView>
                  </View>

                  <View style={[styles.rowview, { marginTop: -15 }]}>
                    <Text style={styles.populartext}>{string.Popular}</Text>
                    <TouchableOpacity onPress={passpopulatproperty} >
                      <Text style={styles.populartext}>{string.Viewall}</Text>
                    </TouchableOpacity>
                  </View>
                  {flatPopular.length > 0 ? (
                    flatPopular.map((item, index) => (

                      <View key={index}>
                        <TouchableOpacity style={styles.seconview} onPress={() => { navigation.navigate('PropertyDetails', { homedetails: item }) }}>
                          <View style={styles.flexdreac}>
                            <View style={styles.imgview}>
                              <Image source={{ uri: `https://www.demo603.amrithaa.com/mymediator/public/${item.image ? item.image.split(',')[0] : null}` }} style={styles.imgview} />
                            </View>
                            <View>
                              <View style={styles.textrow}>
                                <View style={styles.stylemenu}>
                                  <Text style={styles.sale}>{item.property_type}</Text>
                                </View>
                                <View style={styles.locview}>
                                  <View style={styles.flexmenustyle}>
                                    <Image source={icons.mapsandflags} style={styles.star} />

                                    <Text style={styles.West1}>{item.location}</Text>
                                  </View>
                                </View>
                              </View>

                              <View>
                                <View style={styles.rowtextstyle}>

                                  <Text style={styles.ind}>{string.Individual}</Text>
                                </View>
                              </View>
                              <View style={styles.viewstylesnew}>
                                <Image source={icons.squre} style={styles.squre1} />
                                <Text style={styles.renttext4asd}>{item.sqft}</Text>
                              </View>
                              <View style={styles.menutwo}>
                                <View style={styles.flexmenu}>
                                  <Image source={icons.Vector} style={styles.rupeesimgtwo}></Image>
                                  <Text style={styles.renttext5}>{item.amount}</Text>
                                  <View style={styles.greenbuttonstyle}>
                                    <TouchableOpacity style={styles.backiconstyle}
                                      onPress={() => { navigation.navigate('PropertyDetails', { homedetails: item }) }}>
                                      <Image source={icons.next} style={styles.next} />
                                    </TouchableOpacity>
                                  </View>
                                </View>
                              </View>
                            </View>
                          </View>
                        </TouchableOpacity>
                      </View>
                    ))
                  ) : (
                    <Text style={styles.adstext}>No Flat popular property</Text>

                  )}
                  {loading && <ActivityIndicator size="large" color="#02487C" />}
                  <View style={styles.rowview}>
                    <Text style={styles.populartext}>{string.Today}</Text>
                    <TouchableOpacity onPress={() => {
                      { navigation.navigate('Mostvisitproperty', { mostvisitproperty_data: mostvisitproperty_data }) };
                      console.log(mostvisitproperty_data)
                    }}>
                      <Text style={styles.populartext}>{string.Viewall}</Text>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.flexview}>
                    {flatMostvisit.length > 0 ? (
                      flatMostvisit.map((item4, index) => (
                        <View key={index}>
                          <View style={styles.viewstyles}>
                            <ImageBackground source={{ uri: `https://www.demo603.amrithaa.com/mymediator/public/${item4.image ? item4.image.split(',')[0] : null}` }} borderRadius={11}
                              style={styles.backgroundImage}>
                            </ImageBackground>
                            <Text style={styles.textstylehome}>{item4.property_name}</Text>
                            <View style={styles.flextop}>
                              <Text style={styles.BHK}>{item4.property_type}</Text>
                              <Image source={icons.mapsandflags} style={styles.mapsandflags2} />
                              <Text style={styles.West}>{item4.location}</Text>
                            </View>
                            <View style={styles.flexbotview}>
                              <Image source={icons.squre} style={styles.squre} />
                              <Text style={styles.sqtext}>{item4.sqft}</Text>
                              <Image source={icons.Vector} style={styles.rupeesimgthree}></Image>
                              <Text style={styles.renttexpraise}>{item4.amount}</Text>
                            </View>
                          </View>
                        </View>
                      ))
                    ) : (
                      <Text style={styles.adstext}>No Flat Mostvisitproperty</Text>
                    )}
                  </View>
                </View>
              ) : null}
              {is_select == '4' ? (
                <View>
                  <View style={[styles.scrollvirestylerow, styles.scrollvirestylerowtwo]}>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                      {Individual.length > 0 ? (
                        Individual.map((item3, index) => (
                          <View key={index}>
                            <View style={styles.scrollviewstyle}>
                              <Image source={{ uri: `https://www.demo603.amrithaa.com/mymediator/public/${item3.image ? item3.image.split(',')[0] : null}` }} style={styles.homeimg1} />
                              <View style={styles.flexrow5}>
                                <Text style={styles.renttext}>{item3.property_name}</Text>

                                <Image source={icons.mapsandflags} style={styles.star} />
                                <Text style={styles.renttext2}>{item3.location}</Text>
                              </View>
                              <Text style={styles.Individual223}>{item3.property_type}</Text>
                              <View style={styles.flexrow65}>
                                <Image source={icons.squre} style={styles.squre} />
                                <Text style={styles.renttext4asd}>{item3.sqft}</Text>
                                <Image source={icons.Vector} style={styles.rupeesimg}></Image>
                                <Text style={styles.renttext4ree}>{item3.amount}</Text>
                              </View>
                            </View>
                          </View>
                        ))
                      ) : (
                        <Text style={styles.adstext}></Text>
                      )}
                    </ScrollView>
                  </View>
                  <View style={[styles.rowview, { marginTop: -15 }]}>
                    <Text style={styles.populartext}>{string.Popular}</Text>
                    <TouchableOpacity onPress={passpopulatproperty} >
                      <Text style={styles.populartext}>{string.Viewall}</Text>
                    </TouchableOpacity>
                  </View>
                  {IndividualPopular.length > 0 ? (
                    IndividualPopular.map((item, index) => (

                      <View key={index}>
                        <TouchableOpacity style={styles.seconview} onPress={() => { navigation.navigate('PropertyDetails', { homedetails: item }) }}>
                          <View style={styles.flexdreac}>
                            <View style={styles.imgview}>
                              <Image source={{ uri: `https://www.demo603.amrithaa.com/mymediator/public/${item.image ? item.image.split(',')[0] : null}` }} style={styles.imgview} />
                            </View>
                            <View>
                              <View style={styles.textrow}>
                                <View style={styles.stylemenu}>
                                  <Text style={styles.sale}>{item.property_type}</Text>
                                </View>
                                <View style={styles.locview}>
                                  <View style={styles.flexmenustyle}>
                                    <Image source={icons.mapsandflags} style={styles.star} />

                                    <Text style={styles.West1}>{item.area_location}</Text>
                                  </View>
                                </View>
                              </View>

                              <View>
                                <View style={styles.rowtextstyle}>

                                  <Text style={styles.ind}>{string.Individual}</Text>
                                </View>
                              </View>
                              <View style={styles.viewstylesnew}>
                                <Image source={icons.squre} style={styles.squre1} />
                                <Text style={styles.renttext4asd}>{item.sqft}</Text>
                              </View>
                              <View style={styles.menutwo}>
                                <View style={styles.flexmenu}>
                                  <Image source={icons.Vector} style={styles.rupeesimgtwo}></Image>
                                  <Text style={styles.renttext5}>{item.value}</Text>
                                  <View style={styles.greenbuttonstyle}>
                                    <TouchableOpacity style={styles.backiconstyle}
                                      onPress={() => { navigation.navigate('PropertyDetails', { homedetails: item }) }}>
                                      <Image source={icons.next} style={styles.next} />
                                    </TouchableOpacity>
                                  </View>
                                </View>
                              </View>
                            </View>
                          </View>
                        </TouchableOpacity>
                      </View>
                    ))
                  ) : (
                    <Text style={styles.adstext}>No Individual popular property</Text>

                  )}
                  {loading && <ActivityIndicator size="large" color="#02487C" />}
                  <View style={styles.rowview}>
                    <Text style={styles.populartext}>{string.Today}</Text>
                    <TouchableOpacity onPress={() => {
                      { navigation.navigate('Mostvisitproperty', { mostvisitproperty_data: mostvisitproperty_data }) };
                      console.log(mostvisitproperty_data)
                    }}>
                      <Text style={styles.populartext}>{string.Viewall}</Text>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.flexview}>
                    {IndividualMostvisit.length > 0 ? (
                      IndividualMostvisit.map((item4, index) => (
                        <View key={index}>
                          <View style={styles.viewstyles}>
                            <ImageBackground source={{ uri: `https://www.demo603.amrithaa.com/mymediator/public/${item4.image ? item4.image.split(',')[0] : null}` }} borderRadius={11}
                              style={styles.backgroundImage}>
                            </ImageBackground>
                            <Text style={styles.textstylehome}>{item4.property_name}</Text>
                            <View style={styles.flextop}>
                              <Text style={styles.BHK}>{item4.property_type}</Text>
                              <Image source={icons.mapsandflags} style={styles.mapsandflags2} />
                              <Text style={styles.West}>{item4.area_location}</Text>
                            </View>
                            <View style={styles.flexbotview}>
                              <Image source={icons.squre} style={styles.squre} />
                              <Text style={styles.sqtext}>{item4.sqft}</Text>
                              <Image source={icons.Vector} style={styles.rupeesimgthree}></Image>
                              <Text style={styles.renttexpraise}>{item4.value}</Text>
                            </View>
                          </View>
                        </View>
                      ))
                    ) : (
                      <Text style={styles.adstext}>No Individual Mostvisitproperty</Text>
                    )}
                  </View>

                </View>
              ) : null}
            </>
          ) : null}

        </ScrollView>
        {selecteditem == '2' ? (
          <>
            <>
              <Text style={styles.freshrecoText}>{string.Freshrecommendation}</Text>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {electrecommendations.length > 0 ? (
                  electrecommendations.map((recomelec, index) => (
                    <View key={index}>
                      <TouchableOpacity onPress={() => { navigation.navigate('Electronicslist') }} style={styles.bikeview}>
                        <Image
                          source={{
                            uri: recomelec.image ? `https://www.demo603.amrithaa.com/mymediator/public/${recomelec.image.split(',')[0]}` : null
                          }}
                          style={styles.bikeimg3style} />
                        <Text style={styles.ruptext}>₹ {recomelec.amount}</Text>
                        <Text style={styles.yanahatextstyle}>{recomelec.model_name}</Text>
                        <Text style={styles.kmtext}>{recomelec.processor_count} - {recomelec.ram_size}</Text>
                        <View style={styles.bikroew}>
                          <Image source={icons.mapsandflags} style={styles.locstyelbike} />
                          <Text style={styles.Weststyle}>{recomelec.location}</Text>
                          <View style={styles.matbottomview} />
                        </View>
                      </TouchableOpacity>
                    </View>
                  ))
                ) : (
                  <Text style={styles.adstext}></Text>
                )}
                <View>
                </View>
                <View style={{ marginBottom: "10%" }}></View>
              </ScrollView>
              <View style={styles.swiperviewstyle}>
                <Swiper
                  loop={false}
                  showsPagination
                  paginationStyle={styles.paginationStyle}
                  dotStyle={styles.dotStyle}
                  activeDotStyle={styles.activeDotStyle}
                >
                  {data2.map((item2, index) => (
                    <View key={index} style={styles.imageContainer}>
                      <Image
                        source={{
                          uri: `https://www.demo603.amrithaa.com/mymediator/public/images/${item2.document}`
                        }}
                        style={styles.visitcard}
                      />
                    </View>
                  ))}
                </Swiper>
              </View>
              <View style={styles.viewallb}>
                <Text style={styles.freshrecoText}>{string.ap}</Text>
                <TouchableOpacity onPress={() => {
                  { navigation.navigate('AllPeoductViewlaptop', { electronicsProduce: electronicsProduce }) };
                  console.log(electronicsProduce)
                }}>
                  <Text style={styles.freshrecoTextvi}>View all</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.flewabike}>
                {electronicsProduce.length > 0 ? (
                  electronicsProduce.slice(0, 4).map((electronics, index) => (
                    <View key={index}>
                      <TouchableOpacity onPress={() => { navigation.navigate('ElectronicsDetails', { electronicsDetails: electronics }) }} style={styles.bikeview2}>
                        <Image source={{
                          uri: electronics.image ? `https://www.demo603.amrithaa.com/mymediator/public/${electronics.image.split(',')[0]}` : null
                        }} style={[styles.bikeimg3style, styles.bikeimg3style3]} />
                        <Text style={styles.ruptext}>{electronics.model_name}</Text>

                        <View style={styles.bikroew}>
                          <Image source={icons.mapsandflags} style={styles.locstyelbike} />
                          <Text style={styles.Weststyle}>{electronics.location}</Text>
                        </View>
                        <View style={styles.bikroew}>
                          <Text style={styles.kmtext}>{electronics.model_year}</Text>
                          <Text style={[styles.kmtext, styles.kmtext3]}>₹ {electronics.amount}</Text>

                        </View>
                      </TouchableOpacity>
                    </View>
                  ))
                ) : (
                  <Text style={styles.adstext}>No Electronics Product</Text>
                )}
                {loading && <ActivityIndicator size="large" color="#02487C" />}

              </View>
            </>
          </>) : null}

        {selecteditem == '3' ? (
          <>
            <Text style={styles.freshrecoText}>{string.Freshrecommendation}</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>

              {carrecommendations.length > 0 ? (
                carrecommendations.map((recomcar, index) => (
                  <View key={index}>
                    <TouchableOpacity onPress={() => { navigation.navigate('Electronicslist') }} style={styles.bikeview}>
                      <Image
                        source={{
                          uri: recomcar.image ? `https://www.demo603.amrithaa.com/mymediator/public/${recomcar.image.split(',')[0]}` : null
                        }}
                        style={styles.bikeimg3style} />
                      <Text style={styles.ruptext}>₹ {recomcar.amount}</Text>
                      <Text style={styles.yanahatextstyle}>{recomcar.brand}</Text>
                      <Text style={styles.kmtext}>{recomcar.year} - {recomcar.km_drive}</Text>
                      <View style={styles.bikroew}>
                        <Image source={icons.mapsandflags} style={styles.locstyelbike} />
                        <Text style={styles.Weststyle}>{recomcar.location}</Text>
                        <View style={styles.matbottomview} />
                      </View>
                    </TouchableOpacity>
                  </View>
                ))
              ) : (
                <Text style={styles.adstext}></Text>
              )}
              <View style={{ marginBottom: "10%" }}></View>
            </ScrollView>
            <View style={styles.swiperviewstyle}>
              <Swiper
                loop={false}
                showsPagination
                paginationStyle={styles.paginationStyle}
                dotStyle={styles.dotStyle}
                activeDotStyle={styles.activeDotStyle}
              >
                {data2.map((item2, index) => (
                  <View key={index} style={styles.imageContainer}>
                    <Image
                      source={{
                        uri: `https://www.demo603.amrithaa.com/mymediator/public/images/${item2.document}`
                      }}
                      style={styles.visitcard}
                    />
                  </View>
                ))}
              </Swiper>
            </View>
            <View style={styles.viewallb}>
              <Text style={styles.freshrecoText}>{string.ap}</Text>
              <TouchableOpacity onPress={() => {
                { navigation.navigate('AllPeoductViewCar', { carProduce: carProduce }) };
                console.log(carProduce)
              }}>
                <Text style={styles.freshrecoTextvi}>View all</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.flewabike}>

              {carProduce.length > 0 ? (
                carProduce.slice(0, 4).map((car, index) => (
                  <View key={index}>
                    <TouchableOpacity onPress={() => { navigation.navigate('CarDetails', { cardetail: car }) }} style={styles.bikeview2}>
                      <Image source={{
                        uri: car.image ? `https://www.demo603.amrithaa.com/mymediator/public/${car.image.split(',')[0]}` : null
                      }} style={[styles.bikeimg3style, styles.bikeimg3style3]} />
                      <Text style={styles.ruptext}>{car.brand}</Text>

                      <View style={styles.bikroew}>
                        <Image source={icons.mapsandflags} style={styles.locstyelbike} />
                        <Text style={styles.Weststyle}>{car.location}</Text>
                      </View>
                      <View style={styles.bikroew}>
                        <Text style={styles.kmtext}>{car.model_year} - 10,000 km</Text>
                        <Text style={[styles.kmtext, styles.kmtext3]}>₹ {car.amount}</Text>

                      </View>
                    </TouchableOpacity>
                  </View>
                ))
              ) : (
                <Text style={styles.adstext}>No Electronics Product</Text>
              )}
              {loading && <ActivityIndicator size="large" color="#02487C" />}
            </View>
          </>
        ) : null}


        {selecteditem == '4' ? (
          <>
            <Text style={styles.freshrecoText}>{string.Freshrecommendation}</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>

              {bikerecommendations.length > 0 ? (
                bikerecommendations.map((recombike, index) => (
                  <View key={index}>
                    <TouchableOpacity onPress={() => { navigation.navigate('BikeList') }} style={styles.bikeview}>
                      <Image
                        source={{
                          uri: recombike.image ? `https://www.demo603.amrithaa.com/mymediator/public/${recombike.image.split(',')[0]}` : null
                        }}
                        style={styles.bikeimg3style}
                      />
                      <Text style={styles.ruptext}>₹ {recombike.amount}</Text>
                      <Text style={styles.yanahatextstyle}>{recombike.brand_model}</Text>
                      <Text style={styles.kmtext}>{recombike.year} - {recombike.km_driven} km</Text>

                      <View style={styles.bikroew}>
                        <Image source={icons.mapsandflags} style={styles.locstyelbike} />
                        <Text style={styles.Weststyle}>{recombike.location}</Text>
                      </View>

                      <View style={styles.matbottomview} />
                    </TouchableOpacity>
                  </View>
                ))
              ) : (
                <Text style={styles.adstext}>No Bike </Text>
              )}
              <View>
              </View>
            </ScrollView>
            <View style={styles.swiperviewstyle}>
              <Swiper
                loop={false}
                showsPagination
                paginationStyle={styles.paginationStyle}
                dotStyle={styles.dotStyle}
                activeDotStyle={styles.activeDotStyle}
              >
                {data2.map((item2, index) => (
                  <View key={index} style={styles.imageContainer}>
                    <Image
                      source={{
                        uri: `https://www.demo603.amrithaa.com/mymediator/public/images/${item2.document}`
                      }}
                      style={styles.visitcard}
                    />
                  </View>
                ))}
              </Swiper>
            </View>
            <View style={styles.viewallb}>
              <Text style={styles.freshrecoText}>{string.ap}</Text>
              <TouchableOpacity onPress={() => {
                { navigation.navigate('AllPeoductViewbike', { bikeProduce: bikeProduce }) };
                console.log(bikeProduce)
              }}>
                <Text style={styles.freshrecoTextvi}>View all</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.flewabike}>
              {bikeProduce.length > 0 ? (
                bikeProduce.slice(0, 4).map((bike, index) => (
                  <View key={index}>
                    <TouchableOpacity onPress={() => { navigation.navigate('BikeDetails', { bikedetails: bike }) }} style={styles.bikeview2}>
                      <Image source={{
                        uri: bike.image ? `https://www.demo603.amrithaa.com/mymediator/public/${bike.image.split(',')[0]}` : null
                      }} style={[styles.bikeimg3style, styles.bikeimg3style3]} />
                      <Text style={styles.ruptext}>{bike.brand_model}</Text>
                      <View style={styles.bikroew}>
                        <Image source={icons.mapsandflags} style={styles.locstyelbike} />
                        <Text style={styles.Weststyle}>West Mambalam, Chennai</Text>
                      </View>
                      <View style={[styles.bikroew, styles.bikroewtwo]}>
                        <Text style={styles.kmtext}>{bike.year} - {bike.km_driven} km</Text>
                        <Text style={[styles.kmtext, styles.kmtext3]}>₹ {bike.amount}</Text>

                      </View>
                    </TouchableOpacity>
                  </View>
                ))
              ) : (
                <Text style={styles.adstext}>No Bike Product</Text>
              )}
            </View>
              {loading && <ActivityIndicator size="large" color="#02487C" />}
          </>
        ) : null}
        <View style={{ marginBottom: "20%" }}></View>
      </ScrollView>
    </View>
  )
}

export default HomeScreen

