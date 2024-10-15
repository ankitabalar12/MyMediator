import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff"
    },
    proname: {
        color: '#02487C', textAlign: 'center',
        marginTop: '1%',
        fontSize: 18,
        fontFamily: 'Poppins-SemiBold',
    },
    newtext: {
        fontSize: 20,
        color: '#000',
        fontFamily: 'Poppins-SemiBold',
        marginLeft: "7%", 
        marginTop:"5%"
    },
    mainviewstyles: {
        height: 130,
        width: "87%",
        marginTop:"3%",
        borderRadius: 11,
        borderColor: '#E8E8E8',
        borderWidth: 1,
        backgroundColor: '#fff',
        alignSelf: "center",
        justifyContent:"center",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    marginview:{
        marginBottom:"30%"
    },
    flexrow:{
        flexDirection:"row",
         marginHorizontal:"2%"
    },
    imgstyle:{
         height:70,
         width:70, 
         alignSelf:"center"
         
    },
    plattextstyle:{
        fontSize:14,
        color:"#000",
        fontFamily: 'Poppins-SemiBold',
        marginLeft: "3%",
        fontWeight:'500'
    },
    datetext:{
        color:"#575757",
        fontSize:11,
         marginLeft:'3%',
         fontWeight:'500'
    },
    datetextend:{
        color:"#575757",
        fontSize:10,
         marginLeft:'3%',
         fontWeight:'500'
    },
    datetextrat:{
        color:"#575757",
        fontSize:10,
         marginLeft:'3%',
         fontWeight:'500'
    },
    satrfow:{
        flexDirection:"row"
    },
    satrfowtwo:{
        marginTop:"5%"
    },
    pricestext:{
        fontSize:15,
        color:'#000',
        fontFamily: 'Poppins-SemiBold',
        marginLeft:"4%",
         alignSelf:"center"
    },
    datetexttwo:{
alignSelf:"center"
    },
    expriboy:{
        height:70, width:60

    },
    renewallview:{
        height:25, width:'50%',
        backgroundColor:"#02487C",
        borderRadius:50,
        position:"absolute",
         right:0,
         justifyContent:"center"
    },
    Renewaltext:{
        color:'#fff', 
        alignSelf:"center",
        fontFamily: 'Poppins-SemiBold',
        fontSize:10

    },
    rupeesimgtwo: {
        height: 14,
        width: 10,
        marginRight:-4,
         marginLeft: 8,
         marginTop:5
    },
    rupeesimgthree: {
        height: 14,
        width: 10,
        marginLeft: 7,
        marginTop: 5,
         marginRight: -4
    },
})