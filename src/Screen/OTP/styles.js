import { StyleSheet } from "react-native";
import { colors } from "../../Helper/colors";

export const styles = StyleSheet.create({

    backgroundImage: {
        height: 100,
        width: '100%'
    },
    overlay: {
        flex: 1, height: '100%',
        width: '100%',
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(126, 123, 234, 0.8)',

    },
    propartylogo: {
        height: 90,
        width: 130,
        // tintColor: '#fff', 
        marginLeft: "5%",
        marginTop: "6%"
    },
    welcomtext: {
        fontSize: 25,
        fontFamily: 'Poppins-SemiBold',
        color: "#000",
        marginTop: '5%',
        alignSelf: "center"
    },
    Enteryour: {
        color: '#000',
        fontFamily: 'Poppins-SemiBold',
        marginBottom: "1%",
        //    marginTop:"1%",
        alignSelf: "center"

    },
    
    otpContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignSelf: 'center',
        marginTop: "3%"
    },
    otpInput: {
        width: 50,
        height: 50,
        borderRadius: 50,
        textAlign: 'center',
        marginHorizontal: 5,
        backgroundColor: '#f2f2f2',
        borderBottomColor: '#fff',
        borderBottomWidth: 0,
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    otpInput2: {
        width: 50,
        height: 50,
        borderRadius: 50,
        textAlign: 'center',
        marginHorizontal: 20,
        backgroundColor: 'pink',
        borderBottomColor: '#fff'
    },
    flexroww: {
        flexDirection: "row",
        alignSelf: "center",
        marginTop: '1%'
    },
    textor3: {
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
    otpimg: {
        marginTop: "30%",
        height: 160,
        width: 160,
        alignSelf: "center"
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
    stylesbutton: {
        marginTop: '2%'
    },
    marbottom: { marginBottom: '50%' },
    mainmodalview: {
        height: 250, width: 280,
        borderRadius: 20,
        alignItems: 'center',
        alignSelf: "center",
        backgroundColor: '#fff'
    },
    magelocationfillstyle: {
        height: 20, width: 20,
        marginTop: '5%'

    },
    useryourtext:{
        color:'#000',
        fontWeight:'900',
        fontSize:15
    },
    loctiontextinput:{
    height:40, width:'80%', 
    borderRadius:5,
    marginTop:'5%' ,
    justifyContent:'center' ,
    borderColor:'#575757',
    borderWidth:1 
    },
    flexrowview:{
        flexDirection:'row',

    },
    locotionstyle:{
        height:15,
        width:15,
        marginLeft:'5%',
    //  marginTop:8,
    alignSelf:'center',
     tintColor:'#575757'
    },
    input:{
        marginLeft:5,
       
    },
    ortetxet:{
        color:'#000',
        fontWeight:'900',
        marginTop:10
    },
    loctionrow:{
        flexDirection:'row',

    },
    locotionstyle2:{
        height:15, width:15, tintColor:'red'
    },
    Usecurrentlocation:{
        fontSize:12,
        color:'red',
        fontWeight:'900', marginLeft:'2%'
    },
    floxrowviewbutton:{
        marginTop:10,
        flexDirection:"row"
    },
    cencelbutton:{
        height:38, width:'40%',
        backgroundColor:'#000', 
        borderColor:'#0000',
        justifyContent:"center",
        borderWidth:1.5,
        margin:5,
        borderRadius:15,
        justifyContent:'center'
    },
    textcancalandok:{
        color:'#fff',
        fontSize:14,
        fontWeight:'800',
        textAlign:"center"
    }
})