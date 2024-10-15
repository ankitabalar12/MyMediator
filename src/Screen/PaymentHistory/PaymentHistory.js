import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { styles } from './styles'
import HeaderTitle from '../../Componets/HeaderTitle/HeaderTitle'
import { string } from '../../Helper/string'
import { icons } from '../../Helper/icons'
import HeaderUserName from '../../Componets/HeaderUserName/HeaderUserName'
import SearchComponest from '../../Componets/SearchComponets/SearchComponest'
import TabbottomviewComponets from '../../Componets/TabViewComponets/TabbottomviewComponets'

const PaymentHistory = ({navigation}) => {
    const [modalVisible, setModalVisible] = useState()
    const toggleModal = () => {
      setModalVisible(!modalVisible)
    }
    const goBackToScreen = (selectedId) => {
        const screenMap = {
            1: 'HomeScreen',
           2: 'Propertyscreen',
            3: 'SellScreen',
            4: 'Package',
            5: 'ProfileScreen',
        };
        navigation.navigate(screenMap[selectedId]);
      };
    return (
        <View style={styles.container}>
            {/* <HeaderTitle
                title={string.PaymentHistory} /> */}
            <HeaderUserName 
              onPress={() => { navigation.navigate('Notification') }}
            />
            <SearchComponest
         
                onPress={() => {
                    // setModalVisible(true)
                }}
            />
            <ScrollView>
       <Text style={styles.proname}>{string.PaymentHistory}</Text>

            <View style={styles.magbott} />
                <View style={styles.margin}>
                    <View style={styles.flewrow}>
                        <View style={styles.proview}>
                            <Image source={icons.paymentimg} style={styles.proview} />
                        </View>
                        <Text style={styles.kaviyatext}>{string.KaviyaAnjali}</Text>
                        <View style={styles.position}>
                            <Text style={styles.kaviyatext2}>₹ 10,000</Text>
                            <Text style={styles.kaviyatext3}>30/02/2023</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.margin}>
                    <View style={styles.flewrow}>
                        <View style={styles.proview}>
                            <Image source={icons.paymen2} style={styles.proview} />
                        </View>
                        <Text style={styles.kaviyatext}>{string.Sabitha}</Text>
                        <View style={styles.position}>
                            <Text style={styles.kaviyatext2}>₹ 20,000</Text>
                            <Text style={styles.kaviyatext3}>3/01/2023</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.margin}>
                    <View style={styles.flewrow}>
                        <View style={styles.proview}>
                            <Image source={icons.payment3} style={styles.proview} />
                        </View>
                        <Text style={styles.kaviyatext}>{string.Sanjaykumar}</Text>
                        <View style={styles.position}>
                            <Text style={styles.kaviyatext2}>₹ 30,000</Text>
                            <Text style={styles.kaviyatext3}>12/05/2023</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.margin}>
                    <View style={styles.flewrow}>
                        <View style={styles.proview}>
                            <Image source={icons.payment4} style={styles.proview} />
                        </View>
                        <Text style={styles.kaviyatext}>{string.Dhanush}</Text>
                        <View style={styles.position}>
                            <Text style={styles.kaviyatext2}>₹ 25,000</Text>
                            <Text style={styles.kaviyatext3}>30/03/2023</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.margin}>
                    <View style={styles.flewrow}>
                        <View style={styles.proview}>
                            <Image source={icons.payment5} style={styles.proview} />
                        </View>
                        <Text style={styles.kaviyatext}>{string.ShivaKarthikeyan}</Text>
                        <View style={styles.position}>
                            <Text style={styles.kaviyatext2}>₹ 65,000</Text>
                            <Text style={styles.kaviyatext3}>5/02/2023</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.margin}>
                    <View style={styles.flewrow}>
                        <View style={styles.proview}>
                            <Image source={icons.paymentimg6} style={styles.proview} />
                        </View>
                        <Text style={styles.kaviyatext}>{string.Sowmiya}</Text>
                        <View style={styles.position}>
                            <Text style={styles.kaviyatext2}>₹ 25,000</Text>
                            <Text style={styles.kaviyatext3}>3/02/2023</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.magbottto} />
            </ScrollView>
            <TabbottomviewComponets  
          selectedId={5} goBackToScreen={goBackToScreen}/>
        </View>
    )
}

export default PaymentHistory

