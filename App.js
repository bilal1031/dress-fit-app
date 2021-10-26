import { StatusBar } from "expo-status-bar";
import React from "react";
import { LogBox, StyleSheet, Text, View } from "react-native";
import MainNavigation from "./Navigation/MainNavigation";

export default function App() {
  LogBox.ignoreLogs([
    "Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Likely causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.",
  ]);
  return (
    <>
      <MainNavigation />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
