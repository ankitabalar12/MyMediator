import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1, backgroundColor: "#fff"
    },
    marbot: {
        marginTop: "5%"
    },
    proname: {
        color: '#02487C', textAlign: 'center',
        marginTop: '1%',
        fontSize: 18,
        fontFamily: 'Poppins-SemiBold',
    },
    adstext:{
        color:'gray', fontSize:15, textAlign:"center", marginTop:'2%', fontWeight:"900"
    },
    mainview: {
        height: 90,
        width: "90%",
        borderColor: "#E2E2E2",
        borderWidth: 1,
        borderRadius: 11,
        alignSelf: "center",
        //  justifyContent:"center",
        marginTop: "1%"
    },
    flexrow: {
        flexDirection: "row",
        // justifyContent: "space-between",
        marginHorizontal: "5%",
        marginTop: "5%"
    },
    proimge: {
        height: 50,
        width: 50,
        borderRadius: 60,
        backgroundColor: "#E2E2E2", justifyContent: "center"
    },
    proimge2: {
        height: 50,
        width: 50,
        borderRadius: 60,
        backgroundColor: "#E2E2E2",
        alignSelf: "center"
    },
    Dineshtext: {
        fontSize: 15,
        color: "#000",
        fontFamily: 'Poppins-SemiBold',
        // marginLeft:"5%"
    },
    newtextposition: {
        position: "absolute",
        right: 0
    },
    newtext: {
        fontSize: 14,
        color: "#02487C",
        fontFamily: 'Poppins-SemiBold',
    },
    amrleft: {
        marginLeft: "5%"
    },
    Dineshtext2: {
        fontSize: 12,
        color: "#000",
        // fontFamily: 'Poppins-SemiBold',
        // marginLeft:"5%"  , 
        marginRight: "15%"
    },
    marginbottom: {
        marginBottom: "50%"
    }
})