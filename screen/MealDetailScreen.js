import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { MEALS } from '../data/dummy-data';
import MealsDetails from '../Components/MealsDetails';


const MealDetailScreen = ({route}) => {
    const mealId= route.params.mealId;
    const selectMeal=MEALS.find((meal)=>meal.id===mealId);


  return (
    <View>
      <Image source={{uri:selectMeal.image}}/>
      <Text></Text>
      <View>
       <MealsDetails duration={selectMeal.duration} complexity={selectMeal.complexity} affordability={selectMeal.affordability}/>
        
      </View>
      <Text>Ingrediants</Text>
      {selectMeal.ingredients.map((ingredient)=>(<Text key={ingredient}>{ingredient}</Text>))}
      <Text>Steps</Text>
      {selectMeal.steps.map((step)=>(<Text key={step}>{step}</Text>))}

    </View>
  )
}

export default MealDetailScreen

const styles = StyleSheet.create({})