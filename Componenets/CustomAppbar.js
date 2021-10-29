import React from "react";
import { Image, StyleSheet } from "react-native";
import { Appbar, Badge } from "react-native-paper";
import logo from "../assets/topBar.jpg";

export default function CustomAppbar(props) {
  return (
    <Appbar style={[styles.appBar, props.style]}>
      <Appbar.Header style={{ marginTop: 0, backgroundColor: "black" }}>
        <Appbar.Action
          icon="bell-ring"
          onPress={() => console.log("Pressed archive")}
        />
        <Badge visible size={20} style={styles.badge}>
          3
        </Badge>
      </Appbar.Header>

      <Image source={logo} style={styles.logo} />
      <Appbar.Action
        icon="magnify"
        onPress={() => console.log("Pressed archive")}
      />
    </Appbar>
  );
}

const styles = StyleSheet.create({
  appBar: {
    backgroundColor: "black",
    justifyContent: "space-between",
    overflow: "hidden",
    // marginTop: Platform.OS === "android" ? 25 : 0,
  },
  logo: {
    height: 55,
    width: 150,
  },
  badge: { position: "absolute", top: 5, right: 5 },
});
