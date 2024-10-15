import { ScrollView, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { styles } from './styles'
import HeaderUserName from '../../Componets/HeaderUserName/HeaderUserName'
import SearchComponest from '../../Componets/SearchComponets/SearchComponest'
import { string } from '../../Helper/string'
import { getconfigall } from '../../../APICall'

const Privacypolicy = ({ navigation }) => {
  const [id, setID] = useState('');
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getconfiginallData = async () => {
      const userdata = await AsyncStorage.getItem('logindata');
      const finaluserdata = JSON.parse(userdata);
      setID(finaluserdata.id);
    }
    getconfiginallData();
    getconfigData();
  }, [])
  const getconfigData = async () => {
    try {
      setLoading(true);
      const res = await getconfigall(global.url + 'getconfig', data);
      const filteredData = res.data.filter(item => item.id !== 2);
      const updatedData = filteredData.map((item) => ({
        ...item,
        id: item.id + 1,
      }));
      setData(updatedData);
    } catch (error) {
      console.error('Error fetching config data:', error);
    } finally {
      setLoading(false);
    }
  };



  const stripHtml = (html) => {
    return html.replace(/<[^>]+>/g, '');
  };
  return (
    <View style={styles.container}>
      <ScrollView>
        <HeaderUserName
          onPress={() => { navigation.navigate('Notification') }} />
        <SearchComponest

          onPress={() => {
            // setModalVisible(true)
          }}
        />
        <Text style={styles.proname}>{string.Privacypolicy}</Text>
        {data ? (
          <View>
            {data.map((item, index) => (<View>
              <View>
                <Text style={styles.Whydoweuseit}>{item.name}</Text>
                <Text style={styles.Whydoweuseit2}>{stripHtml(item.value)}</Text>

              </View>

            </View>))}
          </View>) : null}
        <View style={styles.marginbotom} />
      </ScrollView>
    </View>
  )
}

export default Privacypolicy

