import { StyleSheet, Text, View } from "react-native";
import React from "react";

const MealsDetails = ({duration,complexity,affordability,style,textStyle}) => {
  return (
    <View style={[styles.details,style]}>
      <Text style={[styles.detailItem,textStyle]}>{duration}m</Text>
      <Text style={[styles.detailItem,textStyle]}>{complexity.toUpperCase()}</Text>
      <Text style={[styles.detailItem,textStyle]}>{affordability.toUpperCase()}</Text>
    </View>
  );
};

export default MealsDetails;

const styles = StyleSheet.create({
    details:{
        flexDirection:'row',
        alignItems:'center',
        padding:8,
        justifyContent:'center'
        
      },
      detailItem:{
        marginHorizontal:4,
        fontSize:12
      }
});
