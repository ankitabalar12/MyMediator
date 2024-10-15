import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import { icons } from '../../Helper/icons'
import { string } from '../../Helper/string'
import { styles } from './styles'
import TabbottomviewComponets from '../../Componets/TabViewComponets/TabbottomviewComponets'

const BikesOption = ({ navigation }) => {

  // const goBackToScreen = (selectedId) => {
  //   const screenMap = {
  //     1: 'HomeScreen',
  //     2: 'Propertyscreen',
  //     3: 'SellScreen',
  //     4: 'Package',
  //     5: 'ProfileScreen',
  //   };
  //   navigation.navigate(screenMap[selectedId]);
  // };
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.flexrowstyle}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.marleft}>
            <Image source={icons.left} style={styles.leftarrow}></Image>
          </TouchableOpacity>
          <Text style={styles.Propertytext}>{string.bikes}</Text>
        </View>
        <TouchableOpacity onPress={() => { navigation.navigate('Motorcycle') }} style={styles.forsaleview}>
          <View style={styles.flexrowviewlist}>
            <Text style={styles.forsaletext}>Motorcycles</Text>
            <TouchableOpacity >
              <Image source={icons.doublear} style={styles.Groupstyle}></Image>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
        <TouchableOpacity  onPress={() => navigation.navigate('Bicyclesscreen') }
          style={[styles.forsaleview, styles.marginbox]}>
          <View style={styles.flexrowviewlist}>
            <Text style={styles.forsaletext}>Scooters</Text>
            <TouchableOpacity >
              <Image source={icons.doublear} style={styles.Groupstyle}></Image>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Bicyclesscreen') } style={[styles.forsaleview, styles.marginbox]}>
          <View style={styles.flexrowviewlist}>
            <Text style={styles.forsaletext}>Bicycles</Text>
            <TouchableOpacity >
              <Image source={icons.doublear} style={styles.Groupstyle}></Image>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </ScrollView>
      {/* <TabbottomviewComponets
        selectedId={1} goBackToScreen={goBackToScreen} /> */}
    </View>
  )
}

export default BikesOption

