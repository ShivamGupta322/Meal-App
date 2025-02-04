import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { MEALS } from '../data/dummy-data';
import MealsDetails from '../Components/MealsDetails';
import Subtitle from '../Components/MealDetails/Subtitle';
import List from '../Components/MealDetails/List';
import IconButton from '../Components/IconButton';



const MealDetailScreen = ({route,navigation}) => {
    const mealId= route.params.mealId;
    const selectMeal=MEALS.find((meal)=>meal.id===mealId);

    const headerButtonPressedHandler=()=>{
      console.log('Button Pressed');
    }

    useLayoutEffect(() => {
      navigation.setOptions({
        headerRight: () => {
          return <IconButton icon="star" color='white' onPress={headerButtonPressedHandler}/>
        }
      });
    }, [navigation,headerButtonPressedHandler]);


  return (
    <ScrollView style={styles.rootContainer}>
      <Image style={styles.image} source={{uri:selectMeal.imageUrl}}/>
      <Text style={styles.title}>{selectMeal.title}</Text>
      <View>
       <MealsDetails duration={selectMeal.duration} complexity={selectMeal.complexity} affordability={selectMeal.affordability} textStyle={styles.detailText}/>
        
      </View >
      <View style={styles.listOuterContainer}>

      <View style={styles.listContainer}> 
      <Subtitle>ingredients</Subtitle>
      <List data={selectMeal.ingredients}/>
      <Subtitle>Steps</Subtitle>
      <List data={selectMeal.steps}/>
      </View>
      </View>

    </ScrollView>
  )
}

export default MealDetailScreen

const styles = StyleSheet.create({
  rootContainer:{
    marginBottom:32,
  },
  image:{
    width:'100%',
    height:350,
    marginBottom:20
  },
  title:{
    fontSize:24,
    fontWeight:'bold',
    marginBottom:10,
    textAlign:'center',
    color:'white',
  },
  detailText:{
    color:'white',
    marginBottom:4
  },
  listContainer:{
    width:'80%'
  },
  listOuterContainer:{
    alignItems:'center'
  }
  
})