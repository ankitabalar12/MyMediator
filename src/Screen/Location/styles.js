import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        flex:1, backgroundColor:'#fff'
    },
    mapviewfull:{
        height:600, width:'100%',
        backgroundColor:'#f2f2f2f2'
    },
    map:{
        height:'100%', width:'100%'
    },
    greenview:{
        height:80, width:'90%', backgroundColor:'green', 
        position:'absolute',
        top:20,
        zIndex:1,
        alignSelf:'center',
        justifyContent:'center',
        borderTopLeftRadius:20, 
        borderTopRightRadius:20,
        borderBottomEndRadius:20

    },
    uparrow2styles:{
        height:35, width:20, tintColor:'#fff', 
    },
    flexrow:{
        flexDirection:'row',
        marginHorizontal:'5%'
    },
    locationtext:{
        fontSize:20, fontWeight:"900", color:'#ffff', marginLeft:'5%',
       alignSelf:'center'
    },
    locationtext2:{
        marginLeft:'10%',
        fontSize:15,
        color:'#fff', fontWeight:'500'
    },
    locviewstylw:{
        height:300, width:70, 
        position:'absolute',
        right:0
    },
    autioview:{
        height:40, width:40, backgroundColor:'#fff', 
        borderWidth:1, borderColor:'#BABABA', borderRadius:20,
        alignSelf:'center', margin:5,
        justifyContent:"center", alignItems:'center'
        
    },
    iconstyle:{
        height:25, width:25,
        
    },
    iconstyle2:{
        height:20, width:20,
        tintColor:'gray'
        
    },
    greenviewtwo:{
        height:50, width:150, backgroundColor:'red'
    },
    minrow:{
        flexDirection:'row', marginHorizontal:'5%', marginTop:'5%'
    },
    mintext:{
        fontSize:20, color:'red',
        fontWeight:'900'
    },
    kmtxt:{
        color:'#000', fontWeight:'900',
        fontSize:20,
        marginLeft:5
    },
    fastexttext:{
       fontSize:12, fontWeight:'500' , color:'#000', marginLeft:'5%', marginTop:5
    },
    flerowthreebutton:{
        flexDirection:'row',
     
        alignSelf:"center",
        marginHorizontal:'5%',marginTop:'5%'
    },
    startview:{
        height:40, width:118, 
        backgroundColor:'#cccc', 
        borderRadius:50, margin:5,
        justifyContent:'center'
    },
    iconandtextrow:{
        flexDirection:"row", alignSelf:'center'
    },
    lociconstyle:{
        height:15, width:15, margin:5, 
        tintColor:'#000'
    },
    starttext:{
        color:'#000', fontWeight:'900', margin:5
    },
    tablerlocatistyle:{
        height:23,
        width:14,margin:5
    },
    stpestyle:{
        height:10, width:15, margin:5,
       marginTop:10
    }, 
    martopview:{
        marginTop:'30%'
    },
    greenview2:{
        height:50, width:150, backgroundColor:'#1b5e2d',position:'absolute', left:0, top:80,
        borderBottomLeftRadius:20,
        borderBottomRightRadius:20,
        justifyContent:'center'
    },
    flexrowviewthen:{
        flexDirection:'row', alignSelf:'center'
    },
    thentext:{
        fontSize:20, color:'#fff'
    },
    turnleftstyle:{
        height:20, width:20, tintColor:'#fff', 
        marginTop:5, marginLeft:10
    }
})