import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const MealItem = ({title}) => {
  return (
    <View style={styles.rootContainer}>
      <Text style={styles.title}>{title}</Text>
    </View>
  )
}

export default MealItem

const styles = StyleSheet.create({
    // Add your styles here
    rootContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    title:{
        fontSize:18,
        fontWeight:'bold'
    }
})