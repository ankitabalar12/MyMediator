import { ActivityIndicator, Image, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

import { icons } from '../../Helper/icons'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'
import { styles } from './styles'
import { string } from '../../Helper/string'

const PopularProperty = ({ route }) => {
    const [loading, setLoading] = useState(false);
    const popular_data = route?.params;
    console.log('popular_data <>', popular_data)
    const navigation = useNavigation();


    return (
        <View style={styles.container}>
            <ScrollView>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image source={icons.left} style={styles.arrowleft}></Image>
                </TouchableOpacity>
                <View>

                    {popular_data.popular_data.length > 0 ? (
                        popular_data.popular_data.map((item, index) => (

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
                                                <Text style={styles.renttext4asd}>{item.sqft} Sq.Ft</Text>
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
                    {loading && <ActivityIndicator size="large" color=" #02487C" />}
                </View>
            </ScrollView>
            <View style={styles.marginview} />
        </View>
    )
}

export default PopularProperty

