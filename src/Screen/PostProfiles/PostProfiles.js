import { Image, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import HeaderUserName from '../../Componets/HeaderUserName/HeaderUserName'
import { icons } from '../../Helper/icons'
import { styles } from './styles'
import { ImageBackground } from 'react-native'
import { string } from '../../Helper/string'
import AsyncStorage from '@react-native-community/async-storage'

const PostProfiles = ({ navigation }) => {
    const [name, setName] = useState('');
    const [imageUri, setImageUri] = useState();
    useEffect(() => {
        const loginallData = async () => {
            const userdata = await AsyncStorage.getItem('logindata');
            const finaluserdata = JSON.parse(userdata);
            setName(finaluserdata.name);
            setImageUri(finaluserdata.profile_image);
            console.log('name >', finaluserdata.name);
            console.log('profile_image <<<<>', finaluserdata.profile_image);
        }
        loginallData();

    }, [])
    
    return (
        <View style={styles.container}>
            <ScrollView>
                <HeaderUserName
                    onPress={() => { navigation.navigate('Notification') }}
                />
                <View style={styles.flexrow2}>
                    <View style={styles.searchview}>
                        <View style={styles.flexrow23}>
                            <Image source={icons.search} style={styles.search} />
                            <TextInput
                                placeholder="What in your mind ?"
                                placeholderTextColor={'#808080'}
                            //   onChangeText={onPress} 
                            />
                        </View>
                    </View>
                    <TouchableOpacity onPress={() => {

                    }} style={styles.searchiconview}>
                        <Image source={icons.menuselected} style={styles.mapsandflags} />
                    </TouchableOpacity>
                </View>
                <Text style={styles.make}>Post Profile</Text>

                <View style={styles.profilview}>
                    {imageUri ?
                        <Image source={{ uri: imageUri }} style={styles.prostles} />
                        :
                        <Image style={styles.prostles} source={icons.proview}></Image>
                    }
                </View>
                <Text style={styles.nameuser}>{name}</Text>

                <View style={styles.flexdractionrow}>
                    <TouchableOpacity onPress={() => { navigation.navigate('PropertyDetails') }} style={styles.viewstyles}>
                        <ImageBackground source={icons.home3} borderRadius={11}
                            style={styles.backgroundImage}>
                            {/* <TouchableOpacity onPress={toggleLike}>
                                <Image source={liked ? icons.heartthree : icons.heart} style={liked ? styles.heart2 : styles.heart} />
                            </TouchableOpacity> */}
                        </ImageBackground>
                        <Text style={styles.textstylehome}>{string.Salehouse}</Text>
                        <View style={styles.flextop}>
                            <Text style={styles.BHK}>{string.BHK}</Text>
                            <Image source={icons.mapsandflags} style={styles.mapsandflags2} />
                            <Text style={styles.West}>{string.Westtwo}</Text>
                        </View>
                        <View style={styles.flexbotview}>
                            <Image source={icons.squre} style={styles.squre} />
                            <Text style={styles.sqtext}>800 Sq.Ft</Text>
                            <Image source={icons.Vector} style={styles.rupeesimgthree}></Image>
                            <Text style={styles.renttexpraise}>7,5000</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { navigation.navigate('PropertyDetails') }} style={styles.viewstyles}>
                        <ImageBackground source={icons.home3} borderRadius={11}
                            style={styles.backgroundImage}>
                            {/* <TouchableOpacity onPress={toggleLike}>
                                <Image source={liked ? icons.heartthree : icons.heart} style={liked ? styles.heart2 : styles.heart} />
                            </TouchableOpacity> */}
                        </ImageBackground>
                        <Text style={styles.textstylehome}>{string.Salehouse}</Text>
                        <View style={styles.flextop}>
                            <Text style={styles.BHK}>{string.BHK}</Text>
                            <Image source={icons.mapsandflags} style={styles.mapsandflags2} />
                            <Text style={styles.West}>{string.Westtwo}</Text>
                        </View>
                        <View style={styles.flexbotview}>
                            <Image source={icons.squre} style={styles.squre} />
                            <Text style={styles.sqtext}>800 Sq.Ft</Text>
                            <Image source={icons.Vector} style={styles.rupeesimgthree}></Image>
                            <Text style={styles.renttexpraise}>7,5000</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { navigation.navigate('PropertyDetails') }} style={styles.viewstyles}>
                        <ImageBackground source={icons.home3} borderRadius={11}
                            style={styles.backgroundImage}>
                            {/* <TouchableOpacity onPress={toggleLike}>
                                <Image source={liked ? icons.heartthree : icons.heart} style={liked ? styles.heart2 : styles.heart} />
                            </TouchableOpacity> */}
                        </ImageBackground>
                        <Text style={styles.textstylehome}>{string.Salehouse}</Text>
                        <View style={styles.flextop}>
                            <Text style={styles.BHK}>{string.BHK}</Text>
                            <Image source={icons.mapsandflags} style={styles.mapsandflags2} />
                            <Text style={styles.West}>{string.Westtwo}</Text>
                        </View>
                        <View style={styles.flexbotview}>
                            <Image source={icons.squre} style={styles.squre} />
                            <Text style={styles.sqtext}>800 Sq.Ft</Text>
                            <Image source={icons.Vector} style={styles.rupeesimgthree}></Image>
                            <Text style={styles.renttexpraise}>7,5000</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { navigation.navigate('PropertyDetails') }} style={styles.viewstyles}>
                        <ImageBackground source={icons.home3} borderRadius={11}
                            style={styles.backgroundImage}>
                            {/* <TouchableOpacity onPress={toggleLike}>
                                <Image source={liked ? icons.heartthree : icons.heart} style={liked ? styles.heart2 : styles.heart} />
                            </TouchableOpacity> */}
                        </ImageBackground>
                        <Text style={styles.textstylehome}>{string.Salehouse}</Text>
                        <View style={styles.flextop}>
                            <Text style={styles.BHK}>{string.BHK}</Text>
                            <Image source={icons.mapsandflags} style={styles.mapsandflags2} />
                            <Text style={styles.West}>{string.Westtwo}</Text>
                        </View>
                        <View style={styles.flexbotview}>
                            <Image source={icons.squre} style={styles.squre} />
                            <Text style={styles.sqtext}>800 Sq.Ft</Text>
                            <Image source={icons.Vector} style={styles.rupeesimgthree}></Image>
                            <Text style={styles.renttexpraise}>7,5000</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.martop}></View>
            </ScrollView>
            <View style={styles.bottomviewstyle}>
                <View style={styles.enquributton}>
                    <TouchableOpacity onPress={() => { navigation.navigate('PropertyEnquiry') }} style={styles.enqubutton}>
                        <View style={styles.underview}>
                            <Image style={styles.enqicon} source={icons.enqic}></Image>
                            <Text style={styles.Enquirytext}>Enquiry</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.enqubutton}>
                        <View style={styles.underview}>
                            <Image style={styles.callicostyle} source={icons.callico}></Image>
                            <Text style={styles.Enquirytext}>Call</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
           
        </View>
    )
}

export default PostProfiles

