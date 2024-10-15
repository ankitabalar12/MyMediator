import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { icons } from '../../Helper/icons';
import { styles } from './styles';

const AllPeoductViewCar = ({ route }) => {
  const carProduce = route?.params;
  console.log('carProduce <>', carProduce)
  const navigation = useNavigation();
  return (
    <View>
      <ScrollView>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={icons.left} style={styles.arrowleft}></Image>
        </TouchableOpacity>
        <View style={styles.flewabike}>
        {carProduce.carProduce.length > 0 ? (
          carProduce.carProduce.map((car, index) => (
            <View key={index}>
              <TouchableOpacity onPress={() => { navigation.navigate('CarDetails', { cardetail: car }) }} style={styles.bikeview2}>
                <Image source={{
                  uri: car.image ? `https://www.demo603.amrithaa.com/mymediator/public/${car.image.split(',')[0]}` : null
                }} style={[styles.bikeimg3style, styles.bikeimg3style3]} />
                <Text style={styles.ruptext}>{car.brand}</Text>

                <View style={styles.bikroew}>
                  <Image source={icons.mapsandflags} style={styles.locstyelbike} />
                  <Text style={styles.Weststyle}>{car.location}</Text>
                </View>
                <View style={styles.bikroew}>
                  <Text style={styles.kmtext}>{car.model_year} - {car.km_drive} km</Text>
                  <Text style={[styles.kmtext, styles.kmtext3]}>₹ {car.amount}</Text>

                </View>
              </TouchableOpacity>
            </View>
          ))
        ) : (
          <Text style={styles.adstext}>No Car Product</Text>
        )}
</View>
      </ScrollView>
    </View>
  )
}

export default AllPeoductViewCar

