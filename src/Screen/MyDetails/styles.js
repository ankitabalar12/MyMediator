import { StyleSheet } from "react-native";
import { colors } from "../../Helper/colors";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff"
    },
    mainview: {
        height: 250,
        width: "100%",
        backgroundColor: "#02487C",
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50, marginBottom: "8%"
    },
    tincolor: {
        tintColor: "#fff"
    },
    textstyle: {
        color: "#fff"
    },
    proview: {
        height: 80,
        width: 80,
        borderRadius: 80,
        backgroundColor: "#DCDCDC",
        alignSelf: "center", marginTop: '4%',
        justifyContent: "center"
    },
    proimg: {
        height: 80,
        width: 80,
        borderRadius: 80,
        alignSelf: 'center',
        // marginTop:'5%',
    },
    proname: {
        color: '#000', textAlign: 'center',
        marginTop: '2%',
        fontSize: 18,
        fontFamily: 'Poppins-SemiBold',
    },
    proname2: {
        marginTop: "5%",
        color: '#02487C'
    },
    nametext: {
        fontSize: 15,
        color: "#000",
        fontFamily: 'Poppins-SemiBold',
        marginLeft: "6%", marginTop: "5%"

    },
    nametext2: {
        marginTop: "6%"
    },
    textinputmainview: {
        height: 50,
        width: "90%",
        backgroundColor: "#FCFCFC",
        borderColor: "#E8E8E8",
        borderWidth: 1,
        borderRadius: 11,
        alignSelf: "center",


        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    // make: {
    //     fontSize: 18,
    //     color: '#006800',
    //     textAlign: "center",
    //     marginHorizontal: "20%",
    //     fontFamily: 'Poppins-SemiBold',
    // },
    input: {
        marginLeft: "5%"
    },
    error: {
        marginLeft: "8%", color: colors.red
    },
    margintop: {
        marginTop: "30%"
    },
    savebutton: {
        width: "90%",
        backgroundColor:"#02487C"
    },
    selectedpro: {
        height: 30,
        width: 30,
        borderRadius: 50,
        backgroundColor: "#fff",
        position: "absolute",
        top: 0,
        right: -10,
        justifyContent: "center"
    },
    proimg2: {
        height: 15, width: 15, alignSelf: 'center', borderRadius: 20
    }
})