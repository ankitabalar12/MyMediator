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
  marbotttom: {
    marginBottom: '40%'
  },
  flexrowf: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  downarrow: {
    height: 20,
    width: 20,
    tintColor: '#000',
  },
  downarrow2: {
    height: 15, width: 15,
    tintColor: '#000',
  },
  porightview: {
    position: 'absolute',
    right: 55, marginTop: 0
  },
  stylevi: {
    width: "88%",
    borderRadius: 15,
    marginTop: 5,
    borderRadius: 27,
    marginBottom: "5%",
  },
  textstyle: {
    color: '#000'
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
  dropdownview: {
    height: 40,
    width: "88%",
    backgroundColor: "#fff",
    borderColor: "#BFBFBF",
    borderWidth: 1,
    alignSelf: "center",
    justifyContent: "center",
    borderRadius: 27,
    marginBottom: '5%',
    // marginTop:"5%",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  placeholder: {
    marginHorizontal: "5%",
    fontSize:14, color:'#ccc'
  },
  iconStyle: {
    marginRight: "5%"
  },
  selectedText: {
    marginLeft: '5%', color: '#000'
  },
  modalView: {
    height: 200, width: 200,
    justifyContent: 'center',
    alignSelf: "center",

    position: "absolute",
    bottom: 300,
    backgroundColor: colors.white,
    width: "70%",

    borderRadius: 27,
    borderColor: "#CCCBCB",
    borderWidth: 1,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,

  },
  linkText: {
    color: '#C2C2C2',
    // textDecorationLine: 'underline',
    marginLeft:'5%'
  },
  textstyleproperty: {
    color: '#000',
    textAlign: "center",
    marginTop: "5%", fontSize: 15
  },
  selectedpro: {
    height: 2,
    width: "80%",
    backgroundColor: "#000",
    alignSelf: "center"
  },
  countryList: {
    color: "#000"
  },
  stylebutton:{
backgroundColor:"#02487C" ,
marginTop:3
  },
  backgroundview: {
    // flex:1,
    height: 650,
    width: '100%',
    // backgroundColor: 'rgba(0, 0, 0, 0.3)',
    backgroundColor: 'rgba(166, 166, 166 , 0.5)',
    position: "absolute",
    bottom: 0,
    // borderTopRightRadius: 50, 
    // borderTopLeftRadius: 50
  },
  leftarrow: {
    height: 30,
    width: 30,
    marginLeft: "15%"
  },
  // bottommodalstyle:{
  //   flex:1,
  //   position:"absolute", 
  //   bottom:-100
  // },
  flexrowview: {
    flexDirection: "row", marginTop: '5%',
  },
  allimagestext: {
    fontSize: 20,
    fontFamily: 'Poppins-SemiBold',
    color: '#000', marginLeft: '15%'
  },
  rowimages: {
    flexDirection: "row",
    marginTop: '5%',
    flexWrap: "wrap",
    justifyContent: 'space-between',
    marginHorizontal: "5%",

  },
  image: {
    height: 130,
    width: 180,
    borderRadius: 10, marginTop: '3%'
  },
  marbotttomstyle: {
    marginBottom: '10%'
  }
})