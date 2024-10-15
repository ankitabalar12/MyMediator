import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import TabbottomviewComponets from '../../Componets/TabViewComponets/TabbottomviewComponets';

import { ScrollView } from 'react-native';
import HeaderUserName from '../../Componets/HeaderUserName/HeaderUserName';
import SearchComponest from '../../Componets/SearchComponets/SearchComponest';
import CustomModal from '../../Componets/CustomModal/CustomModal';

import { icons } from '../../Helper/icons';
import { styles } from './styles';
import { string } from '../../Helper/string';

const CarFilter = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState()
  const [selecteditem, setSelectedItem] = useState('');
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
  const toggleModal = () => {
    setModalVisible(!modalVisible)
  }
  const selectedcategories = (id) => {
    setSelectedItem(id)
  }

  return (
    <View style={styles.container}>
      <ScrollView>
        <HeaderUserName onPress={() => { navigation.navigate('Notification') }} />
        <SearchComponest
          placeholder='Search your Car'
          onPress={() => {
            // setModalVisible(true)
          }}
        />
        <CustomModal
          isVisible={modalVisible}
          onBackdropPress={toggleModal}
          transparent={true}
          backdropColor={'#fff'}
          style={{ margin: 0, bottom: 0 }}
          backdropOpacity={0}
          modalestyle={styles.modalestyle}

        />
        <View style={styles.viewrow}>
          <TouchableOpacity onPress={() => selectedcategories(1)}>
            <View>
              <Image source={icons.many} style={styles.isolatestyle}></Image>
              <Text style={styles.Pricetext}>Price</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => selectedcategories(2)}>
            <View>
              <Image source={icons.brand} style={styles.isolatestyle}></Image>
              <Text style={styles.Pricetext}>Brand</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => selectedcategories(3)}>
            <View>
              <Image source={icons.isolate} style={styles.isolatestyle}></Image>
              <Text style={styles.Pricetext}>Year</Text>
            </View>
          </TouchableOpacity>

        </View>
        <View style={styles.haviewrow}>
          <View style={selecteditem === 1 ? styles.haflview : styles.haflview2} />
          <View style={selecteditem === 2 ? styles.haflview : styles.haflview2} />
          <View style={selecteditem === 3 ? styles.haflview : styles.haflview2} />

        </View>
        <View style={styles.showviewstyle} />
        <View style={styles.boxviewflex}>
          <TouchableOpacity style={[styles.chooseview]}>
            <Text style={styles.textbelowtext}>Below 1 lac</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.chooseview]}>
            <Text style={styles.textbelowtext}>1 lac - 2 lac</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.chooseview]}>
            <Text style={styles.textbelowtext}>2 lac - 3 lac</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.chooseview]}>
            <Text style={styles.textbelowtext}>3 lac - 5 lac</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.chooseview]}>
            <Text style={styles.textbelowtext}>5 lac and above</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.viewstyle}>
          <Text style={styles.viewcar}>View all cars</Text>
        </TouchableOpacity>
        <View style={styles.lineview}></View>
        <Text style={styles.recommendedtext}>{string.recommendedtext}</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <TouchableOpacity  onPress={() => { navigation.navigate('CarList') }} style={styles.detailscreen}>
            <Image style={[styles.lep, styles.lep3]} source={icons.car}></Image>
            <View style={styles.imagview}></View>
            <Text style={[styles.rupes, styles.rupestwo]}>₹ 5,00,000</Text>
            <Text style={styles.microtext3}>YAMAHA MT 15 V2</Text>
            <Text style={styles.yeartext}>2019 - 13,000 km</Text>
            <View style={[styles.mdiforw2, styles.mdiforwre]}>
              <Image source={icons.mapsandflags} style={styles.mapsandflags22} />
              <Text style={[styles.Mambalam]}>West Mambalam, Chennai</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity  onPress={() => { navigation.navigate('CarList') }} style={styles.detailscreen}>
            <Image style={[styles.lep, styles.lep3]} source={icons.cartwo}></Image>
            <View style={styles.imagview}></View>
            <Text style={[styles.rupes, styles.rupestwo]}>₹ 5,00,000</Text>
            <Text style={styles.microtext3}>YAMAHA MT 15 V2</Text>
            <Text style={styles.yeartext}>2019 - 13,000 km</Text>
            <View style={[styles.mdiforw2, styles.mdiforwre]}>
              <Image source={icons.mapsandflags} style={styles.mapsandflags22} />
              <Text style={[styles.Mambalam]}>West Mambalam, Chennai</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity  onPress={() => { navigation.navigate('CarList') }} style={styles.detailscreen}>
            <Image style={[styles.lep, styles.lep3]} source={icons.mahendracar}></Image>
            <View style={styles.imagview}></View>
            <Text style={[styles.rupes, styles.rupestwo]}>₹ 5,00,000</Text>
            <Text style={styles.microtext3}>YAMAHA MT 15 V2</Text>
            <Text style={styles.yeartext}>2019 - 13,000 km</Text>
            <View style={[styles.mdiforw2, styles.mdiforwre]}>
              <Image source={icons.mapsandflags} style={styles.mapsandflags22} />
              <Text style={[styles.Mambalam]}>West Mambalam, Chennai</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => { navigation.navigate('CarList') }} style={styles.detailscreen}>
          <Image style={[styles.lep, styles.lep3]} source={icons.cartwo}></Image>
          <View style={styles.imagview}></View>
            <Text style={[styles.rupes, styles.rupestwo]}>₹ 5,00,000</Text>
            <Text style={styles.microtext3}>YAMAHA MT 15 V2</Text>
            <Text style={styles.yeartext}>2019 - 13,000 km</Text>
            <View style={[styles.mdiforw2, styles.mdiforwre]}>
              <Image source={icons.mapsandflags} style={styles.mapsandflags22} />
              <Text style={[styles.Mambalam]}>West Mambalam, Chennai</Text>
            </View>
          </TouchableOpacity>

        </ScrollView>
        <View style={styles.lineview}></View>
        <Text style={styles.recommendedtext}>Popular Brands</Text>
        <View style={[styles.boxviewflex,styles.boxviewflex33]}>
          <TouchableOpacity style={[styles.chooseview2]}>
           <Image source={icons.honda} style={styles.hondastyle}></Image>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.chooseview2]}>
           <Image source={icons.HyundaiLo} style={styles.hondastyle}></Image>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.chooseview2]}>
           <Image source={icons.Toyota} style={styles.hondastyle}></Image>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.chooseview2]}>
           <Image source={icons.honda} style={styles.hondastyle}></Image>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.chooseview2]}>
           <Image source={icons.Maruti} style={styles.hondastyle}></Image>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.chooseview2]}>
           <Image source={icons.Toyota} style={styles.hondastyle}></Image>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.viewstyle}>
          <Text style={styles.viewcar}>View all cars</Text>
        </TouchableOpacity>
        <View style={styles.lineview}></View>
        <Text style={[styles.recommendedtext,styles.recommendedtext2]}>Buy as per Price</Text>
        <View style={styles.boxviewflex}>
          <TouchableOpacity style={[styles.chooseview]}>
            <Text style={styles.textbelowtext}>Below 1 lac</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.chooseview]}>
            <Text style={styles.textbelowtext}>1 lac - 2 lac</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.chooseview]}>
            <Text style={styles.textbelowtext}>2 lac - 3 lac</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.chooseview]}>
            <Text style={styles.textbelowtext}>3 lac - 5 lac</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.chooseview]}>
            <Text style={styles.textbelowtext}>5 lac and above</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.viewstyle}>
          <Text style={styles.viewcar}>View all cars</Text>
        </TouchableOpacity>
        <View style={styles.martop}></View>
      </ScrollView>
      {/* <TabbottomviewComponets
        selectedId={1} goBackToScreen={goBackToScreen} /> */}
    </View>
  )
}

export default CarFilter

