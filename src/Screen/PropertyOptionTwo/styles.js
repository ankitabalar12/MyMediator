import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff"
    },
    flexrowstyle: {
        flexDirection: 'row',
        marginTop: '5%'
    },
    leftarrow: {
        height: 25, width: 25,
        marginLeft: '5%'
    },
    Propertytext: {
        marginLeft: '25%',
        color: '#000',
        fontSize: 15,
        fontWeight: '900'
    },
    marleft: {
        marginLeft: '5%'
    },
    forsaleview: {
        height: 40,
        width: "85%",
        borderRadius: 15,
        borderColor: "#EAEAEA",
        backgroundColor: "#fff",
        justifyContent: "center",
        marginBottom: '5%',
        alignSelf: "center",
        marginTop: '10%',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    flexrowviewlist:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginHorizontal:'5%'
    },
    forsaletext:{
        color:'#000',
        fontSize:14,
        fontWeight:"900"
    },
    Groupstyle:{
        height:25, width:25
    },
    forsaleview2:{
        height: 40,
        width: "80%",
        borderRadius: 15,
        borderColor: "#EAEAEA",
        backgroundColor: "#fff",
        justifyContent: "center",
        marginBottom: '5%',
        alignSelf: "center",
        marginLeft:"4%",
        // alignSelf:"flex-end",
        // marginRight:'3%',
        // marginTop: '10%',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,   
    },
    forsaleviewtwo:{
        marginTop:"1%"
    }
})