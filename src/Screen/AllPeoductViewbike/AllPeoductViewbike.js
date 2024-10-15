import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { icons } from '../../Helper/icons';
import { styles } from './styles';

const AllPeoductViewbike = ({ route }) => {
  const bikeProduce = route?.params;
  console.log('bikeProduce <>', bikeProduce)
  const navigation = useNavigation();
  return (
    <View>
      <ScrollView>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={icons.left} style={styles.arrowleft}></Image>
        </TouchableOpacity>
        <View style={styles.flewabike}>
          {bikeProduce.bikeProduce.length > 0 ? (
            bikeProduce.bikeProduce.map((bike, index) => (
              <View key={index}>
                <TouchableOpacity onPress={() => { navigation.navigate('BikeDetails', { bikedetails: bike }) }} style={styles.bikeview2}>
                  <Image source={{
                    uri: bike.image ? `https://www.demo603.amrithaa.com/mymediator/public/${bike.image.split(',')[0]}` : null
                  }} style={[styles.bikeimg3style, styles.bikeimg3style3]} />
                  <Text style={styles.ruptext}>{bike.brand_model}</Text>

                  <View style={styles.bikroew}>
                    <Image source={icons.mapsandflags} style={styles.locstyelbike} />
                    <Text style={styles.Weststyle}>West Mambalam, Chennai</Text>
                  </View>
                  <View style={styles.bikroew}>
                    <Text style={styles.kmtext}>{bike.year} - {bike.km_driven} km</Text>
                    <Text style={[styles.kmtext, styles.kmtext3]}>₹ {bike.amount}</Text>

                  </View>
                </TouchableOpacity>
              </View>
            ))
          ) : (
            <Text style={styles.adstext}>No Bike Product</Text>
          )}
        </View>
      </ScrollView>
    </View>
  )
}

export default AllPeoductViewbike

