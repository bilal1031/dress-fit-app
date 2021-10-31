import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ProductScreen = (props) => {
  return (
    <View style={styles.maincontainer}>
      <Text>Product</Text>
    </View>
  );
};
export default ProductScreen;

const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
