import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect } from 'react'
import HeaderUserName from '../../Componets/HeaderUserName/HeaderUserName'
import SearchComponest from '../../Componets/SearchComponets/SearchComponest'
import { string } from '../../Helper/string'
import { styles } from './styles'
import { icons } from '../../Helper/icons'
import TabbottomviewComponets from '../../Componets/TabViewComponets/TabbottomviewComponets'
import { purchased } from '../../../APICall'
import AsyncStorage from '@react-native-community/async-storage'

const Subscription = ({ navigation }) => {

    useEffect(() => {
        const purchaseData = async () => {
            const userdata = await AsyncStorage.getItem('logindata');
            const finaluserdata = JSON.parse(userdata);
            // purchaseddata(finaluserdata.id);
           
            console.log('created_at--->', finaluserdata.id);
            
          };
       
          purchaseData();
    }, []);
    // const goBackToScreen = (selectedId) => {
    //     const screenMap = {
    //         1: 'HomeScreen',
    //        2: 'Propertyscreen',
    //         3: 'SellScreen',
    //         4: 'Package',
    //         5: 'ProfileScreen',
    //     };
    //     navigation.navigate(screenMap[selectedId]);
    //   };
    

    //   const purchaseddata = async (id) => {
    //     alert(11)
    //     setLoading(true);
    //     try {
    //       const data = {
    //         user_id: id,
    //       };
    //       console.log('data <p>', data)
    //       const res = await purchased(global.url + 'getpurchased', data);
    //      console.log('res <p>', res)
    //     } catch (error) {
    //     } finally {
    //       setLoading(false);
    //     }
    //   };
    

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
                <Text style={styles.proname}>{string.SubscriptionHistory}</Text>
                <Text style={styles.newtext}>{string.New}</Text>
                <View style={styles.mainviewstyles}>
                    <View style={styles.flexrow}>
                        <Image source={icons.gamesprop} style={styles.imgstyle} />
                        <View>
                            <Text style={styles.plattextstyle}>{string.Basic}</Text>
                            <View style={styles.satrfow}>
                                <Text style={styles.datetext}>{string.Startingdate} : 22/02/2023</Text>
                                <Text style={styles.datetext}>{string.Adsno} : 03</Text>
                            </View>
                            <View style={[styles.satrfow, styles.satrfowtwo]}>
                                <Text style={[styles.datetext, styles.datetexttwo]}>{string.Enddate} : 22/04/2023</Text>
                                <Image source={icons.Vector} style={styles.rupeesimgtwo}></Image>
                                <Text style={styles.pricestext}>10,000</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.mainviewstyles}>
                    <View style={styles.flexrow}>
                        <Image source={icons.girls} style={styles.imgstyle} />
                        <View>
                            <Text style={styles.plattextstyle}>{string.Premium}</Text>
                            <View style={styles.satrfow}>
                                <Text style={styles.datetext}>{string.Startingdate} : 22/02/2023</Text>
                                <Text style={styles.datetext}>{string.Adsno} : 03</Text>
                            </View>
                            <View style={[styles.satrfow, styles.satrfowtwo]}>
                                <Text style={[styles.datetext, styles.datetexttwo]}>{string.Enddate} : 22/04/2023</Text>
                                <Image source={icons.Vector} style={styles.rupeesimgtwo}></Image>
                                <Text style={styles.pricestext}>20,000</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <Text style={styles.newtext}>{string.Expired}</Text>
                <View style={styles.mainviewstyles}>
                    <View style={styles.flexrow}>
                        <Image source={icons.expriboy} style={styles.expriboy} />
                        <View>
                            <Text style={styles.plattextstyle}>{string.Proplan}</Text>
                            <View style={styles.satrfow}>
                                <Text style={styles.datetextrat}>{string.Startingdate} : 22/02/2023</Text>
                                <Text style={styles.datetextend}>{string.Enddate} : 22/04/2023</Text>
                            </View>
                            <View style={[styles.satrfow, styles.satrfowtwo]}>
                            <Image source={icons.Vector} style={styles.rupeesimgthree}></Image>
                                <Text style={styles.pricestext}>20,000</Text>
                                <TouchableOpacity style={styles.renewallview}>
                                    <Text style={styles.Renewaltext}>{string.Renewal}</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.mainviewstyles}>
                    <View style={styles.flexrow}>
                        <Image source={icons.girls} style={styles.expriboy} />
                        <View>
                            <Text style={styles.plattextstyle}>{string.Premiumscriptionplan}</Text>
                            <View style={styles.satrfow}>
                                <Text style={styles.datetextrat}>{string.Startingdate} : 22/02/2023</Text>
                                <Text style={styles.datetextend}>{string.Enddate} : 22/04/2023</Text>
                            </View>
                            <View style={[styles.satrfow, styles.satrfowtwo]}>
                            <Image source={icons.Vector} style={styles.rupeesimgthree}></Image>
                                <Text style={styles.pricestext}>20,000</Text>
                                <TouchableOpacity style={styles.renewallview}>
                                    <Text style={styles.Renewaltext}>{string.Renewal}</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.marginview} />
            </ScrollView>
            {/* <TabbottomviewComponets
                selectedId={5} goBackToScreen={goBackToScreen}/> */}
        </View>
    )
}

export default Subscription

