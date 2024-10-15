import { StyleSheet } from "react-native";
import { colors } from "react-native-elements";

export const styles = StyleSheet.create({
    container:{
flex:1, backgroundColor:'#fff'
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
        marginTop:'3%'
    
      },
      styleview:{
        marginTop:-10
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
      stylebutton:{
        backgroundColor:"#02487C",
        marginTop:'4'
          },
          marbotttom: {
            marginBottom: '30%'
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
          leftarrow: {
            height: 30,
            width: 30,
            marginLeft: "15%"
          },
})