import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import CategoriesScreen from "./screen/CategoriesScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealsOverview from "./screen/MealsOverview";
import MealDetailScreen from "./screen/MealDetailScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: "#351401",
            },
            headerTitleStyle: {
              color: "white",
            },
            contentStyle: {
              backgroundColor: "#3f2f25",
            },
          }}
        >
          <Stack.Screen
            name="mealCategories"
            component={CategoriesScreen}
            options={{
              title: "Meal Categories",
              headerTitleAlign: "center",
            }}
          />
          <Stack.Screen name="mealsOverview" component={MealsOverview} 
            // options={({route,navigation})=>{
            //   const catId=route.params.categoryId;
            //   return{
            //     title: catId,
            //     headerTitleAlign: "center",
            //   }
            // }}
          />
          <Stack.Screen name="mealDetail" component={MealDetailScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
