import React from 'react'
import { View, Text, Pressable } from 'react-native'
import styles from './styles'
 const Button=(props)=> {
     const type = props.type;
     const content=props.content;
     const onpress =props.onpress;
     const backgroundcolor =  type === 'primary' ? 'black' : 'white';
     const txtColor =  type === 'primary' ? 'white' : 'black';
    return (
        <View style={styles.container}>
            <Pressable style={[styles.button, {backgroundColor:backgroundcolor,  }]} onPress={()=>onpress()}>
                <Text style={[styles.title, {color:txtColor}]}>
                    {content}
                </Text>
            </Pressable>
        
        </View>
        
    )
}
export default Button;
