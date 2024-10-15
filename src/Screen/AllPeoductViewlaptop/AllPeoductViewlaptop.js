import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { icons } from '../../Helper/icons';
import { styles } from './styles';

const AllPeoductViewlaptop = ({route}) => {
    const electronicsProduce = route?.params;
    console.log('mostvisitproperty_data <>', electronicsProduce)
    const navigation = useNavigation();
  return (
    <View>
      <ScrollView>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={icons.left} style={styles.arrowleft}></Image>
        </TouchableOpacity>
        <View style={styles.flewabike}>
        {electronicsProduce.electronicsProduce.length > 0 ? (
            electronicsProduce.electronicsProduce.map((electronics, index) => (
              <View key={index}>
                 <TouchableOpacity onPress={() => { navigation.navigate('ElectronicsDetails', { electronicsDetails: electronics }) }}  style={styles.bikeview2}>
                      <Image source={{
                        uri: electronics.image ? `https://www.demo603.amrithaa.com/mymediator/public/${electronics.image.split(',')[0]}` : null
                      }} style={[styles.bikeimg3style, styles.bikeimg3style3]} />
                      <Text style={styles.ruptext}>{electronics.model_name}</Text>

                      <View style={styles.bikroew}>
                        <Image source={icons.mapsandflags} style={styles.locstyelbike} />
                        <Text style={styles.Weststyle}>{electronics.location}</Text>
                      </View>
                      <View style={styles.bikroew}>
                        <Text style={styles.kmtext}>{electronics.model_year} </Text>
                        <Text style={[styles.kmtext, styles.kmtext3]}>₹ {electronics.amount}</Text>

                      </View>
                    </TouchableOpacity>
              </View>
            ))
          ) : (
            <Text style={styles.adstext}>No Electronics Product </Text>
          )}
          </View>
        </ScrollView>
         <View style={styles.marginview} />
    </View>
  )
}

export default AllPeoductViewlaptop

