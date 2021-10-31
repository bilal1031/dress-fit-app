import React from "react";
import { View, Text, StyleSheet, StatusBar, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomAppbar from "../Componenets/CustomAppbar";
import NullCard from "../Componenets/NullCard";
import ProductCard from "../Componenets/ProductCard";
import { useState } from "react/cjs/react.development";
import { useEffect } from "react";
import products from "../Service/getProducts";

const FavouriteScreen = () => {
  const [fav, setFav] = useState([]);
  useEffect(() => {
    products.getAllProducts().then((res) => {
      setFav(res);
    });
  }, []);
  return (
    <SafeAreaView>
      <CustomAppbar />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ marginTop: 15, marginBottom: 55 }}>
          <Text style={[styles.divTitle, { marginLeft: 15 }]}>
            Your Wishlist
          </Text>

          <View style={styles.forYouView}>
            {fav.map((item) => (
              <ProductCard item={item} key={item.id} />
            ))}
            {fav.length % 2 != 0 ? <NullCard key={item.id} /> : null}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default FavouriteScreen;

const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
    alignItems: "center",
  },
  divTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  newArrivalView: {
    padding: 10,
    marginTop: 15,
  },
  forYouView: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
});
