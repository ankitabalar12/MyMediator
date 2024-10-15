import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { styles } from './styles'
import MapView, { Marker } from 'react-native-maps';
import { Image } from 'react-native-elements';
import { icons } from '../../Helper/icons';
import { TouchableOpacity } from 'react-native';
import TabbottomviewComponets from '../../Componets/TabViewComponets/TabbottomviewComponets';
import { ScrollView } from 'react-native';
const Location = ({navigation}) => {
    const [selectbutton, setSelectbutton] = useState('')
    const selectedview = (id)=>{
        setSelectbutton(id)
    }
    // const goBackToScreen = (selectedId) => {
    //     const screenMap = {
    //       1: 'HomeScreen',
    //       2: 'Propertyscreen',
    //       3: 'SellScreen',
    //       4: 'Package',
    //       5: 'ProfileScreen',
    //     };
    //     navigation.navigate(screenMap[selectedId]);
    //   };
    
    return (
        <View style={styles.container}>
            <ScrollView>
            <View style={styles.mapviewfull}>
                <View style={styles.greenview}>
                    <View style={styles.flexrow}>
                        <Image source={icons.uparrow2} style={styles.uparrow2styles}></Image>
                        <View>
                            <Text style={styles.locationtext}>Mahadevan</Text>
                            <Text style={styles.locationtext2}>St</Text>
                        </View>
                        
                        <View style={styles.locviewstylw}>
                            <TouchableOpacity style={styles.autioview}>
                                <Image style={styles.iconstyle} source={icons.googlevoice}></Image>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.autioview}>
                                <Image style={styles.iconstyle2} source={icons.search2}></Image>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.autioview}>
                                <Image style={styles.iconstyle2} source={icons.volume}></Image>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.autioview}>
                                <Image style={styles.iconstyle} source={icons.compassicon}></Image>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.autioview}>
                                <Image style={styles.iconstyle} source={icons.addop}></Image>
                            </TouchableOpacity>
                        </View>
                    </View>
             <TouchableOpacity style={styles.greenview2}>
                <View style={styles.flexrowviewthen}>
                    <Text style={styles.thentext}>Then</Text>
                    <Image style={styles.turnleftstyle} source={icons.turnleft}></Image>
                </View>
             </TouchableOpacity>
                </View>
              
                <MapView
                    style={styles.map}
                    initialRegion={{
                        latitude: 37.78825,
                        longitude: -122.4324,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}>
                </MapView>
            </View>
            <View style={styles.minrow}>
                <Text style={styles.mintext}>36 min</Text>
                <Text style={styles.kmtxt}>(14 km)</Text>
            </View>
            <Text style={styles.fastexttext}>Fastest route , Despite the usual traffic</Text>
            <View style={styles.flerowthreebutton}>
                <TouchableOpacity onPress={()=>{
                  selectedview(1)  
                }} style={[styles.startview,{backgroundColor:selectbutton === 1 ? '#4881DD' :'#cccc' }]}>
                    <View style={styles.iconandtextrow}>
                        <Image source={icons.tablerlocati} style={[styles.lociconstyle,{tintColor:selectbutton === 1 ? '#fff' : '#000'}]}></Image>
                        <Text style={[styles.starttext,{color:selectbutton === 1 ? '#fff' : '#000'}]}>Start</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{
                 selectedview(2)   
                }} style={[styles.startview,{backgroundColor:selectbutton === 2 ? '#4881DD' :'#cccc'}]}>
                    <View style={styles.iconandtextrow}>
                        <Image source={icons.stpe} style={[styles.stpestyle,{tintColor:selectbutton === 2 ? '#fff' : '#000'}]}></Image>
                        <Text style={[styles.starttext,{color:selectbutton === 2 ? '#fff' : '#000'}]}>Steps</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{
                 selectedview(3)   
                }} style={[styles.startview,{backgroundColor:selectbutton === 3 ? '#4881DD' :'#cccc'}]}>
                    <View style={styles.iconandtextrow}>
                        <Image source={icons.pin} style={[styles.tablerlocatistyle,{tintColor:selectbutton === 3 ? '#fff' : '#000'}]}></Image>
                        <Text style={[styles.starttext,{color:selectbutton === 3 ? '#fff' : '#000'}]}>Pin</Text>
                    </View>
                </TouchableOpacity>

            </View>
            <View style={styles.martopview}/>
            </ScrollView>
            {/* <TabbottomviewComponets
        selectedId={5} goBackToScreen={goBackToScreen} /> */}
        </View>
    )
}

export default Location

