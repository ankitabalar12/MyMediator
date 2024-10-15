import { AppRegistry, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer, useTheme } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

// import Onbord from '../../Screen/Onbord/Onbord'

import LoginScreen from '../../Screen/Login/LoginScreen'
import LogoScreen from '../../Screen/Logo/LogoScreen'
import OtpScreen from '../../Screen/OTP/OtpScreen'
import BottomTabNavigation from '../BottomBarTab/BottomTabNavigation'
import SingUp from '../../Screen/SingUp/SingUp'
import PropertyDetails from '../../Screen/PropertyDetails/PropertyDetails'
import MyDetails from '../../Screen/MyDetails/MyDetails'
import Notification from '../../Screen/Notification/Notification'
import PaymentHistory from '../../Screen/PaymentHistory/PaymentHistory'
import ProfileMyPropertyDetails from '../../Screen/ProfileMyPropertyDetails/ProfileMyPropertyDetails'
import TermsandConditions from '../../Screen/Privacypolicy/Privacypolicy'
import Privacypolicy from '../../Screen/Privacypolicy/Privacypolicy'

import ForgetPassword from '../../Screen/ForgetPassword/ForgetPassword'
import demo from '../../Screen/demo'
// import DemoButtombar from '../DemoButtombar'
import { DarkTheme, LightTheme, ThemeProvider } from '../ThemeContext'
import NavidemoScreen from '../../Screen/NavidemoScreen'
import Splash from '../../Screen/Splash/Splash'
import Enquirylist from '../../Screen/Enquirylist/Enquirylist'
import Subscription from '../../Screen/Subscription/Subscription'

import Mostvisitproperty from '../../Screen/Mostvisitproperty/Mostvisitproperty'
import PopularProperty from '../../Screen/PopularProperty/PopularProperty'

import HomeScreen from '../../Screen/Home/HomeScreen'
import PropertyOption from '../../Screen/PropertyOption/PropertyOption'

import LandPlotAddProperty from '../../Screen/AddPropartyallScreen/LandPlotAddProperty/LandPlotAddProperty'
import AddrentProperty from '../../Screen/AddPropartyallScreen/AddrentProperty/AddrentProperty'
import RenShopandOffice from '../../Screen/AddPropartyallScreen/RenShopandOffice/RenShopandOffice'
import PGandGuestHouse from '../../Screen/AddPropartyallScreen/PGandGuestHouse/PGandGuestHouse'
import SaleShopandOffice from '../../Screen/AddPropartyallScreen/SaleShopandOffice/SaleShopandOffice'
import Addproperty from '../../Screen/AddPropartyallScreen/Addproperty/Addproperty'
import Motorcycle from '../../Screen/AddBikes/Motorcycle/Motorcycle'
import BikesOption from '../../Screen/BikesOption/BikesOption'
import Electronicslist from '../../Screen/ListofProduct/Electronicslist/Electronicslist'
import ElectronicsDetails from '../../Screen/ElectronicsDetails/ElectronicsDetails'
import ElictronicEnquiry from '../../Screen/ElictronicEnquiry/ElictronicEnquiry'
import ElectronicsOption from '../../Screen/ElectronicsOption/ElectronicsOption'
import ElectronicsAllCategoriesForm from '../../Screen/ElectronicsAllCategoriesForm/ElectronicsAllCategoriesForm'
import BikesOptionTwo from '../../Screen/BikesOptionTwo/BikesOptionTwo'
import BikeList from '../../Screen/ListofProduct/BikeList/BikeList'
import BikeDetails from '../../Screen/BikeDetails/BikeDetails'
import BikeEnquiry from '../../Screen/BikeEnquiry/BikeEnquiry'
import CarFilter from '../../Screen/CarFilter/CarFilter'
import CarList from '../../Screen/ListofProduct/CarList/CarList'
import AddCar from '../../Screen/AddCar/AddCar'
import CarDetails from '../../Screen/CarDetails/CarDetails'
import CarEnquiry from '../../Screen/CarEnquiry/CarEnquiry'
import PropertyEnquiry from '../../Screen/PropertyEnquiry/PropertyEnquiry'
import Bicyclesscreen from '../../Screen/AddBikes/Bicycles/Bicyclesscreen'
import PropertyOptionTwo from '../../Screen/PropertyOptionTwo/PropertyOptionTwo'
import PostProfiles from '../../Screen/PostProfiles/PostProfiles'
import Location from '../../Screen/Location/Location'
import Like from '../../Screen/Like/Like'
import AllPeoductViewlaptop from '../../Screen/AllPeoductViewlaptop/AllPeoductViewlaptop'
import AllPeoductViewCar from '../../Screen/AllPeoductViewCar/AllPeoductViewCar'
import AllPeoductViewbike from '../../Screen/AllPeoductViewbike/AllPeoductViewbike'
import PushNotification from 'react-native-push-notification';
import firebase from '@react-native-firebase/app';
const firebaseConfig = {
  apiKey: "AIzaSyC0UCZhrRpYXjJ_P0HbVR_oZy8AshcMQ7Q",
  authDomain: "mymediator.firebaseapp.com",
  projectId: "mymediator",
  storageBucket: "mymediator.appspot.com",
  messagingSenderId: "630270932926",
  appId: "1:630270932926:web:2f4c0ca90bff869b4f2bef",
  measurementId: "G-9BF3THKT2N"
};
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
console.log('firebaseConfig --------',firebaseConfig)
PushNotification.configure({
  smallIcon: "ic_stat_assessment",
})
PushNotification.configure({
  onRegister: function (token) {
    console.log('TOKEN:=======================', token);
    global.tokenId = token;
    global.token = global.tokenId.token;
    //  alert(global.token);
    console.log('TOKEN:========================',global.token );
  },
});
AppRegistry.registerHeadlessTask('RNFirebaseBackgroundMessage', () => PushNotification);

const stack = createStackNavigator()
global.url = 'https://www.demo603.amrithaa.com/mymediator/public/api/'
const MainNavigation = () => {
  const { theme } = useTheme();




  return (
    <ThemeProvider>
      <NavigationContainer theme={theme === 'light' ? LightTheme : DarkTheme}>
        <stack.Navigator initialRouteName='Splash'>
          <stack.Screen name="Splash" component={Splash} options={{ headerShown: false }}></stack.Screen>
          <stack.Screen name="LogoScreen" component={LogoScreen} options={{ headerShown: false }}></stack.Screen>
          <stack.Screen name="SingUp" component={SingUp} options={{ headerShown: false }}></stack.Screen>
          <stack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false }}></stack.Screen>
          <stack.Screen name="ForgetPassword" component={ForgetPassword} options={{ headerShown: false }}></stack.Screen>
          <stack.Screen name="OtpScreen" component={OtpScreen} options={{ headerShown: false }}></stack.Screen>
          <stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }}></stack.Screen>
          <stack.Screen name="DeshboardScreen" component={BottomTabNavigation} options={{ headerShown: false }}></stack.Screen>
         {/* view all screen  */}
          <stack.Screen name="Mostvisitproperty" component={Mostvisitproperty} options={{ headerShown: false }}></stack.Screen>
          <stack.Screen name="PopularProperty" component={PopularProperty} options={{ headerShown: false }}></stack.Screen>
         
          <stack.Screen name="NavidemoScreen" component={NavidemoScreen} options={{ headerShown: false }}></stack.Screen>
        
          {/* Option screen  */}
          <stack.Screen name="BikesOption" component={BikesOption} options={{ headerShown: false }}></stack.Screen>
          <stack.Screen name="PropertyOption" component={PropertyOption} options={{ headerShown: false }}></stack.Screen>
          <stack.Screen name="PropertyOptionTwo" component={PropertyOptionTwo} options={{ headerShown: false }}></stack.Screen>
          <stack.Screen name="BikesOptionTwo" component={BikesOptionTwo} options={{ headerShown: false }}></stack.Screen>
          <stack.Screen name="ElectronicsOption" component={ElectronicsOption} options={{ headerShown: false }}></stack.Screen>
          {/* profilescree all add the screen */}
          <stack.Screen name="Enquirylist" component={Enquirylist} options={{ headerShown: false }}></stack.Screen>
          <stack.Screen name="PostProfiles" component={PostProfiles} options={{ headerShown: false }}></stack.Screen>
          <stack.Screen name="Subscription" component={Subscription} options={{ headerShown: false }}></stack.Screen>
          <stack.Screen name="Location" component={Location} options={{ headerShown: false }}></stack.Screen>
          <stack.Screen name="MyDetails" component={MyDetails} options={{ headerShown: false }}></stack.Screen>
          <stack.Screen name="Notification" component={Notification} options={{ headerShown: false }}></stack.Screen>
          <stack.Screen name="PaymentHistory" component={PaymentHistory} options={{ headerShown: false }}></stack.Screen>
          <stack.Screen name="ProfileMyPropertyDetails" component={ProfileMyPropertyDetails} options={{ headerShown: false }}></stack.Screen>
          <stack.Screen name="Privacypolicy" component={Privacypolicy} options={{ headerShown: false }}></stack.Screen>
          {/*  app home Property screen  */}
          <stack.Screen name="Addproperty" component={Addproperty} options={{ headerShown: false }}></stack.Screen>
          <stack.Screen name="AddrentProperty" component={AddrentProperty} options={{ headerShown: false }}></stack.Screen>
          <stack.Screen name="LandPlotAddProperty" component={LandPlotAddProperty} options={{ headerShown: false }}></stack.Screen>
          <stack.Screen name="RenShopandOffice" component={RenShopandOffice} options={{ headerShown: false }}></stack.Screen>
          <stack.Screen name="PGandGuestHouse" component={PGandGuestHouse} options={{ headerShown: false }}></stack.Screen>
          <stack.Screen name="SaleShopandOffice" component={SaleShopandOffice} options={{ headerShown: false }}></stack.Screen>
          {/* car add */}
          <stack.Screen name="CarFilter" component={CarFilter} options={{ headerShown: false }}></stack.Screen>
          <stack.Screen name="AddCar" component={AddCar} options={{ headerShown: false }}></stack.Screen>
          {/* Electronics All Categories Form */}
          <stack.Screen name="ElectronicsAllCategoriesForm" component={ElectronicsAllCategoriesForm} options={{ headerShown: false }}></stack.Screen>
          {/*  app Bikes Property screen  */}
          <stack.Screen name="Motorcycle" component={Motorcycle} options={{ headerShown: false }}></stack.Screen>
          <stack.Screen name="Bicyclesscreen" component={Bicyclesscreen} options={{ headerShown: false }}></stack.Screen>
          {/*  app list of product  */}
          <stack.Screen name="Electronicslist" component={Electronicslist} options={{ headerShown: false }}></stack.Screen>
          <stack.Screen name="BikeList" component={BikeList} options={{ headerShown: false }}></stack.Screen>
          <stack.Screen name="CarList" component={CarList} options={{ headerShown: false }}></stack.Screen>
          {/* <stack.Screen name="Like" component={Like} options={{ headerShown: false }}></stack.Screen> */}
          {/* ditailscreen */}
          <stack.Screen name="PropertyDetails" component={PropertyDetails} options={{ headerShown: false }}></stack.Screen>
          <stack.Screen name="ElectronicsDetails" component={ElectronicsDetails} options={{ headerShown: false }}></stack.Screen>
          <stack.Screen name="BikeDetails" component={BikeDetails} options={{ headerShown: false }}></stack.Screen>
          <stack.Screen name="CarDetails" component={CarDetails} options={{ headerShown: false }}></stack.Screen>
          {/* Enquiry */}
          <stack.Screen name="ElictronicEnquiry" component={ElictronicEnquiry} options={{ headerShown: false }}></stack.Screen>
          <stack.Screen name="BikeEnquiry" component={BikeEnquiry} options={{ headerShown: false }}></stack.Screen>
          <stack.Screen name="CarEnquiry" component={CarEnquiry} options={{ headerShown: false }}></stack.Screen>
          <stack.Screen name="PropertyEnquiry" component={PropertyEnquiry} options={{ headerShown: false }}></stack.Screen>
          <stack.Screen name="AllPeoductViewlaptop" component={AllPeoductViewlaptop} options={{ headerShown: false }}></stack.Screen>
          <stack.Screen name="AllPeoductViewCar" component={AllPeoductViewCar} options={{ headerShown: false }}></stack.Screen>
          <stack.Screen name="AllPeoductViewbike" component={AllPeoductViewbike} options={{ headerShown: false }}></stack.Screen>

        </stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  )
}

export default MainNavigation

