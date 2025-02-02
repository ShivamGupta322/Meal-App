import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from "../Components/CategoryGridTile";



const CategoriesScreen = ({navigation}) => {

    const renderCategroyItem = (itemData) => {

        const pressHnadler = () => {
            navigation.navigate('mealsOverview',{
                categoryId:itemData.item.id,
            });
        }
      return (
        <CategoryGridTile title={itemData.item.title} color={itemData.item.color} onPress={pressHnadler}/>
      );
    };
    
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategroyItem}
      numColumns={2}
    />
  );
};

export default CategoriesScreen;

const styles = StyleSheet.create({});
