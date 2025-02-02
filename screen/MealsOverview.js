import { FlatList, StyleSheet, Text, View } from 'react-native'
import { MEALS } from '../data/dummy-data'
import React from 'react'
import MealItem from '../Components/MealItem';

const MealsOverview = ({route}) => {
    const catId= route.params.categoryId;
    const displayMeals=MEALS.filter((mealItem)=>{
        return mealItem.categoryIds.indexOf(catId)>=0;
    })

    const renderMealItem=(itemData)=>{
        return(
            <MealItem title={itemData.item.title}/>
        )
    }
  return (
    <View style={styles.container}>
      <FlatList data={displayMeals} key={(item)=>item.id} renderItem={renderMealItem}/>
    </View>
  )
}

export default MealsOverview

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding:16
    }
})