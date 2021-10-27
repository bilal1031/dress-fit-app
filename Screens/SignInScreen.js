import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  Button,
  TextInput,
  HelperText,
  IconButton,
  DefaultTheme,
} from "react-native-paper";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Platform,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import logo from "../assets/logo.jpg";
import colors from "../Utilites/colors";
import { Ionicons } from "@expo/vector-icons";
import CheckboxWithDesc from "../Componenets/CheckboxWithDesc";
import TocuhableText from "../Componenets/TocuhableText";

const height = Dimensions.get("screen").height;

const SignInScreen = (props) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [showPassword, setShowPassword] = useState(false);
  const [keepLogged, setKeepLogged] = useState(true);
  const [isInvalidEmail, setIsInvalidEmail] = useState(true);

  const navigation = props.navigation;
  const isLoading = false;

  const handleSubmit = () => {
    if (isLoading || !email || !password || !validateEmail(email)) return;
  };
  const handleNavigation = () => {
    navigation.navigate("signUp");
  };
  const handleFacebookSignIn = () => {};
  const handleGoogleSignIn = () => {};

  return (
    <SafeAreaView style={styles.maincontainer}>
      <StatusBar />
      <IconButton
        icon="close"
        color={colors.primary}
        size={20}
        onPress={() => navigation.navigate("mainMenu")}
        style={{
          alignSelf: "flex-end",
          marginEnd: 15,
        }}
      />
      <ScrollView style={styles.scrollView}>
        <View style={styles.logoView}>
          <View style={styles.logo}>
            <Image source={logo} style={{ width: "100%", height: "100%" }} />
          </View>
          {/* <Text style={styles.title}>Log in or singup to Dressfit</Text> */}
        </View>
        <View style={styles.formView}>
          <TextInput
            mode="flatlined"
            label="Enter your email"
            value={email}
            onChangeText={(email) => {
              setEmail(email);
              if (validateEmail(email) || !email) setIsInvalidEmail(true);
              else setIsInvalidEmail(false);
            }}
            error={!isInvalidEmail}
            keyboardType="email-address"
            style={styles.textField}
            theme={{
              colors: { primary: colors.primary },
            }}
          />
          <HelperText type="error" visible={!isInvalidEmail}>
            Use format xxx@gmail.com
          </HelperText>

          <TextInput
            mode="flatlined"
            label="Enter your password"
            value={password}
            right={
              <TextInput.Icon
                name={() => (
                  <Ionicons
                    name={
                      showPassword ? "ios-eye-off-outline" : "ios-eye-outline"
                    }
                    size={20}
                  />
                )}
                onPress={() => setShowPassword(!showPassword)}
              />
            }
            onChangeText={(password) => setPassword(password)}
            placeholder=""
            secureTextEntry={!showPassword}
            style={[styles.textField, { marginBottom: 10 }]}
            theme={{
              colors: { primary: colors.primary },
            }}
          />
          <TocuhableText text="Forgot Password!" />
          <Button
            mode="contained"
            style={[styles.roundButton, { marginTop: 25 }]}
            theme={{
              colors: { primary: colors.primary },
            }}
            onPress={handleFacebookSignIn}
            contentStyle={styles.button}
          >
            Sign In
          </Button>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            paddingLeft: 20,
            paddingRight: 20,
          }}
        >
          <View style={styles.seperator} />
          <Text numberOfLines={1} style={{ fontSize: 18 }}>
            {"  or  "}
          </Text>
          <View style={styles.seperator} />
        </View>
        <View style={styles.buttonsContainer}>
          {/* <Button
            mode="outlined"
            loading={isLoading}
            onPress={handleSubmit}
            style={styles.roundButton}
            theme={{
              colors: { primary: colors.primary },
              fonts: { size: 25 },
            }}
            contentStyle={styles.button}
            icon="email-outline"
          >
            Continue with Email
          </Button> */}
          <Button
            mode="outlined"
            loading={isLoading}
            onPress={handleSubmit}
            style={styles.roundButton}
            theme={{
              colors: { primary: colors.primary },
            }}
            contentStyle={styles.button}
            icon={() => (
              <Image
                source={{
                  uri: "https://cdn-icons-png.flaticon.com/512/124/124010.png",
                }}
                style={{ width: 20, height: 20, tintColor: colors.facbook }}
              />
            )}
          >
            Continue with Facebook
          </Button>
          <Button
            mode="outlined"
            loading={isLoading}
            onPress={handleSubmit}
            style={styles.roundButton}
            theme={{
              colors: { primary: colors.primary },
            }}
            contentStyle={styles.button}
            icon={() => (
              <Image
                source={{ uri: "https://i.stack.imgur.com/TiQ81.png" }}
                style={{ width: 20, height: 20, tintColor: colors.google }}
              />
            )}
          >
            Continue with Google
          </Button>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 10,
            }}
          >
            <Text>Don't have an account?</Text>
            <TocuhableText
              text="  Sign up"
              weight="bold"
              onPress={handleNavigation}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
    justifyContent: "center",
    // backgroundColor: "tomato",
    // marginTop: Platform.OS === "android" ? 20 : 0,
  },
  scrollView: {
    flex: 1,
    flexGrow: 1,
    //  backgroundColor: "dodgerblue"
  },
  logoView: {
    height: height * 0.1,
    // backgroundColor: "tomato",
    justifyContent: "center",
    alignItems: "center",
    padding: 25,
    marginTop: 5,
  },
  formView: {
    // backgroundColor: "gold",
    padding: 25,
    height: height * 0.4,
    width: "100%",
    justifyContent: "space-evenly",
    paddingLeft: 20,
    paddingRight: 20,
  },
  logo: { height: 80, width: 80, borderRadius: 40, overflow: "hidden" },
  buttonsContainer: {
    padding: 25,
    height: height * 0.3,
    width: "100%",
    justifyContent: "space-evenly",
    paddingLeft: 20,
    paddingRight: 20,
    justifyContent: "space-between",
    alignItems: "center",
  },
  button: {
    height: 60,
    alignItems: "center",
    justifyContent: "center",
  },
  seperator: { backgroundColor: "grey", height: 0.7, flex: 1 },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  roundButton: {
    borderColor: colors.primary,
    borderWidth: 2,
    borderRadius: 10,
    width: "100%",
  },
});
