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
} from "react-native";
import { Appbar, Badge, Avatar } from "react-native-paper";
import logo from "../assets/topBar.jpg";
import { SliderBox } from "react-native-image-slider-box";

const HomeScreen = () => {
  const images = [
    "https://picsum.photos/200/300",
    "https://picsum.photos/200/300",
    "https://picsum.photos/200/300",
    "https://picsum.photos/200/300",
    "https://picsum.photos/200/300",
    "https://picsum.photos/200/300",
  ];
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
      <ScrollView style={{ flex: 1 }}>
        <View>
          <SliderBox
            images={images}
            sliderBoxHeight={200}
            onCurrentImagePressed={(index) =>
              console.log(`image ${index} pressed`)
            }
            dotColor="black"
            inactiveDotColor="#90A4AE"
            paginationBoxVerticalPadding={20}
            autoplay
            circleLoop
            resizeMethod={"resize"}
            resizeMode={"cover"}
            paginationBoxStyle={{
              position: "absolute",
              bottom: 0,
              padding: 0,
              alignItems: "center",
              alignSelf: "center",
              justifyContent: "center",
              paddingVertical: 10,
            }}
            dotStyle={{
              width: 5,
              height: 5,
              borderRadius: 2.5,
              marginHorizontal: 0,
              padding: 0,
              margin: 0,
              backgroundColor: "black",
            }}
            ImageComponentStyle={{
              borderRadius: 15,
              width: "97%",
              marginTop: 5,
            }}
            imageLoadingColor="black"
          />
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
              <View style={{ padding: 5 }}>
                <Avatar.Image size={70} source={{ uri: item }} />
              </View>
            )}
          />
        </View>
        <View></View>
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
    fontSize: 14,
    fontWeight: "bold",
  },
});
