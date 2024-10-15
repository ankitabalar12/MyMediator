import { ActivityIndicator, Alert, Animated, FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import HeaderUserName from '../../Componets/HeaderUserName/HeaderUserName'
import SearchComponest from '../../Componets/SearchComponets/SearchComponest'
import TabbottomviewComponets from '../../Componets/TabViewComponets/TabbottomviewComponets'
import { string } from '../../Helper/string'
import { styles } from './styles'
import { icons } from '../../Helper/icons'
import { Swipeable } from 'react-native-gesture-handler'
import { bikedata, changeadsstatusdata, deletedata, Electdata, mypropertydata, soldoutpropertydata } from '../../../APICall'
import AsyncStorage from '@react-native-community/async-storage'
import { items } from '../itemdata'

const ProfileMyPropertyDetails = ({ navigation }) => {
  const [is_onoffselected, setOnOffSelected] = useState(1);
  const [isBoxVisible, setIsBoxVisible] = useState(false);
  const [mypropertydataall, setMyPropertyData] = useState('');
  const [electronicsall, setElectronicsAll] = useState('');
  const [carall, setCarAll] = useState('');
  const [bikeall, setBikeAll] = useState('');
  const [isUpArrow, setIsUpArrow] = useState(true);
const [initialScreenOpen, setInitialScreenOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [selecteditem, setSelectedItem] = useState('');
  const [activeId, setActiveId] = useState('');
  useEffect(() => {
    const id = 1;
    setSelectedItem(id)

  }, []);
  const formTypeToScreen = {
    1: 'Addproperty',
    2: 'SaleShopandOffice',
    3: 'AddrentProperty',
    4: 'RenShopandOffice',
    5: 'LandPlotAddProperty',
    6: 'PGandGuestHouse',
  };

  const handleNavigation = (item) => {
    const screen = formTypeToScreen[item.form_type];
    if (screen) {
      navigation.navigate(screen, { Home_id: item });
      console.log('screen------------------', screen)
    } else {
      alert('Unknown form type');
    }
  };

  const formTypeToScreenBike = {
    1: 'Motorcycle',
    2: 'Bicyclesscreen',

  };

  const handleNavigationBike = (item) => {
    const screen = formTypeToScreenBike[item.form_type];
    if (screen) {
      navigation.navigate(screen, { bike_id: item });
      console.log('screen------------------', screen)
    } else {
      alert('Unknown form type');
    }
  };
  const toggleVisibility = (id) => {
    setActiveId(activeId === id ? null : id);
  };

 
  useEffect(() => {
    const loginallData = async () => {
      try {
        const userdata = await AsyncStorage.getItem('logindata');
        const finaluserdata = JSON.parse(userdata);
        mypropertyuser(finaluserdata.id);
        ElecttronicsPro(finaluserdata.id);
        carPro(finaluserdata.id);
        bikePro(finaluserdata.id);
        console.log('finaluserdata.id <>', finaluserdata.id)
      } catch (error) {

        console.error("Error fetching user data:", error);
      }
    };

    const initializeScreen = () => {
      const id = 1;
      setIsBoxVisible(false);
      setOnOffSelected(id);
      setInitialScreenOpen(true);
    };

    if (!initialScreenOpen) {
      initializeScreen();
    }

    loginallData();
  
  }, [initialScreenOpen]);


  

  const selectedcategories = (id) => {
    setSelectedItem(id);

  };
 
  const mypropertyuser = async (id) => {
    setLoading(true);
    try {
      const data = {
        user_id: id,
        type: 1
      };

      console.log('data <>', data);
      console.log('global.url <>', global.url);
      const res = await mypropertydata(global.url + 'myproperty', data);
      console.log('res <typs-111--->', res);
      if (res.data && res.data.length > 0) {
        const property = res.data[0];
        setMyPropertyData(res.data);
        console.log('<><><><>>><><><>>', property.id);
        console.log('<><>status<><>>><><><>>', property.status);
        if (property.id && property.sold_out !== undefined && property.status !== undefined) {
          await changeaddata(property.id, property.sold_out, property.status);
        } else {
          console.error('Missing necessary property data (id, sold_out, status)');
        }
      } else {
        console.error('No properties found in the response data.');
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  const ElecttronicsPro = async (id) => {
    setLoading(true);
    try {
      const data = {
        user_id: id,
        type: 2
      };
      console.log('data <>', data)
      console.log('global.url <>', global.url)
      const res = await Electdata(global.url + 'myproperty', data);
      console.log('res <typs-2--->', res);
      setElectronicsAll(res.data);
      await changeaddata(res.data[0].id, res.data[0].sold_out, res.data[0].status);

      console.log('<><><><>>><><><>>', res.data[0].id)
      console.log('<><>status<><>>><><><>>', res.data[0].status)
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  const carPro = async (id) => {
    setLoading(true);
    try {
      const data = {
        user_id: id,
        type: 3
      };
      console.log('data <>', data)
      console.log('global.url <>', global.url)
      const res = await Electdata(global.url + 'myproperty', data);
      console.log('res <typs-3--->', res);
    setCarAll(res.data);
  } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  const bikePro = async (id) => {
    setLoading(true);
    try {
      const data = {
        user_id: id,
        type: 4
      };
      console.log('data <>', data)
      console.log('global.url <>', global.url)
      const res = await bikedata(global.url + 'myproperty', data);
      console.log('res <typs-4--->', res);
      setBikeAll(res.data);

      console.log('<><><><>>><><><>>', res.data[0].id)
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };
  
  const onOffSelect = (selectedValue, id) => {
    const index = mypropertydataall.findIndex(item => item.id === id);
    console.log('index <>', index)
    if (index !== -1) {
      const newData = [...mypropertydataall];
      console.log('newData *<>*', newData)
      newData[index].is_onoffselected = selectedValue;
      setMyPropertyData(newData);
    }

  };

  const deleteRow = (id) => {
    const index = mypropertydataall.findIndex(item => item.id === id);
    console.log("index >>", index)
    if (index !== -1) {
      const newData = [...mypropertydataall];
      newData.splice(index, 1);
      setMyPropertyData(newData);
    }
  };

  const deleteRowewc = (id) => {
    const index = electronicsall.findIndex(item => item.id === id);
    console.log("index >>", index)
    if (index !== -1) {
      const newData = [...electronicsall];
      newData.splice(index, 1);
      setElectronicsAll(newData);
    }
  };

  const deleteRowcar = (id) => {
    const index = carall.findIndex(item => item.id === id);
    console.log("index >>", index)
    if (index !== -1) {
      const newData = [...carall];
      newData.splice(index, 1);
      setCarAll(newData);
    }
  };

  const deleteRowbike = (id) => {
    const index = bikeall.findIndex(item => item.id === id);
    console.log("index >>", index)
    if (index !== -1) {
      const newData = [...bikeall];
      newData.splice(index, 1);
      setBikeAll(newData);
    }
  };

  const deleteall = async (id) => {
    setLoading(true);
    try {
      const data = {
        id: id,
        type: 1
      };
      console.log('data <>', id)
      console.log('global.url <>', global.url)
      const res = await deletedata(global.url + 'deleteproperty', data);
      console.log('res <d>', res);

    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  const deleteallelect = async (id) => {
    setLoading(true);
    try {
      const data = {
        id: id,
        type: 2
      };
      console.log('data <>', id)
      console.log('global.url <>', global.url)
      const res = await deletedata(global.url + 'deleteproperty', data);
      console.log('res <d>', res);

    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  const deleteallcar = async (id) => {
    setLoading(true);
    try {
      const data = {
        id: id,
        type: 3
      };
      console.log('data <>', id)
      console.log('global.url <>', global.url)
      const res = await deletedata(global.url + 'deleteproperty', data);
      console.log('res <d>', res);

    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  const deleteallbike = async (id) => {
    setLoading(true);
    try {
      const data = {
        id: id,
        type: 4
      };
      console.log('data <>', id)
      console.log('global.url <>', global.url)
      const res = await deletedata(global.url + 'deleteproperty', data);
      console.log('res <d>', res);

    } catch (error) {
    } finally {
      setLoading(false);
    }
  };


  const changeaddata = async (id) => {
    setLoading(true);
    try {
      const data = {
        id: id,
        status: 2,
      };

      console.log('data <>', id);
      console.log('global.url <>', global.url);
       const res = await changeadsstatusdata(global.url + 'changeadsstatus', data);
      console.log('res <s>', res.data);
    } catch (error) {
      console.error('Error updating status:', error);
    } finally {
      setLoading(false);
    }
  };

  const changeaddataadd = async (id, status) => {
    setLoading(true);

    try {
      const data = {
        id: id,
        status: status, 
      };
      console.log('data <>', id);
      console.log('global.url <>', global.url);

      const res = await changeadsstatusdata(global.url + 'changeadsstatus', data);
      console.log('res <s>', res.data);
    } catch (error) {
      console.error('Error updating status:', error);
    } finally {
      setLoading(false);
    }
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
        <Text style={styles.proname}>{string.MyPropertydetails}</Text>
        <View style={[styles.flexrow3, styles.flexrowcar]}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <TouchableOpacity onPress={() => selectedcategories(1)} style={[styles.selecitemview, { borderColor: selecteditem === 1 ? '#d7d9db' : '#fff' }]}>
              <View>
                <Image source={icons.imagesgh} style={styles.slectedimg}></Image>
                <Text style={styles.pro}>PROPERTY</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => selectedcategories(2)} style={[styles.selecitemview, { borderColor: selecteditem === 2 ? '#d7d9db' : '#fff' }]}>
              <View>
                <Image source={icons.elecsel} style={styles.slectedimg}></Image>
                <Text style={styles.pro}>ELECTRONICS</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => selectedcategories(3)} style={[styles.selecitemview, { borderColor: selecteditem === 3 ? '#d7d9db' : '#fff' }]}>
              <View>
                <Image source={icons.carnew} style={styles.slectedimg}></Image>
                <Text style={styles.pro}>CAR</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => selectedcategories(4)} style={[styles.selecitemview, { borderColor: selecteditem === 4 ? '#d7d9db' : '#fff' }]} >
              <View>
                <Image source={icons.bikenew} style={styles.slectedimg4}></Image>
                <Text style={styles.pro}>BIKE</Text>
              </View>
            </TouchableOpacity>
          </ScrollView>
        </View>

        <View style={styles.haviewrow}>
          <View style={selecteditem === 1 ? styles.haflview : styles.haflview2} />
          <View style={selecteditem === 2 ? styles.haflview : styles.haflview2} />
          <View style={selecteditem === 3 ? styles.haflview : styles.haflview2} />
          <View style={selecteditem === 4 ? styles.haflview : styles.haflview2} />
        </View>
        <View style={styles.showviewstyle} />
        <View>
          {selecteditem == '1' ? (
            <>
              {mypropertydataall.length > 0 ? (
                mypropertydataall.map((item, index) => (
                  <View key={index}>
                    <Swipeable
                      renderRightActions={() => (
                        <Animated.View style={styles.deleteButton}>
                          <TouchableOpacity
                            onPress={() => {
                              deleteRow(item.id);
                              deleteall(item.id);
                            }}
                          >
                            <Image source={icons.delete} style={styles.deleteimg} />
                          </TouchableOpacity>
                        </Animated.View>
                      )}
                      friction={2}
                      leftThreshold={60}
                      rightThreshold={60}
                    >
                      <View>
                        <View style={[styles.newblurview, { zIndex: 3 }]}>
                          <View style={styles.rowviewnew}>
                            <TouchableOpacity onPress={() => handleNavigation(item)}
                              // onPress={()=>{navigation.navigate('PropertyOption',{Home_id:item}); }} 
                              style={styles.posiedite}>
                              <Image source={icons.editenewblue} style={styles.imgedite} />
                            </TouchableOpacity>
                            <Image
                              style={styles.newimagesview}
                              //   source={{ uri: `https://www.demo603.amrithaa.com/mymediator/public/${item.images}` }}
                              source={{
                                uri: item.image ? `https://www.demo603.amrithaa.com/mymediator/public/${item.image.split(',')[0]}` : null
                              }}
                            />

                            <View style={styles.marlera}>
                              <View style={styles.redview}>
                                <Text style={styles.rajutext}>{item.property_name}</Text>
                                <Image source={icons.mapsandflags} style={styles.mapsandflags2} />
                                <Text style={styles.West}>{item.location}</Text>
                              </View>
                              <View style={styles.redview}>
                                <Text style={styles.rajutext}>{item.property_type}</Text>
                                <Image source={icons.squre} style={styles.squre1} />
                                <Text style={styles.West2}>{item.sqft} sq.Ft</Text>
                              </View>
                              <View style={styles.redview}>
                                <Text style={styles.rajutext}>₹ {item.amount}</Text>
                                <TouchableOpacity
                                  onPress={() => {
                                    toggleVisibility(item.id);
                                    changeaddata(item.id)
                                  }
                                  }
                                  style={activeId === item.id ? styles.newviewstyle : styles.newviewstyle2}
                                >
                                  <Text style={styles.Statustext}>{string.Status}</Text>
                                  <Image
                                    source={icons.downarro}
                                    style={{ height: 20, width: 20, tintColor: '#fff' }}
                                  />
                                </TouchableOpacity>
                              </View>
                             
                            </View>
                          </View>
                        </View>
                      </View>
                    </Swipeable>

                    {/* Conditionally render the additional details when activeId matches item.id */}
                    {activeId === item.id && (
                      <View
                        style={{
                          height: 80,
                          width: 91,
                          backgroundColor: '#0E6BAF',
                          position: 'absolute',
                          right: 61,
                          top: 87,
                          zIndex: 1,
                          borderBottomRightRadius: 10,
                          borderBottomLeftRadius: 10,
                        }}
                      >

                        <TouchableOpacity >
                          <TouchableOpacity
                            onPress={() => {
                              if (item.status === 0) {
                                Alert.alert('Property is sold out!');
                                return;
                              }
                            }}
                          >
                            {item.status === 0 ? (

                              <Text style={styles.soldtext}>Sold out</Text>
                            ) : (
                              <Text style={styles.Soldoutext}>{item.status}</Text>
                            )}
                          </TouchableOpacity>
                        </TouchableOpacity>
                        <View
                          style={{
                            height: 1,
                            width: '100%',
                            backgroundColor: '#fff',
                            marginTop: 5,
                            zIndex: 999,
                          }}
                        />
                        <Text style={styles.soldtext}>Add</Text>
                        <View style={styles.ofonviewrow}>
                          <TouchableOpacity
                            onPress={() => {
                              onOffSelect(0, item.id);
                              changeaddataadd(item.id, 3);
                            }}
                            style={[
                              styles.onoff,
                              { backgroundColor: item.status === 3 ? '#02487C' : '#fff' },
                            ]}
                          >
                            <Text
                              style={[
                                styles.onofftextstyle,
                                { color: item.status === 3 ? '#fff' : '#938D8D' },
                              ]}
                            >
                              {string.on}
                            </Text>
                          </TouchableOpacity>

                          <TouchableOpacity
                            onPress={() => {
                              onOffSelect(1, item.id);
                              changeaddataadd(item.id, 4);
                            }}
                            style={[
                              styles.onoff,
                              { backgroundColor: item.status === 4 ? '#02487C' : '#fff' },
                            ]}
                          >
                            <Text
                              style={[
                                styles.onofftextstyle,
                                { color: item.status === 4 ? '#fff' : '#938D8D' },
                              ]}
                            >
                              {string.off}
                            </Text>
                          </TouchableOpacity>

                        </View>
                      </View>
                    )}
                  </View>
                ))
              ) : (
                <Text style={styles.adstext}>No Property data</Text>
              )}
            </>
          ) : null}
        </View>

        {loading && <ActivityIndicator size="large" color="#02487C" />}


        {selecteditem == '2' ? (<>
          {electronicsall.length > 0 ? (
            electronicsall.map((elect, index) => (
              <View key={index}>
                <Swipeable
                  renderRightActions={() => (
                    <Animated.View style={styles.deleteButton}>
                      <TouchableOpacity
                        onPress={() => {
                          deleteRowewc(elect.id);
                          deleteallelect(elect.id);
                        }}
                      >
                        <Image source={icons.delete} style={styles.deleteimg} />
                      </TouchableOpacity>
                    </Animated.View>
                  )}
                  friction={2}
                  leftThreshold={60}
                  rightThreshold={60}
                >
                  <View>
                    <View style={[styles.newblurview, { zIndex: 3 }]}>
                      <View style={styles.rowviewnew}>
                        <TouchableOpacity onPress={() => { navigation.navigate('ElectronicsAllCategoriesForm', { elect_id: elect }); }} style={styles.posiedite}>
                          <Image source={icons.editenewblue} style={styles.imgedite} />
                        </TouchableOpacity>
                        <Image
                          style={styles.newimagesview}
                          //   source={{ uri: `https://www.demo603.amrithaa.com/mymediator/public/${elect.images}` }}
                          source={{
                            uri: elect.image ? `https://www.demo603.amrithaa.com/mymediator/public/${elect.image.split(',')[0]}` : null
                          }}
                        />
                        <View style={styles.marlera}>
                          <View style={styles.redview}>
                            <Text style={styles.rajutext}>{elect.ad_title}</Text>
                            <Image source={icons.mapsandflags} style={styles.mapsandflags2} />
                            <Text style={styles.West}>{elect.location}</Text>
                          </View>
                          <View style={styles.redview}>
                            <Text style={styles.rajutext}>{elect.model_name}</Text>
                            {/* <Image source={icons.squre} style={styles.squre1} /> */}
                            <Text style={styles.West2}>{elect.ram_size}</Text>
                          </View>
                          <View style={styles.redview}>
                            <Text style={styles.rajutext}>₹ {elect.amount}</Text>
                            <TouchableOpacity
                              onPress={() => {
                                toggleVisibility(elect.id);
                                changeaddata(elect.id)
                              }}
                              style={activeId === elect.id ? styles.newviewstyle : styles.newviewstyle2}
                            >
                              <Text style={styles.Statustext}>{string.Status}</Text>
                              <Image
                                source={icons.downarro}
                                style={{ height: 20, width: 20, tintColor: '#fff' }}
                              />
                            </TouchableOpacity>
                          </View>
                        </View>
                      </View>
                    </View>
                  </View>
                </Swipeable>

                {/* Conditionally render the additional details when activeId matches item.id */}
                {activeId === elect.id && (
                  <View
                    style={{
                      height: 80,
                      width: 91,
                      backgroundColor: '#0E6BAF',
                      position: 'absolute',
                      right: 61,
                      top: 87,
                      zIndex: 1,
                      borderBottomRightRadius: 10,
                      borderBottomLeftRadius: 10,
                    }}
                  >
                    {/* <Text>{item.id}</Text> */}
                    <TouchableOpacity >
                          <TouchableOpacity
                            onPress={() => {
                              if (elect.status === 0) {
                                Alert.alert('Property is sold out!');
                                return;
                              }
                            }}
                          >
                            {elect.status === 0 ? (

                              <Text style={styles.soldtext}>Sold out</Text>
                            ) : (
                              <Text style={styles.Soldoutext}>{elect.status}</Text>
                            )}
                          </TouchableOpacity>
                        </TouchableOpacity>
                        <View
                          style={{
                            height: 1,
                            width: '100%',
                            backgroundColor: '#fff',
                            marginTop: 5,
                            zIndex: 999,
                          }}
                        />
                        <Text style={styles.soldtext}>Add</Text>
                        <View style={styles.ofonviewrow}>
                          <TouchableOpacity
                            onPress={() => {
                              onOffSelect(0, elect.id);
                              changeaddataadd(elect.id, 3);
                            }}
                            style={[
                              styles.onoff,
                              { backgroundColor: elect.status === 3 ? '#02487C' : '#fff' },
                            ]}
                          >
                            <Text
                              style={[
                                styles.onofftextstyle,
                                { color: elect.status === 3 ? '#fff' : '#938D8D' },
                              ]}
                            >
                              {string.on}
                            </Text>
                          </TouchableOpacity>

                          <TouchableOpacity
                            onPress={() => {
                              onOffSelect(1, elect.id);
                              changeaddataadd(elect.id, 4);
                            }}
                            style={[
                              styles.onoff,
                              { backgroundColor: elect.status === 4 ? '#02487C' : '#fff' },
                            ]}
                          >
                            <Text
                              style={[
                                styles.onofftextstyle,
                                { color: elect.status === 4 ? '#fff' : '#938D8D' },
                              ]}
                            >
                              {string.off}
                            </Text>
                          </TouchableOpacity>

                        </View>
                      </View>
                )}
              </View>
            ))
          ) : (
            <Text style={styles.adstext}>No Property data</Text>
          )}
        </>
        ) : null}
        {selecteditem == '3' ? (<>
          {carall.length > 0 ? (
            carall.map((car, index) => (
              <View key={index}>
                <Swipeable
                  renderRightActions={() => (
                    <Animated.View style={styles.deleteButton}>
                      <TouchableOpacity
                        onPress={() => {
                          deleteRowcar(car.id);
                          // close();
                          deleteallcar(car.id);
                        }}
                      >
                        <Image source={icons.delete} style={styles.deleteimg} />
                      </TouchableOpacity>
                    </Animated.View>
                  )}
                  friction={2}
                  leftThreshold={60}
                  rightThreshold={60}
                >
                  <View>
                    <View style={[styles.newblurview, { zIndex: 3 }]}>
                      <View style={styles.rowviewnew}>
                        <TouchableOpacity onPress={() => { navigation.navigate('AddCar', { car_id: car }); }} style={styles.posiedite}>
                          <Image source={icons.editenewblue} style={styles.imgedite} />
                        </TouchableOpacity>
                        <Image
                          style={styles.newimagesview}
                          //   source={{ uri: `https://www.demo603.amrithaa.com/mymediator/public/${car.images}` }}
                          source={{
                            uri: car.image ? `https://www.demo603.amrithaa.com/mymediator/public/${car.image.split(',')[0]}` : null
                          }}
                        />
                        <View style={styles.marlera}>
                          <View style={styles.redview}>
                            <Text style={styles.rajutext}>{car.ad_title}</Text>
                            <Image source={icons.mapsandflags} style={styles.mapsandflags2} />
                            <Text style={styles.West}>{car.location}</Text>
                          </View>
                          <View style={styles.redview}>
                            <Text style={styles.rajutext}>{car.brand}</Text>
                            {/* <Image source={icons.squre} style={styles.squre1} /> */}
                            <Text style={styles.West2}>{car.km_drive}</Text>
                          </View>
                          <View style={styles.redview}>
                            <Text style={styles.rajutext}>₹ {car.amount}</Text>
                            <TouchableOpacity
                              onPress={() => {
                                toggleVisibility(car.id);

                              }}
                              style={activeId === car.id ? styles.newviewstyle : styles.newviewstyle2}
                            >
                              <Text style={styles.Statustext}>{string.Status}</Text>
                              <Image
                                source={icons.downarro}
                                style={{ height: 20, width: 20, tintColor: '#fff' }}
                              />
                            </TouchableOpacity>
                          </View>
                        </View>
                      </View>
                    </View>
                  </View>
                </Swipeable>

                {/* Conditionally render the additional details when activeId matches item.id */}
                {activeId === car.id && (
                  <View
                    style={{
                      height: 80,
                      width: 91,
                      backgroundColor: '#0E6BAF',
                      position: 'absolute',
                      right: 61,
                      top: 87,
                      zIndex: 1,
                      borderBottomRightRadius: 10,
                      borderBottomLeftRadius: 10,
                    }}
                  >
                    {/* <Text>{item.id}</Text> */}
                    <TouchableOpacity >
                          <TouchableOpacity
                            onPress={() => {
                              if (car.status === 0) {
                                Alert.alert('Property is sold out!');
                                return;
                              }
                            }}
                          >
                            {car.status === 0 ? (

                              <Text style={styles.soldtext}>Sold out</Text>
                            ) : (
                              <Text style={styles.Soldoutext}>{car.status}</Text>
                            )}
                          </TouchableOpacity>
                        </TouchableOpacity>
                        <View
                          style={{
                            height: 1,
                            width: '100%',
                            backgroundColor: '#fff',
                            marginTop: 5,
                            zIndex: 999,
                          }}
                        />
                        <Text style={styles.soldtext}>Add</Text>
                        <View style={styles.ofonviewrow}>
                          <TouchableOpacity
                            onPress={() => {
                              onOffSelect(0, car.id);
                              changeaddataadd(car.id, 3);
                            }}
                            style={[
                              styles.onoff,
                              { backgroundColor: car.status === 3 ? '#02487C' : '#fff' },
                            ]}
                          >
                            <Text
                              style={[
                                styles.onofftextstyle,
                                { color: car.status === 3 ? '#fff' : '#938D8D' },
                              ]}
                            >
                              {string.on}
                            </Text>
                          </TouchableOpacity>

                          <TouchableOpacity
                            onPress={() => {
                              onOffSelect(1, car.id);
                              changeaddataadd(car.id, 4);
                            }}
                            style={[
                              styles.onoff,
                              { backgroundColor: car.status === 4 ? '#02487C' : '#fff' },
                            ]}
                          >
                            <Text
                              style={[
                                styles.onofftextstyle,
                                { color: car.status === 4 ? '#fff' : '#938D8D' },
                              ]}
                            >
                              {string.off}
                            </Text>
                          </TouchableOpacity>

                        </View>
                      </View>
                )}
              </View>
            ))
          ) : (
            <Text style={styles.adstext}>No Property data</Text>
          )}
        </>
        ) : null}

        {selecteditem == '4' ? (<>
          {bikeall && bikeall.length > 0 ? (
            bikeall.map((bike, index) => (
              <View key={index}>
                <Swipeable
                  renderRightActions={() => (
                    <Animated.View style={styles.deleteButton}>
                      <TouchableOpacity
                        onPress={() => {
                          deleteRowbike(bike.id);
                          // close();
                          deleteallbike(bike.id);
                        }}
                      >
                        <Image source={icons.delete} style={styles.deleteimg} />
                      </TouchableOpacity>
                    </Animated.View>
                  )}
                  friction={2}
                  leftThreshold={60}
                  rightThreshold={60}
                >
                  <View>
                    <View style={[styles.newblurview, { zIndex: 3 }]}>
                      <View style={styles.rowviewnew}>
                        <TouchableOpacity onPress={() => { handleNavigationBike(bike) }} style={styles.posiedite}>
                          <Image source={icons.editenewblue} style={styles.imgedite} />
                        </TouchableOpacity>
                        <Image
                          style={styles.newimagesview}
                          //   source={{ uri: `https://www.demo603.amrithaa.com/mymediator/public/${bike.images}` }}
                          source={{
                            uri: bike.image ? `https://www.demo603.amrithaa.com/mymediator/public/${bike.image.split(',')[0]}` : null
                          }}
                        />
                        <View style={styles.marlera}>
                          <View style={styles.redview}>
                            <Text style={styles.rajutext}>{bike.ad_title}</Text>
                            <Image source={icons.mapsandflags} style={styles.mapsandflags2} />
                            <Text style={styles.West}>{bike.location}</Text>
                          </View>
                          <View style={styles.redview}>
                            <Text style={styles.rajutext}>{bike.brand_model}</Text>
                            {/* <Image source={icons.squre} style={styles.squre1} /> */}
                            <Text style={styles.West2}>{bike.km_driven}</Text>
                          </View>
                          <View style={styles.redview}>
                            <Text style={styles.rajutext}>₹ {bike.amount}</Text>
                            <TouchableOpacity
                              onPress={() => toggleVisibility(bike.id)}
                              style={activeId === bike.id ? styles.newviewstyle : styles.newviewstyle2}
                            >
                              <Text style={styles.Statustext}>{string.Status}</Text>
                              <Image
                                source={icons.downarro}
                                style={{ height: 20, width: 20, tintColor: '#fff' }}
                              />
                            </TouchableOpacity>
                          </View>
                        </View>
                      </View>
                    </View>
                  </View>
                </Swipeable>

                {/* Conditionally render the additional details when activeId matches item.id */}
                {activeId === bike.id && (
                  <View
                    style={{
                      height: 80,
                      width: 91,
                      backgroundColor: '#0E6BAF',
                      position: 'absolute',
                      right: 61,
                      top: 87,
                      zIndex: 1,
                      borderBottomRightRadius: 10,
                      borderBottomLeftRadius: 10,
                    }}
                  >
                    {/* <Text>{item.id}</Text> */}
                    <TouchableOpacity >
                          <TouchableOpacity
                            onPress={() => {
                              if (bike.status === 0) {
                                Alert.alert('Property is sold out!');
                                return;
                              }
                            }}
                          >
                            {bike.status === 0 ? (

                              <Text style={styles.soldtext}>Sold out</Text>
                            ) : (
                              <Text style={styles.Soldoutext}>{bike.status}</Text>
                            )}
                          </TouchableOpacity>
                        </TouchableOpacity>
                        <View
                          style={{
                            height: 1,
                            width: '100%',
                            backgroundColor: '#fff',
                            marginTop: 5,
                            zIndex: 999,
                          }}
                        />
                        <Text style={styles.soldtext}>Add</Text>
                        <View style={styles.ofonviewrow}>
                          <TouchableOpacity
                            onPress={() => {
                              onOffSelect(0, bike.id);
                              changeaddataadd(bike.id, 3);
                            }}
                            style={[
                              styles.onoff,
                              { backgroundColor: bike.status === 3 ? '#02487C' : '#fff' },
                            ]}
                          >
                            <Text
                              style={[
                                styles.onofftextstyle,
                                { color: bike.status === 3 ? '#fff' : '#938D8D' },
                              ]}
                            >
                              {string.on}
                            </Text>
                          </TouchableOpacity>

                          <TouchableOpacity
                            onPress={() => {
                              onOffSelect(1, bike.id);
                              changeaddataadd(bike.id, 4);
                            }}
                            style={[
                              styles.onoff,
                              { backgroundColor: bike.status === 4 ? '#02487C' : '#fff' },
                            ]}
                          >
                            <Text
                              style={[
                                styles.onofftextstyle,
                                { color: bike.status === 4 ? '#fff' : '#938D8D' },
                              ]}
                            >
                              {string.off}
                            </Text>
                          </TouchableOpacity>

                        </View>
                      </View>
                )}
              </View>
            ))
          ) : (
            <Text style={styles.adstext}>No Property data</Text>
          )}
        </>
        ) : null}
        <View style={styles.marbottom2} />
      </ScrollView>
      {/* <TabbottomviewComponets
                selectedId={5} goBackToScreen={goBackToScreen} /> */}
    </View>
  )
}

export default ProfileMyPropertyDetails;
// useEffect(() => {
//     const loginallData = async () => {
//         try {
//             const userdata = await AsyncStorage.getItem('logindata');
//             if (userdata) {
//                 const finaluserdata = JSON.parse(userdata);
//                 console.log('finaluserdata ------ffff-----------', finaluserdata);
//                 setID(finaluserdata.id); // Set the ID from AsyncStorage
//             }
//         } catch (error) {
//             console.log('Error retrieving data from AsyncStorage:', error);
//         }
//     };

//     loginallData(); // Call the async function
//     setSelectedItem(1); // Set the selected item after the async function
// }, []); // Dependency array is empty so it runs once on mount
