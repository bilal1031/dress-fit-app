import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { useEffect } from "react";
import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  Platform,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { Avatar } from "react-native-paper";
import AdSlider from "../Componenets/AdSlider";
import ProductCard from "../Componenets/ProductCard";
import CustomAppbar from "../Componenets/CustomAppbar";
import data from "../Store/dummyData";
import NullCard from "../Componenets/NullCard";
import products from "../Service/getProducts";
import string from "../Utilites/stringManipulation";

const HomeScreen = (props) => {
  const [categories, setCategories] = useState([]);
  const images = data.images;
  const [newArrivals, setNewArrivals] = useState([]);
  const [justForYou, setJustForYou] = useState([]);
  const navigation = props.navigation;
  useEffect(() => {
    products.getAllCategory().then((res) => {
      setCategories(res);
    });
    products.getAllProducts().then((res) => {
      setNewArrivals(res);
      setJustForYou(res);
    });
  }, []);

  const handleLoadProduct = (id) => {
    navigation.navigate("signIn");
  };
  return (
    <SafeAreaView style={styles.maincontainer}>
      <StatusBar backgroundColor="white" />
      <CustomAppbar style={{ marginTop: Platform.OS === "android" ? 24 : 0 }} />
      <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
        <View>
          <AdSlider images={images} />
        </View>

        <View style={styles.categoryListView}>
          <Text style={styles.divTitle}>Categories</Text>
          <FlatList
            style={{ marginTop: 25 }}
            showsHorizontalScrollIndicator={false}
            horizontal
            data={categories}
            key={(item) => item.id}
            renderItem={({ item }) => (
              <View style={{ width: 100, alignItems: "center" }}>
                <Avatar.Image size={70} source={{ uri: images[0] }} />
                <Text>{string.capitilize(item)}</Text>
              </View>
            )}
          />
        </View>

        <View style={styles.newArrivalView}>
          <Text style={styles.divTitle}>New Arrivals</Text>
          <FlatList
            horizontal
            data={newArrivals}
            showsHorizontalScrollIndicator={false}
            key={(item) => item.id}
            renderItem={({ item }) => (
              <ProductCard
                item={item}
                onPress={() => handleLoadProduct(item.id)}
              />
            )}
          />
        </View>

        <View style={{ marginTop: 15 }}>
          <Text style={[styles.divTitle, { marginLeft: 15 }]}>
            Just For You
          </Text>
          <View style={styles.forYouView}>
            {justForYou.map((item) => (
              <ProductCard item={item} style={{ padding: "1%" }} />
            ))}
            {justForYou.length % 2 != 0 ? <NullCard /> : null}
          </View>
        </View>

        <TouchableOpacity>
          <Text
            style={{
              alignSelf: "center",
              padding: 10,
              fontStyle: "normal",
              fontSize: 18,
              textDecorationLine: "underline",
              color: "blue",
            }}
          >
            View More
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
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
  categoryListView: {
    padding: 15,
    paddingBottom: 0,
  },
});
