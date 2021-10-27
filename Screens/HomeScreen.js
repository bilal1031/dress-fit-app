import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  Image,
  Platform,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { Appbar, Badge, Avatar, DefaultTheme } from "react-native-paper";
import logo from "../assets/topBar.jpg";
import AdSlider from "../Componenets/AdSlider";
import ProductCard from "../Componenets/ProductCard";

const HomeScreen = () => {
  const images = [
    "https://picsum.photos/200/300",
    "https://picsum.photos/200/300",
    "https://picsum.photos/200/300",
    "https://picsum.photos/200/300",
    "https://picsum.photos/200/300",
    "https://picsum.photos/200/300",
  ];
  const newArrivals = [
    {
      title: "Men's Clothing Extraordinary...",
      price: "900",
      discountPrice: "700",
      imageUrl: "https://picsum.photos/700",
    },
    {
      title: "Men's Clothing Extraordinary...",
      price: "900",
      discountPrice: "",
      imageUrl: "https://picsum.photos/700",
    },
    {
      title: "Men's Clothing Extraordinary...",
      price: "900",
      discountPrice: "",
      imageUrl: "https://picsum.photos/700",
    },
    {
      title: "Men's Clothing Extraordinary...",
      price: "900",
      discountPrice: "",
      imageUrl: "https://picsum.photos/700",
    },
    {
      title: "Men's Clothing Extraordinary...",
      price: "900",
      discountPrice: "",
      imageUrl: "https://picsum.photos/700",
    },
  ];
  const justForYou = [
    {
      title: "Men's Clothing Extraordinary...",
      price: "900",
      discountPrice: "700",
      imageUrl: "https://picsum.photos/700",
    },
    {
      title: "Men's Clothing Extraordinary...",
      price: "900",
      discountPrice: "",
      imageUrl: "https://picsum.photos/700",
    },
    {
      title: "Men's Clothing Extraordinary...",
      price: "900",
      discountPrice: "",
      imageUrl: "https://picsum.photos/700",
    },
    {
      title: "Men's Clothing Extraordinary...",
      price: "900",
      discountPrice: "",
      imageUrl: "https://picsum.photos/700",
    },
    {
      title: "Men's Clothing Extraordinary...",
      price: "900",
      discountPrice: "",
      imageUrl: "https://picsum.photos/700",
    },
    {
      title: "Men's Clothing Extraordinary...",
      price: "900",
      discountPrice: "",
      imageUrl: "https://picsum.photos/700",
    },
  ];
  const theme = { ...DefaultTheme, rippleColor: "rgba(0, 0, 0, .32)" };
  return (
    <SafeAreaView style={styles.maincontainer}>
      <StatusBar backgroundColor="white" />
      <Appbar style={styles.appBar}>
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
            data={images}
            key={(key) => images}
            renderItem={({ item }) => (
              <View style={{ padding: 5, alignItems: "center" }}>
                <Avatar.Image size={70} source={{ uri: item }} />
                <Text>Category Item</Text>
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
            key={(key) => key.title}
            renderItem={({ item }) => <ProductCard item={item} />}
          />
        </View>

        <View style={{ marginTop: 15 }}>
          <Text style={[styles.divTitle, { marginLeft: 15 }]}>
            Just For You
          </Text>
          <View style={styles.forYouView}>
            {justForYou.map((item) => (
              <ProductCard item={item} />
            ))}
            {justForYou.length % 2 != 0 ? (
              <View style={styles.nullCard}></View>
            ) : null}
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
  appBar: {
    backgroundColor: "black",
    justifyContent: "space-between",
    overflow: "hidden",
    marginTop: Platform.OS === "android" ? 25 : 0,
  },
  logo: {
    height: 55,
    width: 150,
  },
  badge: { position: "absolute", top: 5, right: 5 },
  categoryListView: {
    justifyContent: "center",
    padding: 5,
    alignItems: "center",
  },
  divTitle: {
    fontSize: 16,
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
  nullCard: { height: 220, width: 180 },
});
