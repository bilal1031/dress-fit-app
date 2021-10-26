import React from "react";
import { View, TouchableOpacity, Text } from "react-native";

export default function TocuhableText(props) {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <Text style={{ fontWeight: props.weight }}>{props.text}</Text>
    </TouchableOpacity>
  );
}
