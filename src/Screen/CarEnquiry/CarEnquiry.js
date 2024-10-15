import { Alert, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { styles } from './styles'
import { icons } from '../../Helper/icons'
import { useNavigation } from '@react-navigation/native'
import CustomTextInput from '../../Componets/TextInput/CustomTextInput'
import ButtonComponets from '../../Componets/Button/ButtonComponets'
import { string } from '../../Helper/string'
import TabbottomviewComponets from '../../Componets/TabViewComponets/TabbottomviewComponets'
import AsyncStorage from '@react-native-community/async-storage'
import { ActivityIndicator } from 'react-native'
import { carenquiryapi } from '../../../APICall'


const CarEnquiry = ({route}) => {
    const [name, setName] = useState('')
    const [MobileNumber, setMobileNumber] = useState('')
    const [whatsappNumber, setwhatsappNumber] = useState('')
    const [email_id, setEmail_id] = useState('')
    const [message, setMessage] = useState('')
    const [errors, setErrors] = useState({});
    const navigation = useNavigation();
    const [loading, setLoading] = useState(false);
    const [Id, setID] = useState('')
    const car_id = route?.params;
    console.log('car_id------------', car_id)
    useEffect(() => {
        const loginallData = async () => {
          const userdata = await AsyncStorage.getItem('logindata');
          const finaluserdata = JSON.parse(userdata);
          console.log('finaluserdata ------eeee-----------',finaluserdata)
          setID(finaluserdata.id);
        }
        loginallData()
      }, [])
      const Carenquiry = async () => {

        const newErrors = {};
        if (!name) {
            newErrors.name = 'Please enter name';
        }
        if (!MobileNumber) {
            newErrors.MobileNumber = 'Please enter MobileNumber';
        }
        if (!whatsappNumber) {
            newErrors.whatsappNumber = 'Please enter whatsappNumber';
        }
       
        if (!email_id) {
            newErrors.carpetaery = 'Please enter email_id';
        }
        if (!message) {
            newErrors.carpetaery = 'Please enter message';
        }
        console.log('>>>>>', newErrors);
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            // return;
        }
        setErrors({});
        try{
        const data = {
            user_id:Id,
            property_id:car_id.car_id,
            type:3, 
            name:name,
            mobile_number:MobileNumber,
            whatsapp_number:whatsappNumber,
            email_id:email_id,
            message:message,
            
          };
         console.log('data -------------',data)
          const res = await carenquiryapi(global.url + 'enquiry ', data);
          console.log('res ><>><', res)
          if (res && res.success === true) {
            Alert.alert('Success', 'Data uploaded successfully.', [
                {
                  text: 'OK',
                  onPress: () => {
                   
                    navigation.navigate('HomeScreen'); 
                  },
                },
              ]);
          } else {
            Alert.alert('Error', 'Failed to upload data. Please try again.');
          }
        } catch (error) {
          console.error('Error:', error);
          Alert.alert('Error', 'An unexpected error occurred. Please try again.');
        } finally {
          setLoading(false);
        }

    }
    return (
        <View style={styles.container}>
            <ScrollView>
            <View style={styles.flexrow}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image style={styles.backicon} source={icons.left}></Image>
                </TouchableOpacity>
                <Text style={styles.Enquirytext}>Enquiry Now</Text>
            </View>
            <Text style={styles.nametext}>Name</Text>
            <CustomTextInput
                placeholder="Enter name"
                placeholderTextColor="#C2C2C2"
                value={name}
                onChangeText={(name) => setName(name)}
                styleview={styles.styleview}
            />
            {errors.name && <Text style={styles.error}>{errors.name}</Text>}
            <Text style={[styles.nametext, styles.nametext2]}>Mobile Number</Text>
            <CustomTextInput
                placeholder="Enter Mobile Number"
                placeholderTextColor="#C2C2C2"
                value={MobileNumber}
                maxLength={10}
                onChangeText={(MobileNumber) => setMobileNumber(MobileNumber)}
                styleview={styles.styleview}
            />
            {errors.MobileNumber && <Text style={styles.error}>{errors.MobileNumber}</Text>}
            <Text style={[styles.nametext, styles.nametext2]}>WhatsApp number </Text>
            <CustomTextInput
                placeholder="Enter WhatsApp Number"
                placeholderTextColor="#C2C2C2"
                value={whatsappNumber}
                maxLength={10}
                onChangeText={(whatsappNumber) => setwhatsappNumber(whatsappNumber)}
                styleview={styles.styleview}
            />
            {errors.whatsappNumber && <Text style={styles.error}>{errors.whatsappNumber}</Text>}
            <Text style={[styles.nametext, styles.nametext2]}>E-mail ID</Text>
            <CustomTextInput
                placeholder="Enter E-mail"
                placeholderTextColor="#C2C2C2"
                value={email_id}
                onChangeText={(email_id) => setEmail_id(email_id)}
                styleview={styles.styleview}
            />
            {errors.email_id && <Text style={styles.error}>{errors.email_id}</Text>}
            <Text style={[styles.nametext, styles.nametext2]}>Message</Text>
            <View style={styles.styleviewdescrip}>
                <TextInput
                    placeholder="Enter Message"
                    placeholderTextColor="#C2C2C2"
                    value={message}

                    onChangeText={(message) => setMessage(message)}
                    style={styles.sttyinput}
                    multiline={true}
                />
            </View>
            {errors.message && <Text style={styles.error}>{errors.message}</Text>}
            {loading && <ActivityIndicator size="large" color="#02487C" />}
            <ButtonComponets
                stylebutton={styles.stylebutton}
                title={string.Submit}
               onPress={Carenquiry}
            />
            <View style={styles.marto}></View>
            </ScrollView>
            {/* <TabbottomviewComponets
        selectedId={1} goBackToScreen={goBackToScreen} /> */}
        </View>
    )
}

export default CarEnquiry

