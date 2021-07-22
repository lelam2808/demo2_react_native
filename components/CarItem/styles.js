import {StyleSheet,Dimensions} from 'react-native'
const styles = StyleSheet.create({
    image:{
        width:'100%',
        height:'100%'
      },
      cardcontainer: {
        width: '100%',
        height: Dimensions.get('window').height,
      },
      titles: {
        position:'absolute',
        marginTop: '30%',
        width: '100%',
        alignItems: 'center'
      },
      title: {
        fontSize: 35,
        fontWeight: 'bold'
      },
      subtitle: {
        fontSize: 15
      },
      containerBtn:{
        position:'absolute',
        width:'100%',
        bottom:20
        },
      tagLineCTA:{
        textDecorationLine:'underline'
      }
})
export default styles;
