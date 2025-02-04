import { FlatList, StyleSheet, Text, View } from 'react-native'
import { CATEGORIES, MEALS } from '../data/dummy-data'
import React, {useLayoutEffect } from 'react'
import MealItem from '../Components/MealItem';

const MealsOverview = ({route, navigation}) => {
    const catId= route.params.categoryId;
    const displayMeals=MEALS.filter((mealItem)=>{
        return mealItem.categoryIds.indexOf(catId)>=0;
    });

    useLayoutEffect(()=>{
      const categoryTitle=CATEGORIES.find((category)=>category.id===catId).title
      navigation.setOptions({title:categoryTitle})
    },[catId,navigation])

    const renderMealItem=(itemData)=>{
      const item=itemData.item;
      const mealItemProps={
        id:item.id,
        title:item.title,
        imageUrl:item.imageUrl,
        affordability:item.affordability,
        complexity:item.complexity,
        duration:item.duration
      }
        return(
            <MealItem {...mealItemProps}/>
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