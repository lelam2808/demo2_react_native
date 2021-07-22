import { StyleSheet } from 'react-native'
const styles = StyleSheet.create({
   logo:{
    width:100,
    height:10,
    // resizeMode:'contain'
   },
   menu:{
    width:20,
    height:10,
    // resizeMode:'contain'
   },
   container:{
        width:'100%',
        position:'absolute',
        zIndex:100,
        top:50,
        width:'100%',
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal:20
   }
})
export default styles