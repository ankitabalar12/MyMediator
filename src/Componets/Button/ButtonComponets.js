import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { colors } from '../../Helper/colors'

const ButtonComponets = ({ onPress, title ,stylebutton,savebutton,stylesbutton,styletextelec}) => {
    return (
        <TouchableOpacity style={[styles.buttonview,stylebutton,stylesbutton,savebutton]} onPress={onPress}>
            <Text style={[styles.textstyle,styletextelec]}>{title}</Text>
        </TouchableOpacity>



    )
}

export default ButtonComponets

const styles = StyleSheet.create({
    buttonview: {
        height: 55,
        width: "85%",
        backgroundColor:'#02487C',
        alignSelf: "center", 
        borderRadius: 43,
         marginTop: "10%", 
         justifyContent:"center"

    },
    textstyle: {
        color: colors.white,
         alignSelf:'center',
         fontSize:15, 
        fontFamily: 'Poppins-SemiBold', 
    }
})