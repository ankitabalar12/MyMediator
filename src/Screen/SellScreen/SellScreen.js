import { BackHandler, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
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

const SellScreen = ({ navigation }) => {
    const isFocused = useIsFocused();
    const [name, setName] = useState(false);
    const [id, setID] = useState('')
    const [loading, setLoading] = useState(false);
    const [modalVisible, setModalVisible] = useState()
    const [modalVisible2, setModalVisible2] = useState()
    const [is_selected, setIs_Selected] = useState('');
    const [location, setLocation] = useState('');
    const colorOpacityModal = 0.9;
    useEffect(() => {
        const loginallData = async () => {
            const userdata = await AsyncStorage.getItem('logindata');
            const finaluserdata = JSON.parse(userdata);
            setName(finaluserdata.name);
            setID(finaluserdata.id);


            console.log('created_at--->', finaluserdata.name);
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
                            <TouchableOpacity onPress={() =>
                                setModalVisible2(true)
                            }>
                                <Image source={icons.mapsandflags} style={styles.loctionicon} />
                            </TouchableOpacity>
                            <Text style={styles.West}>West Mambalam, Chennai - 33</Text>
                        </View>
                    </View>
                    <TouchableOpacity onPress={() => { navigation.navigate('Notification') }} style={styles.bellicon}>
                        <Image source={icons.bell} style={styles.bell} />
                        <View style={styles.sendnotification}></View>
                    </TouchableOpacity>
                </View>
                <View style={styles.flexrow2}>
                    <View style={styles.searchview}>
                        <View style={styles.flexrow}>
                            <Image source={icons.search} style={styles.search} />
                            <TextInput
                                placeholder="Search on your mind"
                                placeholderTextColor={'#808080'}
                            //   onChangeText={onPress} 
                            />
                        </View>
                    </View>
                    <TouchableOpacity onPress={() => {
                        setModalVisible(true)
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
                    <TouchableOpacity onPress={() => { navigation.navigate('ElectronicsAllCategoriesForm') }} style={[styles.boxstyle]}>
                        <Image source={icons.elecicons} style={styles.housepropertystyle}></Image>
                        <View style={styles.chevronMain}>
                            <View style={[styles.chevronTriangle, styles.chevronTopLeft]} />
                            <View style={[styles.chevronTriangle, styles.chevronTopRight]} />
                            <Text style={styles.textstyle}>Electronics</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { navigation.navigate('PropertyOption') }} style={[styles.boxstyle]}>
                        <Image source={icons.homeicons} style={styles.homestyle}></Image>
                        <View style={[styles.chevronMain2,]}>
                            <View style={[styles.chevronTriangle2, styles.chevronTopLeft2]} />
                            <View style={[styles.chevronTriangle2, styles.chevronTopRight2]} />
                            <Text style={styles.textstyle}>Property</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { navigation.navigate('AddCar') }} style={[styles.boxstyle]}>
                        <Image source={icons.caricons} style={styles.carstyle}></Image>
                        <View style={styles.chevronMain3}>
                            <View style={[styles.chevronTriangle3, styles.chevronTopLeft3]} />
                            <View style={[styles.chevronTriangle3, styles.chevronTopRight3]} />
                            <Text style={styles.textstyle}>Cars</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { navigation.navigate('BikesOptionTwo') }} style={[styles.boxstyle]}>
                        <Image source={icons.bokeicon} style={[styles.bokeicon]}></Image>
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
            {/* <TabbottomviewComponets
        selectedId={3} goBackToScreen={goBackToScreen} /> */}
        </View>
    )
}

export default SellScreen

