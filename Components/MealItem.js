import { Image, Pressable, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React from 'react'
import {useNavigation} from '@react-navigation/native'
import MealsDetails from './MealsDetails'

const MealItem = ({id,title,imageUrl,duration,complexity,affordability}) => {
  const navigation = useNavigation()
 
    const handlePress=()=>{
      navigation.navigate('mealDetail', {
        mealId:id
      })
    }
  
  return (
    <View style={styles.rootContainer}>
      <Pressable android_ripple={{color:'grey'}} style={styles.TouchableBtn} onPress={handlePress}>
        <View>
          <Image style={styles.image} source={{uri:imageUrl}}/>
          <Text style={styles.title}>{title}</Text>
        </View>
       <MealsDetails duration={duration} complexity={complexity} affordability={affordability}/>
      </Pressable>
      
    </View>
  )
}

export default MealItem

const styles = StyleSheet.create({
    // Add your styles here
    rootContainer:{
        margin:16,
        borderRadius:8,
        overflow: 'hidden',
        backgroundColor:'white',
        width:'90%',
        elevation:4
    },
    TouchableBtn:{
      opacity:1
    },
    title:{
        fontSize:18,
        fontWeight:'bold',
        textAlign:'center',
        margin:8
    },
    image:{
        width:'100%',
        height:200
    },
    
})