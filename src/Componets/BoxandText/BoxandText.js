import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const BoxandText = ({ title, IconName,onPress ,stylevi,martopview,textstyle,stylearrow,style}) => {
    return (
        <View style={[styles.mainview,stylevi,martopview]}>
            <TouchableOpacity style={styles.flexrow} onPress={onPress}>
                <Text style={[styles.textstyle,textstyle]}>{title}</Text>
                <TouchableOpacity  style={styles.arroestyle}>
                <Image style={[styles.iconstyle,stylearrow,style]} source={IconName}></Image>
                </TouchableOpacity>
             
            </TouchableOpacity>
        </View>
    )
}

export default BoxandText

const styles = StyleSheet.create({
    mainview: {
        height: 40, 
        width: "85%",
        backgroundColor: "#fff",
        borderColor: "#BFBFBF", 
        borderWidth: 1,
        alignSelf: "center",
        justifyContent:"center",
        borderRadius: 27,
         marginTop:"2%",
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
        justifyContent: "space-between",
         marginHorizontal: "10%", 
    },
    textstyle: {
        color: "#000",
        fontSize: 15,
        fontFamily: 'Poppins-SemiBold',
        // textAlign:"center"
    },
    iconstyle: {
        height:14,
        width: 14,
        tintColor: '#000',
        alignSelf:"center", 
        marginTop:"20%"
    
    }
})