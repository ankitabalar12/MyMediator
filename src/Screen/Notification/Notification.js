import { ActivityIndicator, Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import HeaderTitle from '../../Componets/HeaderTitle/HeaderTitle'
import { styles } from './styles'
import { string } from '../../Helper/string'
import { icons } from '../../Helper/icons'
import TabbottomviewComponets from '../../Componets/TabViewComponets/TabbottomviewComponets'
import HeaderUserName from '../../Componets/HeaderUserName/HeaderUserName'
import SearchComponest from '../../Componets/SearchComponets/SearchComponest'
import { useNavigation } from '@react-navigation/native'
import { notification } from '../../../APICall'
import AsyncStorage from '@react-native-community/async-storage'

const Notification = () => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState()
  const [loading, setLoading] = useState(false);
  const [id, setID] = useState('');
  const [notification_data, setNotification_Data] = useState('')
  useEffect(() => {
    const notofiData = async () => {
      const userdata = await AsyncStorage.getItem('logindata');
      const finaluserdata = JSON.parse(userdata);
      setID(finaluserdata.id)
      getnotificationdata(finaluserdata.id);
      console.log('created_at--->', finaluserdata.id);

    };
    notofiData()
  }, []);
 
  const getnotificationdata = async (id) => {
    setLoading(true);
    try {
      const data = {
        user_id: id,
      };
      console.log('data<n>', data)
      const res = await notification(global.url + 'getnotification', data);
      console.log('resdata <>', res.data)

      if (res.success === true) {
        const count = Object.keys(res.data).length;
        const counter = await AsyncStorage.getItem('notification');
        console.log('count', count);
        console.log('counter', counter);
          if (count > counter && counter) {
          let dropDownData = [];
          for (let i = 0; i < count; i++) {
            let isnewmsg = i >= count - counter ? 0 : 1;
            console.log(isnewmsg);
            console.log('<><>', dropDownData)
            dropDownData.push({ id: res.data[i].id, message: res.data[i].message, is_new: isnewmsg });
          }
          setNotification_Data(dropDownData);
          console.log(dropDownData)
        } else {
          setNotification_Data(res.data);
        }
        await AsyncStorage.setItem('notification', count.toString());
      }

    } catch (error) {
      console.error('Error in getnotification API call:', error);
    } finally {
      setLoading(false);
    }
  };



  return (
    <View style={styles.container}>
      {/* <HeaderTitle
     title={string.Notifications}
     /> */}
      <ScrollView>
        <HeaderUserName />
        <SearchComponest
       
          onPress={() => {
            // setModalVisible(true)
          }}
        />
        <Text style={styles.proname}>{string.Notifications}</Text>
        <View style={styles.marbot} />
        {loading && <ActivityIndicator size="large" color="#02487C" />}

        {notification_data && notification_data.length > 0 ? (
          notification_data.map((item, index) => (
            <View key={index}>
              <View style={styles.mainview}>
                <View style={styles.flexrow}>
                  <View style={styles.proimge}>
                    <Image source={icons.natiimge1} style={styles.proimge2} />
                  </View>
                  <View style={styles.amrleft}>
                    <Text style={styles.Dineshtext}>{string.Dinesh}</Text>
                    <Text style={styles.Dineshtext2}>{item.message}</Text>
                  </View>
                  {/* <TouchableOpacity style={styles.newtextposition}>
                    <Text style={styles.newtext}>{string.new}</Text>
                  </TouchableOpacity> */}
                  {/* {item.isNew && (
                        <TouchableOpacity style={styles.newtextposition}>
                            <Text style={styles.newtext}>{string.new}</Text>
                        </TouchableOpacity>
                    )} */}
                  {item.is_new == 1 && (
                    <TouchableOpacity style={styles.newtextposition}>
                      <Text style={styles.newtext}>{string.new}</Text>
                    </TouchableOpacity>
                  )}
                </View>
              </View>
            </View>
          ))
        ) : (
          <Text style={styles.adstext}>No notification found</Text>
        )}



        <View style={styles.marginbottom} />
      </ScrollView>
      {/* <TabbottomviewComponets
        selectedId={5} goBackToScreen={goBackToScreen} /> */}
    </View>
  )
}

export default Notification

