import React from "react";
import { Text, View, StyleSheet } from "react-native";

const CategoryScreen = () => {
  return (
    <View style={styles.maincontainer}>
      <Text>Cate</Text>
    </View>
  );
};

export default CategoryScreen;
const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
