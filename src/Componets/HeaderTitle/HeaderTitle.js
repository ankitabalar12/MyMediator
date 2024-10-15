import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { icons } from '../../Helper/icons'
import { string } from '../../Helper/string'
import { useNavigation } from '@react-navigation/native'

const HeaderTitle = ({tincolor,textstyle,title}) => {
    const navigation = useNavigation();
    const [is_new, setIs_New] = useState();
    const goBack = () => {
        navigation.goBack();
      };


    

    return (
        <View style={styles.flexone}>
            <TouchableOpacity onPress={goBack}>
            <Image source={icons.left} style={[styles.left,tincolor]} />
            </TouchableOpacity>
            
            <Text style={[styles.PropertyDetails,textstyle]}>{title}</Text>
            <Image source={icons.bell} style={[styles.bell,tincolor]} />
        </View>
    )
}


const styles = StyleSheet.create({
    flexone: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: '5%',
         marginTop: "5%", marginBottom:"5%"
    },
    bell: {
        height: 30,
        width: 30,
    },
    left: {
        height: 30,
        width: 30
    },
    PropertyDetails: {
        fontSize: 17,
        color: "#000",
        fontFamily: 'Poppins-SemiBold',
    }
})
export default HeaderTitle