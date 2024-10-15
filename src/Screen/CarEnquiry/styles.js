import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        flex:1, backgroundColor:'#fff'
    },
    backicon:{
        height:20, width:20, tintColor:'#000', marginLeft:'15%'
    },
    flexrow:{
        flexDirection:'row', marginTop:'7%', 
    },
    Enquirytext:{
        fontSize:15, fontWeight:'900', color:'#000', marginLeft:'20%'
    },
    nametext:{
        marginLeft:'6%', fontSize:15,
        fontWeight:'900', color:'#000', marginTop:'10%'
    },
    styleview:{
        width:"90%"
    },
    nametext2:{
        marginTop:'1%'
    },
    styleviewdescrip: {
        height: 120,
        textAlignVertical: 'top',
    
        marginBottom: "4%",
        width: '90%',
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
        marginLeft: '4%'
      },
      error: {
        marginLeft: "10%",
        color:"red", marginTop: -20
      },
      marto:{
        marginTop:'10%'
      }
})