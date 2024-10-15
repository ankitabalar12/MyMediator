
import { StyleSheet } from "react-native";
import { colors } from "../../Helper/colors";

export const styles = StyleSheet.create({

    backgroundImage: {
        //   position:'absolute', 
        //     top:0,
            height:100,
            width:'100%'
            //  flex:1
            
            // width: '100%',
    
        },
    overlay: {
        flex: 1, height: '100%',
        width: '100%',
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(126, 123, 234, 0.8)',

    },
    propartylogo: {
        height: 130,
        width: 160,
        // tintColor: '#000', 

        marginTop: "25%",
         alignSelf: "center"
    },
    welcomtext: {
        fontSize: 25,
        fontFamily: 'Poppins-SemiBold',
        color: ' #02487C',
        marginTop: '35%',
        marginLeft: "5%"
    },
    login: {
        color: '#000', fontSize: 20,
        fontFamily: 'Poppins-SemiBold',
        // marginBottom:"1%",
        marginTop: "2%",
        textAlign: "center"

    },
    styviewmar: {
        marginTop: -6
    },
    styviewmartwo: {
        marginTop: -50
    },
    flexrwo: {
        flexDirection: "row"
    },
    forgrtpass: {
        color: colors.red,
        textAlign: "right", marginRight: "8%",
        fontFamily: 'Poppins-SemiBold',
    },
    marbottom: {
        marginBottom: "50%"
    },
    textor: {
        textAlign: "center",
        color: '#000',
        fontFamily: 'Poppins-SemiBold',
        fontSize: 15, marginTop: '2%'

    },
    stylesbutton:{
marginTop:'2%'
    },
    flexroww: {
        flexDirection: "row",
        alignSelf: "center",
        marginTop: '1%'
    }, textor3: {
        textAlign: "center",
        color: '#000',
        fontFamily: 'Poppins-SemiBold',
        fontSize: 15,

    },
    textor2: {
        textAlign: "center",
        color: colors.gray,
        fontFamily: 'Poppins-SemiBold',
        fontSize: 15,

    },
    error: {
        marginLeft: "9%", color: colors.red
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
    }
})