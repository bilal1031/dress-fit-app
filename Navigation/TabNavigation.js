import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import HomeScreen from "../Screens/HomeScreen";
import { BottomNavigation } from "react-native-paper";
import colors from "../Utilites/colors";
import FavouriteScreen from "../Screens/FavouriteScreen";
import SettingsScreen from "../Screens/SettingsScreen";
import CategoryScreen from "../Screens/CategoryScreen";
import CartScreen from "../Screens/CartScreen";
const Tab = createMaterialBottomTabNavigator();

export default function TabNavigation(props) {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "home", title: "Home", icon: "home", color: colors.secondary },
    {
      key: "favourite",
      title: "Favourites",
      icon: "heart-outline",
      color: colors.secondary,
    },
    {
      key: "category",
      title: "Category",
      icon: "collage",
      color: colors.secondary,
    },
    {
      key: "setting",
      title: "You",
      icon: "account-outline",
      color: colors.secondary,
    },
    {
      key: "cart",
      title: "Cart",
      icon: "cart",
      color: colors.secondary,
    },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: () => <HomeScreen navigation={props.navigation} />,
    favourite: FavouriteScreen,
    setting: SettingsScreen,
    category: CategoryScreen,
    cart: CartScreen,
  });
  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      barStyle={{ backgroundColor: colors.secondary }}
      renderScene={renderScene}
    />
  );
}
