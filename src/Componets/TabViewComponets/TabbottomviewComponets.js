import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { icons } from '../../Helper/icons'
import { useNavigation } from '@react-navigation/native';

const TabbottomviewComponets = ({ selectedId, bottommodalstyle, goBackToScreen }) => {
    const navigation = useNavigation();
    const [focused, setFocused] = useState(selectedId);

    const handleTabPress = (id) => {
        setFocused(id);
        goBackToScreen(id);
    }

    return (
        <View style={[styles.container, bottommodalstyle]}>
            <View style={styles.mainview}>
                <View style={styles.flexrow}>
                    {focused === 1 ? (
                        <TouchableOpacity onPress={() => handleTabPress(1)}>
                            <View style={[styles.selectedview]}>
                                <Image
                                    source={icons.home}
                                    style={[styles.home, { tintColor: '#02487C' }]}
                                />
                            </View>
                            <Text style={styles.textstyle}>Home</Text>
                        </TouchableOpacity>
                    ) : (
                        <TouchableOpacity onPress={() => {
                            handleTabPress(1);
                            navigation.navigate('DeshboardScreen');
                        }}>
                            <Image
                                source={icons.home}
                                style={[styles.home, { tintColor: '#fff', marginTop: focused === 1 ? 20 : 0 }]}
                            />
                        </TouchableOpacity>
                    )}
                    {focused === 2 ? (
                        <TouchableOpacity onPress={() => handleTabPress(2)}>
                            <View style={styles.selectedview}>
                                <Image
                                    source={icons.adstext2}
                                    style={[styles.keyandhand, { tintColor: '#02487C' }]}
                                />
                            </View>
                            <Text style={styles.textstyle}>Like</Text>
                        </TouchableOpacity>
                    ) : (
                        <TouchableOpacity onPress={() => {
                            handleTabPress(2);
                            navigation.navigate('Propertyscreen');
                        }}>
                            <Image
                                source={icons.adstext2}
                                style={[styles.keyandhand, { tintColor: '#fff' }]}
                            />
                        </TouchableOpacity>
                    )}
                    {focused === 3 ? (
                        <TouchableOpacity onPress={() => handleTabPress(3)}>
                            <View style={styles.selectedview}>
                                <Image
                                    source={icons.Addprop}
                                    style={[styles.Addprop, { tintColor: '#02487C', marginRight: "8%" }]}
                                />
                            </View>
                            <Text style={styles.textstyle}>Sell</Text>
                        </TouchableOpacity>
                    ) : (
                        <TouchableOpacity onPress={() => {
                            handleTabPress(3);
                            navigation.navigate('SellScreen');
                        }}>
                            <Image
                                source={icons.Addprop}
                                style={[styles.Addprop, { tintColor: '#fff' }]}
                            />
                        </TouchableOpacity>
                    )}
                    {focused === 4 ? (
                        <TouchableOpacity onPress={() => handleTabPress(4)}>
                            <View style={styles.selectedview}>
                                <Image
                                    source={icons.creditcard}
                                    style={[styles.Addprop, { tintColor: '#02487C' }]}
                                />
                            </View>
                            <Text style={styles.textstyle}>Package</Text>
                        </TouchableOpacity>
                    ) : (
                        <TouchableOpacity onPress={() => {
                            handleTabPress(4);
                            navigation.navigate('Package');
                        }}>
                            <Image
                                source={icons.creditcard}
                                style={[styles.Addprop, { tintColor: '#fff' }]}
                            />
                        </TouchableOpacity>
                    )}
                    {focused === 5 ? (
                        <TouchableOpacity onPress={() => handleTabPress(5)}>
                            <View style={styles.selectedview}>
                                <Image
                                    source={icons.user}
                                    style={[styles.user, { tintColor: '#02487C' }]}
                                />
                            </View>
                            <Text style={styles.textstyle}>Profile</Text>
                        </TouchableOpacity>
                    ) : (
                        <TouchableOpacity onPress={() => {
                            handleTabPress(5);
                            navigation.navigate('ProfileScreen');
                        }}>
                            <Image
                                source={icons.user}
                                style={[styles.user, { tintColor: '#fff' }]}
                            />
                        </TouchableOpacity>
                    )}
                </View>
            </View>
        </View>
    )
}

export default TabbottomviewComponets

const styles = StyleSheet.create({
    container: {},
    mainview: {
        backgroundColor: '#02487C',
        height: 70,
        width: '100%',
        position: "absolute",
        bottom: 0,
        justifyContent: "center",
    },
    flexrow: {
        flexDirection: "row",
        justifyContent: 'space-between',
        marginHorizontal: "8%"
    },
    home: { height: 35, width: 35 },
    keyandhand: { height: 21, width: 25, marginTop:6 },
    Addprop: { height: 35, width: 35 },
    creditcard: { height: 35, width: 35 },
    user: { height: 35, width: 35 },
    selectedview: {
        height: 60,
        width: 60,
        borderRadius: 60,
        backgroundColor: "#fff",
        justifyContent: "center",
        alignItems: "center",
        position: 'absolute',
        bottom: 10,
        borderColor: "#02487C",
        borderWidth: 3,
        flexDirection: "row",
        alignSelf: "center",
        margin: 10
    },
    textstyle: {
        color: '#fff',
        marginTop: 20,
        fontFamily: 'Poppins-SemiBold',
    }
})
