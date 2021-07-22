import React from 'react'
import { View,ImageBackground } from 'react-native'
import styles from './styles'

const Header=() => {
    return (
        <View style={styles.container}>
           <ImageBackground style={styles.logo} source={require('../../assets/images/logo.png')}></ImageBackground>
           <ImageBackground style={styles.menu} source={require('../../assets/images/menu.png')}></ImageBackground>
        </View>
    )
}
export default Header;
