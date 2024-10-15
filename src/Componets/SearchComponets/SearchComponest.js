import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { icons } from '../../Helper/icons'

const SearchComponest = ({onPress}) => {
    return (
        <View style={styles.flexrow2}>
                    <View style={styles.searchview}>
                        <View style={styles.flexrow}>
                <Image source={icons.search} style={styles.search} />
                <TextInput
                    placeholder="Search your mind ?"
                    placeholderTextColor={'#808080'}
                //   onChangeText={onPress} 
                />
            </View>
                      </View>
                    <TouchableOpacity onPress={onPress}style={styles.searchiconview}>
           
                    <Image source={icons.menuselected} style={styles.mapsandflags} />
              
                    </TouchableOpacity>
        </View>
    )
}

export default SearchComponest

const styles = StyleSheet.create({
    searchview: {
        height: 40,
        width: "72%",
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#E7E7E7',
        alignSelf: 'center', marginTop: "5%",
        borderRadius: 10, 
        justifyContent: 'center',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
       

    },
    flexrow: {
        flexDirection: "row",
        
        
    },
    search: {
        height: 25, width: 25,
        marginLeft: "5%",
        tintColor: "#A6A5A5",
        alignSelf: "center", marginRight: "3%"
    },
    mapsandflags: {
        height: 30,
        width: 30,
        alignSelf:"center"
    },
    searchicon: {
        position: "absolute", right: 10, alignSelf: "center"
    },
    searchiconview:{
        height: 40,
        width: "15%",
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#E7E7E7',
        alignSelf: 'center', 
        marginTop: "5%",
        borderRadius: 10, 
        justifyContent: 'center',
         marginLeft:"2%",
         shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    flexrow2:{
        flexDirection:"row",
        alignSelf:"center",
         marginBottom:'3%'
    }
})