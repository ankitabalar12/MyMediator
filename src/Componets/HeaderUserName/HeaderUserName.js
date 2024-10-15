import { StyleSheet, Text, TouchableOpacity, View, Image, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import { icons } from '../../Helper/icons'
import { string } from '../../Helper/string'
import AsyncStorage from '@react-native-community/async-storage'
import { notification } from '../../../APICall'

const HeaderUserName = ({ navigation, onPress }) => {
    const [id, setID] = useState('');
    const [name, setName] = useState(false);
    const [is_new, setIs_New] = useState();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const loginallData = async () => {
            const userdata = await AsyncStorage.getItem('logindata');
            const finaluserdata = JSON.parse(userdata);
            setName(finaluserdata.name);
            setID(finaluserdata.id);
            getnotificationdata(finaluserdata.id)
            // navigation.addListener('focus', () => {
            //     getnotificationdata(finaluserdata.id)
            // })
        }
        loginallData()
    }, [])


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
        <View>
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
                <TouchableOpacity onPress={onPress} style={styles.bellicon}>
                    <Image source={icons.bell} style={styles.bell} />
                    {is_new == 1 && (
                        <View style={styles.sendnotification}></View>
                    )}

                </TouchableOpacity>
            </View>
        </View>
    )
}

export default HeaderUserName

const styles = StyleSheet.create({
    // flexroww: {
    //     flexDirection: "row",
    //     justifyContent: "space-between",
    //     marginTop: '5%',
    //     marginLeft: "5%",

    // },
    // textinput: {
    //     fontSize: 18,
    //     fontFamily: 'Poppins-SemiBold',
    //     color: "#000"

    // },
    // bell: {
    //     height: 25, width:25,
    // },
    // bellicon: {
    //     marginRight: "5%", marginTop: "5%"
    // },
    // flexrow2: {
    //     flexDirection: "row",
    //     marginLeft: "4%", marginTop: "1%"

    // },
    // mapsandflags: {
    //     height: 20, width: 20, marginRight: "2%",
    //     tintColor: "red"
    // },
    // mapsandflags2: {
    //     height: 15, width: 15, marginRight: "1%",
    //     marginTop: "1%",
    //     tintColor: "red"
    // },
    // West: {
    //     color: '#000'
    // },
    menuone: {
        height: 20, width: 20
    },
    flexroww: {
        flexDirection: "row",
        marginTop: '5%',
        marginLeft: "5%",

    },
    textinput: {
        fontSize: 12,
        fontFamily: 'Poppins-SemiBold',
        fontWeight: '900',
        color: "#000"

    },
    bell: {
        height: 20, width: 20,
    },
    bellicon: {
        position: "absolute",
        right: 15
    },
    textmar: {
        marginLeft: '5%',
        marginTop: -5
    },
    loctionrow: {
        flexDirection: 'row'
    },
    loctionicon: {
        height: 10, width: 10,
        tintColor: '#18A60B',
        marginTop: 5
    },
    West: {
        fontSize: 11,
        color: '#000',
        marginTop: 2,
        marginLeft: 2
    },
    sendnotification: {
        height: 5, width: 5, borderRadius: 2, backgroundColor: "#18A60B",
        position: 'absolute', right: 3, top: 2,

    },
})