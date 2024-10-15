import { StyleSheet } from "react-native";
import { colors } from "react-native-elements";

export const styles = StyleSheet.create({
    container: {
        flex: 1, backgroundColor: "#fff"
      },
      make: {
        fontSize: 15,color: '#02487C',
        textAlign: "center",
        marginHorizontal: "20%",
        fontFamily: 'Poppins-SemiBold',
        marginTop: "6%",
         marginBottom: "5%"
      },
      inuttextstyletext: {
        fontSize: 14, color: '#000',
        marginLeft: "10%",
        fontFamily: 'Poppins-SemiBold',
    
      },
      styleview: {
        width: "89%",
        marginTop: -9,
        marginBottom: "1%", borderRadius: 27
      },
      flexrowtextinput:{
        flexDirection:'row', alignSelf:'center'
      },
      textinputrowstyle:{
        height: 40,
     width:170,
        justifyContent:'center',
        // textAlignVertical: 'top',
    
        marginBottom: "4%",
   
        backgroundColor: '#fff',
        borderRadius: 27,
        margin:10,
        borderColor: "#CCCBCB",
        borderWidth: 1,
    
        alignSelf: 'center',
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
     
      },
      inputtext:{
        alignSelf:"center", 
        color:'#000',
        fontWeight:'900'
      },
      styleviewdescrip: {
        height: 120,
        textAlignVertical: 'top',
    
        marginBottom: "4%",
        width: '88%',
        backgroundColor: '#fff',
        borderRadius: 27,
    
        borderColor: "#CCCBCB",
        borderWidth: 1,
    
        alignSelf: 'center',
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    
      },
      sttyinput: {
        marginLeft: '5%'
      },
      styleviewdescrip2: {
        height: 90,
        width: '88%',
        marginBottom: "4%",
        backgroundColor: '#fff',
        borderRadius: 27,
        justifyContent: "center",
        borderColor: "#CCCBCB",
        borderWidth: 1,
    
        alignSelf: 'center',
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    
      },
      flexrow3: {
        flexDirection: "row",
        alignSelf: "center"
      },
      propgallary: {
        height: 40,
        width: 40,
        alignSelf: "center",
        marginTop: -15
      },
      propgallary2: {
        height: 30,
        width: 35,
        alignSelf: "center"
      },
      error: {
        marginLeft: "10%",
        color: colors.red, marginTop: -20
      },
      stylearrow: {
        height: 15,
        width: 15,
        // alignSelf:"center",? 
        marginTop: "20%"
      },
      marbotttom: {
        marginBottom: '40%'
      },
      textstyleauto:{
        alignSelf:'center', color:'#000', fontWeight:'900'
      }
})