import { Image, ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { styles } from './styles'
import { icons } from '../../Helper/icons'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'
import { string } from '../../Helper/string'

const Mostvisitproperty = ({ route }) => {
  const mostvisitproperty_data = route?.params;
  console.log('mostvisitproperty_data <>', mostvisitproperty_data)
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <ScrollView>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={icons.left} style={styles.arrowleft}></Image>
        </TouchableOpacity>
        <View style={styles.flexview}>
          {mostvisitproperty_data.mostvisitproperty_data.length > 0 ? (
            mostvisitproperty_data.mostvisitproperty_data.map((item, index) => (
              <View key={index}>
              <View style={styles.viewstyles}>
                <ImageBackground source={{ uri: `https://www.demo603.amrithaa.com/mymediator/public/${item.image ? item.image.split(',')[0] : null}` }} borderRadius={11}
                  style={styles.backgroundImage}>
                </ImageBackground>
                <Text style={styles.textstylehome}>{item.property_name}</Text>
                <View style={styles.flextop}>
                  <View style={styles.propertyview}>
                    <Text style={styles.BHK}>{item.property_type}</Text>
                  </View>
                  <Image source={icons.mapsandflags} style={styles.mapsandflags2} />
                  <Text style={styles.West}>{item.location}</Text>
                </View>
                <View style={styles.flexbotview}>
                  <Image source={icons.squre} style={styles.squre} />
                  <Text style={styles.sqtext}>{item.sqft}</Text>
                  <Image source={icons.Vector} style={styles.rupeesimgthree}></Image>
                  <Text style={styles.renttexpraise}>{item.amount}</Text>
                </View>
              </View>
            </View>
            ))
          ) : (
            <Text style={styles.adstext}>No ads Mostvisitproperty</Text>
          )}
        </View>
      </ScrollView>
      <View style={styles.marginview} />
    </View>
  )
}

export default Mostvisitproperty

