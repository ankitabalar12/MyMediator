import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import HeaderUserName from '../../Componets/HeaderUserName/HeaderUserName'
import SearchComponest from '../../Componets/SearchComponets/SearchComponest'
import { string } from '../../Helper/string'
import { styles } from './styles'
import { icons } from '../../Helper/icons'
import TabbottomviewComponets from '../../Componets/TabViewComponets/TabbottomviewComponets'
import { deleteenquirydata, enquiry, getgetenquirydataall, propertyenquirydata } from '../../../APICall'
import AsyncStorage from '@react-native-community/async-storage'
import { ActivityIndicator } from 'react-native'

const Enquirylist = ({ navigation }) => {
    const [is_select, setSelect] = useState(null)
    const [isUpArrow, setIsUpArrow] = useState(true);
    const [isUpArrow2, setIsUpArrow2] = useState(true);
    const [isBoxVisible2, setIsBoxVisible2] = useState(true);
    const [isBoxVisible, setIsBoxVisible] = useState(true);
    const [initialScreenOpen, setInitialScreenOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const [id, setID] = useState('');
    const [not, setnot] = useState('');
    const [enquiry_data, setEnquiry_Data] = useState()
    const [propertyenquiry_data, setPropertyenquiry_Data] = useState()
    const [selecteditem, setSelectedItem] = useState('');
    const [selectedEnquiryId, setSelectedEnquiryId] = useState()
    const [selectedEnquiryId2, setSelectedEnquiryId2] = useState()
    useEffect(() => {
        const enquiryData = async () => {
            const userdata = await AsyncStorage.getItem('logindata');
            const finaluserdata = JSON.parse(userdata);
            enquirydataall(finaluserdata.id)
            propertyenquiryall(finaluserdata.id)
            console.log('created_at--->', finaluserdata.name);
        };

        if (!initialScreenOpen) {
            setIsBoxVisible(false);
            setIsBoxVisible2(false);
            setInitialScreenOpen(true);
            setSelect(1)
        }
        navigation.addListener('focus', () => {
            enquiryData();

        })

    }, [not]);


    // const goBackToScreen = (selectedId) => {
    //     const screenMap = {
    //         1: 'HomeScreen',
    //         2: 'Propertyscreen',
    //         3: 'SellScreen',
    //         4: 'Package',
    //         5: 'ProfileScreen',
    //     };
    //     navigation.navigate(screenMap[selectedId]);
    // };

    const selecteEnquiry = (id) => {
        setSelect(id)
    }
    const toggleArrow = (id) => {
        setSelectedEnquiryId(id);
        setIsUpArrow(!isUpArrow);
    };

    const toggleBoxVisibility = (id) => {
        setSelectedEnquiryId(id);
        setIsBoxVisible(!isBoxVisible);
    };
    const toggleArrow2 = (id) => {
        setSelectedEnquiryId2(id);
        setIsUpArrow2(!isUpArrow2);
    };
    const toggleBoxVisibility2 = (id) => {
        setSelectedEnquiryId2(id);
        setIsBoxVisible2(!isBoxVisible2);

    };

    const enquirydataall = async (id) => {
        setLoading(true);
        try {
            const data = {
                user_id: id,
            };
            console.log('data (e)', data)
            const res = await enquiry(global.url + 'getenquiry', data);
            setEnquiry_Data(res.data)
            await deleteenquiryall(res.data[0].enquiry_id);
            console.log('res.data.id <>', res.data[0].enquiry_id)
            console.log('res<e>', res)

        } catch (error) {
        } finally {
            setLoading(false);
        }
    };
    const deleteenquiryall = async (enquiry_id) => {
        setLoading(true);
        const data = {
            id: enquiry_id,
        };
        console.log('data <d>', data)
        const res = await deleteenquirydata(global.url + 'deleteenquiry', data);
        console.log('<><>', res)


        //   setEnquiry_Data(res.data)


    };
    const propertyenquiryall = async (id) => {
        setLoading(true);
        try {
            const data = {
                user_id: id,
            };
            const res = await propertyenquirydata(global.url + 'propertyenquiry', data);
            console.log('res<><p><p><p>', res)
            setPropertyenquiry_Data(res.data)
        } catch (error) {
        } finally {
            setLoading(false);
        }
    };
    const selectedcategories = (id) => {
        setSelectedItem(id)
    }
    return (
        <View style={styles.container}>
            <ScrollView>
                <HeaderUserName
                    onPress={() => { navigation.navigate('Notification') }} />
                <SearchComponest
                    onPress={() => {
                        setModalVisible(true)
                    }}
                />

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
                <Text style={styles.make}>{string.Enquirylist}</Text>
                <View style={styles.flexrowshow}>
                    <TouchableOpacity onPress={() => { selecteEnquiry(1) }} style={[styles.enquiryview, { backgroundColor: is_select === 1 ? "#02487C" : "#ECECEC" }]}>
                        <Text style={[styles.enquirytextstyle, { color: is_select === 1 ? "#ECECEC" : "#02487C" }]}>{string.Postenquiry}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { selecteEnquiry(2) }} style={[styles.enquiryview, { backgroundColor: is_select === 2 ? "#02487C" : "#ECECEC" }]}>
                        <Text style={[styles.enquirytextstyle, { color: is_select === 2 ? "#ECECEC" : "#02487C" }]}>{string.Propertyenquiry}</Text>
                    </TouchableOpacity>
                </View>
                {is_select == '1' ? (
                    <View>
                        {enquiry_data && enquiry_data.length > 0 ? (
                            enquiry_data.map((item, index) => (
                                <View key={index}>
                                    <View style={styles.mainview}>
                                        <View style={styles.flexrowviewpro}>
                                            <Image source={icons.images3} style={styles.homeimg1} />
                                            <View>
                                                <View style={styles.allfowtext}>
                                                    <Text style={styles.renttext}>{item.property_name}</Text>
                                                    <Image source={icons.mapsandflags} style={styles.star} />
                                                    <Text style={styles.renttext2}>{item.area_location}</Text>
                                                </View>
                                                <View>
                                                    <View style={styles.flex}>
                                                        <Text style={styles.textstyleindiv}>{item.property_type}</Text>
                                                        <Image source={icons.squre} style={styles.squre} />
                                                        <Text style={styles.renttext4asd}>{item.sqft} Sq.Ft</Text>
                                                    </View>
                                                    <View style={styles.flexvirwmorw}>
                                                        <Text style={styles.rupeestextstyle}>₹ {item.value}</Text>
                                                        <TouchableOpacity onPress={() => {
                                                            toggleBoxVisibility(item.id);
                                                            toggleArrow(item.id);
                                                        }} style={styles.viewmorwstyle}>
                                                            <View style={styles.flex}>
                                                                <Text style={styles.viewmoretext}>{string.moreview}</Text>
                                                                <Image source={isUpArrow ? icons.downarrowtwo : icons.upload} style={styles.next} />
                                                            </View>
                                                        </TouchableOpacity>
                                                    </View>
                                                </View>
                                            </View>
                                        </View>
                                    </View>
                                    {isBoxVisible && (
                                        <View style={styles.hideandshowview}>
                                            <View style={styles.flexrowstyle}>
                                                <Text style={styles.nametext}>{string.name} :
                                                    <Text style={styles.namretex}> {item.name}</Text></Text>
                                                <TouchableOpacity onPress={() => { deleteenquiryall(item.enquiry_id) }}>
                                                    <Image source={icons.delete} style={styles.squre} />
                                                </TouchableOpacity>
                                            </View>
                                            <Text style={[styles.nametext, styles.nametexttwo]}>{string.mobilenumber} :
                                                <Text style={styles.namretex}>  {item.mobile_number}</Text></Text>
                                            <Text style={[styles.nametext, styles.nametexttwo]}>{string.email} :
                                                <Text style={styles.namretex}> {item.email_id}</Text></Text>
                                            <Text style={[styles.nametext, styles.nametexttwo]}>{string.whatsapp} :
                                                <Text style={styles.namretex}> {item.whatsapp_number}</Text></Text>
                                            <Text style={[styles.nametext, styles.nametexttwo, styles.nametexttwothree]}>{string.message} :
                                                <Text style={styles.namretex}> {item.message}</Text></Text>
                                        </View>
                                    )}
                                </View>
                            ))
                        ) : (
                            <Text style={styles.adstext}>No ads post enquiry</Text>
                        )}
                        {loading && <ActivityIndicator size="large" color=" #02487C" />}
                    </View>
                ) : null}


                {is_select == '2' ? (
                    <View>
                        {propertyenquiry_data && propertyenquiry_data.length > 0 ? (
                            propertyenquiry_data.map((item2, index) => (
                                <View key={index}>
                                    <View style={styles.mainview}>
                                        <View style={styles.flexrowviewpro}>
                                            <Image source={icons.images3} style={styles.homeimg1} />
                                            <View>
                                                <View style={styles.allfowtext}>
                                                    <Text style={styles.renttext}>{string.rajuhouse}</Text>
                                                    <Image source={icons.mapsandflags} style={styles.star} />
                                                    <Text style={styles.renttext2}>{string.anna}</Text>
                                                </View>
                                                <View>
                                                    <View style={styles.flex}>
                                                        <Text style={styles.textstyleindiv}>{string.Individual}</Text>
                                                        <Image source={icons.squre} style={styles.squre} />
                                                        <Text style={styles.renttext4asd}>800 Sq.Ft</Text>
                                                    </View>
                                                    <View style={styles.flexvirwmorw}>
                                                        <Text style={styles.rupeestextstyle}>₹ 10,000 </Text>
                                                        <TouchableOpacity onPress={() => {
                                                            toggleBoxVisibility2(item2.id);
                                                            toggleArrow2(item2.id);
                                                        }} style={styles.viewmorwstyle}>
                                                            <View style={styles.flex}>
                                                                <Text style={styles.viewmoretext}>{string.moreview}</Text>
                                                                <Image source={isUpArrow ? icons.downarrowtwo : icons.upload} style={styles.next} />
                                                            </View>
                                                        </TouchableOpacity>
                                                    </View>
                                                </View>
                                            </View>
                                        </View>
                                    </View>
                                    {isBoxVisible2 && (
                                        <View style={styles.hideandshowview}>
                                            <View style={styles.flexrowstyle}>
                                                <Text style={styles.nametext}>{string.name} :
                                                    <Text style={styles.namretex}> {item2.name}</Text></Text>
                                                <TouchableOpacity onPress={() => { deleteenquiryall(item2.enquiry_id) }}>
                                                    <Image source={icons.delete} style={styles.squre} />
                                                </TouchableOpacity>
                                            </View>
                                            <Text style={[styles.nametext, styles.nametexttwo]}>{string.mobilenumber} :
                                                <Text style={styles.namretex}>  {item2.mobile_number}</Text></Text>
                                            <Text style={[styles.nametext, styles.nametexttwo]}>{string.email} :
                                                <Text style={styles.namretex}> {item2.email_id}</Text></Text>
                                            <Text style={[styles.nametext, styles.nametexttwo]}>{string.whatsapp} :
                                                <Text style={styles.namretex}> {item2.whatsapp_number}</Text></Text>
                                            <Text style={[styles.nametext, styles.nametexttwo, styles.nametexttwothree]}>{string.message} :
                                                <Text style={styles.namretex}> {item2.message}</Text></Text>
                                        </View>
                                    )}
                                </View>
                            ))
                        ) : (
                            <Text style={styles.adstext}>No ads property enquiry</Text>
                        )}
                        {loading && <ActivityIndicator size="large" color=" #02487C" />}


                    </View>

                ) : null}

                <View style={styles.marbottom} />
            </ScrollView>
            {/* <TabbottomviewComponets
                selectedId={5}
                goBackToScreen={goBackToScreen}
            /> */}
        </View>
    )
}

export default Enquirylist

