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
import { Avatar } from "react-native-paper";
import AdSlider from "../Componenets/AdSlider";
import ProductCard from "../Componenets/ProductCard";
import CustomAppbar from "../Componenets/CustomAppbar";
import data from "../Store/dummyData";
import NullCard from "../Componenets/NullCard";

const HomeScreen = () => {
  const images = data.images;
  const newArrivals = data.newArrivals;
  const justForYou = data.justForYou;

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
              <ProductCard item={item} key={Math.random()} />
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
});
