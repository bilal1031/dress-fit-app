import React from "react";
import { Card, Paragraph } from "react-native-paper";
import { View, Text, StyleSheet, Dimensions } from "react-native";

export default function ProductCard({ item, onPress }) {
  return (
    <View style={{ padding: "2%" }}>
      <Card style={styles.card} onPress={onPress}>
        <Card.Cover
          style={{ height: 150, width: "100%" }}
          source={{ uri: item.imageUrl }}
        />

        <Card.Content>
          <Text style={{ fontSize: 12, marginTop: 5, marginBottom: 5 }}>
            {item.title}
          </Text>
          <View style={{ flexDirection: "row" }}>
            <Paragraph style={{ fontSize: 16 }}>
              Rs.
              {+item.discountPrice != "" ? item.discountPrice : item.price}
            </Paragraph>
            <Text
              style={{
                marginLeft: 10,
                textDecorationLine: "line-through",
              }}
            >
              {item.discountPrice && item.price.toString()}
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
