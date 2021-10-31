import React from "react";
import { Card, Paragraph } from "react-native-paper";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import string from "../Utilites/stringManipulation";
export default function ProductCard({ item, onPress, style }) {
  return (
    <View style={[{ padding: "0.5%" }, style]}>
      <Card style={styles.card} onPress={onPress}>
        <Card.Cover
          style={{ height: 150, width: "100%" }}
          source={{ uri: item.image }}
        />

        <Card.Content>
          <Text
            style={{ fontSize: 12, marginTop: 5, marginBottom: 5 }}
            numberOfLines={1}
          >
            {item.title}
          </Text>
          <View style={{ flexDirection: "row" }}>
            <Paragraph style={{ fontSize: 16 }}>
              Rs.
              {item.discountPrice != undefined
                ? item.discountPrice
                : item.price}
            </Paragraph>
            <Text
              style={{
                marginLeft: 10,
                textDecorationLine: "line-through",
              }}
            >
              {item.discountPrice && item.price}
            </Text>
          </View>
        </Card.Content>
      </Card>
    </View>
  );
}
const styles = StyleSheet.create({
  card: { height: 220, width: Dimensions.get("screen").width * 0.45 },
});
