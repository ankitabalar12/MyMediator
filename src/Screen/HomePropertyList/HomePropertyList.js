import { StyleSheet, Text, View, ScrollView, TouchableOpacity, ImageBackground, Image, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'

import HeaderUserName from '../../Componets/HeaderUserName/HeaderUserName'
import SearchComponest from '../../Componets/SearchComponets/SearchComponest'
import { string } from '../../Helper/string'
import { icons } from '../../Helper/icons'
import TabbottomviewComponets from '../../Componets/TabViewComponets/TabbottomviewComponets'
import CustomModal from '../../Componets/CustomModal/CustomModal'
import { styles } from './styles'
import { getpropertydataall, todaydealsdata } from '../../../APICall'
import AsyncStorage from '@react-native-community/async-storage'
import ReactNativeModal from 'react-native-modal'


const HomePropertyList = ({ navigation }) => {

    const [liked, setLiked] = useState(false);
    const [isUpArrow, setIsUpArrow] = useState(true);
    const [is_select, setSelect] = useState(null)
    const [modalVisible, setModalVisible] = useState()
    const [isBoxVisible, setIsBoxVisible] = useState(true);
    const [isCheckImageVisible, setIsCheckImageVisible] = useState(true);
    const [isCheckImageVisible2, setIsCheckImageVisible2] = useState(true);
    const [loading, setLoading] = useState(false);
    const [modalVisible2, setModalVisible2] = useState()
    const [todaydetails_data, setTodayDetails_Data] = useState('')
    const [initialScreenOpen, setInitialScreenOpen] = useState(false);
    const [listproperty_data, setListProperty_data] = useState(false);
    const[selectclearapply,setSelectclearapply] = useState(false);
    // const goBackToScreen = (selectedId) => {
    //     const screenMap = {
    //       1: 'HomeScreen',
    //       2: 'Propertyscreen',
    //       3: 'SellScreen',
    //       4: 'Package',
    //       5: 'ProfileScreen',
    //     };
    //     navigation.navigate(screenMap[selectedId]);
    //   };
    const selectcard = async (id) => {
        setSelect(id)
    }
    const selectclearapplybutton = async (id) => {
        setSelectclearapply(id)
    }

    const toggleModal2 = () => {
        setModalVisible(!modalVisible)
    }
    useEffect(() => {
        const addtodaydealsdata = async () => {
            const userdata = await AsyncStorage.getItem('logindata');
            const finaluserdata = JSON.parse(userdata);
            todaydealsall(finaluserdata.id);
            getpropertydata(finaluserdata.id)
            console.log('created_at--->', finaluserdata.id);

        };
        const id = 1;
        if (!initialScreenOpen) {

            setIsBoxVisible(false);
            selectcard(id);
            setInitialScreenOpen(true);

        }
        addtodaydealsdata();
    }, [initialScreenOpen]);

    // const selectcard = async (id) => {
    //     setSelect(id)
    // }
    // useEffect(() => {
    //     const id = 1;
    //     selectcard(id);
    // }, []);
    const toggleLike = () => {
        setLiked(!liked);
    };
    const toggleModal = () => {
        setModalVisible(!modalVisible)
    }
    const toggleArrow = () => {
        setIsUpArrow(!isUpArrow);
    };
    const toggleBoxVisibility = () => {
        setIsBoxVisible(!isBoxVisible);
    };


    const toggleCheckImageVisibility = () => {
        setIsCheckImageVisible(true);
        setIsCheckImageVisible2(false);
    };

    const toggleCheckImageVisibility2 = () => {
        setIsCheckImageVisible2(true);
        setIsCheckImageVisible(false);
    };

    const todaydealsall = async (id) => {
        setLoading(true);
        try {
            const data = {
                user_id: id,
            };
            console.log('data ()', data)
            const res = await todaydealsdata(global.url + 'todaydeals', data);
            // console.log('res <r>', res)
            setTodayDetails_Data(res.data)
            // console.log('res <r>', res.data)
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
            setListProperty_data(res.data)
            console.log('res.data <p>', res.data)
        } catch (error) {
        } finally {
            setLoading(false);
        }
    };
    const Individual = Array.isArray(listproperty_data) ? listproperty_data.filter(property => property.property_type === 'Individual house') : [];
    const flat = Array.isArray(listproperty_data) ? listproperty_data.filter(property => property.property_type === 'Flat') : [];
    const rent = Array.isArray(listproperty_data) ? listproperty_data.filter(property => property.property_type === 'Rent') : [];
    const Individualtoday = Array.isArray(todaydetails_data) ? todaydetails_data.filter(property => property.property_type === 'Individual house') : [];
    const flattoday = Array.isArray(todaydetails_data) ? todaydetails_data.filter(property => property.property_type === 'Flat') : [];
    const renttoday = Array.isArray(todaydetails_data) ? todaydetails_data.filter(property => property.property_type === 'Rent') : [];
    const Individuallisttoday = Array.isArray(listproperty_data) ? listproperty_data.filter(property => property.property_type === 'Individual house') : [];
    const flattolistday = Array.isArray(listproperty_data) ? listproperty_data.filter(property => property.property_type === 'Flat') : [];
    const rentlisttoday = Array.isArray(listproperty_data) ? listproperty_data.filter(property => property.property_type === 'Rent') : [];
    return (
        <View style={styles.container}>
            <HeaderUserName
                onPress={() => { navigation.navigate('Notification') }} />
            {/* <SearchComponest
                onPress={() => {
                    setModalVisible2(true)
                }}
            /> */}
             {/* <CustomModal
                isVisible={modalVisible}
                onBackdropPress={toggleModal}
                transparent={true}
                backdropColor={'#fff'}
                style={{ margin: 0, bottom: 0 }}
                backdropOpacity={0}
                modalestyle={styles.modalestyle}

            /> */}

      <View style={styles.flexrow2}>
          <View style={styles.searchview}>
            <View style={styles.flexrow23}>
              <Image source={icons.search} style={styles.search} />
              <TextInput
                placeholder="Search your Bike"
                placeholderTextColor={'#808080'}
              //   onChangeText={onPress} 
              />
            </View>
          </View>
          <TouchableOpacity onPress={() => {
            setModalVisible2(true)
          }} style={styles.searchiconview}>

            <Image source={icons.menuselected} style={styles.mapsandflags} />

          </TouchableOpacity>
        </View>
            <ScrollView>
                {/* <View style={styles.subscrptionview}>
                <Text style={styles.your}>{string.Premium}</Text>
                <Text style={styles.your}>{string.YourSubscription}</Text>
            </View> */}
                <View style={styles.flexrow3}>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        <TouchableOpacity onPress={() => selectcard(1)} style={[styles.viewstyleselected, { backgroundColor: is_select === 1 ? '#1D74B5' : '#fff' }]}>
                            <Text style={[styles.alltextstyle, { color: is_select === 1 ? '#fff' : '#BDBBDA' }]}>{string.all}</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => selectcard(2)} style={[styles.viewstyleselected2, { backgroundColor: is_select === 2 ? '#1D74B5' : '#fff' }]}>
                            <Text style={[styles.alltextstyle, { color: is_select === 2 ? '#fff' : '#BDBBDA' }]}>{string.rent}</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => selectcard(3)} style={[styles.viewstyleselected2, { backgroundColor: is_select === 3 ? '#1D74B5' : '#fff' }]}>
                            <Text style={[styles.alltextstyle, { color: is_select === 3 ? '#fff' : '#BDBBDA' }]}>{string.Plot}</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => selectcard(4)} style={[styles.viewstyleselected3, { backgroundColor: is_select === 4 ? '#1D74B5' : '#fff' }]}>
                            <Text style={[styles.alltextstyle, { color: is_select === 4 ? '#fff' : '#BDBBDA' }]}>{string.individual}</Text>
                        </TouchableOpacity>
                    </ScrollView>
                </View>
                {is_select == '1' ? (<View>
                    <View style={styles.flexworlist}>
                        <Text style={styles.ListofPropertytext}>{string.ListofProperty}</Text>
                        <TouchableOpacity onPress={() => {
                            toggleBoxVisibility();
                            toggleArrow();
                        }} style={styles.rentandsaleview}>
                            <View style={styles.updwonarrowrow}>
                                <Text style={styles.renstextstylesale}>{string.rensandsales}</Text>
                                <TouchableOpacity onPress={() => {
                                    toggleBoxVisibility();
                                    toggleArrow();
                                }}>
                                    <Image source={isUpArrow ? icons.arrowheadup : icons.downarro} style={isUpArrow ? styles.leftawwowstyles : styles.ldownarrowstyleimg} />
                                </TouchableOpacity>
                            </View>
                        </TouchableOpacity>
                    </View>
                    {isBoxVisible && (
                        <View style={styles.opencloseview}>
                            <View style={styles.openview}>
                                <TouchableOpacity onPress={() => {
                                    toggleCheckImageVisibility();
                                    // setModalVisible2(true)
                                }} style={styles.viewinview}>
                                    <View style={styles.selctedrentfow}>
                                        <Text style={styles.rentxtstyleone}>{string.rent}</Text>
                                        <View style={styles.selecterent}>
                                            {isCheckImageVisible && (
                                                <Image source={icons.check} style={styles.checkimg} />
                                            )}
                                        </View>
                                    </View>
                                </TouchableOpacity>
                                <View style={styles.viewstyle} />
                                <TouchableOpacity onPress={toggleCheckImageVisibility2} style={styles.viewinview}>
                                    <View style={styles.selctedrentfow}>
                                        <Text style={styles.rentxtstyleone}>{string.Sale}</Text>
                                        <View style={styles.selecterent}>
                                            {isCheckImageVisible2 && (
                                                <Image source={icons.check} style={styles.checkimg} />
                                            )}
                                        </View>

                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                    )}

                    {/* <View style={styles.rowview}>
                    <Text style={styles.populartext}>{string.Today}</Text>
                    <TouchableOpacity>
                        <Text style={styles.populartext}>{string.Viewall}</Text>
                    </TouchableOpacity>
                </View> */}
                    <View style={styles.flexview}>
                        {listproperty_data.length > 0 ? (
                            listproperty_data.map((item4, index) => (
                                <View key={index}>
                                    <TouchableOpacity style={styles.viewstyles}>
                                        <ImageBackground source={icons.home3} borderRadius={11}
                                            style={styles.backgroundImage}>
                                        </ImageBackground>
                                        <Text style={styles.textstylehome}>{item4.property_name}</Text>
                                        <View style={styles.flextop}>
                                            <View style={styles.propertyview}>
                                                <Text style={styles.BHK}>{item4.property_type}</Text>
                                            </View>
                                            <Image source={icons.mapsandflags} style={styles.mapsandflags2} />
                                            <Text style={styles.West}>{item4.area_location}</Text>
                                        </View>
                                        <View style={styles.flexbotview}>
                                            <Image source={icons.squre} style={styles.squre} />
                                            <Text style={styles.sqtext}>{item4.sqft} Sq.Ft</Text>
                                            <Image source={icons.Vector} style={styles.rupeesimgthree}></Image>
                                            <Text style={styles.renttexpraise}>{item4.value}</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            ))
                        ) : (
                            <Text style={styles.adstext}>No list property</Text>
                        )}
                    </View>

                    <Text style={styles.populartext2}>{string.TodayDEA}</Text>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        {todaydetails_data.length > 0 ? (
                            todaydetails_data.map((item, index) => (
                                <View key={index}>
                                    <TouchableOpacity style={styles.scollviwestyle}>
                                        <ImageBackground source={{ uri: `https://www.demo603.amrithaa.com/mymediator/public/${item.images}` }} borderRadius={11}
                                            style={styles.backgroundImage}></ImageBackground>
                                        <View style={styles.flextop2}>
                                            <View style={styles.menustyletex}>
                                                <Text style={styles.BHK2}>{item.property_name}</Text>
                                            </View>
                                            <Image source={icons.mapsandflags} style={styles.mapsandflags22} />
                                            <Text style={styles.West2}>{item.area_location}</Text>
                                        </View>
                                        <Text style={styles.textstylehome2}>{item.property_type}</Text>
                                        <View style={styles.flexbotview}>
                                            <Image source={icons.squre} style={styles.squre} />
                                            <Text style={styles.sqtext2}>{item.sqft} Sq.Ft</Text>
                                            <Image source={icons.Vector} style={styles.rupeesimgtwo}></Image>
                                            <Text style={styles.rentte}>10,5000</Text>
                                        </View>
                                    </TouchableOpacity>

                                </View>
                            ))
                        ) : (
                            <Text style={[styles.adstext2,]}>No ads todat details</Text>
                        )}


                    </ScrollView>
                    {/* </View> */}
                    <View style={styles.flexview}>
                        <TouchableOpacity onPress={() => { navigation.navigate('PropertyDetails') }}  style={styles.viewstyles}>
                            <ImageBackground source={icons.home3} borderRadius={11}
                                style={styles.backgroundImage}>
                                {/* <TouchableOpacity onPress={toggleLike}>
                                <Image source={liked ? icons.heartthree : icons.heart} style={liked ? styles.heart2 : styles.heart} />
                            </TouchableOpacity> */}
                            </ImageBackground>
                            <Text style={styles.textstylehome}>{string.Salehouse}</Text>
                            <View style={styles.flextop}>
                                <Text style={styles.BHK}>{string.BHK}</Text>
                                <Image source={icons.mapsandflags} style={styles.mapsandflags2} />
                                <Text style={styles.West}>{string.Westtwo}</Text>
                            </View>
                            <View style={styles.flexbotview}>
                                <Image source={icons.squre} style={styles.squre} />
                                <Text style={styles.sqtext}>800 Sq.Ft</Text>
                                <Image source={icons.Vector} style={styles.rupeesimgthree}></Image>
                                <Text style={styles.renttexpraise}>7,5000</Text>
                            </View>
                        </TouchableOpacity>


                        <TouchableOpacity style={styles.viewstyles}>
                            <ImageBackground source={icons.home2} borderRadius={11}
                                style={styles.backgroundImage}>
                                {/* <TouchableOpacity onPress={toggleLike}>
                                <Image source={liked ? icons.heartthree : icons.heart} style={liked ? styles.heart2 : styles.heart} />
                            </TouchableOpacity> */}
                            </ImageBackground>
                            <Text style={styles.textstylehome}>{string.Renthouse}</Text>
                            <View style={styles.flextop}>
                                <Text style={styles.BHK}>{string.BHK}</Text>
                                <Image source={icons.mapsandflags} style={styles.mapsandflags2} />
                                <Text style={styles.West}>{string.Westtwo}</Text>
                            </View>
                            <View style={styles.flexbotview}>
                                <Image source={icons.squre} style={styles.squre} />
                                <Text style={styles.sqtext}>800 Sq.Ft</Text>
                                <Image source={icons.Vector} style={styles.rupeesimgthree}></Image>
                                <Text style={styles.renttexpraise}>10,5000</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { navigation.navigate('PropertyDetails') }}  style={styles.viewstyles}>
                            <ImageBackground source={icons.home3} borderRadius={11}
                                style={styles.backgroundImage}>
                                {/* <TouchableOpacity onPress={toggleLike}>
                                <Image source={liked ? icons.heartthree : icons.heart} style={liked ? styles.heart2 : styles.heart} />
                            </TouchableOpacity> */}
                            </ImageBackground>
                            <Text style={styles.textstylehome}>{string.Salehouse}</Text>
                            <View style={styles.flextop}>
                                <Text style={styles.BHK}>{string.BHK}</Text>
                                <Image source={icons.mapsandflags} style={styles.mapsandflags2} />
                                <Text style={styles.West}>{string.Westtwo}</Text>
                            </View>
                            <View style={styles.flexbotview}>
                                <Image source={icons.squre} style={styles.squre} />
                                <Text style={styles.sqtext}>800 Sq.Ft</Text>
                                <Image source={icons.Vector} style={styles.rupeesimgthree}></Image>
                                <Text style={styles.renttexpraise}>7,5000</Text>
                            </View>
                        </TouchableOpacity>
                        <View style={styles.viewstyles}>
                            <ImageBackground source={icons.home2} borderRadius={11}
                                style={styles.backgroundImage}>
                                {/* <TouchableOpacity onPress={toggleLike}>
                                <Image source={liked ? icons.heartthree : icons.heart} style={liked ? styles.heart2 : styles.heart} />
                            </TouchableOpacity> */}
                            </ImageBackground>
                            <Text style={styles.textstylehome}>{string.Renthouse}</Text>
                            <View style={styles.flextop}>
                                <Text style={styles.BHK}>{string.BHK}</Text>
                                <Image source={icons.mapsandflags} style={styles.mapsandflags2} />
                                <Text style={styles.West}>{string.Westtwo}</Text>
                            </View>
                            <View style={styles.flexbotview}>
                                <Image source={icons.squre} style={styles.squre} />
                                <Text style={styles.sqtext}>800 Sq.Ft</Text>
                                <Image source={icons.Vector} style={styles.rupeesimgthree}></Image>
                                <Text style={styles.renttexpraise}>10,5000</Text>
                            </View>
                        </View>
                    </View>

                </View>) : null}
                {is_select == '2' ? (<View>
                    <View style={[styles.flexworlist, styles.flexworlistzro]}>
                        <Text style={styles.ListofPropertytext}>{string.ListofProperty}</Text>
                        <TouchableOpacity onPress={() => {
                            toggleBoxVisibility();
                            toggleArrow();
                        }} style={styles.rentandsaleview}>
                            <View style={styles.updwonarrowrow}>
                                <Text style={styles.renstextstylesale}>{string.rensandsales}</Text>
                                <TouchableOpacity onPress={() => {
                                    toggleBoxVisibility();
                                    toggleArrow();
                                }}>
                                    <Image source={isUpArrow ? icons.arrowheadup : icons.downarro} style={isUpArrow ? styles.leftawwowstyles : styles.ldownarrowstyleimg} />
                                </TouchableOpacity>
                            </View>
                        </TouchableOpacity>
                    </View>
                    {isBoxVisible && (
                        <View style={styles.opencloseview}>
                            <View style={styles.openview}>
                                <TouchableOpacity onPress={toggleCheckImageVisibility} style={styles.viewinview}>
                                    <View style={styles.selctedrentfow}>
                                        <Text style={styles.rentxtstyleone}>{string.rent}</Text>
                                        <View style={styles.selecterent}>
                                            {isCheckImageVisible && (
                                                <Image source={icons.check} style={styles.checkimg} />
                                            )}
                                        </View>
                                    </View>
                                </TouchableOpacity>
                                <View style={styles.viewstyle} />
                                <TouchableOpacity onPress={toggleCheckImageVisibility2} style={styles.viewinview}>
                                    <View style={styles.selctedrentfow}>
                                        <Text style={styles.rentxtstyleone}>{string.Sale}</Text>
                                        <View style={styles.selecterent}>
                                            {isCheckImageVisible2 && (
                                                <Image source={icons.check} style={styles.checkimg} />
                                            )}
                                        </View>

                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>

                    )}
                    <View style={styles.flexview}>
                        {rent.length > 0 ? (
                            rent.map((item4, index) => (
                                <View key={index}>
                                    <View style={styles.viewstyles}>
                                        <ImageBackground source={icons.home3} borderRadius={11}
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
                                            <Text style={styles.sqtext}>{item4.sqft} Sq.Ft</Text>
                                            <Image source={icons.Vector} style={styles.rupeesimgthree}></Image>
                                            <Text style={styles.renttexpraise}>{item4.value}</Text>
                                        </View>
                                    </View>
                                </View>
                            ))
                        ) : (
                            <Text style={styles.adstext}>No list property</Text>
                        )}
                    </View>
                    <Text style={styles.populartext2}>{string.TodayDEA}</Text>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        {renttoday.length > 0 ? (
                            renttoday.map((item, index) => (
                                <View key={index}>
                                    <View style={styles.scollviwestyle}>
                                        <ImageBackground source={{ uri: `https://www.demo603.amrithaa.com/mymediator/public/${item.images}` }} borderRadius={11}
                                            style={styles.backgroundImage}></ImageBackground>
                                        <View style={styles.flextop2}>
                                            <View style={styles.menustyletex}>
                                                <Text style={styles.BHK2}>{item.property_name}</Text>
                                            </View>
                                            <Image source={icons.mapsandflags} style={styles.mapsandflags22} />
                                            <Text style={styles.West2}>{item.area_location}</Text>
                                        </View>
                                        <Text style={styles.textstylehome2}>{item.property_type}</Text>
                                        <View style={styles.flexbotview}>
                                            <Image source={icons.squre} style={styles.squre} />
                                            <Text style={styles.sqtext2}>{item.sqft} Sq.Ft</Text>
                                            <Image source={icons.Vector} style={styles.rupeesimgtwo}></Image>
                                            <Text style={styles.rentte}>10,5000</Text>
                                        </View>
                                    </View>

                                </View>
                            ))
                        ) : (
                            <Text style={styles.adstext}>No ads todat details</Text>
                        )}
                    </ScrollView>
                    <View style={styles.flexview}>
                        {rentlisttoday.length > 0 ? (
                            rentlisttoday.map((item4, index) => (
                                <View key={index}>
                                    <View style={styles.viewstyles}>
                                        <ImageBackground source={icons.home3} borderRadius={11}
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
                                            <Text style={styles.sqtext}>{item4.sqft} Sq.Ft</Text>
                                            <Image source={icons.Vector} style={styles.rupeesimgthree}></Image>
                                            <Text style={styles.renttexpraise}>{item4.value}</Text>
                                        </View>
                                    </View>
                                </View>
                            ))
                        ) : (
                            <Text style={styles.adstext}>No list property</Text>
                        )}
                    </View>
                </View>) : null}
                {is_select == '3' ? (<View>
                    <View style={[styles.flexworlist, styles.flexworlistzro]}>
                        <Text style={styles.ListofPropertytext}>{string.ListofProperty}</Text>
                        <TouchableOpacity onPress={() => {
                            toggleBoxVisibility();
                            toggleArrow();
                        }} style={styles.rentandsaleview}>
                            <View style={styles.updwonarrowrow}>
                                <Text style={styles.renstextstylesale}>{string.rensandsales}</Text>
                                <TouchableOpacity onPress={() => {
                                    toggleBoxVisibility();
                                    toggleArrow();
                                }}>
                                    <Image source={isUpArrow ? icons.arrowheadup : icons.downarro} style={isUpArrow ? styles.leftawwowstyles : styles.ldownarrowstyleimg} />
                                </TouchableOpacity>
                            </View>
                        </TouchableOpacity>
                    </View>
                    {isBoxVisible && (
                        <View style={styles.opencloseview}>
                            <View style={styles.openview}>
                                <TouchableOpacity onPress={toggleCheckImageVisibility} style={styles.viewinview}>
                                    <View style={styles.selctedrentfow}>
                                        <Text style={styles.rentxtstyleone}>{string.rent}</Text>
                                        <View style={styles.selecterent}>
                                            {isCheckImageVisible && (
                                                <Image source={icons.check} style={styles.checkimg} />
                                            )}
                                        </View>
                                    </View>
                                </TouchableOpacity>
                                <View style={styles.viewstyle} />
                                <TouchableOpacity onPress={toggleCheckImageVisibility2} style={styles.viewinview}>
                                    <View style={styles.selctedrentfow}>
                                        <Text style={styles.rentxtstyleone}>{string.Sale}</Text>
                                        <View style={styles.selecterent}>
                                            {isCheckImageVisible2 && (
                                                <Image source={icons.check} style={styles.checkimg} />
                                            )}
                                        </View>

                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                    )}
                    <View style={styles.flexview}>
                        {flat.length > 0 ? (
                            flat.map((item4, index) => (
                                <View key={index}>
                                    <View style={styles.viewstyles}>
                                        <ImageBackground source={icons.home3} borderRadius={11}
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
                                            <Text style={styles.sqtext}>{item4.sqft} Sq.Ft</Text>
                                            <Image source={icons.Vector} style={styles.rupeesimgthree}></Image>
                                            <Text style={styles.renttexpraise}>{item4.value}</Text>
                                        </View>
                                    </View>
                                </View>
                            ))
                        ) : (
                            <Text style={styles.adstext}>No list property</Text>
                        )}
                    </View>
                    <Text style={styles.populartext2}>{string.TodayDEA}</Text>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        {flattoday.length > 0 ? (
                            flattoday.map((item, index) => (
                                <View key={index}>
                                    <View style={styles.scollviwestyle}>
                                        <ImageBackground source={{ uri: `https://www.demo603.amrithaa.com/mymediator/public/${item.images}` }} borderRadius={11}
                                            style={styles.backgroundImage}></ImageBackground>
                                        <View style={styles.flextop2}>
                                            <View style={styles.menustyletex}>
                                                <Text style={styles.BHK2}>{item.property_name}</Text>
                                            </View>
                                            <Image source={icons.mapsandflags} style={styles.mapsandflags22} />
                                            <Text style={styles.West2}>{item.area_location}</Text>
                                        </View>
                                        <Text style={styles.textstylehome2}>{item.property_type}</Text>
                                        <View style={styles.flexbotview}>
                                            <Image source={icons.squre} style={styles.squre} />
                                            <Text style={styles.sqtext2}>{item.sqft} Sq.Ft</Text>
                                            <Image source={icons.Vector} style={styles.rupeesimgtwo}></Image>
                                            <Text style={styles.rentte}>10,5000</Text>
                                        </View>
                                    </View>

                                </View>
                            ))
                        ) : (
                            <Text style={styles.adstext}>No ads todat details</Text>
                        )}


                    </ScrollView>
                    <View style={styles.flexview}>
                        {flattolistday.length > 0 ? (
                            flattolistday.map((item4, index) => (
                                <View key={index}>
                                    <View style={styles.viewstyles}>
                                        <ImageBackground source={icons.home3} borderRadius={11}
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
                                            <Text style={styles.sqtext}>{item4.sqft} Sq.Ft</Text>
                                            <Image source={icons.Vector} style={styles.rupeesimgthree}></Image>
                                            <Text style={styles.renttexpraise}>{item4.value}</Text>
                                        </View>
                                    </View>
                                </View>
                            ))
                        ) : (
                            <Text style={styles.adstext}>No list property</Text>
                        )}
                    </View>
                </View>) : null}
                {is_select == '4' ? (<View>
                    <View style={[styles.flexworlist, styles.flexworlistzro]}>
                        <Text style={styles.ListofPropertytext}>{string.ListofProperty}</Text>
                        <TouchableOpacity onPress={() => {
                            toggleBoxVisibility();
                            toggleArrow();
                        }} style={styles.rentandsaleview}>
                            <View style={styles.updwonarrowrow}>
                                <Text style={styles.renstextstylesale}>{string.rensandsales}</Text>
                                <TouchableOpacity onPress={() => {
                                    toggleBoxVisibility();
                                    toggleArrow();
                                }}>
                                    <Image source={isUpArrow ? icons.arrowheadup : icons.downarro} style={isUpArrow ? styles.leftawwowstyles : styles.ldownarrowstyleimg} />
                                </TouchableOpacity>
                            </View>
                        </TouchableOpacity>
                    </View>
                    {isBoxVisible && (
                        <View style={styles.opencloseview}>
                            <View style={styles.openview}>
                                <TouchableOpacity onPress={toggleCheckImageVisibility} style={styles.viewinview}>
                                    <View style={styles.selctedrentfow}>
                                        <Text style={styles.rentxtstyleone}>{string.rent}</Text>
                                        <View style={styles.selecterent}>
                                            {isCheckImageVisible && (
                                                <Image source={icons.check} style={styles.checkimg} />
                                            )}
                                        </View>
                                    </View>
                                </TouchableOpacity>
                                <View style={styles.viewstyle} />
                                <TouchableOpacity onPress={toggleCheckImageVisibility2} style={styles.viewinview}>
                                    <View style={styles.selctedrentfow}>
                                        <Text style={styles.rentxtstyleone}>{string.Sale}</Text>
                                        <View style={styles.selecterent}>
                                            {isCheckImageVisible2 && (
                                                <Image source={icons.check} style={styles.checkimg} />
                                            )}
                                        </View>

                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                    )}
                    <View style={styles.flexview}>
                        {Individual.length > 0 ? (
                            Individual.map((item4, index) => (
                                <View key={index}>
                                    <View style={styles.viewstyles}>
                                        <ImageBackground source={icons.home3} borderRadius={11}
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
                                            <Text style={styles.sqtext}>{item4.sqft} Sq.Ft</Text>
                                            <Image source={icons.Vector} style={styles.rupeesimgthree}></Image>
                                            <Text style={styles.renttexpraise}>{item4.value}</Text>
                                        </View>
                                    </View>
                                </View>
                            ))
                        ) : (
                            <Text style={styles.adstext}>No list property</Text>
                        )}
                    </View>
                    <Text style={styles.populartext2}>{string.TodayDEA}</Text>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        {Individualtoday.length > 0 ? (
                            Individualtoday.map((item, index) => (
                                <View key={index}>
                                    <View style={styles.scollviwestyle}>
                                        <ImageBackground source={{ uri: `https://www.demo603.amrithaa.com/mymediator/public/${item.images}` }} borderRadius={11}
                                            style={styles.backgroundImage}></ImageBackground>
                                        <View style={styles.flextop2}>
                                            <View style={styles.menustyletex}>
                                                <Text style={styles.BHK2}>{item.property_name}</Text>
                                            </View>
                                            <Image source={icons.mapsandflags} style={styles.mapsandflags22} />
                                            <Text style={styles.West2}>{item.area_location}</Text>
                                        </View>
                                        <Text style={styles.textstylehome2}>{item.property_type}</Text>
                                        <View style={styles.flexbotview}>
                                            <Image source={icons.squre} style={styles.squre} />
                                            <Text style={styles.sqtext2}>{item.sqft} Sq.Ft</Text>
                                            <Image source={icons.Vector} style={styles.rupeesimgtwo}></Image>
                                            <Text style={styles.rentte}>10,5000</Text>
                                        </View>
                                    </View>

                                </View>
                            ))
                        ) : (
                            <Text style={styles.adstext}>No ads todat details</Text>
                        )}


                    </ScrollView>
                    <View style={styles.flexview}>
                        {Individuallisttoday.length > 0 ? (
                            Individuallisttoday.map((item4, index) => (
                                <View key={index}>
                                    <View style={styles.viewstyles}>
                                        <ImageBackground source={icons.home3} borderRadius={11}
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
                                            <Text style={styles.sqtext}>{item4.sqft} Sq.Ft</Text>
                                            <Image source={icons.Vector} style={styles.rupeesimgthree}></Image>
                                            <Text style={styles.renttexpraise}>{item4.value}</Text>
                                        </View>
                                    </View>
                                </View>
                            ))
                        ) : (
                            <Text style={styles.adstext}>No list property</Text>
                        )}
                    </View>
                </View>) : null}
                <View style={styles.marginebotto} />
            </ScrollView>
            <ReactNativeModal
                isVisible={modalVisible2}
                onBackdropPress={toggleModal2}
                transparent={true}
                backdropColor={'rgba(0, 0, 0, 0.7)'}
                style={{ margin: 0, bottom: 0 }}
                backdropOpacity={0.5}>

                <View style={styles.backgroundview}>
                  <View style={styles.lineviewstyle}></View>
                    <ScrollView>
                  <Text style={styles.bypricestext}>{string.ByPrice}</Text> 
                  <View style={styles.flexrowchoose}>
                    <View style={styles.oneflexchooview}>
                        <Text style={styles.byproty}>By Propert Type</Text>
                        <View style={styles.borwview}></View>
                        <Text style={styles.byproty}>By Bedrooms</Text>
                        <View style={styles.borwview}></View>
                        <Text style={styles.byproty}>By Price Per SQ . FT</Text>
                        <View style={styles.borwview}></View>
                        <Text style={styles.byproty}>By Furnishing</Text>
                        <View style={styles.borwview}></View>
                        <Text style={styles.byproty}>By Bathroom</Text>
                        <View style={styles.borwview}></View>
                        <Text style={styles.byproty}>By Construction Status</Text>
                        <View style={styles.borwview}></View>
                        <Text style={styles.byproty}>By Listed by</Text>
                        <View style={styles.borwview}></View>
                        <Text style={styles.byproty}>By Super Buildup Area</Text>
                        <View style={styles.borwview}></View>
                        <Text style={styles.byproty}>Change Sort</Text>
                      
                    </View>
                    <View >
                    <Text style={styles.Choosefrobelowtext}>{string.Choosefrobelow}</Text>
                    <View style={styles.chooseview}>
                        <View style={styles.belowFlexrow}>
                            <Text style={styles.textbelowtext}>Below 1 Lac</Text>
                            <Text style={styles.itemstext}>310 + items</Text>
                        </View>
                        </View>
                        <View style={[styles.chooseview,styles.chooseview2]}>
                        <View style={styles.belowFlexrow}>
                            <Text style={styles.textbelowtext}>Below 1 Lac</Text>
                            <Text style={styles.itemstext}>310 + items</Text>
                        </View>
                        </View>
                        <View style={[styles.chooseview,styles.chooseview2]}>
                        <View style={styles.belowFlexrow}>
                            <Text style={styles.textbelowtext}>Below 1 Lac</Text>
                            <Text style={styles.itemstext}>310 + items</Text>
                        </View>
                        </View>
                        <View style={[styles.chooseview,styles.chooseview2]}>
                        <View style={styles.belowFlexrow}>
                            <Text style={styles.textbelowtext}>Below 1 Lac</Text>
                            <Text style={styles.itemstext}>310 + items</Text>
                        </View>
                        </View>
                        <View style={[styles.chooseview,styles.chooseview2]}>
                        <View style={styles.belowFlexrow}>
                            <Text style={styles.textbelowtext}>Below 1 Lac</Text>
                            <Text style={styles.itemstext}>310 + items</Text>
                        </View>
                        </View>
                    </View>
                  </View> 
                  <View style={[styles.lineviewstyle,styles.lineviewstyle2]}/>
                  <View style={styles.flextwobuttonrow}>
                    <TouchableOpacity onPress={()=>{
                        selectclearapplybutton(1);
                        setModalVisible2(false)
                    }} style={[styles.clearallbutton,{backgroundColor:selectclearapply === 1 ? '#02487C' : '#fff',
                        borderColor:selectclearapply === 1 ?'#02487c' : '#cccc'
                    }]}>
                        <Text style={[styles.foncl,{color:selectclearapply === 1 ? "#fff" : '#000'}]}>{string.Clearall}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>{
                        selectclearapplybutton(2);
                       
                    }} style={[styles.clearallbutton,{backgroundColor:selectclearapply === 2 ? '#02487C' : '#fff',
                        borderColor:selectclearapply === 2 ?'#02487c' : '#cccc'
                    }]}>
                    <Text  style={[styles.foncl,{color:selectclearapply === 2 ? "#fff" : '#000'}]}>{string.Apply}</Text>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.marbot}/>
                  </ScrollView>
                    </View> 
          
                
            </ReactNativeModal>
            {/* <TabbottomviewComponets
        selectedId={1} goBackToScreen={goBackToScreen} /> */}
        </View>
    )
}

export default HomePropertyList;

