import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import ReactNativeModal from 'react-native-modal'
import BoxandText from '../BoxandText/BoxandText'
import { string } from '../../Helper/string'
import { icons } from '../../Helper/icons'
import { filterpropertyall } from '../../../APICall'
import { Dropdown } from 'react-native-element-dropdown'
import { Propertytypes } from '../../Screen/Propertytypes'
import { city } from '../../Screen/city'
import { state } from '../../Screen/state'
import { District } from '../../Screen/List'
import { Furnisheddata } from '../../Screen/Furnished'
import AsyncStorage from '@react-native-community/async-storage'

const CustomModal = ({ isVisible,
  backdropColor,
  backdropOpacity,
  onBackdropPress,
  supportedOrientations,
  transparent,
  swipeDirection,
  title,
  style,
  modalestyle
}) => {
  const [isClicked1, setIsClicked1] = useState(false);
  const [isClicked5, setIsClicked5] = useState(false);
  const [modalVisible, setModalVisible] = useState()
  const [PropertyType, setPropertyType] = useState('');
  const [SelectedCity, setSelectedCity] = useState();
  const [selectstate, setSelectstate] = useState();
  const [SelectDistrict, setSelectDistrict] = useState();
  const [Furnished, setFurnished] = useState('');
  const [loading, setLoading] = useState(false);
  const [not, setnot] = useState('');
  const [id, setId] = useState('')
  const [stateData, setStateData] = useState([]);
  const [DistrictData, setDistrictData] = useState();

  useEffect(() => {
    const myfilterpropertyDate = async () => {
      const userdata = await AsyncStorage.getItem('logindata');
      const finaluserdata = JSON.parse(userdata);
      // setId(finaluserdata.id)
      filterpropertydata(finaluserdata.id);
      console.log('<><>', finaluserdata.id)

      // if (id && Furnished && password) {
      //   leaddataall(id && Furnished, password);
      // } else {

      // }


    };
    //  navigation.addListener('focus', () => {
    myfilterpropertyDate();

    // })
  }, [])

  const filterpropertydata = async (id) => {
    setLoading(true);
    const data = {
      user_id: id,
      furnished: Furnished,
      property_type: PropertyType,
      payment_method: '',
      price: '',
      district: SelectDistrict,
      city: SelectedCity,
      state: selectstate
    };
    console.log('data <1>', data);
    console.log('global.url--<1>', global.url);
    const url = `https://www.demo603.amrithaa.com/mymediator/public/api/filterproperty`
    console.log('url >>', url);
    const res = await filterpropertyall(url, data);
    console.log('==', res)
    // const res = await filterpropertyall(`https://www.demo603.amrithaa.com/mymediator/public/api/filterproperty` + data);
    // console.log('res <1>', res.data);

    // if (Array.isArray(res.data)) {
    //     console.log('res.data:', res.data);
    // } else {
    //     console.log('res.data :', res.data);
    // }

    // setLoading(false);

  };



  const handleChangeProperty = (value) => {
    setPropertyType(value);
  };
  const Changestate = (value) => {
    setSelectstate(value);
  };
  const Changecity = (value) => {
    setSelectedCity(value);
  };
  const Changedistrict = (value) => {
    setSelectDistrict(value);
  };
  const ChangeFurnished = (value) => {
    setFurnished(value);
  };




  const handlePress1 = () => {
    setIsClicked1(!isClicked1);

  };

  const handlePress5 = () => {
    setIsClicked5(!isClicked5);

  };


  return (
    <View>
      <ReactNativeModal
        isVisible={isVisible}
        backdropColor={backdropColor}
        backdropOpacity={backdropOpacity}
        onBackdropPress={onBackdropPress}
        supportedOrientations={supportedOrientations}
        swipeDirection={swipeDirection}
        style={style}
        transparent={transparent}
        onSwipeComplete={() => setModalVisible(false)}
        onRequestClose={() => {
          setModalVisible(false)
        }}>
        <View style={styles.backcoloeview}>
          <View style={[styles.mainmodal, modalestyle]}>
            <Text>{title}</Text>
            <View style={styles.mainview}>
              <Dropdown
                style={styles.dropdown}
                placeholderStyle={styles.placeholder}
                selectedTextStyle={styles.selectedText}
                inputSearchStyle={styles.inputSearchStyle}
                iconStyle={styles.iconStyle}
                data={Propertytypes}
                search
                maxHeight={300}
                labelField="name"
                valueField="value"
                placeholder="Select Property types"
                searchPlaceholder="Search..."
                value={PropertyType}
                onChange={(item) => {
                  handleChangeProperty(item.value);
                }}
              />
            </View>
            <BoxandText
              title={string.EnteryourPricing}
              onPress={handlePress1}
              martopview={styles.martopview}
              IconName={isClicked1 ? icons.uparrow : icons.downarrow}
            />
            {/* <BoxandText
              title={string.SelectyourState}
              onPress={handlePress2}
              martopview={styles.martopview}
              IconName={isClicked2 ? icons.uparrow : icons.downarrow}
            /> */}
            <View style={styles.mainview}>

              <Dropdown
                style={styles.dropdown}
                placeholderStyle={styles.placeholder}
                selectedTextStyle={styles.selectedText}
                inputSearchStyle={styles.inputSearchStyle}
                iconStyle={styles.iconStyle}
                data={state}
                search
                maxHeight={300}
                labelField="name"
                valueField="value"
                placeholder="Select your State"
                searchPlaceholder="Search..."
                value={selectstate}
                onChange={item => {
                  Changestate(item.value);
                }} />
            </View>
            <View style={styles.mainview}>
              <Dropdown
                style={styles.dropdown}
                placeholderStyle={styles.placeholder}
                selectedTextStyle={styles.selectedText}
                inputSearchStyle={styles.inputSearchStyle}
                iconStyle={styles.iconStyle}
                data={District}
                search
                maxHeight={300}
                labelField="name"
                valueField="value"
                placeholder="Select your District"
                searchPlaceholder="Search..."
                value={SelectDistrict}
                onChange={item => {
                  Changedistrict(item.value);
                }} />
            </View>
            {/* <BoxandText
                     title={string.yourDistrict }
                     onPress={handlePress3}
                       martopview={styles.martopview}
                     IconName={isClicked3 ? icons.uparrow : icons.downarrow }
                     /> */}
            {/* <BoxandText
                     title={string.SelectyourCity }
                     onPress={handlePress4}
                       martopview={styles.martopview}
                     IconName={isClicked4 ? icons.uparrow : icons.downarrow }
                     /> */}
            <View style={styles.mainview}>
              <Dropdown
                style={styles.dropdown}
                placeholderStyle={styles.placeholder}
                selectedTextStyle={styles.selectedText}
                inputSearchStyle={styles.inputSearchStyle}
                iconStyle={styles.iconStyle}
                data={city}
                search
                maxHeight={300}
                labelField="name"
                valueField="value"
                placeholder="Select your City"
                searchPlaceholder="Search..."
                value={SelectedCity}
                onChange={item => {
                  Changecity(item.value);
                }} />
            </View>
            <BoxandText
              title={string.SelectyourArea}
              onPress={handlePress5}
              martopview={styles.martopview}
              IconName={isClicked5 ? icons.uparrow : icons.downarrow}
            />
            {/* <BoxandText
              title={string.Furnishing}
              onPress={handlePress6}
              martopview={styles.martopview}
              //  IconName={icons.downarrow}
              IconName={isClicked6 ? icons.uparrow : icons.downarrow}
            /> */}
            <View style={styles.mainview}>
              <Dropdown
                style={styles.dropdown}
                placeholderStyle={styles.placeholder}
                selectedTextStyle={styles.selectedText}
                inputSearchStyle={styles.inputSearchStyle}
                iconStyle={styles.iconStyle}
                data={Furnisheddata}
                search
                maxHeight={300}
                labelField="name"
                valueField="value"
                placeholder="Furnishing"
                searchPlaceholder="Search..."
                value={Furnished}
                onChange={item => {
                  ChangeFurnished(item.value);
                }} />
            </View>
          </View>
        </View>
      </ReactNativeModal>
    </View>
  )
}

export default CustomModal

const styles = StyleSheet.create({
  backcoloeview: {
    height: 530,
    width: "100%",
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    justifyContent: "center",
    //  marginTop:"7%"
  },
  martopview: {
    marginTop: '6%'
  },
  mainview: {
    height: 40,
    width: "85%",
    backgroundColor: "#fff",
    borderColor: "#BFBFBF",
    borderWidth: 1,
    alignSelf: "center",
    justifyContent: "center",
    borderRadius: 27,
    marginTop: "5%",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  placeholder: {
    marginHorizontal: "10%",
    color: '#000',
    fontSize: 14,
    fontFamily: 'Poppins-SemiBold',
  },
  iconStyle: {
    marginRight: "5%", tintColor: '#000', marginRight: '8%'
  },
  selectedText: {
    marginLeft: '10%', color: '#000',
    fontSize: 14,
    fontFamily: 'Poppins-SemiBold',
  },
})