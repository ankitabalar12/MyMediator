import { StyleSheet } from "react-native";
import { colors } from "react-native-elements";

export const styles = StyleSheet.create({
    container: {
        flex: 1, backgroundColor: "#fff"
    },
    backgroundImage: {
        height:430
      

    },
    PasswordImg: {
        alignSelf: 'center',
        height: 160,
        width: 160, marginTop: "35%"
    },
    viewstyle: {
        height: 800,
        width: '100%',
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        borderColor: "#E8E8E8",
        borderWidth: 1,
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    marbottom: { marginBottom: '100%' },
    login:{
        color:'#000',
         fontSize:20, 
        fontFamily: 'Poppins-SemiBold', 
     textAlign:"center",
         marginBottom:"1%", 
         marginTop:"5%"

    },
    dontworry:{
        fontSize:14, color:'#000',
        marginLeft:"9%", 
        marginTop:"1%", marginBottom:"2%"
    },
    error:{
        marginLeft:"9%", 
        color:'red'
    },
    stylesbutton:{
        marginTop:'2%'
            },
})
