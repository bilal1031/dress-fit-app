import React from "react";
import { View, Text, StyleSheet } from "react-native";

const FavouriteScreen = () => {
  return (
    <View style={styles.maincontainer}>
      <Text>Fav</Text>
    </View>
  );
};
export default FavouriteScreen;

const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
