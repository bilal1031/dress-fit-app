import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Button, TextInput, HelperText } from "react-native-paper";
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
      <ScrollView style={styles.scrollView}>
        <View style={styles.logoView}>
          <Image style={styles.logo} source={logo} />
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
                    color={colors.darkgrey}
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

          <CheckboxWithDesc
            status={keepLogged}
            description="Keep me signed in"
            handlePress={() => {
              setKeepLogged(!keepLogged);
            }}
          />
        </View>
        <View style={styles.socialButtonDiv}>
          <Button
            mode="contained"
            loading={isLoading}
            // disabled={!isAgree}
            onPress={handleSubmit}
            style={styles.socialbutton}
            theme={{
              colors: { primary: colors.facbook },
            }}
            icon="alpha-f-circle"
          >
            Facebook
          </Button>
          <Button
            mode="contained"
            loading={isLoading}
            // disabled={!isAgree}
            onPress={handleSubmit}
            style={styles.socialbutton}
            theme={{
              colors: { primary: colors.google },
            }}
            icon="alpha-g-circle"
          >
            Google
          </Button>
        </View>
        <View style={styles.buttonsContainer}>
          <Button
            mode="contained"
            loading={isLoading}
            onPress={handleSubmit}
            style={[styles.button, { width: "40%", borderRadius: 40 }]}
            theme={{
              colors: { primary: colors.primary },
            }}
          >
            sign in
          </Button>

          <Button
            mode="text"
            onPress={() => navigation.navigate("ForgetPassword")}
            style={styles.button}
            theme={{
              colors: { primary: colors.primary },
            }}
          >
            forget password?
          </Button>
        </View>
        <View style={styles.signUpLinkDiv}>
          <View style={styles.seperator} />
          <Text numberOfLines={1} style={styles.msgText}>
            {"  Don't have an account?  "}
          </Text>
          <TouchableOpacity onPress={handleNavigation}>
            <Text style={{ fontSize: 14, fontWeight: "bold" }}>Sign Up</Text>
          </TouchableOpacity>
          <View style={styles.seperator} />
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
    height: height * 0.2,
    // backgroundColor: "tomato",
    justifyContent: "center",
    alignItems: "center",
    padding: 50,
    marginTop: 15,
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
  logo: { height: 120, width: 120 },
  socialButtonDiv: {
    flexDirection: "row",
    marginTop: 5,
    justifyContent: "space-between",
    alignItems: "center",
    paddingRight: 20,
    paddingLeft: 20,
  },
  buttonsContainer: {
    marginTop: 10,
    flexDirection: "row",
    height: height * 0.1,
    alignItems: "center",
    justifyContent: "space-between",
    paddingRight: 20,
    paddingLeft: 20,
  },
  button: {},
  seperator: {
    height: 0.7,
    flex: 1,
  },
  signUpLinkDiv: {
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  socialbutton: {
    width: "40%",
    borderRadius: 50,
  },
});
