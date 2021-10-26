import React from "react";
import { View, Text, StyleSheet } from "react-native";

const CartScreen = () => {
  return (
    <View style={styles.maincontainer}>
      <Text>Cart</Text>
    </View>
  );
};
export default CartScreen;

const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
