import { StyleSheet, Text, View, ImageBackground, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { icons } from '../../Helper/icons'
import { styles } from './styles'
import { string } from '../../Helper/string'
import OTPTextInput from 'react-native-otp-textinput';
import ButtonComponets from '../../Componets/Button/ButtonComponets'
import { otpapi } from '../../../APICall'
import ReactNativeModal from 'react-native-modal'
import { TextInput } from 'react-native'
const OtpScreen = ({ navigation, route }) => {
    const [otp, setOtp] = useState('');
    const [submitted, setSubmitted] = useState(false)
    const [loading, setLoading] = useState(false)
    const [modalVisible, setModalVisible] = useState()
    const [location, setLocation] = useState('');
    const [is_selected, setIs_Selected] = useState('');
    // const colorOpacityModal = 0.9;
    const [backgroundColor, setBackgroundColor] = useState('#CECECE'); // Initial background color
    const user_id = route.params;
    console.log('user_id--->', user_id)
    const handleOTPChange = (code) => {
        setOtp(code);
        if (code.length === 4) {
            setBackgroundColor('#02487C');
        } else {
            setBackgroundColor('#CECECE');
        }

    };
    const selectbutton = (id) => {
        setIs_Selected(id)
    }
    const handleResendOTP = () => {
        alert('OTP Resent');
    };
    const toggleModal = () => {
        setModalVisible(!modalVisible)
    }
    // const dataOtp = async () => {
    //     setSubmitted(true);
    //     setLoading(true);
    //     console.log('otp', otp);
    //     if (otp !== '') {
    //         const data = {
    //             user_id: user_id,
    //             otp: otp,
    //         };
    //         console.log('data--->', data)
    //         try {
    //             const res = await otpapi(global.url + 'verifyotp', data);
    //             console.log('res------>', res)
    //             console.log('global.url------>', global.url)
    //             console.log('data------>', data)
    //             if (res && res.success === true) {
    //                 setLoading(false);
    //                 setModalVisible(false)
    //                 // navigation.navigate('LoginScreen');
    //                 navigation.navigate('DeshboardScreen');
    //             }
    //         } catch (error) {
    //             console.error('Error in OTP verification:', error);
    //             setLoading(false);

    //         }
    //     }
    // };

    const dataOtp = async () => {
        setSubmitted(true);
        setLoading(true);
        console.log('otp', otp);

        if (otp !== '') {
            const data = {
                user_id: user_id,
                otp: otp,
            };

            console.log('data--->', data);

            try {
                const res = await otpapi(global.url + 'verifyotp', data);
                console.log('res------>', res);
                console.log('global.url------>', global.url);
                console.log('data------>', data);

                if (res && res.success === true) {
                    // navigation.navigate('DeshboardScreen');
                    navigation.navigate('LoginScreen'); // Commented out
                    setModalVisible(true); 
                   

                } else {
                    // Handle the case where OTP verification fails
                    console.error('OTP verification failed');
                    setLoading(false);
                }
            } catch (error) {
                console.error('Error in OTP verification:', error);
                setLoading(false);
            }
        }
    };



    return (
        <ImageBackground
            source={icons.BluebstracDesign}
            style={styles.backgroundImage}
        >
            {/* <View style={styles.overlay} /> */}
            {/* <ScrollView> */}
            <Image source={icons.otpimg} style={styles.otpimg} />
            <View style={styles.viewstyle}>
                <TouchableOpacity onPress={() => {

                }}>
                    <Text style={styles.welcomtext}>{string.OTPVeri}</Text>
                </TouchableOpacity>
                <Text style={styles.Enteryour}>{string.Enteryour}</Text>
                <OTPTextInput
                    containerStyle={[styles.otpContainer]}

                    textInputStyle={[styles.otpInput, { color: '#fff', backgroundColor }]}
                    handleTextChange={(code) => handleOTPChange(code)}
                    length={4}
                    inactiveInputStyle={styles.otpInput2}
                    keyboardType="numeric"
                />

                <View style={styles.flexroww}>
                    <Text style={styles.textor2}>{string.received}</Text>
                    <TouchableOpacity onPress={handleResendOTP} >
                        <Text style={styles.textor3}>{string.Resend}</Text>
                    </TouchableOpacity>
                </View>
                <ButtonComponets
                    title={string.Verify}
                    onPress={() => {
                        dataOtp();
                        setModalVisible(true)
                    }}
                    stylesbutton={styles.stylesbutton}
                // onPress={() => { navigation.navigate('LoginScreen') }}
                />
            </View>
            {/* <ReactNativeModal
                isVisible={modalVisible}
                backdropColor='rgba(0, 0, 0, 0.5)'
                backdropOpacity={colorOpacityModal}
                onBackdropPress={toggleModal}
                supportedOrientations={['portrait', 'landscape']}
                onSwipeComplete={() => setModalVisible(false)}
                swipeDirection={['right']}
                onRequestClose={() => setModalVisible(false)}
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
                            setModalVisible(false)
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
                            navigation.navigate('DeshboardScreen');
                            setModalVisible(false)
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
            </ReactNativeModal> */}
        </ImageBackground>
    )
}

export default OtpScreen

