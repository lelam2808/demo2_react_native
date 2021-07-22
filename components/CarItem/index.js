import React from 'react'
import { View, Text, ImageBackground } from 'react-native'
import Button from '../Button'
import styles from './styles'
const CarItem = (props) => {
  const{name,tagline, taglineCTA,image}=props.car;
  return (
    <View style={styles.cardcontainer}>
      <ImageBackground style={styles.image} source={image}></ImageBackground>
      <View style={styles.titles}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subtitle}> {tagline} {" "} 
        <Text style={styles.tagLineCTA}>{taglineCTA}</Text>
        </Text>
      </View>
      <View style={styles.containerBtn}>
        <Button
          type='primary'
          content={"Binary Code"}
          onpress={() => {
            console.warn("click thong bao")
          }}
        ></Button>
        <Button
          type='secondary'
          content={"Example Code"}
          onpress={() => {
            console.warn("click thong bao 2")
          }}
        ></Button>
      </View>
    </View>
  )
}
export default CarItem;
