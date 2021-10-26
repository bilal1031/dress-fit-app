import React from "react";
import { Text, View, StyleSheet } from "react-native";

const SettingsScreen = () => {
  return (
    <View style={styles.maincontainer}>
      <Text>Setting</Text>
    </View>
  );
};
export default SettingsScreen;
const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
