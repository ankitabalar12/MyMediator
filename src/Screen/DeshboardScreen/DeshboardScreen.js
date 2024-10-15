import { Alert, BackHandler, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { icons } from '../../Helper/icons'
import { string } from '../../Helper/string'
import { useIsFocused } from '@react-navigation/native'
import { styles } from './styles'
import AsyncStorage from '@react-native-community/async-storage'
import SearchComponest from '../../Componets/SearchComponets/SearchComponest'
import CustomModal from '../../Componets/CustomModal/CustomModal'
import ReactNativeModal from 'react-native-modal'
import TabbottomviewComponets from '../../Componets/TabViewComponets/TabbottomviewComponets'
import { notification } from '../../../APICall'

const DeshboardScreen = ({ navigation }) => {
    const isFocused = useIsFocused();
    const [name, setName] = useState(false);
    const [id, setID] = useState('')
    const [loading, setLoading] = useState(false);
    const [modalVisible, setModalVisible] = useState()
    const [modalVisible2, setModalVisible2] = useState()
    const [is_selected, setIs_Selected] = useState('');
    const [location, setLocation] = useState('');
    const [is_new, setIs_New] = useState();
    const colorOpacityModal = 0.9;
    useEffect(() => {
        const loginallData = async () => {
            const userdata = await AsyncStorage.getItem('logindata');
            const finaluserdata = JSON.parse(userdata);
            setName(finaluserdata.name);
            setID(finaluserdata.id);
            getnotificationdata(finaluserdata.id)
            console.log('created_at--->', finaluserdata.name);
        };
        const handleBackButton = () => {
            if (isFocused) {
                BackHandler.exitApp();
                return true;
            }
            return false;
        };
        loginallData();
      

        BackHandler.addEventListener('hardwareBackPress', handleBackButton);
        return () => BackHandler.removeEventListener('hardwareBackPress', handleBackButton);
    }, [isFocused]);

    const toggleModal = () => {
        setModalVisible(!modalVisible)
    }
    const toggleModal2 = () => {
        setModalVisible2(!modalVisible2)
    }
    const selectbutton = (id) => {
        setIs_Selected(id)
    }
    const getnotificationdata = async (id) => {
        setLoading(true);
        try {
            const data = { user_id: id };
            console.log('data notification-------------', data);
    
            const res = await notification(global.url + 'getnotification', data);
            console.log('res ==================', res);
    
            if (res && res.success && res.data) {
                const count = Object.keys(res.data).length;
                const counter = await AsyncStorage.getItem('notification');
    
                const storedCounter = counter ? parseInt(counter, 10) : 0;
    
                if (count > storedCounter) {
                    setIs_New(1);
                }
            } else {
                const errorMessage = res?.message || 'An unexpected error occurred.';
                Alert.alert('Notification Error', errorMessage);
                console.log('Failed to fetch notifications:', errorMessage);
            }
        } catch (error) {
            console.error('Error in getnotification API call:', error);
            Alert.alert('Notification Error', 'An error occurred while fetching data.');
        } finally {
            setLoading(false);
        }
    };
    
    
    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.flexroww}>
                    <TouchableOpacity>
                        <Image source={icons.menuone} style={styles.menuone} />
                    </TouchableOpacity>
                    <View style={styles.textmar}>
                        <Text style={styles.textinput}>{string.hii},  <Text style={styles.textinput}>{name}</Text></Text>
                        <View style={styles.loctionrow}>
                            <TouchableOpacity
                            //  onPress={() =>
                            //     setModalVisible2(true)}
                                >
                                <Image source={icons.mapsandflags} style={styles.loctionicon} />
                            </TouchableOpacity>
                            <TouchableOpacity 
                            // onPress={() =>
                            //     setModalVisible2(true)}
                                >
                            <Text style={styles.West}>West Mambalam, Chennai - 33</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <TouchableOpacity onPress={() => { navigation.navigate('Notification') }} style={styles.bellicon}>
                        <Image source={icons.bell} style={styles.bell} />
                        {is_new == 1 && (
                        <View style={styles.sendnotification}></View>
                    )}
                    </TouchableOpacity>
                </View>
                <View style={styles.flexrow2}>
                    <View style={styles.searchview}>
                        <View style={styles.flexrow}>
                            <Image source={icons.search} style={styles.search} />
                            <TextInput
                                placeholder="Search on your mind "
                                placeholderTextColor={'#808080'}
                            //   onChangeText={onPress} 
                            />
                        </View>
                    </View>
                    <TouchableOpacity onPress={() => {
                        // setModalVisible(true)
                        setModalVisible2(true)
                         }} style={styles.searchiconview}>

                        <Image source={icons.menuselected} style={styles.mapsandflags} />

                    </TouchableOpacity>
                </View>
                <CustomModal
                    isVisible={modalVisible}
                    onBackdropPress={toggleModal}
                    transparent={true}
                    backdropColor={'#fff'}
                    style={{ margin: 0, bottom: 0 }}
                    backdropOpacity={0}
                    modalestyle={styles.modalestyle}
                />
                <Text style={styles.SelectCategoriestext}>{string.SelectCategories}</Text>
                <View style={styles.allitemrwow}>
                    <TouchableOpacity onPress={() => { navigation.navigate('PropertyOptionTwo') }} style={[styles.boxstyle]}>
                        <Image source={icons.houseproperty} style={styles.housepropertystyle}></Image>
                        <View style={styles.chevronMain}>
                            <View style={[styles.chevronTriangle, styles.chevronTopLeft]} />
                            <View style={[styles.chevronTriangle, styles.chevronTopRight]} />
                            <Text style={styles.textstyle}>Property</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { navigation.navigate('ElectronicsOption') }} style={[styles.boxstyle]}>
                        <Image source={icons.electronic} style={styles.housepropertystyle}></Image>
                        <View style={[styles.chevronMain2,]}>
                            <View style={[styles.chevronTriangle2, styles.chevronTopLeft2]} />
                            <View style={[styles.chevronTriangle2, styles.chevronTopRight2]} />
                            <Text style={styles.textstyle}>Electronics</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { navigation.navigate('HomeScreen') }} style={[styles.boxstyle]}>
                        <Image source={icons.car} style={styles.housepropertystyle}></Image>
                        <View style={styles.chevronMain3}>
                            <View style={[styles.chevronTriangle3, styles.chevronTopLeft3]} />
                            <View style={[styles.chevronTriangle3, styles.chevronTopRight3]} />
                            <Text style={styles.textstyle}>Cars</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { navigation.navigate('BikesOptionTwo') }} style={[styles.boxstyle]}>
                        <Image source={icons.ktm} style={styles.housepropertystyle}></Image>
                        <View style={[styles.chevronMain4]}>
                            <View style={[styles.chevronTriangle4, styles.chevronTopLeft4,]} />
                            <View style={[styles.chevronTriangle4, styles.chevronTopRight4,]} />
                            <Text style={styles.textstyle}>Bikes</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <ReactNativeModal
                    isVisible={modalVisible2}
                    backdropColor='rgba(0, 0, 0, 0.5)'
                    backdropOpacity={colorOpacityModal}
                    onBackdropPress={toggleModal2}
                    supportedOrientations={['portrait', 'landscape']}
                    onSwipeComplete={() => setModalVisible2(false)}
                    swipeDirection={['right']}
                    onRequestClose={() => setModalVisible2(false)}
                    style={{ margin: 0, bottom: 0 }}
                >
                    <View style={styles.mainmodalview}>
                        <Image source={icons.magelocationfill} style={styles.magelocationfillstyle}></Image>
                        <Text style={styles.useryourtext}>{string.UseYourLocation}</Text>
                        <View style={styles.loctiontextinput}>
                            <View style={styles.flexrowview}>
                                <Image style={styles.locotionstyle} source={icons.mapsandflags} />
                                <TextInput
                                    placeholder="Enter the location"
                                    placeholderTextColor={'#575757'}
                                    value={location}
                                    onChangeText={(location) => setLocation(location)}
                                    style={styles.input}
                                />

                            </View>
                        </View>
                        <Text style={styles.ortetxet}>Or</Text>
                        <View style={styles.loctionrow}>
                            <Image style={styles.locotionstyle2} source={icons.mapsandflags} />
                            <Text style={styles.Usecurrentlocation}>{string.Usecurrentlocation}</Text>
                        </View>
                        <View style={styles.floxrowviewbutton}>
                            <TouchableOpacity onPress={() => {
                                selectbutton(1)
                                setModalVisible2(false)
                            }} style={[styles.cencelbutton,
                            {
                                backgroundColor: is_selected === 1 ? '#002408' : '#fff',
                                borderColor: is_selected === 1 ? '#fff' : '#002408'
                            }]}>
                                <Text style={[styles.textcancalandok,
                                { color: is_selected === 1 ? '#fff' : '#002408' }]}>{string.Cancel}</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => {
                                selectbutton(2);

                                setModalVisible2(false)
                            }} style={[styles.cencelbutton,
                            {
                                backgroundColor: is_selected === 2 ? '#002408' : '#fff',
                                borderColor: is_selected === 2 ? '#fff' : '#002408'
                            }]}>
                                <Text style={[styles.textcancalandok,
                                { color: is_selected === 2 ? '#fff' : '#002408' }]}>{string.ok}</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ReactNativeModal>
            </ScrollView>

        </View>
    )
}

export default DeshboardScreen

