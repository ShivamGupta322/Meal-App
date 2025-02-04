import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Subtitle = ({children}) => {
  return (
    <View style={styles.subTitleContainer}>
      <Text style={styles.subTitle}>{children}</Text>
    </View>
  );
};

export default Subtitle;

const styles = StyleSheet.create({
    subTitle:{
        fontSize:16,
        fontWeight:'bold',
        color:'#e2b497',
        textAlign:'center',
        textTransform:'uppercase',
        
      },
      subTitleContainer:{
        padding:6,
        borderBottomColor:'#e2b497',
        borderBottomWidth:2,
        marginHorizontal:12,
        marginVertical:4
      },
});
