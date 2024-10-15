import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import TabbottomviewComponets from '../../Componets/TabViewComponets/TabbottomviewComponets'
import { styles } from './styles';
import { icons } from '../../Helper/icons';
import { string } from '../../Helper/string';

const PropertyOptionTwo = ({ navigation,route }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);
  
  const toggleVisibility = () => {
    setIsVisible(!isVisible);
};
const toggleVisibility2 = () => {
  setIsVisible2(!isVisible2);
};
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
          <Text style={styles.Propertytext}>{string.Property}</Text>
        </View>
        <TouchableOpacity onPress={toggleVisibility} style={styles.forsaleview}>
          <View style={styles.flexrowviewlist}>
            <Text style={styles.forsaletext}>For Sale</Text>
            <TouchableOpacity onPress={toggleVisibility}>
            <Image source={icons.doublear} style={styles.Groupstyle}></Image>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
        {isVisible && (
                <>
        <TouchableOpacity  onPress={() => { 
              //  navigation.navigate('HomeScreen')
           navigation.navigate('HomeScreen')
           }} style={styles.forsaleview2}>
          <View style={styles.flexrowviewlist}>
            <Text style={styles.forsaletext}>For Sale : Houses & Apartment</Text>
            <TouchableOpacity>
            <Image source={icons.doublear} style={styles.Groupstyle}></Image>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
           <TouchableOpacity   onPress={() => { navigation.navigate('HomeScreen') }}  style={styles.forsaleview2}>
        
          <View style={styles.flexrowviewlist}>
            <Text style={styles.forsaletext}>For Sale : Shops & Offices</Text>
            <TouchableOpacity>
            <Image source={icons.doublear} style={styles.Groupstyle}></Image>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
        </>
        )}
         <TouchableOpacity onPress={toggleVisibility2} style={[styles.forsaleview,styles.forsaleviewtwo]}>
          <View style={styles.flexrowviewlist}>
            <Text style={styles.forsaletext}>For Rent </Text>
            <TouchableOpacity onPress={toggleVisibility2}>
            <Image source={icons.doublear} style={styles.Groupstyle}></Image>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
            {isVisible2 && (
                <>
        <TouchableOpacity onPress={() => { navigation.navigate('HomeScreen') }} style={styles.forsaleview2}>
          <View style={styles.flexrowviewlist}>
            <Text style={styles.forsaletext}>For Rent : Houses & Apartment </Text>
            <TouchableOpacity>
            <Image source={icons.doublear} style={styles.Groupstyle}></Image>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { navigation.navigate('HomeScreen') }} style={styles.forsaleview2}>
          <View style={styles.flexrowviewlist}>
            <Text style={styles.forsaletext}>For Rent : Shops & Offices</Text>
            <TouchableOpacity>
            <Image source={icons.doublear} style={styles.Groupstyle}></Image>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
        </>
        )}
        <TouchableOpacity onPress={() => { navigation.navigate('HomeScreen') }} style={[styles.forsaleview,styles.forsaleviewtwo]}>
          <View style={styles.flexrowviewlist}>
            <Text style={styles.forsaletext}>Lands & Plots </Text>
            <TouchableOpacity >
            <Image source={icons.doublear} style={styles.Groupstyle}></Image>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
        <TouchableOpacity  onPress={() => { navigation.navigate('HomeScreen') }} style={[styles.forsaleview,styles.forsaleviewtwo]}>
          <View style={styles.flexrowviewlist}>
            <Text style={styles.forsaletext}>PG & Guest Houses </Text>
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

export default PropertyOptionTwo

