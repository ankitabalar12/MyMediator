import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { icons } from '../../Helper/icons';
import DeshboardScreen from '../../Screen/DeshboardScreen/DeshboardScreen';
import SellScreen from '../../Screen/SellScreen/SellScreen';
import Package from '../../Screen/Package/Package';
import Addproperty from '../../Screen/AddPropartyallScreen/Addproperty/Addproperty';
import PropertyDetails from '../../Screen/PropertyDetails/PropertyDetails';
import ElectronicsDetails from '../../Screen/ElectronicsDetails/ElectronicsDetails';
import BikeDetails from '../../Screen/BikeDetails/BikeDetails';
import CarDetails from '../../Screen/CarDetails/CarDetails';
import ElictronicEnquiry from '../../Screen/ElictronicEnquiry/ElictronicEnquiry';
import BikeEnquiry from '../../Screen/BikeEnquiry/BikeEnquiry';
import CarEnquiry from '../../Screen/CarEnquiry/CarEnquiry';
import PropertyEnquiry from '../../Screen/PropertyEnquiry/PropertyEnquiry';
import { createStackNavigator } from '@react-navigation/stack';
import BikesOption from '../../Screen/BikesOption/BikesOption';
import PropertyOption from '../../Screen/PropertyOption/PropertyOption';
import PropertyOptionTwo from '../../Screen/PropertyOptionTwo/PropertyOptionTwo';
import BikesOptionTwo from '../../Screen/BikesOptionTwo/BikesOptionTwo';
import ElectronicsOption from '../../Screen/ElectronicsOption/ElectronicsOption';
import HomeScreen from '../../Screen/Home/HomeScreen';
import ProfileScreen from '../../Screen/Profile/ProfileScreen';
import AddrentProperty from '../../Screen/AddPropartyallScreen/AddrentProperty/AddrentProperty';
import LandPlotAddProperty from '../../Screen/AddPropartyallScreen/LandPlotAddProperty/LandPlotAddProperty';
import RenShopandOffice from '../../Screen/AddPropartyallScreen/RenShopandOffice/RenShopandOffice';
import PGandGuestHouse from '../../Screen/AddPropartyallScreen/PGandGuestHouse/PGandGuestHouse';
import SaleShopandOffice from '../../Screen/AddPropartyallScreen/SaleShopandOffice/SaleShopandOffice';
import AddCar from '../../Screen/AddCar/AddCar';

import ElectronicsAllCategoriesForm from '../../Screen/ElectronicsAllCategoriesForm/ElectronicsAllCategoriesForm';
import Motorcycle from '../../Screen/AddBikes/Motorcycle/Motorcycle';
import Bicyclesscreen from '../../Screen/AddBikes/Bicycles/Bicyclesscreen';
import Enquirylist from '../../Screen/Enquirylist/Enquirylist';
import Subscription from '../../Screen/Subscription/Subscription';
import MyDetails from '../../Screen/MyDetails/MyDetails';
import Notification from '../../Screen/Notification/Notification';
import ProfileMyPropertyDetails from '../../Screen/ProfileMyPropertyDetails/ProfileMyPropertyDetails';
import Privacypolicy from '../../Screen/Privacypolicy/Privacypolicy';
import Location from '../../Screen/Location/Location';
 import HomePropertyList from '../../Screen/HomePropertyList/HomePropertyList';
import Electronicslist from '../../Screen/ListofProduct/Electronicslist/Electronicslist';
import BikeList from '../../Screen/ListofProduct/BikeList/BikeList';
import CarList from '../../Screen/ListofProduct/CarList/CarList';
import PostProfiles from '../../Screen/PostProfiles/PostProfiles';
import Like from '../../Screen/Like/Like';
import CarFilter from '../../Screen/CarFilter/CarFilter';
import AllPeoductViewlaptop from '../../Screen/AllPeoductViewlaptop/AllPeoductViewlaptop';
import AllPeoductViewCar from '../../Screen/AllPeoductViewCar/AllPeoductViewCar';
import Mostvisitproperty from '../../Screen/Mostvisitproperty/Mostvisitproperty';
import AllPeoductViewbike from '../../Screen/AllPeoductViewbike/AllPeoductViewbike';



const Tab = createBottomTabNavigator();
const stack = createStackNavigator()
const allhomescreen = () => {
  return (
    <stack.Navigator initialRouteName="DeshboardScreen">
      <stack.Screen name="DeshboardScreen" component={DeshboardScreen} options={{ headerShown: false }} />
      <stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }}></stack.Screen>
      <stack.Screen name="Addproperty" component={Addproperty} options={{ headerShown: false }}></stack.Screen>
      <stack.Screen name="PropertyDetails" component={PropertyDetails} options={{ headerShown: false }}></stack.Screen>
      <stack.Screen name="ElectronicsDetails" component={ElectronicsDetails} options={{ headerShown: false }}></stack.Screen>
      <stack.Screen name="BikeDetails" component={BikeDetails} options={{ headerShown: false }}></stack.Screen>
      <stack.Screen name="CarDetails" component={CarDetails} options={{ headerShown: false }}></stack.Screen>
      <stack.Screen name="BikesOption" component={BikesOption} options={{ headerShown: false }}></stack.Screen>
      <stack.Screen name="PropertyOption" component={PropertyOption} options={{ headerShown: false }}></stack.Screen>
      <stack.Screen name="PropertyOptionTwo" component={PropertyOptionTwo} options={{ headerShown: false }}></stack.Screen>
      <stack.Screen name="BikesOptionTwo" component={BikesOptionTwo} options={{ headerShown: false }}></stack.Screen>
      <stack.Screen name="ElectronicsOption" component={ElectronicsOption} options={{ headerShown: false }}></stack.Screen>
      <stack.Screen name="ElictronicEnquiry" component={ElictronicEnquiry} options={{ headerShown: false }}></stack.Screen>
      <stack.Screen name="BikeEnquiry" component={BikeEnquiry} options={{ headerShown: false }}></stack.Screen>
      <stack.Screen name="CarEnquiry" component={CarEnquiry} options={{ headerShown: false }}></stack.Screen>
      <stack.Screen name="PropertyEnquiry" component={PropertyEnquiry} options={{ headerShown: false }}></stack.Screen>
      <stack.Screen name="Electronicslist" component={Electronicslist} options={{ headerShown: false }}></stack.Screen>
      <stack.Screen name="BikeList" component={BikeList} options={{ headerShown: false }}></stack.Screen>
      <stack.Screen name="CarList" component={CarList} options={{ headerShown: false }}></stack.Screen>
      <stack.Screen name="PostProfiles" component={PostProfiles} options={{ headerShown: false }}></stack.Screen>
      <stack.Screen name="CarFilter" component={CarFilter} options={{ headerShown: false }}></stack.Screen>
      <stack.Screen name="AllPeoductViewlaptop" component={AllPeoductViewlaptop} options={{ headerShown: false }}></stack.Screen>
      <stack.Screen name="AllPeoductViewCar" component={AllPeoductViewCar} options={{ headerShown: false }}></stack.Screen>
      <stack.Screen name="Mostvisitproperty" component={Mostvisitproperty} options={{ headerShown: false }}></stack.Screen>
      {/* <stack.Screen name="AllPeoductViewbike" component={AllPeoductViewbike} options={{ headerShown: false }}></stack.Screen> */}

    </stack.Navigator>
  );
}
const allsellscreen = () => {
  return (
    <stack.Navigator initialRouteName="SellScreen">
      <stack.Screen name="SellScreen" component={SellScreen} options={{ headerShown: false }}></stack.Screen>
      <stack.Screen name="BikesOption" component={BikesOption} options={{ headerShown: false }}></stack.Screen>
      <stack.Screen name="PropertyOption" component={PropertyOption} options={{ headerShown: false }}></stack.Screen>
      <stack.Screen name="ElectronicsOption" component={ElectronicsOption} options={{ headerShown: false }}></stack.Screen>
      <stack.Screen name="Addproperty" component={Addproperty} options={{ headerShown: false }}></stack.Screen>
      <stack.Screen name="AddrentProperty" component={AddrentProperty} options={{ headerShown: false }}></stack.Screen>
      <stack.Screen name="LandPlotAddProperty" component={LandPlotAddProperty} options={{ headerShown: false }}></stack.Screen>
      <stack.Screen name="RenShopandOffice" component={RenShopandOffice} options={{ headerShown: false }}></stack.Screen>
      <stack.Screen name="PGandGuestHouse" component={PGandGuestHouse} options={{ headerShown: false }}></stack.Screen>
      <stack.Screen name="SaleShopandOffice" component={SaleShopandOffice} options={{ headerShown: false }}></stack.Screen>
      <stack.Screen name="AddCar" component={AddCar} options={{ headerShown: false }}></stack.Screen>
      <stack.Screen name="ElectronicsAllCategoriesForm" component={ElectronicsAllCategoriesForm} options={{ headerShown: false }}></stack.Screen>
      <stack.Screen name="Motorcycle" component={Motorcycle} options={{ headerShown: false }}></stack.Screen>
      <stack.Screen name="Bicyclesscreen" component={Bicyclesscreen} options={{ headerShown: false }}></stack.Screen>
    </stack.Navigator>
  );
}
const allProfilescreen = () => {
  return (
    <stack.Navigator initialRouteName="ProfileScreen">
      <stack.Screen name="ProfileScreen" component={ProfileScreen} options={{ headerShown: false }}></stack.Screen>
      <stack.Screen name="Enquirylist" component={Enquirylist} options={{ headerShown: false }}></stack.Screen>
      <stack.Screen name="Subscription" component={Subscription} options={{ headerShown: false }}></stack.Screen>
      <stack.Screen name="MyDetails" component={MyDetails} options={{ headerShown: false }}></stack.Screen>
      <stack.Screen name="Notification" component={Notification} options={{ headerShown: false }}></stack.Screen>
      <stack.Screen name="ProfileMyPropertyDetails" component={ProfileMyPropertyDetails} options={{ headerShown: false }}></stack.Screen>
      <stack.Screen name="Privacypolicy" component={Privacypolicy} options={{ headerShown: false }}></stack.Screen>
      <stack.Screen name="Location" component={Location} options={{ headerShown: false }}></stack.Screen>


    </stack.Navigator>
  );
}
const allLikescreen = () => {
  return (
    <stack.Navigator initialRouteName="Like">
      <stack.Screen name="Like" component={Like} options={{ headerShown: false }}></stack.Screen>
      <stack.Screen name="Electronicslist" component={Electronicslist} options={{ headerShown: false }}></stack.Screen>
      <stack.Screen name="BikeList" component={BikeList} options={{ headerShown: false }}></stack.Screen>
      <stack.Screen name="CarList" component={CarList} options={{ headerShown: false }}></stack.Screen>

    </stack.Navigator>
  );
}
const BottomTabNavigation = () => {

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarInactiveTintColor: '#022689',
        tabBarActiveTintColor: '#fff',

        tabBarLabelStyle: {
          marginBottom: 2,
          fontSize: 10,
          fontWeight: '800'
        },
        tabBarStyle: {
          backgroundColor: '#02487C',
          borderBottomWidth: 0,
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative', // Use relative positioning
          borderColor: '#DFDFDF',
          borderWidth: 0.5,
          height: 70,
          // borderTopLeftRadius: 20,
          // borderTopRightRadius: 20
        },

      }}>

      <Tab.Screen
        name="DeshboardScreen"
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ focused }) => (
            <View style={{
              height: focused ? 55 : 0,
              width: focused ? 55 : 0,
              borderRadius: focused ? 50 : 0,
              backgroundColor: focused ? "#fff" : 'transparent',
              marginBottom: focused ? 40 : 0,
              borderColor: focused ? "#02487C" : 'transparent',
              justifyContent: 'center',
              alignItems: 'center',
              borderWidth: focused ? 3 : 0,
            }}>
              {focused && <Text style={{
                color: '#fff',
                fontSize: 12,
                position: "absolute",
                fontFamily: 'Poppins-SemiBold',
                bottom: -30
              }}>Home</Text>}
              <Image
                source={icons.home}
                style={{
                  tintColor: focused ? '#02487C' : '#fff',
                  height: 30,
                  width: 30,
                  marginTop: focused ? 0 : 15,
                  // marginBottom: '7%',
                  alignSelf: 'center',
                }}
              />
              {/* <View style={{backgroundColor: focused ? 'red' : '#fff',height:10,width:10, borderRadius:10, alignSelf:"center",marginTop:'5%'}}></View> */}
            </View>
          ),
        }}
        component={allhomescreen}
      />
      <Tab.Screen
        name="Like"
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ focused }) => (
            <View style={{
              height: focused ? 55 : 0,
              width: focused ? 55 : 0,
              borderRadius: focused ? 50 : 0,
              backgroundColor: focused ? "#fff" : 'transparent',
              marginBottom: focused ? 40 : 0,
              borderColor: focused ? "#02487C" : 'transparent',
              justifyContent: 'center',
              alignItems: 'center',
              borderWidth: focused ? 3 : 0,
            }}>
              {focused && <Text style={{
                color: '#fff',
                fontSize: 11,
                position: "absolute",
                fontFamily: 'Poppins-SemiBold',
                bottom: -30
              }}>Like</Text>}
              <Image
                source={icons.adstext2}
                style={{
                  tintColor: focused ? '#02487C' : '#fff',
                  height: 21,
                  width: 25,
                  marginTop: focused ? 0 : 15,
                  alignSelf: 'center',
                }}
              />
              {/* <View style={{backgroundColor: focused ? 'red' : '#fff',height:10,width:10, borderRadius:10, alignSelf:"center",marginTop:'5%'}}></View> */}
            </View>
          ),
        }}
        component={allLikescreen}
      />

      <Tab.Screen
        name="Sell"
        options={{
          tabBarLabel: '',

          tabBarIcon: ({ focused }) => (
            <View style={{
              height: focused ? 55 : 0,
              width: focused ? 55 : 0,
              borderRadius: focused ? 50 : 0,
              backgroundColor: focused ? "#fff" : 'transparent',
              marginBottom: focused ? 40 : 0,
              borderColor: focused ? "#02487C" : 'transparent',
              justifyContent: 'center',
              alignItems: 'center',
              borderWidth: focused ? 3 : 0,
            }}>


              {focused && <Text style={{
                color: '#fff',
                fontSize: 11,
                position: "absolute",
                fontFamily: '500',
                bottom: -23,
                fontFamily: 'Poppins-SemiBold',
                alignSelf: 'center',
                marginLeft: -35
              }}>Sell</Text>}


              <Image
                source={icons.Addprop}
                style={{
                  tintColor: focused ? '#02487C' : '#fff',
                  height: 40,
                  width: 40,
                  alignSelf: 'center',
                  marginRight: "9%",
                  marginTop: focused ? 0 : 15,
                }}
              />

            </View>
          ),
        }}
        component={allsellscreen}
      />

      <Tab.Screen
        name="Package"
        options={{
          tabBarLabel: '',

          tabBarIcon: ({ focused }) => (
            <View>
              <View style={{
                height: focused ? 55 : 0,
                width: focused ? 55 : 0,
                borderRadius: focused ? 50 : 0,
                backgroundColor: focused ? "#fff" : 'transparent',
                marginBottom: focused ? 40 : 0,
                borderColor: focused ? "#02487C" : 'transparent',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: focused ? 0 : 15,
                borderWidth: focused ? 3 : 0,
              }}>
                {focused && <Text style={{
                  color: '#fff',
                  fontSize: 11,
                  position: "absolute",

                  bottom: -23,
                  fontFamily: 'Poppins-SemiBold',
                  alignSelf: 'center',
                  marginLeft: -35
                  //  marginTop:-100
                }}>Package</Text>}
                <Image
                  source={icons.creditcard}
                  style={{
                    tintColor: focused ? '#02487C' : '#fff',
                    height: 30,
                    width: 30,
                    alignSelf: 'center',
                    // marginTop:15
                  }}
                />
              </View>



            </View>
          ),
        }}
        component={Package}
      />

      <Tab.Screen
        name="ProfileScreen"
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ focused }) => (
            <View style={{
              height: focused ? 55 : 0,
              width: focused ? 55 : 0,
              borderRadius: focused ? 50 : 0,
              backgroundColor: focused ? "#fff" : 'transparent',
              marginBottom: focused ? 40 : 0,
              borderColor: focused ? "#02487C" : 'transparent',
              justifyContent: 'center',
              alignItems: 'center',
              borderWidth: focused ? 3 : 0,
            }}>
              {focused && <Text style={{
                color: '#fff',
                fontSize: 11,
                position: "absolute",
                fontFamily: 'Poppins-SemiBold',
                bottom: -30
              }}>Profile</Text>}
              <Image
                source={icons.user}
                style={{
                  tintColor: focused ? '#02487C' : '#fff',
                  height: 35,
                  width: 35,
                  alignSelf: 'center',
                  marginTop: focused ? 0 : 15,
                }}
              />
              {/* <View style={{backgroundColor: focused ? 'red' : '#fff',height:10,width:10, borderRadius:10, alignSelf:"center",marginTop:'5%'}}></View> */}
            </View>
          ),
        }}
        component={allProfilescreen}
      />
    </Tab.Navigator>
  );
}

export default BottomTabNavigation;
